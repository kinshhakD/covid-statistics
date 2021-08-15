import {
  Box, Button, List, ListItem, makeStyles, Modal, Typography,
} from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import heart from '../../icons/heart.svg';
import skull from '../../icons/skull.svg';
import notes from '../../icons/notes.svg';

const useStyles = makeStyles({

  modalBlock: {
    width: '600px',
    height: '25rem',
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    background: '#fff',
    borderRadius: '20px',
    outline: 'none',
  },
  modalTitle: {
    fontSize: '3rem',
    textAlign: 'center',
    margin: '0 0 40px 0',
  },
  listItemDetail: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '40px',
    padding: 0,
    color: '#666',
    fontWeight: '400',
    fontSize: '24px',
    '&:last-child': {
      marginBottom: '30px',
    },
  },

  closeBtn: {
    width: '10.5rem',
    textAlign: 'center',
    fontSize: '1.5rem',
    background: '#2196F3',
    borderRadius: '20px',
    color: '#fff',
    fontWeight: 'bold',
  },
  icon: {
    marginRight: '30px',
  },
});

function CountryDetails({ onOpen, onClose }) {
  const countryDetail = useSelector((state) => state.countries.countryDetail);

  const styles = useStyles();

  const {
    Country, TotalConfirmed, TotalDeaths, TotalRecovered,
  } = countryDetail;

  return (
    <Modal
      open={onOpen}
      onClose={onClose}
    >
      <Box className={styles.modalBlock}>
        <h1 className={styles.modalTitle}>{Country}</h1>
        <List>
          <ListItem className={styles.listItemDetail}>
            <Box display="flex">
              <img src={heart} alt="Total Confirmed" className={styles.icon} />
              <Typography variant="h6">
                Total Confirmed
              </Typography>
            </Box>
            <span>{TotalConfirmed}</span>
          </ListItem>
          <ListItem className={styles.listItemDetail}>
            <Box display="flex">
              <img src={skull} alt="Total Deaths" className={styles.icon} />
              <Typography variant="h6">
                Total Deaths
              </Typography>
            </Box>
            <span>{TotalDeaths}</span>
          </ListItem>
          <ListItem className={styles.listItemDetail}>
            <Box display="flex">
              <img src={notes} alt="Total Recovered" className={styles.icon} />
              <Typography variant="h6">
                Total Recovered
              </Typography>
            </Box>
            <span>{TotalRecovered}</span>
          </ListItem>
        </List>
        <Box display="flex" justifyContent="center">
          <Button variant="contained" className={styles.closeBtn} onClick={onClose}>
            OK
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

CountryDetails.defaultProps = {
  onOpen: false,
};

CountryDetails.propTypes = {
  onOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

export default CountryDetails;
