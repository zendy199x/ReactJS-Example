const styles = theme => ({
  notfoundpage: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    padding: `40px ${theme.spacing.unit}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '1 0 auto',
    flexDirection: 'column',
    minHeight: '100%',
    textAlign: 'center'
  },
  title: {
    fontSize: '150px',
    fontWeight: 'bold',
    lineHeight: 1.2,
    position: 'relative',
    background: theme.palette.primary.main,
    color: '#fff',
    padding: `0 ${theme.spacing.unit * 3}px`,
    borderRadius: '60px',
    cursor: 'pointer',
    margin: `0 0 ${theme.spacing.unit}px`
  },
  subtitle: {
    fontSize: '32px',
    fontWeight: 900
  }
});

export default styles;
