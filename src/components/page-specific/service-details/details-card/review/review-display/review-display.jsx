// redux-toolkit
import { useFetchReviewsOfAServiceQuery } from "redux-toolkit/api/review-api"


// components
import { Box } from "@mui/material"

import { ERROR_TEXT, LOADING_SPINNER } from "components/reusable/for-any-project"
import REVIEW_CARD from "./review-card/review-card"




// functional component
export default function REVIEW_DISPLAY({service_id, user}) {
    

    const { data, error, isLoading, isSuccess } = useFetchReviewsOfAServiceQuery(service_id)


    return (

        <Box>

            {

                /*  Immediately invoked anonymous function */
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
 
                             <REVIEW_CARD data={data}/>
                            
                            )
                    }




                })()  /* End: Immediately invoked anonymous function */

            }

        </Box>

    )
}

