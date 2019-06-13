import React, {Component} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

class About extends Component{


  renderAbout(){
    return (
      <div className="container col-md-5 title">
        <h3>สวัสดีครับ</h3>
        <p className="title text-justify mt-4 mb-4">
          ทดสอบหน้า About
        </p>
        <h4 className="text-success">จาก เฮลตี้ คาเฟ่</h4>
      </div>
    );
  }

  render(){
    return (
      <div>
        <Header/>
        {this.renderAbout()}
        <Footer company="PUMPUIYLAB" email="narachai.p@gmail.com"/>
      </div>
    );
  }
  
}

export default About;
