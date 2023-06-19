<template>
  <nav>
    <ul class="navbar-nav main-categories flex-column">
      <li v-for="route in routes" :key="route.path" class="nav-item">
        <NuxtLink :to="localePath(route.path)" class="nav-link" active-class="active">
          <span>{{ $t(route.name) }}</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
interface Route {
  path: string;
  name: string;
}
const routes: Route[] = [
  {
    path: '/',
    name: 'Incoming'
  },
  {
    path: '/groups',
    name: 'Groups'
  },
  {
    path: '/products',
    name: 'Products'
  },
  {
    path: '/users',
    name: 'Users'
  },
  {
    path: '/settings',
    name: 'Settings'
  }
]
const localePath: any = useLocalePath()
</script>

<style scoped lang="scss">
.main-categories .nav-link {
  margin: 0 0 10px;
  text-align: center;

  span {
    color: $gray-900;
    font-weight: 500;
    text-transform: uppercase;
    border-bottom: 3px solid transparent;
    padding-bottom: 3px;
  }

  &.active span {
    border-bottom-color: $accent-dark;
  }
}
</style>
```
