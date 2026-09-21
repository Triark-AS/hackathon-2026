<script setup lang="ts">
const { count } = useCounter()

useHead({ title: 'Counter' })
</script>

<template>
  <main class="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-950 px-6 text-slate-100">
    <p class="text-sm uppercase tracking-widest text-slate-500">
      Counter value
    </p>

    <p
      class="text-7xl font-bold tabular-nums"
      aria-live="polite"
    >
      {{ count }}
    </p>

    <NuxtLink
      :to="{ name: 'index' }"
      class="text-sm text-slate-400 underline underline-offset-4 transition hover:text-slate-100"
    >
      Back to home
    </NuxtLink>
  </main>
</template>
