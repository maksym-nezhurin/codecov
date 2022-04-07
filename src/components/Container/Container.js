import React from 'react';

export const Container = ({ classNames = '', children}) => {
    return (
        <main className={classNames}>
            {children}
        </main>
    );
};
