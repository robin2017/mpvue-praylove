import {MOCK_DATA} from "./config";


export function getMatchList(){
    return MOCK_DATA?Promise.resolve(require('../../../static/mock/json/match.json')):null;
}