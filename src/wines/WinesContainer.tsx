import React, { useState, useEffect } from 'react';

import Wines from './Wines';
import WinesResource from './WinesResource';
import { PresentableWineInfo } from '../common/types/WineTypes';

const WinesContainer = () => {
    const [wines, setWines] = useState<PresentableWineInfo[]>([]);

    useEffect(() => {
        WinesResource().then((response) => {
            setWines(response);
        });
    }, []);

    return <Wines dataList={wines} />;
};

export default WinesContainer;
