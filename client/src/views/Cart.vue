<script setup>
import { ref } from 'vue';
import Navbar from '../components/Navbar.vue';
import CartCard from '../components/CartCard.vue';
import { deleteCartProduct, cartKey } from '../utils.js';

const cart = ref(JSON.parse(localStorage.getItem('cart')));

const removeProduct = (index) => {
    deleteCartProduct(index, cart.value);
}
</script>

<template>
    <Navbar />
    <Loading v-if="loading" />
    <section class="cart" v-else>
        <h2>Cart</h2>
        <div class="cart__products">
            <ul>
                <li v-for="product in cart" :key="product.id">
                    <CartCard :product="product" :removeProduct="removeProduct" />
                </li>
            </ul>
        </div>
        <div class="cart__receipt">
            <h3>Total: idk</h3>
        </div>
    </section>
</template>

<style scoped>
.cart h2 {
    margin: 1.5rem 0;
    font-size: 3rem;
}

</style>