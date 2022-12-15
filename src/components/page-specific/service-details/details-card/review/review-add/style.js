import {styled} from '@mui/material/styles'

const STYLED_FORM = styled('form')(

    ({theme}) => `
        margin:1rem;
        width: 18rem;
        display: flex;
        align-content: center;  
        gap: 1rem; 

    `
)   

export {STYLED_FORM}