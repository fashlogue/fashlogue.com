import React from 'react';
import { Hero } from '../Hero'
import { Panel } from '../Panel'
import { Flex } from 'rebass';
import { theme } from '../../config';
import { Feed } from '../../containers/Feed';

/**
 * @method homeComponent - creact the home Screen component
 * 
 * @return {React.ReactNode}
 */
const homeComponent = () => {
    return (
        <Flex flexDirection="column">
            <Hero/>
            <Panel style={{color: theme.colors.darkestgray, borderBottom: `.5px solid ${theme.colors.gray}`}}/>
            <Feed/>
        </Flex>
    )
}
export default homeComponent;
