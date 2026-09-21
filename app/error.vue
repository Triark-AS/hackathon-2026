<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const isNotFound = computed(() => props.error.statusCode === 404)

function handleClear() {
  return clearError({ redirect: '/' })
}
</script>

<template>
  <main class="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-950 px-6 text-slate-100">
    <p class="text-6xl font-bold tracking-tight text-slate-700">
      {{ error.statusCode }}
    </p>
    <h1 class="text-2xl font-semibold">
      {{ isNotFound ? 'Page not found' : 'Something went wrong' }}
    </h1>
    <p
      v-if="error.message && !isNotFound"
      class="max-w-prose text-center text-slate-400"
    >
      {{ error.message }}
    </p>
    <button
      class="rounded-md bg-slate-100 px-4 py-2 font-medium text-slate-950 transition hover:bg-white"
      @click="handleClear"
    >
      Back to home
    </button>
  </main>
</template>
