import React from 'react';
import SimpleProblem from './SimpleProblem';

export default class ProblemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            problems: [],
        };

        this.submitSolution = this.submitSolution.bind(this);
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:3001/api/problems');
        const json = await response.json();
        this.setState({problems: json});
    }

    async submitSolution(id, solution) {
        const response = await fetch(`http://localhost:3001/api/solution/${id}/${solution}`);
        const json = await response.json();
        return json.isCorrect;
    }

    render() {
        const problems = this.state.problems.map(problem => (
            <li key={problem._id} >
                <SimpleProblem problem={problem} submitSolution={(solution) => this.submitSolution(problem._id, solution)}/>
            </li>
        ));

        return (
            <ul>{problems}</ul>
        );
    }
}
