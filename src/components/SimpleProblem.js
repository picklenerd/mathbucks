import React from 'react';

export default class SimpleProblem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0,
    };

    this.handleChanged = this.handleChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChanged(event) {
    this.setState({
      input: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log(this.state.input);
  }
  
  render() {
    let problem;
    if (this.props.problem) {
        problem = (
        <div className="problem">
            <div className="problem-statement">
            {this.props.problem.problemStatement}
            </div>
            <div className="answer">
            <input type="number" value={this.state.input} onChange={this.handleChanged}/>
            <button onClick={this.handleSubmit}>Submit</button>
            </div>
        </div>)
    } else {
        problem = <div>No problem</div>;
    }

    return (
        <div>
            {problem}
        </div>
    );
  }
}
  