import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import React, { Component } from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withRouter } from 'react-router';
import styles from './styles';
import { AUTHORIZATION_KEY } from '../../../constants';
import axiosService from '../../../services/axiosService';

const menuId = 'primary-search-account-menu';
const mobileMenuId = 'primary-search-account-menu-mobile';
class Header extends Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null
  };

  handleProfileMenuOpen = event => {
    this.setAnchorEl(event.currentTarget);
  };

  setAnchorEl(currentTarget) {
    this.setState({
      anchorEl: currentTarget
    });
  }

  handleMenuClose = () => {
    this.setAnchorEl(null);
  };

  setMobileMoreAnchorEl(currentTarget) {
    this.setState({
      mobileMoreAnchorEl: currentTarget
    });
  }

  handleMobileMenuOpen = event => {
    this.setMobileMoreAnchorEl(event.currentTarget);
  };

  handleMobileMenuClose = () => {
    this.setMobileMoreAnchorEl(null);
  };

  handleLogout = () => {
    localStorage.removeItem(AUTHORIZATION_KEY);
    axiosService.removeHeader('Authorization');
    const { history } = this.props;
    if (history) {
      history.push('/login');
    }
  };

  renderDesktopMenu() {
    const isMenuOpen = Boolean(this.state.anchorEl);
    const { anchorEl } = this.state;
    return (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
      </Menu>
    );
  }

  renderMobileMenu() {
    const { mobileMoreAnchorEl } = this.state;
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    return (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton
            aria-label="Account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            onClick={this.handleLogout}
          >
            <AccountCircle />
          </IconButton>
          <p>Logout</p>
        </MenuItem>
      </Menu>
    );
  }

  handleToggleSidebar = () => {
    const { onToggleSidebar, open } = this.props;
    if (onToggleSidebar) {
      onToggleSidebar(!open);
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleToggleSidebar}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Material-UI
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ 'aria-label': 'Search' }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                edge="end"
                aria-label="Account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="Show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {this.renderDesktopMenu()}
        {this.renderMobileMenu()}
      </>
    );
  }
}

export default withStyles(styles)(withRouter(Header));
