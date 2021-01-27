class App extends React.Component {

    state = {
        score: 0,
        category: "",
        points: 0,
        clue: "",
        answer: "",
        isRevealed: false
    }

    getQuestion = () => {
        // fetch(url as a string)
        fetch("http://jservice.io/api/random")
        // .then(arrow function that relies on fetch)
        .then((pass) => {
            return pass.json();
        })
        .then((json) => {
            // json[0] is the object we want
            console.log(json[0]);
            const data = json[0];
            this.setState({
                catogory: data.category.title,
                points: data.value,
                clue: data.question,
                answer: data.answer
            })
        })
    }
    // decrease the score by the points of the value of the question
    decreaseScore = () => {
            this.setState({
                score: this.state.score - this.state.points,
            });
    }
    // increase the score by the poinst of the value of the question
    increaseScore = () => {
        this.setState({
            score: this.state.score + this.state.points,
        });
    }
    // reveals the answer by changing isReaveal to true
    resetScore = () => {
        this.setState({
            score: 0,
        });
    }
    
    // reveals the answer to true to expose the answer
    getAnswer = () => {
        this.setState({
        isReaveal: !this.state.isRevealed,
        });
    }

    render() {
        return(
        <div className="frame">
            <h1>Welcome to Jeopardy!</h1>
            <h2> Score: {this.state.score}</h2>

            <div>
                <button className="down" onClick={this.decreaseScore}>Decrease</button>
                <button classNmae="up" onClick={this.increaseScore}>Increase</button>
                <button className="reset" onClick={this.resetScore}>Reset</button>
            </div>

            <h2> Let's Play </h2>
            <button className="down" onClick={this.getQuestion}> Get Question </button>
            <h2> Category: {this.state.Catogry} </h2>
            <h3> Points: {this.state.Points} </h3>
            <h3> Clue: {this.state.clue} </h3>

            <button className="answer" onClick={this.getAnswer}>Click to Reveal Question </button>
            {this.state.isReaveal ? <h3> {this.state.answer} </h3>: ""}
            </div>)
    }
}

// check that your target div matches the selector
ReactDOM.render(<App/>, document.getElementById('root'));