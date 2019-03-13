import * as React from 'react';
import {
  Text, Flex
} from 'rebass';
import { theme } from '../../config';

const styles =  {
  wordMarkStyles:{
    color: theme.colors.fashpink,
  }  
};

/**
 * @method fashlogueWordMark - create a wordmark for the logo
 * 
 * @param {null}
 * 
 * @return {React.ReactNode} 
 */

const fashlogueWordMark = () => {
  return (
    <Flex my={2} align="middle">
      <Text
        styles={{...styles.wordMarkStyles}} 
        color={styles.wordMarkStyles.color}
        fontSize={3}
      >
                FASHLOGUE
      </Text>
    </Flex>
        
  );
};
export default fashlogueWordMark;