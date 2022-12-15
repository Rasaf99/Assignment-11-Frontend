import { SvgIcon } from '@mui/material';
import { styled } from '@mui/material/styles';

import media_queries from 'utils/media-queries/media-queries';

const STYLED_MUI_SVG_ICON = styled(SvgIcon)(
  ({ theme }) => `

        
     ${media_queries.name_xs_sm_md_lg_xl_unit('height', 1.9, 1.9, 1.9, 1.9, 1.9, 'rem')}

     ${media_queries.name_xs_sm_md_lg_xl_unit('width', 1.9, 1.9, 1.9, 1.9, 1.9, 'rem')}
    `
)


export { STYLED_MUI_SVG_ICON }