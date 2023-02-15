import React from 'react';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';

function SuccessForm() {
  return (
    <Paper sx={{ textAlign: 'center', padding: 10, fontSize: 20 }}>
      <div>
        <CheckCircleIcon sx={{ fontSize: 50, color: 'green' }} />
      </div>
      <div>
        <Typography sx={{ fontSize: 20, color: 'green' }}>Successfully</Typography>
      </div>
    </Paper>
  );
}

export default SuccessForm;
