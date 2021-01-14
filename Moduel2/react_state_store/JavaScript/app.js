// console.table(products)

class App extends React.Component {

    // constructor() {
    //     super()
    //     this.state = {
    //         products: products,
    //         location: ['New York', 'Cincinnati'],
    //         value: ''
    //     }
        // this.handleChange = this.handleChange.bind(this)
        // this.handleClick = this.handleClick.bind(this)
        // this.handleOnMouseOver = this.handleOnMouseOver.bind(this)
    // }

    // handleChange() {
    //     this.setState({ value: event.target.value })
    // }

    state = {
        products: products,
        name: '',
        price: 0,
        description: 'Describe this item'
    }

    handleChange = (e) => {
        console.log(this.state.value)
        this.setState({ [e.target.id]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        const newItem = {
            name: this.state.name,
            price: this.state.price,
            description: this.state.description
        }

        this.setState({
            products: [ newItem, ...this.state.products ],
            name: '',
            price: 0,
            description: 'Describe this item'
        })
    }

    render () {

        return (
            <div>
                <h1>Big Time Shopping!</h1>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        value={this.state.value} 
                        onChange={this.handleChange}
                        id="name" 
                    />
                    <br />

                    <label htmlFor="price">Price</label>
                    <input 
                        type="number" 
                        value={this.state.value} 
                        onChange={this.handleChange}
                        id="price" 
                    />
                    <br />

                    <label htmlFor="description">Description</label>
                    <input 
                        type="text" 
                        value={this.state.value} 
                        onChange={this.handleChange}
                        id="description" 
                    />
                    <br />
                    <input type="submit" />

                </form>

                <div>
                    <h2>Preview new item: </h2>
                    <h3>{this.state.name}</h3>
                    <h4>{this.state.price}</h4>
                    <h5>{this.state.description}</h5>
                </div>

                <ul>

                {this.state.products.map(product => {
                    return (
                        <li>{product.name} {product.price}</li>
                    )
                })}

                </ul>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
)


// {products.map(item => <li>{item.name}</li>)}