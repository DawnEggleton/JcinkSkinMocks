import React from 'react';
import clsx from 'clsx';

export default function Button(props) {
    const {children, type, disabled, className} = props;
    const classes = clsx('ui-button', className);

    return <button type={type} disabled={disabled} class={classes}>{children}</button>;
}