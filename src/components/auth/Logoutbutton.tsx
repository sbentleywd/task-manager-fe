import React from "react";

const Logoutbutton = (props: { setToken: (token: string) => void }) => {
	return <button onClick={() => props.setToken("")}>Logout</button>;
};

export default Logoutbutton;
