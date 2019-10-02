const styles = theme => ({
  background: {
    backgroundColor: theme.palette.primary.main,
    padding: `40px ${theme.spacing.unit}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '1 0 auto',
    flexDirection: 'column',
    minHeight: '100vh',
    textAlign: 'center'
  },
  wrapper: {
    flex: 'none',
    maxWidth: '400px',
    width: '100%',
    margin: '0 auto'
  }
});
export default styles;
