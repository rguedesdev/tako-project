import { getAuthToken } from "./auth";
export type MediaPurpose="USER_AVATAR"|"GROUP_IMAGE"|"MANGA_COVER";
export interface UploadedMedia{id:string;url:string;originalName:string;mimeType:string;size:number;width?:number;height?:number;purpose:MediaPurpose;}
const API=(process.env.NEXT_PUBLIC_GRAPHQL_URL??"http://localhost:5000/graphql").replace(/\/graphql\/?$/,"");
export async function uploadImage(file:File,purpose:MediaPurpose){const form=new FormData();form.append("file",file);const response=await fetch(`${API}/uploads/images?purpose=${purpose}`,{method:"POST",headers:{Authorization:`Bearer ${getAuthToken()}`},body:form});const body=await response.json().catch(()=>null);if(!response.ok)throw new Error(body?.error??"Não foi possível enviar a imagem.");return body.media as UploadedMedia;}
export async function discardImage(id:string){await fetch(`${API}/uploads/images/${id}`,{method:"DELETE",headers:{Authorization:`Bearer ${getAuthToken()}`}});}
