export const loginUser = async (userName: string, password: string) => {
	try {
		const url = "http://localhost:3000/users/login";
		const fetchOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: userName,
				password: password,
			}),
		};
		const response = await fetch(url, fetchOptions);
		if (response.ok) {
			const jsonResponse = await response.json();
			return await jsonResponse;
		}
	} catch (e) {
		console.log(e);
	}
	alert("Email or password incorrect!");
	return {
		token: null,
	};
};
