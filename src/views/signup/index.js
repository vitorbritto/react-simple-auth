import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import api from '../../services/api'
import { authenticateUser } from '../../services/auth'

import { Container, Form } from './styles'

class Signup extends Component {
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
    
    const { username, email, password } = this.state

    if (!username) return window.alert('Por favor, informe um nome para o seu usuário')
    if (!email) return window.alert('Por favor, informe um e-mail válido')
    if (!password) return window.alert('Por favor, informe uma senha')

    try {
      const response = await api.post('/auth/signup', { username, email, password })
      authenticateUser(response.data.token)
      this.props.history.push('/')
    } catch (error) {
      console.log(error)
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
            type='text'
            placeholder='Username'
            onChange={ evt => this.setState({ username: evt.target.value })}
          />
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
          <button type='submit'>Signup</button>
          <hr />
          <Link to='/'>Already have an account? Sign In.</Link>
        </Form>
      </Container>
    )
  }

}

export default withRouter(Signup)