const styles = theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    height: 'calc(100vh - 64px)'
  },
  wrapperContent: {
    width: '100%',
    padding: 10,
    marginLeft: -240,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  shiftLeft: {
    marginLeft: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  }
});

export default styles;
