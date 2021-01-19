const apiUrl = process.env.APIURL || "http://localhost:3000";

export const loginUser = async (email: string, password: string) => {
	try {
		const url = `${apiUrl}/users/login`;
		const fetchOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
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

export const createUser = async (
	name: string,
	email: string,
	password: string,
	age: number
) => {
	try {
		const url = `${apiUrl}/users`;
		const fetchOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name,
				email,
				password,
				age,
			}),
		};

		const response = await fetch(url, fetchOptions);
		const jsonResponse = await response.json();
		return jsonResponse;
	} catch (e) {
		console.log(e);
	}
	alert("There was a problem creating a user, please try again");
	return {
		token: null,
	};
};
