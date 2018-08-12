import {MOCK_DATA} from "./config";


export function getChatList(){
    return MOCK_DATA?Promise.resolve(require('../../../static/mock/json/chat.json')):null;
}