import { Box, Button, Modal, Typography } from "@mui/material";
import { MUI_RHF_INPUT } from "components/reusable/for-any-project/mui-rhf-form";

import { useForm } from "react-hook-form";
import { useUpdateReviewMutation } from "redux-toolkit/api/review-api";


import {JSX_WRAPPER, STYLED_FORM} from './style'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

export default function REVIEW_EDIT_MODAL({open, handleClose, review, id}){




      // ✨ useAddServiceMutation
      const [updateReview] = useUpdateReviewMutation()


      // ✨ useForm 
      const { handleSubmit, control } = useForm({ mode: 'onChange' })
  
  
  
      // ✨ the following function will run after the form is submitted
      const submittedData = async (allData) => {
  
          // after form submission, post the data on the database
          await updateReview({
          
          // getting id from the params
          "id": id,
  
          // the following data are coming from from submission
          "review": `${allData.review}`,

          })
  
    
      }



    // ✨ rules for form validation 
    const validationRules = {

      review: {
          required: 'Title is required',
      },

  }
  

    return(
        
        <JSX_WRAPPER>

        <STYLED_FORM onSubmit={handleSubmit(submittedData)} noValidate>

        <Modal
        open={open}
        onClose={handleClose}>

        <Box sx={style}>

          {/* Review */}
          <MUI_RHF_INPUT control={control} label='Review' propertyName='review' inputFieldInitialValue={review} validationObj={validationRules.review} variant='outlined' />


          <Button type="submit" variant="contained">Submit</Button>

         
        </Box>
      </Modal>
        

      </STYLED_FORM>


      </JSX_WRAPPER>
  
        
    )
}