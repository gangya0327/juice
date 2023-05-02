<template>
  <div>
    <h1>This is an chat page</h1>
    <ul>
      <template v-for="userInfo of state.userList" :key="userInfo.id">
        <li v-if="userInfo.username === state.username">
          {{ userInfo.username }}
        </li>
        <li v-else>
          <a href="javascript:;" @click="selectUser(userInfo)">{{ userInfo.username }}</a>
        </li>
      </template>
    </ul>
    <div v-if="state.targetUser">
      <h3>{{ state.targetUser.username }}</h3>
      <input type="text" placeholder="请输入内容" v-model="msgText" />
      <button @click="sendMessage">发送</button>
    </div>
    <div>
      <ul>
        <li v-for="(item, index) of messageList" :key="index">
          <p>{{ item.fromUsername }} : {{ new Date(item.dateTime) }}</p>
          <p>{{ item.msg }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { io } from 'socket.io-client';
import { useRouter } from 'vue-router';
import { reactive, computed } from 'vue';

const router = useRouter();
const state = reactive({
  username: router.currentRoute.value.query.username,
  userList: [],
  targetUser: '',
  msgText: '',
  messageBox: {},
});

const messageList = computed(() => {
  return state.messageBox[state.username] && state.targetUser
    ? state.messageBox[state.username].filter(
        (item) => item.fromUsername === state.targetUser.username || item.toUsername === state.targetUser.username
      )
    : [];
});

const socket = io('http://localhost:3000', {
  query: {
    username: state.username,
  },
});

const selectUser = (userInfo) => {
  console.log(userInfo);
  state.targetUser = userInfo;
};

const sendMessage = () => {
  if (!state.msgText.length) return;
  appendMessage({
    fromUsername: state.username,
    toUsername: state.targetUser.username,
    msg: state.msgText,
    dateTime: new Date().getTime(),
  });

  socket.emit('send', {
    fromUsername: state.username,
    targetId: state.targetUser.id,
    msg: state.msgText,
  });
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
