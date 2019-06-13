import React, {Component} from "react";


class ProductItem extends Component {

    constructor(props){
        super(props);
        console.log("productItem");
    }

    doSomething(productName){
        console.log(productName);
    }

    render() {

        const {productName, unitPrice, thumbnail} = this.props.product;

        return (
            <div className="col-md-3 col-sm-6">
                <img className="img-fluid img-thumbnail" src={thumbnail} alt="" />
                <h5 className="mt-2">{productName}</h5>
                <h5 className="title text-right">{unitPrice} THB</h5>
                {this.props.onAddOrder &&
                    <button className="btn btn-block btn-success title" value={unitPrice} onClick={() => this.props.onAddOrder(this.props.product)} >
                        ซื้อ
                    </button>
                }
                {(this.props.onDelProduct || this.props.onEditProduct) &&
                        <button className="btn btn-sm btn-info col-5 title" onClick={() => this.props.onEditProduct(this.props.product)}>
                            แก้ไข
                        </button>
                        
                }
                {(this.props.onDelProduct || this.props.onEditProduct) &&
                    <button className="btn btn-sm btn-danger col-5 float-right title" onClick={() => this.props.onDelProduct(this.props.product)} >
                        ลบ
                    </button>
                }
                <hr/>
            </div>
        )
    }
}

export default ProductItem;