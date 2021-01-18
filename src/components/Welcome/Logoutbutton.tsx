import React from "react";

const Logoutbutton = (props: any) => {
	return <button onClick={() => props.setToken(null)}>Logout</button>;
};

export default Logoutbutton;
