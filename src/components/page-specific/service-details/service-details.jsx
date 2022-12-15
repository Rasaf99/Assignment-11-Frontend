import { useParams } from "react-router-dom";

import { useServiceDetailsQuery } from "redux-toolkit/api/service-api";

import { Box } from "@mui/material";

import { ERROR_TEXT, LOADING_SPINNER } from "components/reusable/for-any-project/index";
import DETAILS_CARD from "./details-card/details-card";





export default function SERVICE_DETAILS() {


    const {id} = useParams()

    const { data, error, isLoading, isSuccess } = useServiceDetailsQuery(id)



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

                            <DETAILS_CARD data={data} id_from_params={id}/>


                        )
                    }



                })() /* End: Immediately invoked anonymous function */


            }

        </Box>


    )

}