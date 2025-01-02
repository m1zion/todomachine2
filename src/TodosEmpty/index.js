import { Box, Typography } from '@mui/material';
import React from 'react';
function TodosEmpty(){ 
    return (
      <Box>
        <Typography>No hay todo's por hacer</Typography>
      </Box>
    );
}
export {TodosEmpty};