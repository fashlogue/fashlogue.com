import React from 'react';
import {
    Flex,
    Box
} from 'rebass';
import { Label, Input, Button } from '../../components/UI';
import { theme } from '../../config';
import { Text } from 'rebass';
import { Checkbox } from '../UI/Checkbox/';

class authForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = { checked: false }
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    }

    handleCheckboxChange (event) {
        this.setState({ checked: event.target.checked });
    }

    render () {
        return (
            <Box width={1}>
                <Flex  justifyContent="center"  flexDirection="column">
                    <form method="get">
                    <Flex flexDirection="column" width={1} className="inputArea">
                    <Label mb={2} color={theme.colors.darkergray}>EMAIL OR USERNAME</Label>
                        <Input type="text" required width={1}  borderColor="red"  bg="#fff" bg="blue"id="email"/>
                    </Flex>
                    <Flex mt={3} width={1}  flexDirection="column"className="inputArea">
                        <Label  mb={2} color={theme.colors.darkergray}>PASSWORD</Label>
                        <Input  required borderColor="grey"  type='password' id="password"/>
                    </Flex>
                    <Flex width={1} flexDirection="column" mt={3}>
                    <Flex>
                        <label>
                        <Checkbox
                            checked={this.state.checked}
                            onChange={this.handleCheckboxChange}
                        />
                        <span style={{color: theme.colors.darkergray, marginLeft: '10px'}}>Remember me</span>
                        </label>
                    </Flex>   
                    </Flex>
                    <Flex width={1} flexDirection="column" mt={3}>
                        <Button fullWidth disabled py={2} ><Text >Sign in</Text></Button>
                    </Flex>
                    <Flex width={1} flexDirection="column" mt={3}>
                        <Text mx='auto' fontWeight='bolder' color={theme.colors.darkestgray}>Or</Text>
                    </Flex>
                    <Flex mb={4} width={1} flexDirection="column" mt={3}>
                        <Button fullWidth py={2} style={{ backgroundColor: '#014'}} ><Text >Sign up for Fashlogue</Text></Button>
                    </Flex>
                    </form>
                </Flex>
            </Box>
        )
    }
   
}
export default authForm;
