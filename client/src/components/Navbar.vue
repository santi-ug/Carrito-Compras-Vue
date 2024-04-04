<template>
<nav class="nav">
    <div class="nav__container">
        <div class="nav__logo">
            <img src="../assets/logo.png" alt="logo" />
        </div>
        <div class="nav__links">
            <ul>
                <li v-for="link in navLinks">
                    <RouterLink v-if="currentPath == link.path" :to="link.path">{{ link.text }}</RouterLink>
                    <RouterLink v-else :to="link.path" @click="setNewPath">{{ link.text }}</RouterLink>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>


<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const currentPath = ref(window.location.pathname);

const navLinks = [
    { text: 'Shop', path: '/' },
    { text: 'Manage Products', path: '/manage-products' },
    { text: 'Cart', path: '/cart' }
]

const setNewPath = (newPath) => {
currentPath.value = newPath;
}
</script>

<style scoped>
.nav {
    background-color: #e0e0e0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.nav__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin: 0 18rem;
}

ul {
    display: flex;
    gap: 4rem;
    list-style-type: none;
    text-decoration: none;
}

</style>