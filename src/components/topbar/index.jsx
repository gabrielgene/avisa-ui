import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { withRouter } from 'react-router-dom';

const Topbar = ({ title, back, history }) => (
  <AppBar position="static">
    <Toolbar>
      <IconButton color="inherit" aria-label="Menu">
        {
          back ?
            <ArrowBackIcon onClick={history.goBack}/>
            :
            <MenuIcon />
        }
      </IconButton>
      <Typography variant="title" color="inherit">
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withRouter(Topbar);
