import { Avatar, Box, Typography } from "@mui/material"


// ✅ functional component 
export default function REVIEW_CARD({data}) {

    return (

        <Box sx={{display:'flex', flexDirection:'column', gap:'1rem'}}>

            {data.map((item)=>{

                return(

                    <Box sx={{backgroundColor:'background.variation', padding:'1rem'}}>

                        <Box sx={{display:'flex', gap:'1rem', alignItems:'center', marginBottom:'1rem'}}>

                           <Avatar src={item.reviewer_image_url} alt={item.reviewer_name}/>

                            <Typography variant='h4'>{item.reviewer_name}</Typography>

                        </Box>

                        <Typography variant='p'>{item.review}</Typography>
                        
                    </Box>

                )


            })}

        </Box>
    )
}