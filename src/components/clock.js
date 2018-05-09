import React, { Component } from 'react';

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>
}

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  // user defined components

  // set up timer when Clcok is rendered to DOM for first time
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  // clear timer whenever DOM produced by Clock is removed
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render () {
    return (
      <div>
        <h1>Hello, world!</h1>
        {/* <h2>It is {this.state.date.toLocaleTimeString()}.</h2> */}
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
} 