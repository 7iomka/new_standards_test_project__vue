<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col cols="6" class="py-12">
          <div class="links mb-4">
            <router-link v-for="route in routes" :to="route.name" :key="route.path" class="mr-3">{{
              route.name
            }}</router-link>
          </div>
          <div class="views">
            <router-view />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import { routes } from '@/router';

export default {
    data() {
        return {
            routes,
        };
    },
};
</script>
