import apiClient from "@/api/AxiosClient";
import {BusinessProcess} from "@/models/BusinessProcess";

export async function getBusinessProcesses():Promise<Array<BusinessProcess>> {
    return await apiClient.get('/structure/bp')
}

export async function uploadHardcode():Promise<Array<BusinessProcess>> {
    return await apiClient.post('/structure/upload/hard_code')
}