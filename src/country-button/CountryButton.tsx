import React from 'react';
import classNames from 'classnames';

import CountriesEnum from "../common/enums/CountriesEnum"
import Flag from '../flag';
import { getCountryName } from '../common/utils';
import * as styles from './CountryButton.module.css';

interface CountryButtonProps {
  country: CountriesEnum;
  hasCountry: boolean;
  onClick: () => void;
}

const CountryButton = ({ country, hasCountry, onClick }: CountryButtonProps) => (
    <button
    className={classNames(styles.root, { [styles.faded]: !hasCountry })}
    onClick={onClick}
    >
        <div className={styles.flag}>
            <Flag country={country} />
        </div>
        {getCountryName(country)}
    </button>
);

export default CountryButton;
