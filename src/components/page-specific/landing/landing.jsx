// mui components
import { Box, Button } from '@mui/material'

// styled components
import { STYLED_CALL_TO_ACTION_SECTION, STYLED_SVG_LANDING_PAGE_ILLUSTRATION} from './style.js'


// hook
import {useTheme} from '@mui/material';


// mui color
import { blueGrey, pink, teal } from '@mui/material/colors'
import REVIEW_DISPLAY from '../service-details/details-card/review/review-display/review-display.jsx';
import { useContext } from 'react';
import { AuthContext } from 'contexts/auth-context.js';
import FEATURED_SERVICES from './featured-service/featured-service.jsx';
import STYLED_LINK from 'styles/styled-components/router-link/router-link.js';




// ✅ functional l component
export default function LANDING() {

  const {user} = useContext(AuthContext)

  const theme = useTheme()


  return (

    <>


      <STYLED_CALL_TO_ACTION_SECTION>


        <div className='left'>

          <h2 className='_text_margin _font_yatra'>Home made food within your reach</h2>

          <h5 className='_text_margin_2xl _font_monospace'>Fed up with restaurant food? Want to eat some delicious home made food? Your wait is over. We will cook for you and deliver the food to your home.  </h5>



          {!user?.email &&

            <STYLED_LINK to='/signup'>
              <Button variant='contained'>Register Now</Button>
            </STYLED_LINK>
          
          }


        </div>


        <div className='right'>


          {theme.palette.mode === 'dark' ?

            <STYLED_SVG_LANDING_PAGE_ILLUSTRATION firstColor={teal[100]} secondColor={blueGrey[700]} thirdColor={pink[400]} fourthColor={blueGrey[100]} fifthColor={blueGrey[500]} />
            :

            <STYLED_SVG_LANDING_PAGE_ILLUSTRATION firstColor={teal[300]} secondColor={blueGrey[900]} thirdColor={pink[400]} fourthColor={blueGrey[300]} fifthColor={blueGrey[800]}/>
          }


        </div>



      </STYLED_CALL_TO_ACTION_SECTION>



      <Box sx={{marginTop:'1rem', backgroundColor:'background.variation', padding:'1rem'}}>
      
         <FEATURED_SERVICES/>

      </Box>


    </>

  )
}