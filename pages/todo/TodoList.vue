<template>
  <ul>
    <li v-for="(item, index) in todoItems" :key="index" class="">
      {{ item.text }}
    </li>
  </ul>
  <form @submit.prevent="submitNewTodo()" class="mt-4">
    <input v-model="newTodo" type="text" class="border border-yellow-500 rounded px-2 py-1"/>
    <Button type="submit">Add to-do</Button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Button from '../../components/Button.vue';

const props = defineProps<{ initialTodoItems: { text: string }[] }>();
const todoItems = ref(props.initialTodoItems);
const newTodo = ref("");

const submitNewTodo = async () => {
  // Optimistic UI update
  todoItems.value.push({ text: newTodo.value });
};
</script>
