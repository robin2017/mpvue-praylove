import {getMatchList} from '@/utils/pray/match'
import { MATCH_LIST } from '@/store/mutations-type'

const state = {
    matchList:{},
};
const mutations = {

    [MATCH_LIST](state){
        getMatchList().then(response=>{
            console.log('---chatList--response--',response)
            state.matchList = response;
        })
    },
};
export default {
    state,
    mutations
}