import React, { FC, ChangeEvent } from 'react';
import { Autocomplete, Checkbox, ListItemText, TextField, FormHelperText } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { FilterOption } from '../../types/interfaceFilterOptions';
import { StyledTextField, HelperTextContainer } from './FilterListRentals.styles';

interface FilterProps {
  label: string;
  value: FilterOption[];
  onChange: (event: ChangeEvent<{}>, value: FilterOption[]) => void;
  options: FilterOption[];
}

const FilterComponent: FC<FilterProps> = ({ label, value, onChange, options }) => {
  const filterCount = value.length;

  return (
    <div>
      <Autocomplete
        multiple
        value={value}
        onChange={onChange}
        options={options}
        disableCloseOnSelect
        getOptionLabel={(option) => option.label}
        isOptionEqualToValue={(option, value) => option.value === value?.value}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
              checkedIcon={<CheckBoxIcon fontSize="small" />}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            <ListItemText primary={option.label} />
          </li>
        )}
        renderInput={(params) => (
          <StyledTextField
            {...params}
            label={label}
            variant="outlined"
            size="small"
            fullWidth
          />
        )}
        renderTags={() => null}
      />
      {filterCount > 0 && (
        <HelperTextContainer>
          <FormHelperText>{`${filterCount} filtro(s) aplicado(s)`}</FormHelperText>
        </HelperTextContainer>
      )}
    </div>
  );
};

export default FilterComponent;
