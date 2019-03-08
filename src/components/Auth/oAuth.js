import React from 'react';
import {
    Flex,
    Box
} from 'rebass';
import { theme } from '../../config';
import { FashlogueLogo } from '../Icons';
import { Button } from '../UI';


const styles = {
    componentContainer: {
      borderRadius: theme.radiusSizes[1],
    },
};

const oAuth = () => {
    return (
        <Box width={1} style={{...styles.componentContainer}} >
            <Flex flexDirection='column' mx='auto' justifyContent="center">
                <Flex  mt={3} justifyContent='center'>
                    <FashlogueLogo 
                        width={40}
                        height={40}
                    />
                </Flex>
                <Flex mx='auto'  width={1} mt={3} >
                    <Button 
                        style={{backgroundColor: theme.colors.instagramBlue}} 
                        fullWidth >Sign in with Instagram.
                    </Button>
                </Flex>
                <Flex mx='auto' width={1} mt={3} >
                    <Button 
                        style={{backgroundColor: theme.colors.steemConnectBlue}} 
                        fullWidth >Sign in with steemconnect.
                    </Button>
                </Flex>
            </Flex>
        </Box>
    )
    
}

export default oAuth;