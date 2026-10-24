import { z } from "zod";

import { graphQLError } from "../../errors";
import { parseObjectID } from "../../validation";
import { GroupModel } from "./model";
import { GroupTeamMemberModel, GROUP_TEAM_ROLES } from "./group-team-model";
import { UserModel } from "../user/model";

class GroupTeamService {
  private static async requireGroupOwner(groupID: string, ownerID: string) {
    groupID = parseObjectID(groupID, "Grupo");
    const group = await GroupModel.findOne({ _id: groupID, ownerID }).select("_id").lean();
    if (!group) throw graphQLError("Somente o administrador atual da scan pode gerenciar a equipe.", "FORBIDDEN");
    return groupID;
  }

  static async getTeam(groupID: string) {
    groupID = parseObjectID(groupID, "Grupo");
    return GroupTeamMemberModel.find({ group: groupID })
      .sort({ createdAt: 1, _id: 1 })
      .populate("user", "name username profilePicture profilePictureID")
      .lean();
  }

  static async findCandidates(groupID: string, search: string, ownerID: string) {
    await this.requireGroupOwner(groupID, ownerID);
    const normalizedSearch = search.trim().toLowerCase();
    if (normalizedSearch.length < 2) return [];
    const escapedSearch = normalizedSearch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    return UserModel.find({
      $or: [
        { username: { $regex: `^${escapedSearch}` } },
        { email: { $regex: `^${escapedSearch}` } },
      ],
    })
      .select("_id username name profilePicture profilePictureID")
      .sort({ username: 1 })
      .limit(10)
      .lean();
  }

  static async setMember(groupID: string, memberID: string, role: string, ownerID: string) {
    groupID = await this.requireGroupOwner(groupID, ownerID);
    memberID = parseObjectID(memberID, "Membro");
    const parsedRole = z.enum(GROUP_TEAM_ROLES).safeParse(role);
    if (!parsedRole.success) throw graphQLError("Função de equipe inválida.", "BAD_USER_INPUT");
    const member = await UserModel.findById(memberID).select("_id").lean();
    if (!member) throw graphQLError("Usuário não encontrado.", "NOT_FOUND");
    if (String(member._id) === ownerID) throw graphQLError("O administrador da scan não pode ser adicionado como membro da própria equipe.", "BAD_USER_INPUT");

    return GroupTeamMemberModel.findOneAndUpdate(
      { group: groupID, user: memberID },
      { $set: { role: parsedRole.data, assignedBy: ownerID } },
      { upsert: true, new: true, runValidators: true, setDefaultsOnInsert: true },
    ).populate("user", "name username profilePicture profilePictureID").lean();
  }

  static async removeMember(groupID: string, memberID: string, ownerID: string) {
    groupID = await this.requireGroupOwner(groupID, ownerID);
    memberID = parseObjectID(memberID, "Membro");
    const result = await GroupTeamMemberModel.deleteOne({ group: groupID, user: memberID });
    return result.deletedCount > 0;
  }
}

export { GroupTeamService };
