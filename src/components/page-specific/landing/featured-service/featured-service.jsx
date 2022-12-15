// redux-toolkit
import { useFetchLimitedServicesQuery } from "redux-toolkit/api/service-api"


// components
import { Box, Button, Typography } from "@mui/material"

import { ERROR_TEXT, LOADING_SPINNER } from "components/reusable/for-any-project"

import SERVICE_CARD from "components/reusable/just-for-this-project/service-card/service-card"
import STYLED_LINK from "styles/styled-components/router-link/router-link"



// functional component
export default function FEATURED_SERVICES() {


    const { data, error, isLoading, isSuccess } = useFetchLimitedServicesQuery(3)


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
                          <Box sx={{textAlign:'center', display:'grid', gap:'1rem'}}>

                            <Typography variant='h4' sx={{textAlign:'center', color:'primary.main', marginTop:'1rem'}}> Featured Services </Typography>

                            <Typography variant='h5'>We will cook for you and deliver to your home.</Typography>

                            <SERVICE_CARD data={data} />

                            <STYLED_LINK to='/service/cards'>
                              <Button variant="contained"> See All</Button>
                            </STYLED_LINK>
                            

                            
                            </Box>
                        )
                    }




                })()  /* End: Immediately invoked anonymous function */

            }

        </Box>

    )
}