import React from 'react';
import classNames from 'classnames';

import CountriesEnum from "../common/enums/CountriesEnum";
import CountryButton from '../country-button';
import * as styles from './Filters.module.css';

interface FiltersProps {
    toggleCountry: (country: CountriesEnum) => void;
    hasCountry: (country: CountriesEnum) => boolean;
    onSearch: () => void;
    onClear: () => void;
    isLoading: boolean;
}

const Filters = ({ toggleCountry, hasCountry, onSearch, onClear, isLoading }: FiltersProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.countries}>
        {Object.values(CountriesEnum).map((country) => (
          <CountryButton
            key={`filter-country-${country}`}
            country={country}
            hasCountry={hasCountry(country)}
            onClick={() => toggleCountry(country)}
          />
        ))}
      </div>
      <div className={styles.actions}>
        <button
          disabled={isLoading}
          className={classNames(styles.search, {
            [styles.disabled]: isLoading,
          })}
          onClick={onSearch}
        >
          Search
        </button>
        <button
          disabled={isLoading}
          className={classNames(styles.clear, {
            [styles.disabled]: isLoading,
          })}
          onClick={onClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filters;
