<template>
  <div class="wrap">
    <div class="img img1"></div>
    <div class="img img2"></div>
    <div class="img img3"></div>
  </div>
</template>

<style scoped>
.wrap {
  /* width: 300px; */
  height: 300px;
}
.img {
  background-color: #333;
  border-radius: 50%;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: wave 4s linear infinite;
}

.img1 {
  animation-delay: 0s;
}

.img2 {
  animation-delay: 1.3s;
}
.img3 {
  animation-delay: 2.7s;
}

@keyframes wave {
  0% {
    width: 50px;
    height: 50px;
    opacity: 1;
    background-color: #ccc;
  }
  90% {
    width: 300px;
    height: 300px;
    opacity: 0;
    background-color: #ccc;
  }
  100% {
    opacity: 0;
    background-color: #ccc;
  }
}
</style>
