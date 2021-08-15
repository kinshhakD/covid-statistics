import {
  Box, Input, makeStyles, Typography,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { statisticsActions } from '../../Redux/Actions/statisticsActions';
import search from '../../icons/search.svg';
import logo from './logo.png';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchInput: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
    width: '50%',
    padding: '10px 30px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '20px',
    fontSize: '3rem',
  },
  inputIcon: {
    position: 'absolute',
    right: 0,
    top: '25px',
    padding: '0 10px',
  },
  inputEl: {
    justifyContent: 'flex-end',
  },
  headerTitle: {
    fontSize: '72px',
    fontWeight: 700,
    textTransform: 'uppercase',
    '@media (max-width:1024px)': {
      fontSize: '24px',
    },
  },
});

function Header() {
  const styles = useStyles();

  const dispatch = useDispatch();

  const [searchCountry, setSearchCountry] = useState('');

  const onHandleChange = ({ target }) => {
    setSearchCountry(target.value);
    dispatch(statisticsActions.setInputSearch(target.value));
  };

  useEffect(() => {
    if (!searchCountry) {
      dispatch(statisticsActions.searchCountries([]));
    }
  }, [searchCountry]);

  return (
    <header className={styles.header}>
      <Box display="flex" alignItems="center">
        <img src={logo} alt="logo" />
        <Typography
          variant="h2"
          className={styles.headerTitle}
        >
          Statistic
        </Typography>
      </Box>
      <Box>
        <Box position="relative">
          {
            searchCountry.length < 11 && <img src={search} alt="search" className={styles.inputIcon} />
          }
          <Input
            disableUnderline
            value={searchCountry}
            onChange={onHandleChange}
            placeholder="Search..."
            className={styles.inputEl}
            inputProps={{
              className: styles.searchInput,
            }}
          />

        </Box>
      </Box>
    </header>

  );
}

export default Header;
