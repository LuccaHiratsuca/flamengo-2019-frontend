import styled from 'styled-components';
import { TextField } from '@mui/material';


export const StyledTextField = styled(TextField)`
  flex: 1;
  
  .MuiInputLabel-root {
    color: white;
  }

  .MuiOutlinedInput-input {
    color: white;
  }

  .MuiOutlinedInput-root {
    border-color: white;

    &:hover {
      border-color: white;
    }
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }
  
`;

export const HelperTextContainer = styled.div`
    margin-top: 8px;

    .MuiFormHelperText-root {
      color: white;
    }

`;

