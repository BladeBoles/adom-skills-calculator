<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink
          :class="{ 'current-route': isCurrentRoute('/skill-picker') }"
          to="/skill-picker"
          class="nav-link"
        >
          Picker
        </RouterLink>
        <RouterLink
          :class="{ 'current-route': isCurrentRoute('/skill-calculator') }"
          to="/skill-calculator"
          class="nav-link"
        >
          Calculator
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'

const isCurrentRoute = (routePath) => {
  const route = useRoute()
  return route.path === routePath
}
</script>

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
  border-bottom: 1px solid #ddd;
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

.current-route {
  text-decoration: 2px solid #333 underline;
}
</style>
