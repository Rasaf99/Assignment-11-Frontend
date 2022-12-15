import { configureStore } from '@reduxjs/toolkit'

import { ServiceApi } from 'redux-toolkit/api/service-api'
import { ReviewApi } from 'redux-toolkit/api/review-api'


export const store = configureStore({

  reducer: {

    [ServiceApi.reducerPath]: ServiceApi.reducer,

    [ReviewApi.reducerPath]: ReviewApi.reducer
  },


  
  middleware: (getDefaultMiddleware) =>

    getDefaultMiddleware().concat(ServiceApi.middleware).concat(ReviewApi.middleware)
})

