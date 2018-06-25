import React from 'react';
import Topbar from '../../components/topbar';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 3,
  },
  text: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontWeight: 600,
    fontSize: 14,
  },
  notificationWrapper: {
    marginTop: theme.spacing.unit * 2,
  },
  notification: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  notificationText: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 14,
    fontFamily: 'Raleway',
    color: 'rgba(0, 0, 0, 0.54)',
  },
  button: {
    marginTop: theme.spacing.unit * 2,
    borderRadius: 10,
  },
});

const notifications = [
  'Notificação no aplicativo',
  'E-mail',
  'Whatsapp',
];

const Settings = ({ classes, history }) => (
  <div>
    <Topbar title="NOVO AVISO" back />
    <div className={classes.root}>
      <div className={classes.text}>
        Escolha as formas que gostaria de ser avisado:
      </div>
      <div className={classes.notificationWrapper}>
        {
          notifications.map(v => (
            <div key={v} className={classes.notification}>
              <div className={classes.notificationText}>
                {v}
              </div>
              <Switch
                color="secondary"
              />
            </div>
          ))
        }
      </div>
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        fullWidth
        onClick={() => history.push('/avisos?show=true')}
      >
        Salvar configurações
      </Button>
    </div>
  </div>
)

export default withStyles(styles)(Settings);
