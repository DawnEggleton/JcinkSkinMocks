import React from 'react';
import clsx from 'clsx';

export default function Container(props) {
    const {children, className, ...rest} = props;
    const classes = clsx('ui-container', className);
    return <div className={classes} {...rest}>{children}</div>;
}