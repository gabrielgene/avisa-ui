import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import { If } from 'babel-plugin-jsx-control-statements';
import Topbar from '../../components/topbar';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 2,
  },
  field: {
    marginBottom: theme.spacing.unit * 2,
  },
  button: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    borderRadius: 10,
  },
  select: {
    width: '100%',
    marginBottom: theme.spacing.unit * 3,
  },
  check: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    display: 'block',
  },
});

const state_values = ['Todos', 'Bahia', 'São Paulo', 'Rio de Janeiro', 'Acre'];

const city_values = ['Salvador', 'Feira de Santana', 'Lauro de Freitas'];

const region_values = ['Salvador', 'Grande Salvador', 'Outras cidades'];

const category_values = ['Eletrônicos e celulares', 'Smartphones'];

class NewAlert extends React.Component {
  state = {
    term: '',
    state: '',
    // state: 'Todos',
    // city: 'Salvador',
    // category: 'Eletrônicos e celulares',
    city: '',
    region: '',
    category: '',
    stateField: state_values,
    cityField: [],
    regionField: [],
    categoryField: [],
  };

  handleChange = name => event => {
    if (name === 'state' && event.target.value === 'Bahia') {
      this.setState({
        [name]: event.target.value,
        cityField: city_values,
        regionField: region_values,
        categoryField: category_values,
      });
    } else if (name === 'state') {
      this.setState({
        [name]: event.target.value,
        cityField: [],
        regionField: [],
        categoryField: [],
      });
    } else {
      this.setState({
        [name]: event.target.value,
      });
    }
  };

  render() {
    const {
      term,
      state,
      city,
      region,
      category,
      stateField,
      cityField,
      regionField,
      categoryField } = this.state;
    const { classes, history } = this.props;

    return (
      <div>
        <Topbar title="NOVO AVISO" back />
        <div className={classes.root}>
          <TextField
            className={classes.field}
            id="term"
            label="Termo a ser monitorado"
            fullWidth margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Ex: smartphone 128gb"
            value={term}
            onChange={this.handleChange('term')}
          />

          <FormControl className={classes.select}>
            <InputLabel htmlFor="age-simple">Estado</InputLabel>
            <Select
              value={state}
              onChange={this.handleChange('state')}
              inputProps={{
                name: 'state',
                id: 'state',
              }}
            >
              {
                stateField.map(s => (
                  <MenuItem key={s} value={s}>{s}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
          {
            cityField.length > 0 ?
              <FormControl className={classes.select}>
                <InputLabel htmlFor="age-simple">Cidade</InputLabel>
                <Select
                  value={city}
                  onChange={this.handleChange('city')}
                  inputProps={{
                    name: 'city',
                    id: 'city',
                  }}
                >
                  {
                    city_values.map(c => (
                      <MenuItem key={c} value={c}>{c}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl> :
              <div />
          }

          {
            regionField.length > 0 ?
              <FormControl component="fieldset" className={classes.check}>
                <FormLabel component="legend">Região</FormLabel>
                <RadioGroup
                  aria-label="region"
                  name="region"
                  value={region}
                  onChange={this.handleChange('region')}
                >
                  {
                    regionField.map(r => (
                      <FormControlLabel key={r} value={r} control={<Radio color="secondary" />} label={r} />
                    ))
                  }
                </RadioGroup>
              </FormControl>
              : <div />
          }

          {
            categoryField.length > 0 ?
              <FormControl className={classes.select}>
                <InputLabel htmlFor="age-simple">Categoria</InputLabel>
                <Select
                  value={category}
                  onChange={this.handleChange('category')}
                  inputProps={{
                    name: 'category',
                    id: 'category',
                  }}
                >
                  {
                    categoryField.map(c => (
                      <MenuItem key={c} value={c}>{c}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl> : <div />
          }

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
