import React from 'react'
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { UserInterface } from '../auth/useUser'
import UnauthenticatedNavBar from '../NavBar/UnauthenticatedNavBar'
import Landing from '../Landing/Landing'
import Container from '@material-ui/core/Container'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      height: 'calc(100vh - 64px)',
      overflowY: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
)

const Unauthenticated = (props: { setUser: (user: UserInterface) => void }) => {
  const classes = useStyles()

  return (
    <>
      <Router>
        <UnauthenticatedNavBar />
        <Container className={classes.mainContainer} maxWidth='md'>
          <Route exact path='/' component={Landing} />
          <Route
            exact
            path='/login'
            render={(routeProps) => (
              <Login {...routeProps} setUser={props.setUser} />
            )}
          />
          <Route
            path='/signup'
            render={(routeProps) => (
              <SignUp {...routeProps} setUser={props.setUser} />
            )}
          />
        </Container>
      </Router>
    </>
  )
}

export default Unauthenticated
