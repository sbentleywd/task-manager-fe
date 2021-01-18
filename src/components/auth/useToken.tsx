import { useState } from "react";

export default function useToken() {
	const getToken = () => {
		const userToken = localStorage.getItem("token");
		return userToken!;
	};
	const [token, setToken] = useState<String>(getToken());

	const saveToken = (token: string) => {
		localStorage.setItem("token", token);
		setToken(token);
	};

	return {
		setToken: saveToken,
		token,
	};
}
