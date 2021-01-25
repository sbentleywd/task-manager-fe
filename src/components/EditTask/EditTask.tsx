import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { StaticContext } from "react-router";
import { TaskInterface } from "../Task/Task";
import { updateTask } from "../auth/utils";
import useUser from "../auth/useUser";
import TaskForm from "../TaskForm/TaskForm";
import BackButton from "../BackButton/BackButton";

const EditTask = (
	props: RouteComponentProps<{}, StaticContext, TaskInterface>
) => {
	const task = props.location.state;

	const { user } = useUser();

	const handleSave = async (description: string, completed: boolean) => {
		await updateTask(user.token, task._id, { description, completed });
		window.location.href = "/";
	};

	return (
		<>
			<BackButton />
			<TaskForm task={task} handleSave={handleSave} />
		</>
	);
};

export default EditTask;
