import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "4d6e2ef34bmsh6e8306733d2f107p17c6c3jsn97349743cf8e",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com"

const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({ query: (count) =>  createRequest(`/coins?limit=${count}`)}),
        getCryptoDetails: builder.query({ query: (coinId) => createRequest(`/coin/${coinId}`)}),
        getCryptoHistory: builder.query({ query: ( coinId, timeperiod) => createRequest(`/coin/${coinId}/history/${timeperiod}`)}),
        getExchanges: builder.query({ query: () => createRequest(`/exchanges`)})
    })
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
    useGetExchangesQuery,
} = cryptoApi

