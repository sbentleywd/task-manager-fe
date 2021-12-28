import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    landingContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      flexDirection: 'column'
    }
  })
)

const Landing = () => {
  const classes = useStyles()

  return (
    <div className={classes.landingContainer}>
      <h1>Welcome to Task-Manager. Please login/sign up</h1>
      <div>
        <Button
          color='primary'
          component={Link}
          to={'/login'}
          variant='contained'
        >
          Login
        </Button>
        <Button color='primary' component={Link} to={'/signup'}>
          Sign Up
        </Button>
      </div>
    </div>
  )
}

export default Landing
