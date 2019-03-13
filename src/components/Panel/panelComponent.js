import React from 'react';
import {
    Flex,
    Card,
    Text
} from 'rebass';


/**
 * @method panelComponent - create a horizontal panel component
 * 
 * @param {Object} style - styles for the panelComponent
 * 
 * @return {React.ReactNode}
 * 
 */

const panelComponent = ({style}) => {
    return (
        <Flex style={{...style}} justifyContent="center" alignItems="center">
            <Card width={1} p={3} boxShadow='0 2px 2px rgba(0, 0, 0, 0.1)'>
                <Text textAlign="center">Most popular</Text>
            </Card>
        </Flex>
    )
}
export default panelComponent;