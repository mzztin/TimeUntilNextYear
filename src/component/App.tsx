import React from 'react';
import './App.css';
import { getTimeLeft } from "../utils"

export default class App extends React.Component {
  render() {
    return (
      <div className="component-app">
        <div className="text">
          <h2>Time until next year</h2>
        </div>

        <div className="timer">
          <p>
            {getTimeLeft().days} days
          </p>

          <p>
            {getTimeLeft().hours} hours
          </p>
          
          <p>
            {getTimeLeft().minutes} minutes
          </p>
          
          <p>
            {getTimeLeft().seconds} seconds
          </p>

        </div>
      </div>
    )
  }
}
