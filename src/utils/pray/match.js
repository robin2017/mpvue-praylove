import {MOCK_DATA} from "./config";
import {getAllUser} from '@/utils/api'

export function getMatchList() {
    return getAllUser().then(response=>{
        console.log('==-',response.data)
     return   Promise.resolve(response.data);
    });

    // return MOCK_DATA?Promise.resolve(require('../../../static/mock/json/match.json')):null;
}