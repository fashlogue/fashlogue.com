import React from 'react';
import {
    Flex,
    Box,
    Image,
    Text,
    Button
} from 'rebass';
import { theme } from '../../config';

/**
 * @method HeroComponent - create a hero component
 * 
 * @return {React.ReactNode}
 */
const HeroComponent = () => {
    return (
        <Flex bg={theme.colors.seablue} width={1} style={{padding: '4vh 4rem', userSelect: 'none'}}>
            <Flex style={{padding: '3vh 3rem'}} >
                <Box style={{width: '55%'}}>
                    <Text fontWeight={700} fontSize={6} color={theme.colors.darkestgray}>Discover the best catalogue for fashion & creativity</Text>
                    <Text mt={2} fontSize={4}>Fashlogue is the best platform to find and curate digital catalogues & designers.</Text>
                    <Button fontSize={1} mt={2} bg={theme.colors.fashpink}>Sign Up</Button>
                    <Text mt={6}>Art by <a href="dribbble.com/guillaumekurkdjian">guillaume kurkdjian</a> in Paris, France</Text>
                </Box>
                <Box style={{width: '45%'}}>
                    <Image maxWidth={1} src='https://cdn.dribbble.com/users/330915/screenshots/5818279/elephant_zeppelin_dribbble.gif'/>
                </Box>
            </Flex> 
        </Flex>
    )
}
export default HeroComponent;