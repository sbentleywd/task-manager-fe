import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";


// Component imports
import Authenticated from "./Authenticated";
import Unauthenticated from "./Unauthenticated";
import useUser from "../auth/useUser";

function App() {
	const { user, setUser } = useUser();

	return (
		<>
			<CssBaseline />

			{user.token ? (
				<Authenticated setUser={setUser} />
			) : (
				<Unauthenticated setUser={setUser} />
			)}
		</>
	);
}

export default App;
