import { normalizeCountryCode } from "../config/countries";
import { GroupModel } from "../graphql/modules/group/model";
import { TakoProjectDB } from "../plugins/mongoose";

await TakoProjectDB.asPromise();
const groups = await GroupModel.find().select("country").lean();
let migrated = 0;
for (const group of groups) {
  const code = normalizeCountryCode(group.country);
  if (!code) throw new Error(`País não reconhecido no grupo ${group._id}: ${group.country}`);
  if (code !== group.country) {
    await GroupModel.updateOne({ _id: group._id }, { $set: { country: code } });
    migrated += 1;
  }
}
console.log(`${migrated} de ${groups.length} grupo(s) migrado(s) para ISO 3166-1 alpha-2.`);
await TakoProjectDB.close();
