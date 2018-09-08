import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

import Layout from '../../components/Layout'
import { Container, Grid, Card } from './styles'

class Home extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      data: [
        { key: 'data-01', name: 'Foo' },
        { key: 'data-02', name: 'Baz' },
        { key: 'data-03', name: 'Bar' },
        { key: 'data-04', name: 'Fiz' },
        { key: 'data-05', name: 'Buz' },
        { key: 'data-06', name: 'Baz' },
      ]
    }
  }
  
  componentDidMount() {}
  
  render() {
    const { data } = this.state
    return (
      <Layout>
        <Container>
          <Grid>
            {
              data.map(item => (
                <Card key={item.key}>{item.name}</Card>
              ))
            }
          </Grid>
        </Container>
      </Layout>
    )
  }
}

export default Home