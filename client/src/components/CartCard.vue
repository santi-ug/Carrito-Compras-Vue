<template>
    <section class="cart-card">
        <ul>
            <li v-for="product in cart" :key="product.id">
                <CartCard :product="product" />
            </li>
        </ul>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { addCartProduct, cartKey } from '../utils.js';


const props = defineProps({
  product: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    expiration: {
      type: String,
      required: false,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  removeProduct: {
    type: Function,
    required: true,
  },
})

const emit = defineEmits(['removeProductEmit']);
const cart = ref(JSON.parse(localStorage.getItem(cartKey)));


</script>

<style scoped>
</style>