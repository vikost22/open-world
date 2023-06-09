import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countriesApi = createApi({
  reducerPath: "countriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "./database/" }),
  endpoints: (builder) => ({
    getCountriesByContinent: builder.query({
      query: (continent) => `${continent}/countries.json`,
    }),
    getAllCountries: builder.query({
        query: () => `/continent.json`,
      }),
  }),
});

export const {useGetCountriesByContinentQuery, useGetAllCountriesQuery} = countriesApi;