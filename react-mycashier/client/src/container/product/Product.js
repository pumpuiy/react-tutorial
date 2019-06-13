import React, {Component} from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductList from "../../components/product/ProductList";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { productsFetch, productDelete } from '../../actions';

class Product extends Component{

  constructor(props){
      super(props);
      this.delProduct = this.delProduct.bind(this);
      this.editProduct = this.editProduct.bind(this);
  }

  componentDidMount(){
    this.props.productsFetch();
  }

  delProduct(product){
      this.props.productDelete(product.id);
  }

  editProduct(product){
    this.props.history.push('products/edit/'+product.id);
  }

  showProducts(){
        //console.log(this.state.products);
        return (
            <div className="container-fluid">
            <div className="row">
                <div className="col-6">
                    <h1>สินค้า</h1>
                </div>
                <div className="col-6">
                    <button className="btn btn-success title float-right" onClick={() => this.props.history.push('products/add')}>เพิ่ม</button>
                </div>
                {this.props.products && Array.isArray(this.props.products) &&
                  <ProductList products={this.props.products} 
                    onDelProduct={this.delProduct} onEditProduct={this.editProduct} />
                }
            </div>
            </div>
        )
  }

  render(){
    return (
      <div>
        <Header/>
        {this.showProducts()}
        <Footer company="PUMPUIYLAB" email="narachai.p@gmail.com"/>
      </div>
    );
  }
  
}

function mapStateToProps({products}){
  console.log({products});
  return {products};
}

export default withRouter(connect(mapStateToProps, { productsFetch, productDelete })(Product));
