<script lang="ts" setup>
import type { Data } from './+data'
import { useData } from 'vike-vue/useData'
const data = useData<Data>()
</script>

<template>
  <div>
    <h2 class="text-1">{{ data.locationName }} - {{ data.description }}</h2>
    <div v-for="(temp) in data.data">
      <span>{{ temp.dataTime }}</span>
      <span> - </span>
      <span>{{ temp.value }}</span>
    </div>
  </div>
</template>
