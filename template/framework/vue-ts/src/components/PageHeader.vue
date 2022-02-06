<template>
  <img :src="imageUrl" height="45" />
  <h1>
    <slot></slot>
  </h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank"
    >Documentation</a
  >
</template>

<script setup lang="ts">
import logo from "~/assets/logo.svg";

const imageUrl = new URL(logo, import.meta.url).href;
</script>
