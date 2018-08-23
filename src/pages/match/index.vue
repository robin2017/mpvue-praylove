<template>
    <view class="rb-match">
        <view>
            <button bindtap="setDisabled">今日为你匹配</button>
        </view>
        <view class="rb-match__user-wrap">
            <view v-for=" user in matchList" class="rb-match__user-block">
                <block>
                    <navigator url="../user/user?title=robin">
                        <image :src="baseUrl+user.image_url" mode="aspectFill"
                               class="rb-match__user-img"/>
                        <view class="rb-match__user-info">
                            <text class="rb-match__user-detail">{{user.name}}</text>
                            <text class="rb-match__user-detail">{{fmtDate(user.birthday)}}</text>
                        </view>
                        <view class="rb-match__user-info">
                            <text class="rb-match__user-detail">{{user.city}}</text>
                            <text class="rb-match__user-detail">真爱值{{user.loveValue}}</text>
                        </view>
                    </navigator>
                </block>

            </view>
        </view>
    </view>
</template>
<script>
    import {mapState, mapMutations} from 'vuex'
    import {MATCH_LIST} from "../../store/mutations-type";
    import {baseURL} from '@/utils/request'
    import {fmtDate} from '@/utils/util'
    export default {
        data() {
            return {
                baseUrl:baseURL
            }
        },
        computed: {
            ...mapState('match', {
                matchList: state => state.matchList,
            })
        },
        watch:{
            matchList:function () {
                this.matchList.forEach(item=>{
                    console.log(item.birthday);
                    console.log(this.fmtDate(item.birthday))
                })
            }
        },
        methods: {
            ...mapMutations('match', {
                getMatchList: MATCH_LIST
            }),
            fmtDate
        },
        mounted() {
            this.getMatchList()
        }
    }
</script>

<style lang="scss">
    @include c('match') {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;

        @include e('user-wrap') {
            display: flex;
            flex-wrap: wrap;
        }
        @include e('user-block') {
            height: 500rpx;
            width: 300rpx;
            margin: 10px;
            font-size: 0.8em;
            font-weight: bold;
        }
        @include e('user-img') {
            width: 300rpx;
            height: 400rpx;
            background-color: #eeeeee;
        }
        @include e('user-info') {
            display: flex;
        }
        @include e('user-detail') {
            flex: 1;
        }
    }
</style>
