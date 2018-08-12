<template>
  <div class="rb-chat">
    <view v-for="chat in chatList">

      <navigator url="../chat-detail/chat-detail">
        <view class="rb-chat__bar">
          <view class="rb-chat__img-wrap">
            <image :src="chat.imgUrl" class="rb-chat__img"></image>
          </view>
          <view class="rb-chat__content-wrap">
            <view class="rb-chat__content-top">
              <text>{{chat.name}}</text>
              <text>{{chat.time}}</text>
            </view>
            <view>
              <text>{{chat.content}}</text>
            </view>
          </view>
        </view>
      </navigator>
    </view>
  </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    import {CHAT_LIST} from "../../store/mutations-type";

    export default {
  data () {
    return {

    }
  },

    computed: {
        ...mapState('chat', {
            chatList: state => state.chatList,
        })
    },
    methods: {
        ...mapMutations('chat', {
            getChatList: CHAT_LIST
        }),
    },

  mounted () {
      this.getChatList()

  }
}
</script>

<style lang="scss">
@include c('chat') {
  padding:0 30rpx;
@include e('bar'){
  display:flex;
}
  @include e('img-wrap'){
    margin-right:20rpx;
  }
  @include e('img'){
  height:100rpx;width:100rpx;
}
  @include e('content-wrap'){
    flex:1;
  }
  @include e('content-top'){
    display:flex;
    justify-content:space-between;
  }
}

</style>
