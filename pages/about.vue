<template>
    <div>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsam cum repellat sed iusto ut, nobis nostrum alias assumenda tempore beatae nisi in optio voluptate, perspiciatis facere iure! Enim, quos.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti quod ea dolorum asperiores ducimus aperiam quae exercitationem commodi expedita, tempora consectetur esse laborum molestiae deserunt ex blanditiis quas doloribus eum!</p>
        <div>
            {{ data }}
        </div>
    </div>
</template>

<script setup>
    // const { data } = await useFetch('/api/ninja?name=mario', {
    //     method: 'post',
    //     body: { age: 30 }
    // })
    const { data } = await useFetch('/api/currency/GBP')
</script>

<style>
    h2{
        margin-bottom: 20px;
        font-size: 36px;
    }
    p{
        margin: 20px 0;
    }
</style>