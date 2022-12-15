// api hook
import { useAddReviewMutation } from "redux-toolkit/api/review-api.js";


// styles
import { STYLED_FORM } from './style.js'

// rhf
import { useForm } from 'react-hook-form';


// components
import { Button } from '@mui/material'

import { MUI_RHF_INPUT, } from 'components/reusable/for-any-project/mui-rhf-form/index'



//✅ functional component
export default function REVIEW_ADD({ user, service_id }) {



  // ✨ useForm 
  const { handleSubmit, control, reset } = useForm({ mode: 'onChange' })


  // ✨ useAddServiceMutation
  const [addService] = useAddReviewMutation()


  // ✨ the following function will run after the form is submitted
  const submittedData = async (allData) => {

    // after form submission, post the data on the database
    await addService({
      "review": `${allData.review}`,
      "reviewer_name": `${user.displayName}`,
      "reviewer_image_url": `${user.photoURL}`,
      "service_id": `${service_id}`,
      "user_id": `${user.uid}`,
    })

    // reset the form (ui)
    reset()

  }





  // ✅ jsx
  return (

    <STYLED_FORM onSubmit={handleSubmit(submittedData)} noValidate>


      {/* Service Description */}
      <MUI_RHF_INPUT control={control} label='Add a Review' propertyName='review' variant='filled' />


      <Button type="submit" variant="text">Submit</Button>


    </STYLED_FORM>



  )
}