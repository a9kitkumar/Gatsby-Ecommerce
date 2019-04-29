import React, { Component } from 'react';
import { Link } from "gatsby"
import _ from "lodash";
import { Modal } from 'react-bootstrap';
import cosmicService from './../services/cosmicService';

const Iphone8 = (props) => {
    return <div>
        <img src={require('../images/apple-iphone-8-plus-0.jpg')} className="cart-image" alt="iphone8"/>
        <h6 className="cart-pro-text">iPhone 8</h6>
    </div>
}

const IphoneX = (props) => {
    return <div>
        <img src={require('../images/apple-iphone-x-new-1.jpg')} className="cart-image" alt="iphonex" />
        <h6 className="cart-pro-text">iPhone X</h6>

    </div>
}

const IphoneXS = (props) => {
    return <div>
        <img src={require('../images/iphone-xs-img.jpg')} className="cart-image" alt="iphonexs" />
        <h6 className="cart-pro-text">iPhone XS</h6>
    </div>
}

class Cart extends Component {
    productArray = [];
    constructor(props) {
        super(props);
        this.state = {
            isEmpty: "false",
            message: 'My Cart is:',
            iphone8: false,
            iphoneX: false,
            iphoneXS: false,
            nav: true,
            checkoutShow: false,
            userName: '',
            address: '',
            cardNumber: '',
            cvv: '',
            cardExpiryDate: '',
            mobile: '',
            amount:'',
            isLoading: '',
            dynamic: '',
        };
        this.handleCheckoutShow = this.handleCheckoutShow.bind(this);
        this.handleCheckoutClose = this.handleCheckoutClose.bind(this);
        this.emptyCart = this.emptyCart.bind(this);
    }

    // getting products which are in cart
    getProducts() {
        this.productArray = _.values(JSON.parse(localStorage.getItem('products')));
        if (this.productArray.length < 1) {
            this.setState({ isEmpty: "true" });
            this.setState({ dynamic: 'dynamic' });
            this.setState({ message: "Your Cart is Empty" });
            this.setState({ nav: false });
        }
    }

    componentDidMount() {
        this.getProducts();
        this.checkingCart();

    }

    //checking products in Cart
    checkingCart() {
        var amount = 0;
        if (this.productArray.indexOf('iphone8') >= 0) {
            this.setState({ iphone8: true })
            amount = amount + 849;
        }

        if (this.productArray.indexOf('iphoneX') >= 0) {
            this.setState({ iphoneX: true });
            amount = amount + 1149;
        }

        if (this.productArray.indexOf('iphoneXS') >= 0) {
            this.setState({ iphoneXS: true })
            amount = amount + 1449;
        }
        this.setState({amount: amount})
    }

    handleCheckoutShow() {
        this.setState({ checkoutShow: true });
    }

    handleCheckoutClose() {
        this.setState({ checkoutShow: false });
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    emptyCart()
    {
        localStorage.removeItem('products');
        
    }

    onSubmit = (e) =>
    {
        this.setState({isLoading: 'Placing order...'})
      e.preventDefault();
        cosmicService.placeOrder(this.state.userName, this.state.address, this.state.cardNumber, this.state.cvv, this.state.cardExpiryDate, this.state.mobile, this.state.amount)
        .then((result)=>{
            this.setState({isLoading: 'Order successfully placed!'});
            setTimeout(() => {
                this.setState({checkoutShow: false});
                localStorage.removeItem('products');
              }, 3000);
        })
    }

    render() {
        return (
            <div>
                <div className="jumbotron"><b>Gatsby Ecommerce App in Cosmic JS</b></div>
                <div><Link to="/"><button className="btn btn-primary margin-button ">
                    Back</button></Link></div>
                <div className="container h-100 d-flex justify-content-center">

                    <div className="row">
                        <div>
                            <h1>{this.state.message}</h1>
                            <div className="">
                            {this.state.iphone8 ? <Iphone8 /> : null}
                            {this.state.iphoneX ? <IphoneX /> : null}
                            {this.state.iphoneXS ? <IphoneXS /> : null}
                            </div>
                            <div className="button-padding">
                            <div className={this.state.dynamic}><Link to="/"><button className="btn btn-danger" onClick={this.emptyCart}>
                                Empty Cart</button></Link>
                                
                                <button className="btn btn-primary margin-button" onClick={this.handleCheckoutShow}>
                                    Checkout</button></div>
                                    </div>

                        </div>

                    </div>
                </div>
                <Modal show={this.state.checkoutShow} onHide={this.handleCheckoutClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Checkout</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.onSubmit}>

                            <p><input type="text" name="userName" value={this.state.userName} onChange={this.onChange} placeholder="Enter your name" className="form-control"/></p>
                            <p><input type="text" name="address" value={this.state.address} onChange={this.onChange} placeholder="Enter your address" className="form-control" /></p>
                            <p><input type="text" name="cardNumber" value={this.state.cardNumber} onChange={this.onChange} placeholder="Enter your card number"  className="form-control"/></p>
                            <p><input type="text" name="cvv" value={this.state.cvv} onChange={this.onChange} placeholder="Enter your cvv" className="form-control" /></p>
                            <p><input type="text" name="cardExpiryDate" value={this.state.cardExpiryDate} onChange={this.onChange} placeholder="Enter card's expiry date" className="form-control" /></p>
                            <p><input type="text" name="mobile" value={this.state.mobile} onChange={this.onChange} placeholder="Enter your mobile"  className="form-control"/></p>
                            <p><span>Total Amount:</span><span>${this.state.amount}</span></p>

                            <p><input type="submit" value="Place Order" className="margin-button btn btn-primary"/></p>   
                            <p>{this.state.isLoading}</p>                        

                        </form>
                    </Modal.Body>                    
                </Modal>
            </div>
        )
    }

}
export default Cart;