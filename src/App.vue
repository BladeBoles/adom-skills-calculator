<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/skill-picker" class="nav-link">Picker</RouterLink>
        <RouterLink to="/skill-calculator" class="nav-link">Calculator</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.wrapper {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: #333;
  padding: 1rem;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.2s ease-in-out;
  margin: 0 auto;
}

.nav-link:hover {
  background-color: #ddd;
}
</style>
