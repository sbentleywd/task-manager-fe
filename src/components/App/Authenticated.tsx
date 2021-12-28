import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from '../Dashboard/DashBoard'
import { UserInterface } from '../auth/useUser'
import AuthenticatedNavBar from '../NavBar/AuthenticatedNavBar'
import Container from '@material-ui/core/Container'
import EditTask from '../EditTask/EditTask'
import CreateTask from '../CreateTask/CreateTask'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      height: 'calc(100vh - 64px)',
      overflowY: 'auto'
    }
  })
)

const Authenticated = (props: { setUser: (user: UserInterface) => void }) => {
  const classes = useStyles()

  return (
    <>
      <Router>
        <AuthenticatedNavBar setUser={props.setUser} />
        <Container className={classes.mainContainer} maxWidth='md'>
          <Route
            exact
            path='/'
            render={(routeProps: any) => (
              <Dashboard {...routeProps} setUser={props.setUser} />
            )}
          />
          <Route path='/tasks/edit/:id' component={EditTask} />
          <Route path='/tasks/new' component={CreateTask} />
        </Container>
      </Router>
    </>
  )
}

export default Authenticated
