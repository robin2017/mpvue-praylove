import {getChatList} from '@/utils/pray/chat'
import { CHAT_LIST } from '@/store/mutations-type'

const state = {
    chatList:{},
};
const mutations = {

    [CHAT_LIST](state){
        getChatList().then(response=>{
            console.log('---chatList--response--',response)
            state.chatList = response;
        })
    },
};
export default {
    state,
    mutations
}