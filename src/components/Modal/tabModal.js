import React from 'react';
import {
    Flex,
    Box,
    Text,
} from 'rebass';
import {Tab} from '../../containers/Tab';
import  { theme } from '../../config';

const tabContentStyles = {
  color: theme.colors.darkestgray
  
}


/**
 * @method tabModal - create a tab type modal.
 * 
 * @param {Object} props -- react props.
 * 
 * @return {React.ReactNode}
 */

const tabModal = (props) => {
  return (
    <Flex flexDirection='column' styles={{...tabContentStyles}} width={600}>
      <Box>
        <Text style={{cursor: 'pointer', hover: {color: 'green'} }} onClick={e=> props.closeModal()} textAlign='right' color='blue'>close</Text>
      </Box>
      <Box>
        <Tab>
          {props.render().map((content, index)=> {
            return (
              <div key={index} label={content.label}>
                  {content.elem}
               </div>
            )
          })}
        </Tab>
      </Box>
    </Flex>
  )
}

export default tabModal