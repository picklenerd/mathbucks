import React from 'react';

const ENTER_ANSWER = 'Please enter a solution and press Submit';
const CORRECT = 'Correct!';
const INCORRECT = 'Incorrect :(';

export default class SimpleProblem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      solutionStatus: ENTER_ANSWER,
    };

    this.handleChanged = this.handleChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChanged(event) {
    this.setState({
      input: event.target.value,
    });
  }

  async handleSubmit(event) {
    this.setState({ solutionStatus: ''});
    const isCorrect = await this.props.submitSolution(this.state.input)
    this.setState({ solutionStatus: isCorrect ? CORRECT : INCORRECT });
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
                <input type="text" value={this.state.input} onChange={this.handleChanged}/>
                <button onClick={this.handleSubmit}>Submit</button>
                <p>{this.state.solutionStatus}</p>
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
  