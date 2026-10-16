import { requireAuthenticated } from "../../../services/auth/authorization";
import MediaService, { mediaUrl } from "./service";
const mediaResolvers = { Query: { media: (_: unknown, { id }: any, context: any) => { requireAuthenticated(context); return MediaService.getReady(id); } }, Media: { id: (p: any) => String(p._id ?? p.id), url: (p: any) => p.url ?? mediaUrl(p) } };
export { mediaResolvers };
