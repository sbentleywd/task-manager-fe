import { useState } from "react";

export default function useToken() {
	const getToken = () => {
		const userToken = JSON.parse(localStorage.getItem("token")!);
		return userToken!;
	};
	const [token, setToken] = useState<String>(getToken());

	const saveToken = (token: string) => {
		localStorage.setItem("token", JSON.stringify(token));
		setToken(token);
	};

	return {
		setToken: saveToken,
		token,
	};
}
