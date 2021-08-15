import {
  ListItem, Typography,
} from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';

function CountryItem({
  country, itemNumber, total, onModal,
}) {
  const styles = useStyles();

  return (
    <ListItem
      onClick={onModal}
      className={styles.listItem}
    >
      <span className={styles.numberItem}>
        {itemNumber}
      </span>
      <Typography component="span" variant="body2" className={styles.countryItem}>
        <div className="border-left" />
        {country}
      </Typography>
      <Typography component="span" variant="body2" className={styles.countItem}>
        <div className="border-left" />
        {total}
      </Typography>
    </ListItem>
  );
}

CountryItem.defaultProps = {
  itemNumber: 0,
  country: '',
  total: 0,
};

CountryItem.propTypes = {
  country: PropTypes.string,
  itemNumber: PropTypes.number,
  total: PropTypes.number,
  onModal: PropTypes.func.isRequired,
};

export default CountryItem;
