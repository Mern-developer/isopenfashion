import { Button } from '@mui/material'
import React from 'react'

const CustomButton = ({sx,disableFocusRipple ,disableRipple,elevation,onClick, startIcon, endIcon, variant, label, color, onChange }) => {
  return (
    <>
    <Button 
    disableFocusRipple={disableFocusRipple}
    disableRipple={disableRipple}
    elevation={elevation}
    onChange={onChange}
    sx={sx}
    variant={variant}
    disableRipple={true}
    color={color}
    label={label}
    endIcon={endIcon}
    startIcon={startIcon}
    onClick={onClick}
    >
    {label}
    </Button>
    </>
  )
}

export default CustomButton