import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { List, ListItem, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTES } from '../../../constants';
import styles from './styles';

class Sidebar extends Component {
  toggleDrawer = value => {
    const { onToggleSidebar } = this.props;
    if (onToggleSidebar) {
      onToggleSidebar(value);
    }
  };

  renderList() {
    const { classes } = this.props;
    let xhtml = null;
    xhtml = (
      <div
        className={classes.list}
        role="presentation"
        onClick={() => this.toggleDrawer(false)}
        onKeyDown={() => this.toggleDrawer(false)}
      >
        <List component="div">
          {ADMIN_ROUTES.map((item, index) => {
            return (
              <NavLink
                to={`${item.path ? item.path : ''}`}
                exact
                className={classes.menuLink}
                activeClassName={classes.menuActive}
                key={index}
              >
                <ListItem className={classes.menuItem} button>
                  <Typography variant="body1">{item.name}</Typography>
                </ListItem>
              </NavLink>
            );
          })}
        </List>
      </div>
    );
    return xhtml;
  }

  render() {
    const { classes, showSidebar } = this.props;
    return (
      <Drawer
        open={showSidebar}
        onClose={() => this.toggleDrawer(false)}
        variant="persistent"
        classes={{
          paper: classes.drawerPaper
        }}
        ModalProps={{
          keepMounted: false,
          className: classes.modal,
          BackdropProps: {
            className: classes.backdrop
          },
          onBackdropClick: () => this.toggleDrawer(false)
        }}
      >
        {this.renderList()}
      </Drawer>
    );
  }
}

export default withStyles(styles)(Sidebar);
