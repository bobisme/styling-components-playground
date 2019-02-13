import React from 'react'
import {render} from 'react-dom'
import jss from 'jss'
import withStyles from 'react-jss'
import injectSheet from 'react-jss/lib/injectSheet';

const styles = {
  myButton: {
    color: 'green',
    margin: {
      top: 5,
      right: 0,
      bottom: 0,
      left: '1rem'
    },
    '& span': {
      fontWeight: 'bold'
    }
  },
  myLabel: {
    fontStyle: 'italic'
  }
}

const Button = ({className, classes, children}) => (
  <button className={[classes.myButton, className].join(' ')}>
    <span className={classes.myLabel}>{children}</span>
  </button>
)
Button.defaultProps = { className: '' }

const StyledButton = withStyles(styles)(Button)



//-----------------------------------------------------------------------------
// NEW MODULE NO ACCESS TO THE ABOVE EXCEPT FOR StyledButton
//-----------------------------------------------------------------------------

const newStyles = {
  modifiedButton: {
    color: 'blue',
    '& span': {
      fontWeight: 200,
    }
  }
}

console.log(jss)

const ReStyledButton = injectSheet(newStyles)(({ classes }) => (
  <StyledButton className={classes.modifiedButton}>Boing</StyledButton>
))

const App = () => (
  <div>
    <StyledButton>Submit</StyledButton>
    <ReStyledButton>Boing</ReStyledButton>
  </div>
)

render(<App />, document.getElementById('root'))
