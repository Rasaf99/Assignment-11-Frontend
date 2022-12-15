import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const ReviewApi = createApi({

    reducerPath: "ReviewApi",

    baseQuery: fetchBaseQuery({ baseUrl: `http://65.0.109.170:2000/api/review` }),

    tagTypes:['review'],

    endpoints: (builder) => ({


        fetchReviews: builder.query({

            query: () => "/",
            providesTags: ['review']

        }),


        fetchReviewsOfAService: builder.query({

            query: (id) => `/service/${id}`,
            providesTags: ['review']

        }),


        fetchReviewsOfAUser: builder.query({

            query: (id) => `/user/${id}`,
            providesTags: ['review']

        }),


        
        reviewDetails: builder.query({

            query: (id) => `/${id}`,
            providesTags: ['review']

        }),


        addReview: builder.mutation({

            query: (reviewItems) => ({

                url: "/",
                method: "POST",
                body: reviewItems

            }),

            invalidatesTags: ['review']

        }),



        deleteReview: builder.mutation({

            query: (id) => ({

                url: `/${id}`,
                method: "DELETE"

            }),

            invalidatesTags: ['review']

        }),



        updateReview: builder.mutation({

            query: ({id, ...reviewItems}) => ({

                url: `/${id}`,
                method: "PATCH",
                body: reviewItems

            }),

            invalidatesTags: ['review']

        }),



    })

})



export const { useFetchReviewsQuery, useFetchReviewsOfAServiceQuery, useFetchReviewsOfAUserQuery, useReviewDetailsQuery,  useAddReviewMutation, useDeleteReviewMutation, useUpdateReviewMutation } = ReviewApi

