import React from 'react';
import {
    Flex,
    Box,
    Text
} from 'rebass';
import { theme } from '../../config';
import { FashlogueLogo } from '../Icons';
import { Button } from '../UI/';
import { AuthForm } from './'


const styles = {
    componentContainer: {
      height: '95%',
      width: '600px',
      borderRadius: theme.radiusSizes[1],
    },
};

const auth = () => {
    return (
        <Box width={0.9} style={{...styles.componentContainer}} >
            <Flex flexDirection='column' mx='auto'>
                <Flex  mt={3} justifyContent='center'>
                    <FashlogueLogo 
                        width={40}
                        height={40}
                    />
                </Flex>
                <Flex mx='auto'  width={0.7} mt={3} >
                    <Button style={{backgroundColor: theme.colors.instagramBlue}} fullWidth >Sign in with Instagram.</Button>
                </Flex>
                <Flex mx='auto' width={0.7} mt={3} >
                    <Button style={{backgroundColor: theme.colors.steemConnectBlue}} fullWidth >Sign in with steemconnect.</Button>
                </Flex>
                <Flex   width={0.7} mx='auto'>
                    <AuthForm/>
                </Flex>
            </Flex>
        </Box>
    )
    
}

export default auth;