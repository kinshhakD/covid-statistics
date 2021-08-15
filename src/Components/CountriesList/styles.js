import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  listItemHeader: {
    padding: 0,
    height: '80px',
    background: '#2196F3',
    color: '#fff',
    marginBottom: '20px',
    borderRadius: '20px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
    fontSize: '24px',
    fontWeight: 700,
  },

  listItem: {
    padding: 0,
    height: '80px',
    marginBottom: '20px',
    borderRadius: '20px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
    fontWeight: 700,
    cursor: 'pointer',
  },

  numberItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '80px',
    fontSize: '24px',
  },

  countryItem: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '60%',
    fontWeight: 700,
    fontSize: '24px',

  },

  countItem: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '36%',
    fontSize: '24px',
    fontWeight: 700,
    cursor: 'pointer',
  },
});

export default useStyles;
