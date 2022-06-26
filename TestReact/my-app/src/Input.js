import React from 'react';
import clsx from 'clsx';

export default function Input(props) {
    const {type = 'text', className, ...rest} = props;
    const classes = clsx('ui-textfield', className);
    return <input type={type} className={classes} {...rest} />;
}