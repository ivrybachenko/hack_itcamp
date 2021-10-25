import apiClient from "@/api/AxiosClient";
import {BusinessProcess} from "@/models/BusinessProcess";
import {AxiosResponse} from "axios";

export async function getBusinessProcesses():Promise<AxiosResponse<Array<BusinessProcess>>> {
    // return  {
    //     data: [{
    //         code: 'B1',
    //         description: 'B1 desc',
    //         name: 'Business process 1',
    //         operationalProcesses: [{
    //             name: 'Operational process 1',
    //             code: 'OP1',
    //             description: 'OP1 desc',
    //             threats: [{
    //                 code: 'T1',
    //                 actions: [],
    //                 isManaged: false,
    //                 longDescription: 'long desc',
    //                 shortDescription: 'short desc'
    //             }]
    //         },{
    //             name: 'Operational process 2',
    //             code: 'OP2',
    //             description: 'OP2 desc',
    //             threats: [{
    //                 code: 'T1',
    //                 actions: [],
    //                 isManaged: false,
    //                 longDescription: 'long desc',
    //                 shortDescription: 'short desc'
    //             }]
    //         }]
    //     }]
    // }
    return await apiClient.get('/structure/bp')
}

export async function uploadHardcode():Promise<AxiosResponse<Array<BusinessProcess>>> {
    return await apiClient.post('/structure/upload/hard_code')
}