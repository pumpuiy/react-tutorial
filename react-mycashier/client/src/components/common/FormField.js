import React from 'react';

export default ( {input, label, type, required, meta : {error, touched}} ) => {
    //console.log('FormField');
    //console.log(input);
    return (
        <div className="form-group">
            <lable className="title">{label}</lable>
            <input type={type} required={required} {...input} className="form-control" />

            {error && touched &&
                (
                    <div className="mt-2 text-danger title">
                        {error}
                    </div>
                )
            }
        </div>
    )
}