import React from 'react';

import Wines from './Wines';
import WinesResource from './WinesResource';

const WinesContainer = () => {
    WinesResource().then((response) => {
        console.log(response);
    });
    return <Wines />;
};

export default WinesContainer;
