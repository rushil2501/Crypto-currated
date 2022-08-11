import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '2a18e3d1e7mshd5eacbc77b1422cp1425aajsnb8ea691e41b9',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com'
const createRequest = (url) => ({url,headers:cryptoApiHeaders})
export const cryptoApi = createApi({
    reducerPath : 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
          }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
          }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
          }),
          getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
          }),
    })
})

export const {
    useGetCryptosQuery ,useGetCryptoDetailsQuery, useGetCryptoHistoryQuery,useGetExchangesQuery
} = cryptoApi;