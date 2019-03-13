import styled from 'styled-components'
import {MdRemoveRedEye} from 'react-icons/md'

const eye = styled(MdRemoveRedEye)`
  color: {props=> props.color};
`
export default eye;
