import styled from 'styled-components'
import {MdFavoriteBorder} from 'react-icons/md'

const likeComponent = styled(MdFavoriteBorder)`
  color: {props=> props.color};
`
export default likeComponent;
