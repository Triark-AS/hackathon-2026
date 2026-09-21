<script setup lang="ts">
const { count, increment, decrement, reset } = useCounter()
</script>

<template>
  <main class="flex min-h-screen flex-col items-center justify-center gap-10 bg-slate-950 px-6 text-slate-100">
    <h1 class="text-4xl font-bold tracking-tight">
      Hackathon 2026
    </h1>

    <section class="flex flex-col items-center gap-4">
      <p
        class="text-6xl font-semibold tabular-nums"
        aria-live="polite"
      >
        {{ count }}
      </p>

      <div class="flex items-center gap-2">
        <button
          class="size-10 rounded-md bg-slate-800 text-xl font-medium transition hover:bg-slate-700"
          aria-label="Decrement counter"
          @click="decrement"
        >
          −
        </button>
        <button
          class="size-10 rounded-md bg-slate-800 text-xl font-medium transition hover:bg-slate-700"
          aria-label="Increment counter"
          @click="increment"
        >
          +
        </button>
        <button
          class="rounded-md px-3 py-2 text-sm text-slate-400 transition hover:text-slate-100"
          @click="reset"
        >
          Reset
        </button>
      </div>

      <NuxtLink
        :to="{ name: 'counter' }"
        class="text-sm text-slate-400 underline underline-offset-4 transition hover:text-slate-100"
      >
        View counter value
      </NuxtLink>
    </section>
  </main>
</template>
