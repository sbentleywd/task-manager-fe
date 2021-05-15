import { TaskInterface } from "../Task/Task";

require("dotenv").config();

const apiUrl =
	process.env.REACT_APP_APIURL ||
	"https://bentley-task-manager.herokuapp.com";

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

export const getUserTasks = async (
	token: string,
	sortBy: string,
	sortOrder: string,
	filterCompleted: boolean,
	category?: string
): Promise<Array<TaskInterface> | {error: string}> => {
	try {
		const url = `${apiUrl}/tasks?sortBy=${sortBy}:${sortOrder}${
			filterCompleted ? "&completed=false" : ""
		}&category=${category}`;
		const fetchOptions = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		};
		const response = await fetch(url, fetchOptions);
		const jsonResponse = await response.json();

		return await jsonResponse;
	} catch (e) {
		console.log(e);
		return [];
	}
};

export const updateTask = async (token: string, id: string, options: {}) => {
	try {
		const url = `${apiUrl}/tasks/${id}`;
		const fetchOptions = {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(options),
		};
		await fetch(url, fetchOptions);
	} catch (e) {
		console.log(e);
	}
};

export const deleteTask = async (token: string, id: string) => {
	try {
		const url = `${apiUrl}/tasks/${id}`;
		const fetchOptions = {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		};
		await fetch(url, fetchOptions);
	} catch (e) {
		console.log(e);
	}
};

export const createTask = async (token: string, options: newTask) => {
	try {
		const url = `${apiUrl}/tasks`;
		const fetchOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(options),
		};
		await fetch(url, fetchOptions);
	} catch (e) {
		console.log(e);
	}
};

type newTask = {
	description: string;
	completed: boolean;
	dueDate?: Date | null;
};
