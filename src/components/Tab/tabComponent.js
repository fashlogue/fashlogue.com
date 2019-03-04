import React from 'react';
import { theme } from '../../config';
import {Box} from 'rebass'
const tabStyles = {
    display: 'inline-block',
    listStyle: 'none',
    marginBottom: '-1px',
    borderButtom: `1px solid ${theme.colors.appgreen}`,
    color: theme.colors.darkestgray
}
const tabComponent = ({activeTab, label,onClick})=> {
    

    const activeStyle = activeTab == label ? {borderBottom: `2px solid ${theme.colors.appgreen}`} : {borderBottom: 'none'}; 
    return (
        <Box mx={3} p={3} style={{...tabStyles, ...activeStyle}} onClick={e=> onClick(label)}>
            {label}
        </Box>
    )
}
export default tabComponent;