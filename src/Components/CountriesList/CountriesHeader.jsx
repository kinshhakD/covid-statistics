import React from 'react';
import { ListItem, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles from './styles';

function CountriesHeader({ onTotal }) {
  const styles = useStyles();

  return (
    <ListItem className={styles.listItemHeader}>
      <span className={styles.numberItem}>
        №
      </span>
      <Typography variant="h5" className={styles.countryItem}>
        <div className="border-left-w" />
        Country
      </Typography>
      <Typography variant="h5" className={styles.countItem} onClick={onTotal}>
        <div className="border-left-w" />
        Total Confirmed
      </Typography>
    </ListItem>
  );
}

CountriesHeader.propTypes = {
  onTotal: PropTypes.func.isRequired,
};

export default CountriesHeader;
