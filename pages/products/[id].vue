<template>
    <div>
        <head>
            <title>Nuxt Toi | {{ product.title }}</title>
            <meta name="descrption" :content="`{{ product.descrption }}`">
        </head>
        <ProductDetails :product="product"></ProductDetails>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    const uri = 'https://fakestoreapi.com/products/' + id

    // fetch the products
    const { data : product } = await useFetch(uri, { key : id })

    if(!product.value) {
        throw createError({ statusCode:404, statusMessage: 'Product not found', fatal: true })
    }

    definePageMeta({
        layout: 'products'
    })
</script>

<style scoped>

</style>