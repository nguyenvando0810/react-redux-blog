import React from 'react';
import './login.scss';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      passWord: ''
    }

    this.onHandleChange = this.onHandleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()

    if (this.state.userName === 'admin' && this.state.passWord === 'admin') {
      this.props.login(this.state)
      localStorage.setItem('user', JSON.stringify(this.state))
    }
  }

  onHandleChange(e) {
    let target = e.target
    let name = target.name
    let value = (target.type === 'checkbox') ? target.checked : target.value;

    this.setState({
      [name]: value
    })
  }

  render() {
    const { userName, passWord } = this.state

    return (
      <Container>
        <Row>
          <Col md={6} sm={10} className="ml-auto mr-auto">
            <Card>
              <h4 className="card-header info-color white-text text-center py-4">
                <strong>Sign in</strong>
              </h4>
              <form className="text-center border border-light pl-5 pr-5 pb-5 pt-3" onSubmit={this.onSubmit}>
                <div className="md-form">
                  <input type="text" id="materialLoginFormEmail" name='userName' value={userName} className="form-control" onChange={this.onHandleChange} />
                  <label htmlFor="materialLoginFormEmail">UserName</label>
                </div>

                <div className="md-form">
                  <input type="password" id="materialLoginFormPassword" name='passWord' value={passWord} className="form-control" onChange={this.onHandleChange} />
                  <label htmlFor="materialLoginFormPassword">Password</label>
                </div>

                <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0 mt-5 ml-0 mr-0 mb-0 pt-2 pb-2"
                  style={{ borderRadius: "10em" }} type="submit">Sign in</button>
              </form>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}


export default Login;
