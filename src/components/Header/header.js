import * as React from 'react';
import { FashlogueLogo } from '../Icons';
import { theme } from '../../config';
import { FashWordMark } from '../Icons';
import {
  Flex,
  Box,
  Link
} from 'rebass';

const styles = {
  headerComponentContainer: {
    height: theme.Header.height[0],
    width: '100%',
    alignItems: 'center'
  }
};

const header = (props) => {
  return (
    <Flex style={{...styles.headerComponentContainer}}>
      <Flex 
        align="middle"
        style={{width: '100%'}} 
      >
        <Flex 
          width={1/2} 
          align="middle"
        >
          <Flex mx={5}>
            <Box style={{Maxwidth: '100%'}}>
              <FashlogueLogo 
                width={40}
                height={40}
              />
            </Box>
            <Flex mx={2} align="middle">
              <FashWordMark/>
            </Flex>
          </Flex>
                    
        </Flex>
        <Flex 
          width={1/2} 
          align="middle"
          justifyContent="flex-end"
        >
          <Box mx={4}>
            <Link onClick={ e=>props.history.push('/teams')}>Teams</Link>
          </Box>
          <Box mr={4}>
            <Link onClick={ e=>props.history.push('/signup')}>Sign Up</Link>
          </Box>
          <Box mr={4}>
            <Link onClick={ e=>props.history.push('/app-auths')}>Sign In</Link>
          </Box>
        </Flex>
                
      </Flex>
    </Flex>
  );
};
export default header;