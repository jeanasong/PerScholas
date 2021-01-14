console.table(products)

class App extends React.Components {
    constructor() {
        super() 
            this.state = {
                products: products
            }
        }

         state = {
            products: products,
            value: ''
         }

         handleChange() {
             console.log(this.state.value)
             this.setState(
                {value: event.target.value},
             () => console.log('callback')
             )
         }

         handleChange = () => {
            console.log(event.target.value)
            this.state.value = event.target.value
            console.log(this)
         }

        render() {

            console.log(this)

            return(
                <div>
                    <h1>Big Time Shopping!</h1>
                    <form>
                        <label html="name"></label>
                    <input type="text" 
                    value={this.state.value} 
                    onChange={this.handleChange} id="name"/>
                    <br />
                    

                    </form>
                    <ul>
                    {this.state.products.map(item => <li>{item.name}</li>)}
                    </ul>
                </div>
            )
        }
    }

ReactDOM.render(
    <App />,
    document.querySelector('.container')
)