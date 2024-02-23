// import { useQuery } from '';

export default defineEventHandler(async (event) => {
    
    // handle query params
    // const { name } = getQuery(event)

    // const { age } = await readBody(event)

    // api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_g0lMjLsPUe9hEcFnh8NZgybWMcICvnScDYW1VecG')

    return data

})