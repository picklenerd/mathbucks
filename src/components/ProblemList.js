import React from 'react';
import SimpleProblem from './SimpleProblem';

export default class ProblemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            problems: [],
        };
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:3001/api/problems');
        const json = await response.json();
        this.setState({problems: json});
    }

    render() {
        const problems = this.state.problems.map(problem => <li><SimpleProblem problem={problem} /></li>);

        return (
            <ul>{problems}</ul>
        );
    }
}
