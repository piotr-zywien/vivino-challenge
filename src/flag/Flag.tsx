import React, { useState, useEffect } from 'react';

import { Country } from '../common/types/WineTypes';
import * as styles from './Flag.module.css';

interface FlagProps {
    country: Country;
}

const Flag = ({ country }: FlagProps) => {
    const [image, setImage] = useState(undefined);

    useEffect(() => {
        (async () => {
            const response = await import(`../common/assets/${country.code}.svg`);
            setImage(response.default)
        })();
    }, [country]);

    return <div className={styles.root} style={{ backgroundImage: `url(${image})` }} />;
}

export default Flag;
