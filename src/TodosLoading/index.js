import { Box, Skeleton } from '@mui/material';
import React from 'react';
import './TodosLoading.css'; 
function TodosLoading(){ 
    return (
      <Box className='loading-box'>
        <Skeleton variant="circular" width={27} height={27} className='loading-item-close' />
        <Skeleton variant="rounded" width={400} height={64} />        
      </Box>
    );
}
export {TodosLoading};