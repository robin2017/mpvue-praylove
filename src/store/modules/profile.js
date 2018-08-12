import {getProfileInfo} from '@/utils/pray/profile'
import { PROFILE_INFO } from '@/store/mutations-type'

const state = {
    profileInfo:{},
};
const mutations = {

    [PROFILE_INFO](state,id){
        getProfileInfo(id).then(response=>{
            console.log('---response--',response)
            state.profileInfo = response;
        })
    },
};
export default {
    state,
    mutations
}