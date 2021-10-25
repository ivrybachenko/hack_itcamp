import {AxiosResponse} from "axios";
import {BusinessProcess} from "@/models/BusinessProcess";
import apiClient from "@/api/AxiosClient";
import {Threat} from "@/models/Threat";

export async function uploadHardcode():Promise<AxiosResponse<Array<BusinessProcess>>> {
    return await apiClient.post('/threat/upload/hard_code')
}

export async function findSimilar(desc: string):Promise<AxiosResponse<Array<Threat>>> {
    // return  {
    //     data: [{
    //         code: 'T1',
    //         actions: [],
    //         isManaged: false,
    //         longDescription: 'long desc',
    //         shortDescription: 'short desc'
    //     }]
    // }
    return await apiClient.get('/threat/find/similar?description='+desc)
}