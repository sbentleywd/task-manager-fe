import React from "react";

// Component imports
import Authenticated from "./Authenticated";
import Unauthenticated from "./Unauthenticated";

import useToken from "../auth/useToken";

function App() {
	const { token, setToken } = useToken();
	return token ? <Authenticated setToken={setToken} /> : <Unauthenticated setToken={setToken} />;
}

export default App;
