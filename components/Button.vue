<template>
    <button type="button" class="border border-yellow-500 rounded bg-yellow-300 px-2 py-1 text-xs font-medium uppercase"
        @click="onClick">
        <slot />
    </button>
</template>
<script setup lang="ts">
defineProps({
    onClick: {
        type: Function,
    }
})
</script>