import styled from 'styled-components';
import { TextField } from '@mui/material';


export const StyledTextField = styled(TextField)`
  flex: 1;
  
  .MuiInputLabel-root {
    color: black;
  }

  .MuiOutlinedInput-input {
    color: black;
  }

  .MuiOutlinedInput-root {
    border-color: black;

    &:hover {
      border-color: black;
    }
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: black;
  }
  
`;

export const HelperTextContainer = styled.div`
    margin-top: 8px;

    .MuiFormHelperText-root {
      color: black;
    }

`;

