<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <ProductCard :product="p"></ProductCard>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })

    // fetch the products
    const { data : products } = await useFetch('https://fakestoreapi.com/products')

    useHead({
        title: "Nuxt Toi | Merch",
        meta: [
            { name: 'description', content: 'Nuxt 3 merch' }
        ]

    })
</script>

<style scoped>

</style>

