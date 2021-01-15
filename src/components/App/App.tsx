import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Component imports
import Welcome from "../Welcome/Welcome";
import Login from "../Welcome/Login";
import SignUp from "../Welcome/SignUp";

function App() {
	return (
		<Router>
			<Route exact path="/" component={Welcome} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/sign_up" component={SignUp} />
		</Router>
	);
}

export default App;
