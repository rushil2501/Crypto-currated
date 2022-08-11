import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '2a18e3d1e7mshd5eacbc77b1422cp1425aajsnb8ea691e41b9',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}
const baseUrl =  'https://bing-news-search1.p.rapidapi.com';
const createRequest = (url) => ({url,headers:cryptoNewsHeaders})
export const cryptoNewsApi = createApi({
    reducerPath : 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews : builder.query({
            query : ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});
export const {useGetCryptoNewsQuery} = cryptoNewsApi;

