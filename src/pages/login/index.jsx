import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.primary.main,
  },
  logo: {
    textAlign: 'center',
  },
  textWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 600,
    width: 260,
    fontSize: 16,
    fontFamily: 'Raleway',
    color: 'rgba(255, 255, 255, 0.7)',
  },
  img: {
    marginTop: theme.spacing.unit * 16,
    marginBottom: theme.spacing.unit * 2,
    witdh: 211,
    height: 191,
  },
  buttonWrapper: {
    marginTop: theme.spacing.unit * 7.5,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#eeda2b',
    color: 'black',
    borderRadius:theme.spacing.unit + 2,
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
  },
  progress: {
    marginTop: theme.spacing.unit * 7.5,
  }
});

class Login extends React.Component {
  state = {
    loading: false,
  };

  login = () => {
    this.setState({ loading: true }, () =>
      setTimeout(() =>
        this.props.history.push('/avisos'), 2000));
  };

  render() {
    const { classes } = this.props;
    const { loading } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.logo}>
          <img
            className={classes.img}
            src="https://i.imgur.com/b5w6dRU.png"
            alt="logo"
          />
          <div className={classes.textWrapper}>
            <div className={classes.text}>
              Seja avisado quando um produto de interessse for anunciado próximo a você no OLX
            </div>
          </div>
        </div>
        <div className={classes.buttonWrapper}>
          {
            loading ?
              <CircularProgress style={{ color: '#eeda2b' }} />
              :
              <Button variant="contained" className={classes.button} onClick={this.login}>
                Entrar com Google
              </Button>
          }
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Login);
