import React, {Component} from 'react';
import { reduxForm, Field } from "redux-form"
import FormField from "../common/FormField";
import {productFormField} from './formFields';
import { connect } from 'react-redux';

class ProductForm extends Component{

    renderFeilds(formFields) {
        return formFields.map(( {label, name, type, required} ) =>  {
            return (
                <Field key={name} name={name} type={type} label={label} required={required} component={FormField} />
            )
        })
    }

    render(){

        const { onProductSubmit } = this.props;

        return (
            <div>
                <form onSubmit={this.props.handleSubmit(onProductSubmit)}>
                    {this.renderFeilds(productFormField)}
                    <button className="btn btn-block btn-info title" type="submit">
                        บันทึก
                    </button>
                </form>
            </div>
        )
    }

}

function validate(values) {
    //console.log(values);
    const errors = {};
    productFormField.forEach( ({ name, required }) => {
        if (!values[name] && required) {
            errors[name] = 'กรุณากรอกข้อมูลด้วยค่ะ';
        }
    });
    return errors;
}

function mapStateToProps( {products} ) {
    
    if (products && products.id) {
        return { initialValues : products};
    }else{
        return {};
    }
    
}

ProductForm = reduxForm( { validate, form : "productForm"} )(ProductForm);

export default connect(mapStateToProps)(ProductForm);