import { Box, Button } from "@mui/material"
import { useState } from "react";
import { useDeleteReviewMutation } from "redux-toolkit/api/review-api"
import REVIEW_EDIT_MODAL from "./review-edit-modal/review-edit-modal";


// ✅ functional component
export default function MY_REVIEW_CARD({data}) {

// api hook
  const [deleteReview] = useDeleteReviewMutation()

  // useState
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


    return(

     <>

           
        {data.map((item)=>{

            return(

                <Box sx={{backgroundColor:'background.variation', padding:'1rem', margin:'1rem', display:'flex', flexDirection:'column', alignItems:'center', gap:'1rem'}}>

                    <p>{item.review}</p>

                    <Button onClick={() => deleteReview(item._id)}>Delete</Button>

                    {/* having some problem here 
                     
                    <Button onClick={handleOpen}>Edit</Button>

                    <REVIEW_EDIT_MODAL open={open} handleClose={handleClose} review={item.review} id={item.id} />

                  */}
                
                </Box>


            )
            
        
         })}
        
        
      </>

    )
}