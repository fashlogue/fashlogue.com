import React from 'react';
import {Box, Image} from 'rebass';

const avatarComponent = (props) => {
    return (
        <Box  bg='blue' style={{display: 'inline-block'}} width={props.size} height={props.size}>
            <Image borderRadius={50} style={{maxWidth: '100%'}} src={props.image}/>
        </Box>
    )
}
export default avatarComponent;