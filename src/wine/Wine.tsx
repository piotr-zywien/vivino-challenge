import React from 'react';

import { PresentableWineInfo } from '../common/types/WineTypes';
import Flag from '../flag';
import Stats from '../stats/Stats';
import * as styles from './Wine.module.css';

interface WineProps {
    data: PresentableWineInfo;
}

const Wine = ({ data }: WineProps) => (
    <div className={styles.root}>
        <img className={styles.bottle} src={data.imageUrl} />
        <div className={styles.info}>
            <span className={styles.winery}>{data.winery}</span>
            <span className={styles.name}>
                <a className={styles.link} target="_blank" href={data.wineUrl} >{data.wineName}</a>
            </span>
            <div className={styles.region}>
                <Flag country={data.country.code} />
                <span className={styles.regionText}>{`${data.regionName}, ${data.country.name}`}</span>
            </div>
        </div>
        <div className={styles.stats}>
            <Stats data={data.ratings} />
        </div>
    </div>
);

export default Wine;
