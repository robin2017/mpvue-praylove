import {MOCK_DATA} from "./config";


export function getProfileInfo(id){
    return MOCK_DATA?Promise.resolve(require('../../../static/mock/json/profile.json')[id]):null;
}