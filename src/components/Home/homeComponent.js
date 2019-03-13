import React from 'react';
import { Hero } from '../Hero'
import { Flex } from 'rebass';

/**
 * @method homeComponent - creact the home Screen component
 * 
 * @return {React.ReactNode}
 */
const homeComponent = () => {
    return (
        <Flex>
            <Hero/>
        </Flex>
    )
}
export default homeComponent;
