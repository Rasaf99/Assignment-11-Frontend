
import { useDeleteReviewMutation, useFetchReviewsOfAUserQuery } from "redux-toolkit/api/review-api";


import { Box } from "@mui/material";

import { ERROR_TEXT, LOADING_SPINNER } from "components/reusable/for-any-project/index";


import { useContext } from "react";
import { AuthContext } from "contexts/auth-context";
import REVIEW_CARD from "../service-details/details-card/review/review-display/review-card/review-card";
import MY_REVIEW_CARD from "./my-review-card/my-review-card";





export default function MY_REVIEWS() {


    const {user} = useContext(AuthContext)

    const { data, error, isLoading, isSuccess } = useFetchReviewsOfAUserQuery(user?.uid)


  console.log(data)



    return (


        <Box>

            {

                /* Immediately invoked anonymous function */
                (() => {


                    if (isLoading) {
                        return (
                            <LOADING_SPINNER />
                        )
                    }


                    else if (error) {

                        return (

                            <ERROR_TEXT text='Something is wrong.' />
                        )
                    }


                    else if (isSuccess) {

                        return (

                           <MY_REVIEW_CARD data={data}/>


                        )
                    }



                })() /* End: Immediately invoked anonymous function */


            }

        </Box>


    )

}