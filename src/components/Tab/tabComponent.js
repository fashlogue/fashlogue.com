import React from 'react';
import { theme } from '../../config';
import {Box} from 'rebass'

const tabStyles = {
    display: 'inline-block',
    listStyle: 'none',
    marginBottom: '-1px',
    borderButtom: `1px solid ${theme.colors.appgreen}`,
    color: theme.colors.darkestgray,
    cursor: 'pointer'
}

/**
 * @method tabComponent - create a tab component
 * 
 * @param {React.ReactNode} - activeTab - the active tab that was clicked
 * 
 * @param {React.ReactNode} - label - the label for the active tab.
 * 
 * @param {function} - onClick - this lidtens for the tab that was clicked
 * 
 * @return {React.ReactNode} 
 */
const tabComponent = ({activeTab, label, onClick})=> {
    
    const activeStyle = activeTab === label ? {borderBottom: `2px solid ${theme.colors.instagramBlue}`, color: theme.colors.fashpink} : {borderBottom: 'none'}; 
    return (
        <Box mx='auto' p={3} style={{...tabStyles, ...activeStyle}} onClick={e=> onClick(label)}>
            {label}
        </Box>
    )
}

export default tabComponent;