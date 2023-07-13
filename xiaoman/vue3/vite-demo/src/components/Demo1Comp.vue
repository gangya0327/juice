<template>
  <div>
    <p>{{ person.name }}</p>
    <p>{{ person1.name }}</p>
    <p ref="myDom" id="myDom">dom</p>
  </div>
  <hr />
  <button @click="change">修改</button>
</template>

<script setup lang="ts">
import { ref, isRef, shallowRef, onMounted } from 'vue';
import type { Ref } from 'vue';

type Person = {
  name: string;
};
const person: Ref<Person> = ref({ name: 'peter' });
const person1: Ref<Person> = shallowRef({ name: 'john' });
const change = () => {
  // person.value.name = 'raven';
  person1.value.name = 'raven';
};
console.log(isRef(person));

const myDom = ref<HTMLDivElement>();
onMounted(() => {
  console.log(myDom.value?.id);
});
</script>
