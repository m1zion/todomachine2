import { Box } from "@mui/material";
import React from "react";
import ReactDom from 'react-dom';

function Modal({ children }) {
    //los parametros es que queremos exportar y el segundo es a donde
    return ReactDom.createPortal(
        <Box className="Modal">
            {children}
        </Box>, 
        document.getElementById('modal')
    );
}
export {Modal}