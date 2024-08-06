
import React from 'react';

import * as styles from './Stars.module.css';

interface StarsProps {
    rating: number;
}

const Stars = ({ rating }: StarsProps) => {
    const style = { "--rating": rating } as React.CSSProperties;
    return (
        <div className={styles.root} style={style} />
    );
};

export default Stars;
