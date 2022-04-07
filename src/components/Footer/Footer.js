import React from 'react';

export const Footer = ({ classNames = '', children }) => {
    return (
        <main className={classNames}>
            {children}
        </main>
    );
};
