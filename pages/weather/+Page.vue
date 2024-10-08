<script setup lang="ts">
import { navigate } from 'vike/client/router'
import { useData } from "vike-vue/useData"
import type { Data } from './+data'
const data = useData<Data>()

const handleCityOnChange = (e: Event) => {
  const cityValue = (e.target as HTMLOptionElement).value
const baseUrl = import.meta.env.PUBLIC_ENV__BASE_URL ?? ""

  if (cityValue) {
    navigate(`${baseUrl}/weather/${cityValue}`)
  }
}
</script>

<template>
  <div>
    <select class="mt-3 p-3 border-2 border-solid border-yellow-400 rounded-lg" name="" id="city"
      v-on:change="handleCityOnChange">
      <option value="">請選擇</option>
      <option v-for="(item) in data.locationNameList" :key="item" :value="item">{{ item }}</option>
    </select>
  </div>
</template>