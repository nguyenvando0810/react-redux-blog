import React from 'react';
import { connect } from 'react-redux'
import { login } from './../actions/index'
import  Login from './../components/login/login'

class LoginContainer extends React.Component {
  render() {
    return (
      <Login login={this.props.login}/>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("TCL: mapStateToProps -> state", state.authLogin)
  return {
    authLogin: state.authLogin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => {
      dispatch(login(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
