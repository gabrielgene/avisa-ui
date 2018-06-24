import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Topbar from '../../components/topbar';

const styles = {
  buttonWrapper: {
    position: 'fixed',
    bottom: 16,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  empty: {
    marginTop: 108,
    textAlign: 'center',
  },
  text: {
    marginTop: 8,
    fontFamily: 'Raleway',
    fontSize: 16,
    fontWeight: 600,
    color: 'rgb(0, 0, 0, 0.54)',
    marginRight: 24,
    marginLeft: 24,
  },
};

const AlertsList = ({ classes, history }) => (
  <div>
    <Topbar title="SEUS AVISOS" />
    <div className={classes.empty}>
      <img src="https://cdn.sympli.io/bundles/5b300eade45cec2b7d1188a4/44542ec64b4009f966c07622bbe9917f33960d7387/bundle/web%2FGroup_6-2x.png" alt="avisos" />
      <div className={classes.text}>
        Crie um alerta e seja notificado quando um novo produto for publicado de acordo com suas configurações
      </div>
    </div>
    <div className={classes.buttonWrapper}>
      <Button
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
