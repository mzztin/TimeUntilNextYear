import React from 'react';
import './App.css';
import { createFormat } from "../utils"


export default class App extends React.Component {
  render() {
    return (
      <div className="comonent-app">
        New Year in: {createFormat()}
      </div>
    )
  }
}