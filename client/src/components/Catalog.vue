<template>
    <Loading v-if="loading" />
    <section class="catalog" v-else>
        <div class="catalog__container">
            <ul>
                <li class="catalog__product" v-for="product in products" :key="product.id">
                    <ProductCard :product="product" />
                </li>
            </ul>
            <div class="catalog__products">
                <div  v-for="product in products" :key="product.id">
                    <img :src="product.image" alt="product.name" />
                    <h2>{{ product.name }}</h2>
                    <p>{{ product.description }}</p>
                    <p>{{ product.price }}</p>
                    <button @click="addToCart(product)">Add to Cart</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>
</style>