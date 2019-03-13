import React, {Component} from 'react';
import {
    Flex,
    Box
} from 'rebass';
import {FeedItem} from '../../components/Feed';




class feedContainer extends Component {

    constructor (props) {
        super(props)
    }

    render() {
        return (
            <Flex flexDirection="column">
                <FeedItem width={'300px'} height={'300px'}/>
                <FeedItem width={'300px'} height={'300px'}/>
                <FeedItem width={'300px'} height={'300px'}/>
                <FeedItem width={'300px'} height={'300px'}/>
                <FeedItem width={'300px'} height={'300px'}/>
            </Flex>
            
             
        )
    }
} 
export default feedContainer;