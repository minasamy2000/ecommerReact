import axios from "axios";
import React, { Component } from "react";
import { useCart ,CartProvider} from "react-use-cart";
import { Container,Row,Col } from "reactstrap";
class Browse extends Component {
   state={
products:[]
   }
        componentDidMount(){
        axios.get('https://fakestoreapi.com/products')
        .then((res) => {
            this.setState({
                products:res.data
            })
            

        })
        

        }
  
    render(){
        const{addItem}=useCart
        return(
            <CartProvider>
            <Container>
                <Row>
                    
                    {
                this.state.products.map((item)=>
                
                    <Col md="3"style={{paddingTop:"30px"}}>
                        <div key={item.id}>
                    <img src={item.image}alt="" width={"200px"} height={"200px"}/>
                    <h3>{item.title}</h3>
                    <p>Price:{item.price}$</p>
                    
                    </div>
                    </Col>

                )
    }
                </Row>
            </Container>
            
            </CartProvider>
        )
}
}
export default Browse
