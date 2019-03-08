import * as React from 'react';
import { FashlogueLogo } from '../Icons';
import { theme } from '../../config';
import { FashWordMark } from '../Icons';
import { SignInForm } from '../Auth';
import { OAuth } from '../Auth';
import {
  Flex,
  Box,
  Link
} from 'rebass';

const styles = {
  headerComponentContainer: {
    height: theme.Header.height[0],
    width: '100%',
    alignItems: 'center',
    backgroundColor: theme.colors.darkestgray
  }
};

/**
 * @method header - create a header component
 * 
 * @param {Object} props - react props
 * 
 * @return {React.ReactNode}
 */

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
          alignItems="center"
          justifyContent="flex-end"
        >
          <Box mx={4}>
            <Link onClick={ e=>props.history.push('/teams')}>Teams</Link>
          </Box>
          <Box mr={4}>
            <Link onClick={ ()=> props.showModal({
                                                open: true,
                                                title: 'Tab Modal',
                                                message: 'tab Modal',
                                                confirmAction: props.hideModal,
                                                closeModal: props.hideModal,
                                                render: ()=>{return([{label: 'Sign in', elem: <SignInForm/>}, {label: 'Sign up', elem: <SignInForm/>}, {label: 'OAuth 2', elem: <OAuth/>} ])}
                                                }, 'tab')}>Sign in
            </Link>
          </Box>
        </Flex>
                
      </Flex>
    </Flex>
  );
};
export default header;