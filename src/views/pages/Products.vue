<template>
  <v-simple-table>
    <template v-slot:default>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>
            <v-text-field
              :value="product.num"
              :min="0"
              @input="updateProduct({ id: product.id, data: { num: +$event } })"
              type="number"
              solo
              hide-details
              class="my-2"
            ></v-text-field>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
import { mapState, mapMutations } from 'vuex';

export default {
    data() {
        return {};
    },
    computed: {
        ...mapState(['products']),
    },
    methods: {
        ...mapMutations(['updateProduct']),
    },
};
</script>
