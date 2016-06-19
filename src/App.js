import React, { Component } from 'react';
import Layout from './Layout';
import Counter from './Counter';
import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Counter />
        <Header />
      </Layout>
    );
  }
}
