import React from "react";
import useUser from "../auth/useUser";
import TaskForm from "../TaskForm/TaskForm";
import { createTask } from "../auth/utils";

const CreateTask = () => {
	const { user } = useUser();

	const handleSave = async (description: string, completed: boolean) => {
		await createTask(user.token, { description, completed });
		window.location.href = "/";
	};
	return (
		<TaskForm
			task={{ description: "", completed: false }}
			handleSave={handleSave}
		/>
	);
};

export default CreateTask;
