import { FormControlLabel, Checkbox } from '@material-ui/core';
import React from 'react';

const renderCheckbox = ({ input, label }) => (
  <div>
    <FormControlLabel
      control={<Checkbox checked={!!input.value} onChange={input.onChange} />}
      label={label}
    />
  </div>
);

export default renderCheckbox;
