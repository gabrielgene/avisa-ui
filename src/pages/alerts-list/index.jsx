import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Topbar from '../../components/topbar';

const styles = theme => ({
  buttonWrapper: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 10,
  },
  empty: {
    marginTop: theme.spacing.unit * 13.5,
    textAlign: 'center',
  },
  text: {
    marginTop: theme.spacing.unit * 2,
    fontFamily: 'Raleway',
    fontSize: 18,
    fontWeight: 600,
    color: 'rgb(0, 0, 0, 0.54)',
    marginRight: 24,
    marginLeft: 24,
  },
  card: {
    border: '1px solid rgba(0, 0, 0, 0.12)',
    margin: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    borderRadius: theme.spacing.unit * 3,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  cardText: {
    fontFamily: 'Raleway',
    fontSize: 20,
    fontWeight: 600,
    color: 'rgb(0, 0, 0, 0.87)',
  },
});

const AlertsList = ({ classes, history }) => (
  <div>
    <Topbar title="SEUS AVISOS" />
    {
      !!history.location.search ?
        <div className={classes.card}>
          <div className={classes.cardText}>smartphone 128gb</div>
        </div>
        :
        <div className={classes.empty}>
          <img src="https://cdn.sympli.io/bundles/5b300eade45cec2b7d1188a4/44542ec64b4009f966c07622bbe9917f33960d7387/bundle/web%2FGroup_6-2x.png" alt="avisos" />
          <div className={classes.text}>
            Crie um alerta e seja notificado quando um novo produto for publicado de acordo com suas configurações
          </div>
        </div>
    }
    <div className={classes.buttonWrapper}>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={() => history.push('/novo-aviso')}
      >
        <AddIcon />
        Criar Aviso
      </Button>
    </div>
  </div>
);

export default withStyles(styles)(AlertsList);
