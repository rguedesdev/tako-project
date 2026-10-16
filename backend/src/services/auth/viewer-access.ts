import { UserModel } from "../../graphql/modules/user/model";

type ViewerAccess = { userID: string | null; showAdultContent: boolean; isAegis: boolean };
type ViewerContext = { user?: { id?: string } | null; viewerAccess?: Promise<ViewerAccess> };

function getViewerAccess(context: ViewerContext): Promise<ViewerAccess> {
  if (context.viewerAccess) return context.viewerAccess;
  context.viewerAccess = (async () => {
    const userID = context.user?.id ? String(context.user.id) : null;
    if (!userID) return { userID: null, showAdultContent: false, isAegis: false };
    const user = await UserModel.findById(userID).select("accountType preferences.showAdultContent").lean();
    return {
      userID,
      showAdultContent: user?.preferences?.showAdultContent === true,
      isAegis: user?.accountType === "AEGIS",
    };
  })();
  return context.viewerAccess;
}

export { getViewerAccess };
export type { ViewerAccess, ViewerContext };
