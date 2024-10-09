<template>
  <div>
    <Title>To-do List</Title>
    <TodoList :initial-todo-items="data.todo" />
  </div>
</template>

<script lang="ts" setup>
import type { Data } from "./+data";
import { useData } from "vike-vue/useData";
import TodoList from "./TodoList.vue";
import Title from "../../components/Title.vue";

const data = useData<Data>();
</script>
