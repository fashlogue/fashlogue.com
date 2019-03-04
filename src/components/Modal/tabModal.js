import React from 'react';
import {
    Flex,
    Box,
    Text,
} from 'rebass';
import {Tab} from '../../containers/Tab';
import  { theme } from '../../config';
import { AuthForm } from '../Auth'


const tabContentStyles = {
  color: theme.colors.darkestgray
  
}

const tabModal = ({ closeModal, confirmAction, title, message }) => {

  return (
    <Flex flexDirection='column' styles={{...tabContentStyles}} width={600}>
      <Box>
        <Text  onClick={e=> closeModal()} textAlign='right' color='blue'>close</Text>
      </Box>
      <Box>
        <Tab>
          <div label="Sign In">
              <AuthForm/>
          </div>
          <div  label="Sign Up">
              <AuthForm/>
          </div>
        </Tab>
      </Box>
    </Flex>
  )
}

export default tabModal