import  Auth  from '../../components/Auth';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    authScreen: state.authScreen
  };
};
const mapDispatchToProps = dispatch => {
    return {
        
    }
}
export default Auth;