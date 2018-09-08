import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import api from '../../services/api'
import { authenticateUser } from '../../services/auth'

import { Container, Form } from './styles'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      password: '',
      error: null
    }
  }

  _handleSubmit = async evt => {
    evt.preventDefault()
    
    const { email, password } = this.state

    if (!email) return window.alert('Por favor, informe um e-mail válido')
    if (!password) return window.alert('Por favor, informe uma senha')

    try {
      const response = await api.post('/auth/login', { email, password })
      authenticateUser(response.token)
      this.props.history.push('/')
    } catch (error) {
      console.log(error.message)
      this.setState({ error: 'Ops! Algo deu errado. Tente novamente.'})
    }
  }

  render() {
    const { error } = this.state
    return (
      <Container>
        <Form onSubmit={this._handleSubmit}>
          { error && <p>{error}</p> }
          <input
            type='email'
            placeholder='E-mail'
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type='password'
            placeholder='Password'
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type='submit'>Login</button>
          <hr />
          <Link to='/signup'>Don't have an account? Get started here.</Link>
        </Form>
      </Container>
    )
  }

}

export default withRouter(Login)