console.table(receipts[0]);//how we reach to object properties
class Receipt extends React.Component{
 paid(){
   console.log("delete");
   //{this.state.receipts.map(receipt => receipt.paid ? '' : <Receipt receipt={receipt}/>)} 
 }

    render(){
        return(
            <div className="ReceiptsItem" onClick={this.paid}>
              

                <h2 >{this.props.receipt.person}</h2>
                
                <h5><span>Main:</span> {this.props.receipt.order.main}</h5>
                <h5><span>Protein: </span> {this.props.receipt.order.protein}</h5>
                <h5><span>Rice:</span> {this.props.receipt.order.rice}</h5>
                <h5><span>Souce:</span> {this.props.receipt.order.sauce}</h5>
                <h5><span>Drink:</span> {this.props.receipt.order.drink}</h5>
                <h5><span>Cost:</span> {this.props.receipt.order.cost}</h5>
                <button>Paid</button>
            

            </div>
        )
    }
}


class App extends React.Component {
    state = {
       receipts : receipts

    }

render(){
 return(
     <div > 
       <h1 className="truck-name">Korilla - Truck-1 POS</h1>
       <div className="container" >

       {this.state.receipts.map(receipt => receipt.paid ? '' : <Receipt receipt={receipt}/>)} 
       {/* {this.state.receipt2.paid ? '' : <Receipt receipt={this.state.receipt2}/>}
       {this.state.receipt3.paid ? '':  <Receipt receipt={this.state.receipt3}/>} */}
        
       </div>
     </div>
 )
}
}
        ReactDOM.render( <App/> , 
        document.querySelector('.container'));

        // <Receipt receipt={this.state.receipt1}/>
        // <Receipt receipt={this.state.receipt2}/>
        // <Receipt receipt={this.state.receipt3}/>