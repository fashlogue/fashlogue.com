import React from 'react';
import {
    Flex,
    Box,
    Text,
    Image
} from 'rebass';
import {
    Like,
    Eye,
    Chat
} from '../UI';
import {Avatar} from '../Avatar';
import {theme} from '../../config'

const FeedMetaBottom = () => {
    return (
        <Flex alignItems="center" flexDirection="column" style={{color: 'blue'}}>
            <Flex>
                <Box>
                    <Chat/>
                </Box>
                <Box mx={2}>
                    <Like/>
                </Box>
                <Box mx={2}>
                    <Eye/>
                </Box>
            </Flex>
        </Flex>
    )
}


const feedItemComponent = ({width, height}) => {
    return (
        <Flex width={1} bg={theme.colors.gray} justifyContent="center" flexDirection="column" alignItems="center" py={4}>
            <Box style={{backgroundColor:'#fff', borderRadius: '5px', boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)' }}>
                <Flex flexDirection="column">
                    <Box style={{ width: width, height: height}} p={2}>
                        <Image style={{maxWidth: '100%', maxHeight: '100%'}} src="https://cdn.steemitimages.com/DQmcTUxdtbQPnPNW93VnzPM8oGUWfnKxQoHHbXMoEFuHeHr/IMG_20180107_095559_095.jpg"/>
                    </Box>
                    <Flex>
                        <FeedMetaBottom/>
                    </Flex>
                </Flex>
            </Box>
            <Box style={{color: '#000'}} m={3}>
                hello
            </Box>        
        </Flex>
    )
}
export default feedItemComponent;