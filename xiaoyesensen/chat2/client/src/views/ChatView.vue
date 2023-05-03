<template>
  <div>
    <h1>This is an chat page</h1>
    <ul>
      <template v-for="userInfo in state.userList" :key="userInfo.id">
        <li v-if="userInfo.username === state.username">{{ userInfo.username }}</li>
        <li v-else>
          <a href="javascript:;" @click="selectUserInfo(userInfo)">{{ userInfo.username }}</a>
        </li>
      </template>
    </ul>
    <div v-if="state.targetUser">
      <h3>当前聊天：{{ state.targetUser.username }}</h3>
      <input type="text" placeholder="请输入" v-model="state.msgText" />
      <button @click="sendMessage">发送</button>
    </div>
    <div>
      <ul>
        <li v-for="(msg, index) in messageList" :key="index">
          <p>{{ msg.from }}: {{ new Date(msg.dateTime) }}</p>
          <p>{{ msg.msg }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { io } from 'socket.io-client';
import { useRouter, useRoute } from 'vue-router';
import { reactive, computed } from 'vue';

// const router = useRouter()
const route = useRoute();
// console.log(route.query.username);
const state = reactive({
  // username: router.currentRoute.value.query.username
  username: route.query.username,
  userList: [],
  targetUser: null,
  msgText: '',
  messageBox: {},
});

const messageList = computed(() => {
  return state.messageBox[state.username] && state.targetUser
    ? state.messageBox[state.username].filter(
        (item) => item.from === state.targetUser.username || item.to === state.targetUser.username
      )
    : [];
});

const socket = io('http://localhost:3001', {
  query: {
    username: route.query.username,
  },
});

const selectUserInfo = (userInfo) => {
  state.targetUser = userInfo;
};

const sendMessage = () => {
  if (!state.msgText.length) return;
  appendMessage({
    from: state.username,
    to: state.targetUser.username,
    dateTime: new Date().getTime(),
    msg: state.msgText,
  });

  socket.emit('send', {
    from: state.username,
    targetId: state.targetUser.id,
    msg: state.msgText,
  });
  state.msgText = '';
};

socket.on('online', (data) => {
  state.userList = data.userList;
});

socket.on('receive', (data) => {
  appendMessage(data);
});

socket.on('error', (err) => {
  console.log(err);
});

function appendMessage(data) {
  !state.messageBox[state.username] && (state.messageBox[state.username] = []);
  state.messageBox[state.username].push(data);
}
</script>
