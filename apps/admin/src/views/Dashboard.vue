<template>
  <div class="dashboard">
    <h1>管理后台</h1>
    <div class="stats">
      <div class="stat-card">
        <h3>用户数</h3>
        <p>{{ userCount }}</p>
      </div>
      <div class="stat-card">
        <h3>订单数</h3>
        <p>{{ orderCount }}</p>
      </div>
    </div>
    <MyButton @click="refreshData" primary>刷新数据</MyButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { MyButton } from "@monorepo/ui";

const userCount = ref(1234);
const orderCount = ref(567);

const refreshData = () => {
  userCount.value = Math.floor(Math.random() * 2000) + 1000;
  orderCount.value = Math.floor(Math.random() * 1000) + 100;
};
</script>

<style scoped>
.dashboard {
  padding: 2rem;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.stat-card {
  background: #f5f5f5;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
}

.stat-card h3 {
  margin: 0 0 0.5rem 0;
  color: #666;
}

.stat-card p {
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  color: #42b883;
}
</style>
