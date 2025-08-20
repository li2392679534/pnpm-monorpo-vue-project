<template>
  <div class="app">
    <h1>Vue Monorepo 示例</h1>
    <SyButton label="StoryButton" @click="handleClick">点击我</SyButton>
    <p>当前时间: {{ currentTime }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { SyButton } from "@monorepo/ui";
import { formatDate } from "@monorepo/utils";

const currentTime = ref("");

const handleClick = () => {
  alert("按钮被点击了！");
};

onMounted(() => {
  currentTime.value = formatDate(new Date());
});
</script>

<style scoped>
.app {
  text-align: center;
  padding: 2rem;
  font-family: Arial, sans-serif;
}

h1 {
  color: #42b883;
  margin-bottom: 2rem;
}
</style>
