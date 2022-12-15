
import { useContext } from "react";


// context
import { AuthContext } from "contexts/auth-context";

// styles
import {STYLED_CARD_WRAPPER, STYLED_A_CARD} from './style'

// router
import { useNavigate } from "react-router-dom";

// api hook
import { useDeleteServiceMutation } from "redux-toolkit/api/service-api";

// components
import { Box, Button, Divider, Typography } from "@mui/material";

import REVIEW_ADD from "./review/review-add/review-add";
import REVIEW_DISPLAY from "./review/review-display/review-display";
import STYLED_LINK from "styles/styled-components/router-link/router-link";



// ✅ functional component
export default function DETAILS_CARD({ data, id_from_params }) {

  // router 
  const navigate = useNavigate()


  //  api hook
  const [deleteService] = useDeleteServiceMutation()


  // handleDeleteService

  const handleDeleteService = () => {

    deleteService(id_from_params)

    navigate('/service/cards')
  }



  const { user } = useContext(AuthContext)


  // ✅ jsx
  return (

    <Box sx={{display:'flex', flexDirection:'column' ,alignItems:'center'}}>

    <STYLED_CARD_WRAPPER>
    
           <STYLED_A_CARD >

                  {/* card_image_wrapper */}
                  <div className='card_image_wrapper'>

                  <img className='card_image' src={data.image} alt={data.title}/>

                  </div>

                  {/* card_all_content_except_image */}
                  <div className='card_all_content_except_image'>
                  
                  <h4>{data.title}</h4>

                  <p>{data.description}</p>
            
                  <p>Price: {data.price}tk</p>
            

                {user?.email  &&
                  <>
                  <Button onClick={() => handleDeleteService()}>Delete</Button>
            
                  <Button onClick={() => navigate(`/service/edit/${data._id}`)}>Edit</Button>
                  </>
                }
                  
                  </div>

              
        </STYLED_A_CARD>

    </STYLED_CARD_WRAPPER>


    <Box sx={{backgroundColor:'background.variation', padding:'1rem'}}>
      {user?.email ?

        <REVIEW_ADD service_id={data._id} user={user} />

        :

        <Box sx={{textAlign:'center', display:'grid', gap:'1rem' ,color:'error.main'}}>

          <Typography variant='h4'>You are not logged in, you must log in to add a review.</Typography>

          <Button onClick={() => navigate('/login')} vc>Login</Button>


        </Box>
      }
    </Box>


      <Divider/>

      
    <Typography variant='h4' color='primary' sx={{textAlign:'center', margin:'1rem'}}>All Reviews</Typography>

    <REVIEW_DISPLAY service_id={data._id} user={user} />




    </Box>
  )
}