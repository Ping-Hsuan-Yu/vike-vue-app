<template>
  <div class="p-5 mb-2">
    <a :href="`${baseUrl}/`">
      <img src="../assets/logo.svg" height="64" width="64" />
    </a>
  </div>
</template>
<script setup lang="ts">
const baseUrl = import.meta.env.PUBLIC_ENV__BASE_URL ?? ""
</script>
