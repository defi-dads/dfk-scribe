// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Payment } from './types';

// Define a service using a base URL and expected endpoints
export const paymentApi = createApi({
  reducerPath: 'paymentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://bpnqxl35g7.execute-api.us-east-2.amazonaws.com/dev/' }),
  endpoints: (builder) => ({
    getPaymentById: builder.query<Payment, string>({
      query: (name) => `payment/${name}`,
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPaymentByIdQuery } = paymentApi