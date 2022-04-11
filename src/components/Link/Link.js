import React, {useState} from 'react';

const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
};

const Link = ({page, classNames: classes, isNew = false, isOld = true, children}) => {
    const [status, setStatus] = useState(STATUS.NORMAL);
    const classNames = [
        classes,
        isOld ? 'old-link' : '',
        isNew ? 'new-link' : '',
    ].join(' ');

    const onMouseEnter = () => {
        setStatus(STATUS.HOVERED);
    };

    const onMouseLeave = () => {
        setStatus(STATUS.NORMAL);
    };

    return (
        <a
            className={`${classNames + " "}${status}`}
            href={page || '#'}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </a>
    );
};

export default Link;