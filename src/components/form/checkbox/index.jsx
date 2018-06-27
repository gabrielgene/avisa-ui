import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 2,
    display: 'block',
  }
});

class CheckboxGroup extends React.Component {

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { title, checks, classes, handleChange, value, checked } = this.props;

    return (
      <FormControl component="fieldset" className={classes.root}>
        <FormLabel component="legend">{title}</FormLabel>
        <FormGroup>
          {
            checks.map( v => (
              <FormControlLabel
                key={v}
                control={
                  <Checkbox
                    checked={checked}
                    color="primary"
                  />
                }
                label={v}
              />
            ))
          }
        </FormGroup>
      </FormControl>
    );
  }
}

export default withStyles(styles)(CheckboxGroup);
