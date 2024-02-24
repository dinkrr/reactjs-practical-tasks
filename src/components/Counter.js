import React from 'react';

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.counterNumber
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState((prevState) => ({
      value: prevState.value + 1
    }));
  }

  decrement() {
    this.setState((prevState) => ({
      value: prevState.value - 1
    }));
  }

  render() {
    return React.createElement('div', null, 
      React.createElement('button', { onClick: this.decrement }, '-'),
      React.createElement('span', null, this.state.value),
      React.createElement('button', { onClick: this.increment }, '+')
    );
  }
}

