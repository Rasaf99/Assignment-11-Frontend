import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const ServiceApi = createApi({

    reducerPath: "ServiceApi",

    baseQuery: fetchBaseQuery({ baseUrl: `http://65.0.109.170:2000/api/service` }),

    tagTypes:['service'],

    endpoints: (builder) => ({


        fetchServices: builder.query({

            query: () => "/",
            providesTags: ['service']

        }),


        fetchLimitedServices: builder.query({

            query: (limit) => `/?limit=${limit}`,
            providesTags: ['service']

        }),

        
        serviceDetails: builder.query({

            query: (id) => `/${id}`,
            providesTags: ['service']

        }),


        addService: builder.mutation({

            query: (serviceItems) => ({

                url: "/",
                method: "POST",
                body: serviceItems

            }),

            invalidatesTags: ['service']

        }),



        deleteService: builder.mutation({

            query: (id) => ({

                url: `/${id}`,
                method: "DELETE"

            }),

            invalidatesTags: ['service']

        }),



        updateService: builder.mutation({

            query: ({id, ...serviceItems}) => ({

                url: `/${id}`,
                method: "PATCH",
                body: serviceItems

            }),

            invalidatesTags: ['service']

        }),



    })

})



export const { useFetchServicesQuery, useFetchLimitedServicesQuery, useServiceDetailsQuery, useAddServiceMutation, useDeleteServiceMutation, useUpdateServiceMutation } = ServiceApi

