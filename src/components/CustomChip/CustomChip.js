import { Chip } from '@mui/material'
import React from 'react'


const CustomChip=({component,sx,deleteIcon, label, onClick, variant, onDelete,  avatar, size}) => {
  return (
    <>
    <Chip 
    sx={sx}
    style={{fontFamily: 'Tenor Sans',
    fontWeight: '400',}}
         label={label}
    
    onClick={onClick}
    variant={variant}
    onDelete={onDelete}
    deleteIcon={deleteIcon}
    avatar={avatar}
    
    size={size}
    clickable={true}
    component={component}
    
    ></Chip>
    
    </>
  )
}

export default CustomChip