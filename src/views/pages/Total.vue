<template>
  <div>Total: {{ totalCost }}</div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {};
    },
    computed: {
        ...mapGetters(['totalCost']),
    },
};
</script>
