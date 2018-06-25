import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Topbar from '../../components/topbar';
import Checkboxes from '../../components/checkboxes';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 2,
  },
  button: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 3,
    borderRadius: 10,
  },
});

const region_check = ['Salvador', 'Grande Salvador', 'Outras cidades'];

const phone = [
  'Apple',
  'Asus',
  'Samsung',
  'LG',
  'Nokia',
  'Sony',
];

const type = ['Novo', 'Usado'];

class NewAlert extends React.Component {

  render() {
    const { classes, history } = this.props;

    return (
      <div>
        <Topbar title="NOVO AVISO" back />
        <div className={classes.root}>
          <TextField
            id="term"
            label="Termo a ser monitorado"
            fullWidth margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Ex: smartphone 128gb"
          />
          <TextField
            id="state"
            label="Estado"
            fullWidth margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Ex: Bahia"
          />
          <TextField
            id="city"
            label="Cidade"
            fullWidth margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Ex: Salvador"
          />
          <Checkboxes title="Região" checks={region_check} />
          <TextField
            id="category"
            label="Categoria"
            fullWidth margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Ex: Eletrônicos e celulares"
          />
          <TextField
            id="eletro"
            label="Eletrônicos e celulares"
            fullWidth margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Ex: Celulares e telefonia"
          />
          <Checkboxes title="Celulares e telefonia" checks={phone} />
          <Checkboxes title="Novo/Usado" checks={type} />
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => history.push('/configuracao')}
          >
            Criar Aviso
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(NewAlert);
