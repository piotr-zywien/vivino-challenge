import React, { useState, useEffect } from 'react';

import CountriesEnum from '../common/enums/CountriesEnum';
import * as styles from './Flag.module.css';

interface FlagProps {
  country: CountriesEnum;
}

const Flag = ({ country }: FlagProps) => {
    const [image, setImage] = useState(undefined);

    useEffect(() => {
        (async () => {
            const response = await import(`../common/assets/${country}.svg`);
            setImage(response.default)
        })();
    }, [country]);

    return <div className={styles.root} style={{ backgroundImage: `url(${image})` }} />;
}

export default Flag;
