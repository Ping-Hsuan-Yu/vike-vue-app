<template>
  <Button 
    :onClick="()=>state.count++">
    Counter {{ state.count }}
  </Button>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
const state = reactive({ count: 0 });
import Button from "./Button.vue"
</script>
