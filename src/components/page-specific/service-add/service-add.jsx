// router
import { useNavigate } from "react-router-dom";

// api hook
import { useAddServiceMutation } from 'redux-toolkit/api/service-api.js';

// styles
import {JSX_WRAPPER, STYLED_FORM} from './style.js'

// rhf
import { useForm } from 'react-hook-form';


// components
import { Button, Typography } from '@mui/material'

import { MUI_RHF_INPUT,} from 'components/reusable/for-any-project/mui-rhf-form/index'




//✅ functional component
export default function SERVICE_ADD() {

  // router navigate
  const navigate = useNavigate()


  // ✨ useForm 
  const { handleSubmit, control, reset } = useForm({ mode: 'onChange' })


  // ✨ useAddServiceMutation
  const [addService] = useAddServiceMutation()


  // ✨ the following function will run after the form is submitted
  const submittedData = async (allData) => {

      // after form submission, post the data on the database
      await addService({
        "image": `${allData.image_link}`,
        "title":  `${allData.title}`,
        "description":  `${allData.description}`,
        "price": `${allData.price}`
      })

      // reset the form (ui)
      reset()

      navigate('/service/cards')
  }



    
  // ✨ rules for form validation 
  const validationRules = {

    title: {
      required: 'Title is required',
    },

    description: {
      required: 'Description is required',
    },

    image_link: {
      required: 'Image Link is required',
      pattern:{
        value: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        message: 'Provide a valid URL'
      }
    },

    price: {
      required: 'Price is required',
      pattern:{
        value: /^[0-9]+$/,
        message: 'You must provide a number'
      }
    }
  }





    // ✅ jsx
    return (

      <JSX_WRAPPER>

        <STYLED_FORM onSubmit={handleSubmit(submittedData)} noValidate>

            <Typography variant='h4' sx={{textAlign:'center', color:'primary.main'}}> Add a new service </Typography>


            {/* Service Title */}
            <MUI_RHF_INPUT control={control} label='Title' propertyName='title' validationObj={validationRules.title} variant='outlined' />


            {/* Service Description */}
            <MUI_RHF_INPUT control={control} label='Description' propertyName='description' multiline={true}  validationObj={validationRules.description} variant='outlined' />


            {/* Image Link */}
            <MUI_RHF_INPUT control={control} label='Image Link' propertyName='image_link' validationObj={validationRules.image_link} variant='outlined' />


            {/* Price */}
            <MUI_RHF_INPUT control={control} label='Price' propertyName='price' validationObj={validationRules.price} variant='outlined' />


            
            <Button type="submit" variant="contained">Submit</Button>

            
            
        </STYLED_FORM>
        
      </JSX_WRAPPER>
        
    
    )
}