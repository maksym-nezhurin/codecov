import React from 'react';

export const Footer = ({ classNames = '', children }) => {
    return (
        <footer className={`${classNames} footer`}>
            {children}
        </footer>
    );
};
