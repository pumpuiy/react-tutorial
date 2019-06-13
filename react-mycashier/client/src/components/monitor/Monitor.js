import React, {Component} from "react";
import Calculator from "./Calculator";
import ProductList from "../product/ProductList";
import axios from "axios";

class Monitor extends Component{

    constructor(props){
        super(props);
        this.state = {totalPrice:0, orders : [], confirm : false, msg: ""};
        this.addOrder = this.addOrder.bind(this);
        this.delOrder = this.delOrder.bind(this);
        this.cancelOrder = this.cancelOrder.bind(this);
        this.confirmOrder = this.confirmOrder.bind(this);

    }

    addOrder(product){
        // order หา order ของ product ที่เลือกจาก state
        let findOrder = this.state.orders.find(order => order.product.id == product.id);

        if (findOrder){
            findOrder.quantity ++;
        }else{
            this.state.orders.push({product : product, quantity : 1});
        }
        const totalPrice = this.state.totalPrice + parseInt(product.unitPrice);
        this.setState({totalPrice : totalPrice, orders : this.state.orders, confirm:false});
    }

    delOrder(product){
        // order หา order ของ product ที่เลือกจาก state
        let findOrder = this.state.orders.find(order => order.product.id == product.id);
        // order ที่เหลือจาก order ที่ต้องการลบ 
        let resultOrder = this.state.orders.filter(order => order.product.id != product.id);
        const totalPrice = this.state.totalPrice - (findOrder.quantity * parseInt(findOrder.product.unitPrice));
        this.setState({totalPrice : totalPrice, orders : resultOrder, confirm:false});
    }

    confirmOrder(){
        const {totalPrice, orders} = this.state;
        if (orders && orders.length >0){
            axios.post("http://localhost:3001/orders", { orderedDate : new Date(), totalPrice, orders })
            .then(res => {
                this.setState({totalPrice : 0, orders: [], confirm: true, msg: "บันทึกรายการสั่งซื้อเรียบร้อยแล้ว"} );
            });
        }else{
            this.setState({totalPrice : 0, orders: [], confirm: true, msg: "กรุณาเลือกสินค้าก่อน"} );
        }
        
    }

    cancelOrder(){
        this.setState({totalPrice : 0, orders : [], confirm: false});

    }

    render(){

        const {orders, msg} = this.state;
        const {products} = this.props;
        const styleSuccess = "alert alert-success title text-right";
        const styleWarning = "alert alert-secondary title text-right";

        const showAlert = () => {
            if (this.state.confirm){
                if (msg == "บันทึกรายการสั่งซื้อเรียบร้อยแล้ว"){
                    console.log("success.");
                    return (
                        <div className={styleSuccess} role="alert" >
                            {this.state.msg}
                        </div>
                    );
                }else{
                    console.log("empty.");
                    return (
                        <div className={styleWarning} role="alert" >
                            {this.state.msg}
                        </div>
                    );
                }
                
            }else{
                return "";
            }
            
          };

        return (
            <div className="container-fluid">
                {showAlert()}

                <div className="row">
                    <div className="col-md-9">  
                        <ProductList products={products} onAddOrder={this.addOrder} />
                    </div>
                    <div className="col-md-3">  
                        <Calculator totalPrice={this.state.totalPrice} orders={this.state.orders} 
                            onDelOrder={this.delOrder} onCancelOrder={this.cancelOrder}
                            onConfirmOrder={this.confirmOrder}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Monitor;