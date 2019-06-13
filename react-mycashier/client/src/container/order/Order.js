import React, {Component} from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { connect } from 'react-redux';
import { ordersFetch, orderDelete } from '../../actions';


class Order extends Component{

  componentDidMount(){
    this.props.ordersFetch();
  }

  delOrder(order){
      this.props.orderDelete(order.id);
  }

  showOrders(){
      return this.props.orders && this.props.orders.map(order => {

          const date = new Date(order.orderedDate);
          return (
              <div key={order.id} className="col-md-3">
                <hr/>
                <p>
                    <div class="row">
                        <div class="col-sm-8">
                            Order number #{order.id}
                        </div>
                        <div class="col-sm-4 text-right">
                            <button className="btn btn-danger btn-sm title" onClick={() => this.delOrder(order)}>X</button>
                        </div>
                    </div>
                </p>
                <h5>วันที่ {date.toLocaleDateString()} {date.toLocaleTimeString()}</h5>
                <ul>
                    {order.orders && order.orders.map(record => {
                        return (
                            <li key={record.product.id}>
                                {record.product.productName}({record.product.unitPrice}) x {record.quantity} = {record.product.unitPrice * record.quantity}
                            </li>
                        )
                    })}
                </ul>
                <p className="title">ยอดรวม {order.totalPrice}</p>
              </div>
          )
      })
  }

  renderOrder(){
    return (
      <div className="container-fluid title">
        <h1>รายการสั่งซื้อ</h1>
        <div className="row">
            {this.showOrders()}
        </div>
      </div>
    );
  }

  render(){
    return (
      <div>
        <Header/>
        {this.renderOrder()}
        <Footer company="PUMPUIYLAB" email="narachai.p@gmail.com"/>
      </div>
    );
  }
  
}

function mapStateToProps({orders}){
  console.log({orders});
  return {orders};
}

export default connect(mapStateToProps, { ordersFetch, orderDelete })(Order);
