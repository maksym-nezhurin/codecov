import React, { Fragment } from 'react';

export const Main = ({ classNames = '', showMe = false, children }) => {
    return (
        <Fragment>
            <main className={classNames}>
                {children}
            </main>

            {
                showMe && <div className="Additional-block">It's me</div>
            }
        </Fragment>
    );
};
