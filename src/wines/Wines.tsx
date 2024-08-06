import React from 'react';

import { PresentableWineInfo } from '../common/types/WineTypes';
import Wine from '../wine';
import * as styles from './Wines.module.css';

interface WinesProps {
    dataList: PresentableWineInfo[];
}

const Wines = ({ dataList }: WinesProps) => {
    return (
        <div className={styles.root}>
            {dataList.map((wine) => <Wine key={`listed-wine-${wine.id}-`} data={wine} />)}
        </div>
    );
};

export default Wines;
