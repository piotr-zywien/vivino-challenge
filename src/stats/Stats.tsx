import React from 'react';

import { PresentableWineRatings } from '../common/types/WineTypes';
import Stars from '../stars';
import * as styles from './Stats.module.css';

interface StatsProps {
    data: PresentableWineRatings;
}

const Stats = ({ data }: StatsProps) => {
    return (
        <div className={styles.root}>
            <span className={styles.average}>{data.ratingsAverage}</span>
            <span className={styles.stars}>
                <Stars rating={data.ratingsAverage} />
            </span>
            <span>{data.ratingsCount} ratings</span>
        </div>
    );
}

export default Stats;
