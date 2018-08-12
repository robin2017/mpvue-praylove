<template>
    <div class="rb-profile">
        <image :src="profileInfo.backgroundImgUrl" class="rb-profile__backgroundimg"></image>
        <view class="rb-profile__box-wrap">
            <view class="rb-profile__middle-box">
                <view>
                    <image class="rb-profile__box-img" :src="profileInfo.picImgUrl"></image>
                </view>
                <view style="padding-top:30rpx">
                    <view style="margin-bottom:20rpx">{{profileInfo.name}}</view>
                    <view>真爱值{{profileInfo.loveValue}}</view>
                </view>
            </view>
        </view>
        <view>
            <navigator url="..">
                <view class="rb-profile__bar-info">
                    <view class="rb-profile__bar-content">
                        <image :src="personInfoIcon" class="rb-profile__bar-icon"></image>
                        <text>个人信息</text>
                    </view>
                    <image :src="arrowRightIcon" class="rb-profile__arrow-right"></image>
                </view>
            </navigator>
            <navigator url="..">
                <view class="rb-profile__bar-info">
                    <view class="rb-profile__bar-content">
                        <image :src="followingIcon" class="rb-profile__bar-icon"></image>
                        <text>我关注过谁</text>
                    </view>
                    <image :src="arrowRightIcon" class="rb-profile__arrow-right"></image>
                </view>
            </navigator>
            <navigator url="..">
                <view class="rb-profile__bar-info">
                    <view class="rb-profile__bar-content">
                        <image :src="followerIcon" class="rb-profile__bar-icon"></image>
                        <text>谁关注过我</text>
                    </view>
                    <image :src="arrowRightIcon" class="rb-profile__arrow-right"></image>
                </view>
            </navigator>
            <navigator url="..">
                <view class="rb-profile__bar-info">
                    <view class="rb-profile__bar-content">
                        <image :src="aboutIcon" class="rb-profile__bar-icon"></image>
                        <text>关于我们</text>
                    </view>
                    <image :src="arrowRightIcon" class="rb-profile__arrow-right"></image>
                </view>
            </navigator>
        </view>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    import {PROFILE_INFO} from "../../store/mutations-type";
    export default {
        data() {
            return {
                arrowRightIcon:'../../static/images/pray/arrow-right.png',
                personInfoIcon:'../../static/images/pray/profile/file.png',
                followingIcon:'../../static/images/pray/profile/heart.png',
                followerIcon:'../../static/images/pray/profile/smile.png',
                aboutIcon:'../../static/images/pray/profile/star.png'
            }
        },
        computed: {
            ...mapState('profile', {
                profileInfo: state => state.profileInfo,
            })
        },
        methods: {
            ...mapMutations('profile', {
                getProfileInfo: PROFILE_INFO
            }),
        },

        mounted() {

            this.getProfileInfo(1)
        }
    }
</script>

<style lang="scss">
    @include c('profile') {
        @include e('backgroundimg'){
            height:450rpx;
        }
        @include e('box-wrap'){
            height:150rpx;
            width:750rpx;
            position:relative;
            border-bottom:4px solid lightgray;
        }

        @include e('middle-box'){
            height:200rpx;
            width:600rpx;
            position:absolute;
            border:1px solid gray;
            top:-100rpx;
            left:65rpx;
            background-color:white;
            border-radius:10px;
            display:flex
        }
        @include e('box-img'){
            height:160rpx;
            width:160rpx;
            border-radius:10rpx;
            margin:20rpx;
        }
        @include e('bar-info'){
            border-bottom:1px solid gray;
            height:100rpx;
            display:flex;
            align-items:center;
            padding:0 20rpx;
            justify-content: space-between;
        }
        @include e('bar-content'){
            display:flex;
            align-items:center;
        }
        @include e('bar-icon'){
            height:60rpx;
            width:60rpx;
            margin-right:20rpx
        }
        @include e('arrow-right'){
            height:50rpx;
            width:50rpx;
        }
    }

</style>
