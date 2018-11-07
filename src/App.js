import React, { Component } from 'react'
import Header from './apps/Header'
import Content from './apps/Content'
import Footer from './apps/Footer'
import styles from './App.module.css'

class App extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
