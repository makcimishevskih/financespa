import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGetKpisResponse, IGetProductsResponse } from './types';

export const api = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
	reducerPath: 'main',
	tagTypes: ['Kpis', 'Products', 'Transactions'],
	endpoints: (build) => ({
		getKpis: build.query<Array<IGetKpisResponse>, void>({
			query: () => 'kpi/kpis',
			providesTags: ['Kpis'],
		}),
		getProducts: build.query<Array<IGetProductsResponse>, void>({
			query: () => 'products/products',
			providesTags: ['Products'],
		}),
		getTransactions: build.query<void, void>({
			query: () => 'transactions/transactions',
			providesTags: ['Transactions'],
		}),
	}),
});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } =
	api;
