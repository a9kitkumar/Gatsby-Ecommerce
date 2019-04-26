import React, { Component } from 'react';
import Iphone8 from "./iPhones/iphone8"
import Iphonex from "./iPhones/iphonex"
import Iphonexs from "./iPhones/iphonexs"
import "./layout.css";
import { Modal, Button } from 'react-bootstrap';
import { Link } from "gatsby";
import _ from "lodash";

class Home extends Component {
    products = [];
    constructor(props) {
        super(props);
        this.state = {
            iPhone8Show: false,
            iPhoneXShow: false,
            iPhoneXSShow: false,
            alert: "",
        };
        this.handleiPhone8Show = this.handleiPhone8Show.bind(this);
        this.handleiPhone8Close = this.handleiPhone8Close.bind(this);
        this.handleiPhoneXShow = this.handleiPhoneXShow.bind(this);
        this.handleiPhoneXClose = this.handleiPhoneXClose.bind(this);
        this.handleiPhoneXSShow = this.handleiPhoneXSShow.bind(this);
        this.handleiPhoneXSClose = this.handleiPhoneXSClose.bind(this);
    }

    handleiPhone8Close() {
        this.setState({ iPhone8Show: false });
      }
    
      handleiPhone8Show() {
        this.setState({ iPhone8Show: true });
      }
      handleiPhoneXClose() {
        this.setState({ iPhoneXShow: false });
      }
    
      handleiPhoneXShow() {
        this.setState({ iPhoneXShow: true });
      }
      handleiPhoneXSClose() {
        this.setState({ iPhoneXSShow: false });
      }
    
      handleiPhoneXSShow() {
        this.setState({ iPhoneXSShow: true });
      }

    //   Add products to cart
      addToCart = (e)=>
      {
        var product = e.target.value;
        this.setState({alert: "Product Added to Cart"});
        setTimeout(
            function() {
                this.setState({alert: ""});
            }
            .bind(this),
            3000
        );
            this.products.push(product);
            localStorage.setItem('products', JSON.stringify(this.products))
      }

      componentDidMount()
      {
        var arr = _.values(JSON.parse(localStorage.getItem('products')));
        if(arr.length > 0)
        {
        this.products = JSON.parse(localStorage.getItem('products'));
        }
      }

    render() {
        return (
            
            <div>
                 <p>{this.state.alert}</p>
             <div className="row">
             <div className="col-sm-5"></div>
             <div className="col-sm-4"></div>
             <div className="col-sm-2 cart"><Link to="/cart/"><button className="btn btn-primary margin-button">
            View Cart</button></Link>
                </div>               
             
             </div>
               
            <div className="row top-row-margin">
            <div className="col-sm-4 image-pointer" onClick={this.handleiPhone8Show}>
            <Iphone8/>
                </div>
                <div className="col-sm-4 image-pointer" onClick={this.handleiPhoneXShow}>
            <Iphonex/>
                </div>
                <div className="col-sm-4 image-pointer" onClick={this.handleiPhoneXSShow}>
            <Iphonexs/>
                </div>
                </div>
                <div className="row">
                 <div className="col-sm-4 product-name" onClick={this.handleiPhone8Show}>$849</div>
                 <div className="col-sm-4 product-name" onClick={this.handleiPhoneXShow}>$1149</div>
                 <div className="col-sm-4 product-name" onClick={this.handleiPhoneXSShow}>$1449</div>                
                </div>
                <div className="row">
                 <div className="col-sm-4 product-name" onClick={this.handleiPhone8Show}>iPhone 8</div>
                 <div className="col-sm-4 product-name" onClick={this.handleiPhoneXShow}>iPhone X</div>
                 <div className="col-sm-4 product-name" onClick={this.handleiPhoneXSShow}>iPhone XS</div>                
                </div>
                <div className="row">
                 <div className="col-sm-4 product-name"><button className="btn btn-primary margin-button" onClick={this.addToCart} value={"iphone8"}>Add to Cart</button></div>
                 <div className="col-sm-4 product-name"><button className="btn btn-primary margin-button" onClick={this.addToCart} value={"iphoneX"}>Add to Cart</button></div>
                 <div className="col-sm-4 product-name"><button className="btn btn-primary margin-button" onClick={this.addToCart} value={"iphoneXS"}>Add to Cart</button></div>               
                </div>

                
               

            {/* Modal for iPhone 8 info */}
        <Modal show={this.state.iPhone8Show} onHide={this.handleiPhone8Close}>
          <Modal.Header closeButton>
            <Modal.Title>Apple iPhone 8</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <p><span>Announced:</span> <span className="modal-float-right">2017, September</span></p>
              <p><span>Display:</span> <span className="modal-float-right">4.7 inches, 60.9 cm2</span></p>
              <p><span>OS:</span> <span className="modal-float-right">iOS 11, Upgradable</span></p>
              <p><span>Memory:</span> <span className="modal-float-right">64/256 GB, 2GB RAM</span></p>
              <p><span>Battery:</span> <span className="modal-float-right">Li-Ion 1821mAh</span></p>
              <p><span>Price:</span> <span className="modal-float-right">$849</span></p>


          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleiPhone8Close} className="margin-button">
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal for iPhone x */}
        <Modal show={this.state.iPhoneXShow} onHide={this.handleiPhoneXClose}>
          <Modal.Header closeButton>
            <Modal.Title>Apple iPhone X</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <p><span>Announced:</span> <span className="modal-float-right">2017, September</span></p>
              <p><span>Display:</span> <span className="modal-float-right">5.8 inches, 84.4 cm2</span></p>
              <p><span>OS:</span> <span className="modal-float-right">iOS 11.1.1, upgradable</span></p>
              <p><span>Memory:</span> <span className="modal-float-right">64/256 GB, 3 GB RAM</span></p>
              <p><span>Battery:</span> <span className="modal-float-right">Li-Ion 2716 mAh</span></p>
              <p><span>Price:</span> <span className="modal-float-right">$1149</span></p>


          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleiPhoneXClose} className="margin-button">
              Close
            </Button>
          </Modal.Footer>
        </Modal>

         {/* Modal for iPhone xs */}
         <Modal show={this.state.iPhoneXSShow} onHide={this.handleiPhoneXSClose}>
          <Modal.Header closeButton>
            <Modal.Title>Apple iPhone XS</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <p><span>Announced:</span> <span className="modal-float-right">2018, September</span></p>
              <p><span>Display:</span> <span className="modal-float-right">5.8 inches, 84.4 cm2</span></p>
              <p><span>OS:</span> <span className="modal-float-right">iOS 12, upgradable</span></p>
              <p><span>Memory:</span> <span className="modal-float-right">64/256/512 GB,4GBRAM</span></p>
              <p><span>Battery:</span> <span className="modal-float-right">Li-Ion 2658 mAh</span></p>
              <p><span>Price:</span> <span className="modal-float-right">$1449</span></p>


          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleiPhoneXSClose} className="margin-button">
              Close
            </Button>
          </Modal.Footer>
        </Modal>


                </div>
        )}
}

export default Home;