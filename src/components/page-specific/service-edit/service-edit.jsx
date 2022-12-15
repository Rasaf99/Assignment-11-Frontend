// router
import { useParams } from "react-router-dom";

// api hook
import { useServiceDetailsQuery } from "redux-toolkit/api/service-api";

// components
import { Box } from "@mui/material"

import { ERROR_TEXT, LOADING_SPINNER } from "components/reusable/for-any-project"

import EDIT_FROM from "./edit-form/edit-form";



// ✅ functional component
export default function SERVICE_EDIT() {


    const { id } = useParams()

    const { data, error, isLoading, isSuccess } = useServiceDetailsQuery(id)


    // ✅ jsx
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
                            <EDIT_FROM data={data} id={id} />
                        )
                    }




                })()  /* End: Immediately invoked anonymous function */

            }

        </Box>

    )
}