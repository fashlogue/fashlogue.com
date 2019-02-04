import { Home } from '../../components/Home';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    homeScreen: state.homeScreen
  };
};
const mapDispatchToProps = dispatch => {
  return {
      
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);