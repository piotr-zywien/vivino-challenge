import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import Filters from '../filters';
import Wine from '../wine';
import WinesResource from './WinesResource';
import CountriesEnum from '../common/enums/CountriesEnum';
import { PresentableWineInfo } from '../common/types/WineTypes';
import * as styles from './WinesContainer.module.css';

const WinesContainer = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [wines, setWines] = useState<PresentableWineInfo[]>([]);
    const [countries, setCountries] = useState<CountriesEnum[]>([]);

    const toggleCountry = (country: CountriesEnum) => {
      if (countries.includes(country)) {
        setCountries((prevState) =>
          prevState.filter((present: CountriesEnum) => present !== country)
        );
      } else {
        setCountries((prevState) => [country, ...prevState]);
      }
    };

    const hasCountry = (country: CountriesEnum) => countries.includes(country);

    const onSearch = () => {
      setIsLoading(true);
      WinesResource(countries).then((response) => {
        setWines(response);
        setIsLoading(false);
      });
    };

    const onClear = () => setCountries([]);

    useEffect(() => {
      onSearch();
    }, []);

    return (
      <div className={styles.root}>
        <Filters
          toggleCountry={toggleCountry}
          hasCountry={hasCountry}
          onSearch={onSearch}
          onClear={onClear}
          isLoading={isLoading}
        />
        <div className={classNames(styles.loader, {[styles.loaderHidden]: !isLoading})} />
        {wines.map((wine) => (
          <Wine key={`listed-wine-${wine.id}`} data={wine} />
        ))}
      </div>
    );
};

export default WinesContainer;
