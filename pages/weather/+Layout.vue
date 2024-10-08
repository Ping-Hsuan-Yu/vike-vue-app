<script lang="ts" setup>
import Title from '../../components/Title.vue';
import { useData } from "vike-vue/useData"
import type { Data } from './+data'

const data = useData<Data>()
</script>

<template>
  <Title>Weather</Title>
  <div class="flex flex-col gap-4">
    <div class="text-1">{{ data.datasetDescription }}</div>
    <slot />
  </div>
</template>