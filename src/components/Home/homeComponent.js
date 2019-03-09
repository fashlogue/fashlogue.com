import React from 'react';
import { Hero } from '../Hero'
import { Panel } from '../Panel'
import { Flex } from 'rebass';
import { theme } from '../../config'

/**
 * @method homeComponent - creact the home Screen component
 * 
 * @return {React.ReactNode}
 */
const homeComponent = () => {
    return (
        <Flex flexDirection="column">
            <Hero/>
            <Panel style={{color: theme.colors.darkestgray}}/>
        </Flex>
    )
}
export default homeComponent;
