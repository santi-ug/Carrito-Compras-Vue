<script setup>
import { ref } from 'vue';
import CartCard from '../components/CartCard.vue';
import Navbar from '../components/Navbar.vue';
import { cartKey, deleteCartProduct } from '../utils.js';

const cart = ref(JSON.parse(localStorage.getItem('cart')));

const removeProduct = (index) => {
    deleteCartProduct(index, cart.value);
}

const getTotalCost = () => {
    return cart.value.reduce((acc, product) => acc + (product.price * product.quantity), 0);
};

const getTotalQuantity = () => {
    return cart.value.reduce((acc, product) => acc + product.quantity, 0);
};

</script>

<template>
    <Navbar />
    <h2>Cart</h2>
    <Loading v-if="loading" />
    <section class="cart" v-else>
        <div class="cart__products">
            <ul v-if="cart.length">
                <li v-for="product in cart" :key="product.id">
                    <CartCard :product="product" :removeProduct="removeProduct" />
                </li>
            </ul>
            <div class="cart__empty" v-else>
                <h2>Your cart is empty</h2>
            </div>
        </div>
        <div class="cart__receipt">
            <h3>Total ({{ getTotalQuantity() }} items): <strong>${{ getTotalCost() }}</strong></h3>
            <button class="cart__receipt-checkout" v-if="cart.length">Checkout</button>
            <button class="cart__receipt-checkout-disabled" v-else>Checkout</button>
        </div>
    </section>
</template>

<style scoped>
.cart {
    display: flex;
    justify-content: space-between;
    gap: 8rem;
    padding: 0 20rem;
}

ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    list-style-type: none;
    text-decoration: none;
}

li {
    min-width: 12rem;
}

h2 {
    display: flex;
    justify-content: center;
    margin: 1.5rem 0 1rem 0;
    font-size: 3rem;
}

.cart__products ul li:first-child {
  border-top: 1px solid #ccc;
  padding-top: 1.75rem;
}

.cart__empty {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 31.5rem;
}

.cart__empty h2 {
    font-size: 2rem;
}

.cart__receipt {
    font-size: 1.5rem;
}

.cart__receipt strong {
    font-weight: 800;
    color: orange;
}

.cart__receipt-checkout {
    padding: 1rem 3rem;
    font-size: 1.5rem;
    font-weight: 800;
    background-color: orange;
    color: white;
    border: none;
    border-radius: 2rem;
    cursor: pointer;
    width: 100%;
}

.cart__receipt-checkout:hover {
    background-color: #ff8c00;
}

.cart__receipt-checkout-disabled {
    padding: 1rem 3rem;
    font-size: 1.5rem;
    font-weight: 800;
    background-color: rgb(204, 204, 204);
    color: white;
    border: none;
    border-radius: 2rem;
    width: 100%;
}

</style>