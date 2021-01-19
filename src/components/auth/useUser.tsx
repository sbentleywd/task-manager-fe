import { useState } from "react";

export default function useUser() {
	const getUser = () => {
		const userData = JSON.parse(localStorage.getItem("userData")!);
		return userData!;
	};
	const [user, setUser] = useState<UserInterface>(getUser());

	const saveUser = (user: UserInterface) => {
		localStorage.setItem("userData", JSON.stringify(user));
		setUser(user);
	};

	return {
		setUser: saveUser,
		user,
	};
}

export interface UserInterface {
	user?: {
		name: string;
		email: string;
		_id: string;
		age: number;
		createdAt: string;
	};
	token: string;
}
