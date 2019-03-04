import React from 'react';
import {
    Flex,
    Box,
    Button,
    Text
} from 'rebass';
import {Tab} from '../../containers/Tab';
import  { theme } from '../../config';
import InputTrigger from 'react-input-trigger';
import { Input } from '../UI/';


const tabContentStyles = {
  color: theme.color.darkestgray
}

const tabModal = ({ closeModal, confirmAction, title, message }) => {

  return (
    <Flex styles={{...tabContentStyles}} width={600}>
      <Tab>
        <div label="QUESTION">
          <Flex color="blue">
          <InputTrigger
            trigger={{
              keyCode: 50,
              shiftKey: true,
            }}
            onStart={(metaData) => { console.log(metaData); }}
          >
            <Input/>
          </InputTrigger>
      </Flex>
        </div>
        <div  label="INSIGHT">
          <Flex color="blue" >item 2</Flex>
        </div>
      </Tab>
    </Flex>
  )
}

export default tabModal