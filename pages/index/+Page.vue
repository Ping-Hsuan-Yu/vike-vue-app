<template>
  <Title>My Vike app</Title>
  <div class="flex flex-col gap-4">
    <p class="text-1">This page is:</p>
    <ul>
      <li>Rendered to HTML.</li>
      <li>Interactive.</li>
    </ul>
    <div>
      <Counter />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Title from "../../components/Title.vue";
import Counter from "../../components/Counter.vue";
</script>