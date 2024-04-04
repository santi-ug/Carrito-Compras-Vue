<template>
</template>


<script setup>
import { ref } from 'vue';


const props = defineProps({
    product: {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        expiration: {
            type: String, 
            default: null
        }
    }
});

</script>


<style scoped>

</style>