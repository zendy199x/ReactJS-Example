const styles = theme => ({
  root: {
    marginTop: 20
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
    width: 200
  },
  button: {
    marginBottom: theme.spacing()
  },
  colorPrimary: {
    backgroundColor: '#B2DFDB'
  },
  barColorPrimary: {
    backgroundColor: '#00695C'
  },
  progress: {
    margin: theme.spacing(2)
  }
});

export default styles;
