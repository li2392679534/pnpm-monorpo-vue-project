<template>
  <div class="admin-app">
    <nav class="navbar">
      <h2>Vue Monorepo 管理后台</h2>
    </nav>
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.admin-app {
  min-height: 100vh;
  background: #f8f9fa;
}

.navbar {
  background: #42b883;
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar h2 {
  margin: 0;
}

.main-content {
  padding: 0;
}
</style>
