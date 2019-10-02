const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: 240,
    maxWidth: 240,
    height: '100%',
    zIndex: 99
  },
  menuActive: {
    backgroundColor: theme.palette.action.hover
  },
  menuLink: {
    textDecoration: 'none',
    color: theme.text.default
  }
});

export default styles;
