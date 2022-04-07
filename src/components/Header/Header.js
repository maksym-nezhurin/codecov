import React from 'react';

export const Header = ({ classNames = '', children }) => {
    return (
        <header className={classNames}>
            {children}
        </header>
    );
};
