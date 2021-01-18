import { useState } from "react";

export default function useToken() {
	const getToken = () => {
		const tokenString = sessionStorage.getItem("token");
		const userToken = JSON.parse(tokenString!);
		return userToken;
	};
	const [token, setToken] = useState<String>();

	const saveToken = (token: string) => {
		sessionStorage.setItem("token", JSON.stringify(token));
		setToken(token);
	};

	return {
		setToken: saveToken,
		token,
	};
}
