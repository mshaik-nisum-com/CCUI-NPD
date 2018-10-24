import { connect } from 'react-redux'
import Login from '../components/login/Login';

const mapStateToProps = (state) => {
    return {
        validationMsg: state.authenticateUser.errMsg
        }
  }

export default connect(mapStateToProps)(Login)