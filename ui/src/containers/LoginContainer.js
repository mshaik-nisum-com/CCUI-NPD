import { connect } from 'react-redux'
import Login from '../components/login/Login';

const mapStateToProps = (state) => {
    return {
        //isUserAuthenticated: state.authenticateUser.isUserAuthenticated,
        validationMsg: state.authenticateUser.errMsg,
        //authenticationSuccess: state.authenticateUser.authenticationSuccess
    }
  }

export default connect(mapStateToProps)(Login)