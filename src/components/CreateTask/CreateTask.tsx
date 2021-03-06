import React from "react";
import useUser from "../auth/useUser";
import TaskForm from "../TaskForm/TaskForm";
import { createTask } from "../auth/utils";
import BackButton from "../BackButton/BackButton";

const CreateTask = () => {
	const { user } = useUser();

	const handleSave = async (description: string, completed: boolean, dueDate: Date | null) => {

		await createTask(user.token, { description, completed, dueDate });
		window.location.href = "/";
	};
	return (
		<>
			<BackButton />
			<TaskForm
				task={{ description: "", completed: false }}
				handleSave={handleSave}
			/>
		</>
	);
};

export default CreateTask;
