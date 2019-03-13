import styled from 'styled-components'
import {MdChat} from 'react-icons/md'

const chatComponent = styled(MdChat)`
  color: {props=> props.color};
`
export default chatComponent;
