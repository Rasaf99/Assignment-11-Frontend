// mui
import { useTheme } from '@mui/material'

// style
import { STYLED_LOGO } from './style'



// component
import STYLED_LINK from 'styles/styled-components/router-link/router-link'
import SVG_JSX_LOGO_BRAND from './svg-jsx-logo-brand/svg-jsx-logo-brand'





// ✅ functional component
export default function LOGO(props) {

    const theme = useTheme()

  

    return (

        <>

            {/* Logo & Title */}

            <STYLED_LINK to='/'>

                <STYLED_LOGO>

                    {theme.palette.mode === 'dark' ?

                        <SVG_JSX_LOGO_BRAND firstColor={props.logo_dark_mode_color ? props.logo_dark_mode_color : theme.palette.primary.static_variant.light_1  } />
                        :
                        <SVG_JSX_LOGO_BRAND firstColor={props.logo_dark_mode_color ? props.logo_dark_mode_color : theme.palette.primary.static_variant.dark_1  } />
                    }

                    <h4 className='_font_lobster'>HomeMade</h4>

                </STYLED_LOGO>

            </STYLED_LINK>

        </>

    )
}





