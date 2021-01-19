import React, { useEffect, useState } from "react";
import { getUserTasks } from "../auth/utils";
import useUser from "../auth/useUser";
import Task, { TaskInterface } from "../Task/Task";

const UserTasks = () => {
	const [tasks, setTasks] = useState<TaskInterface[]>([]);
	const { user } = useUser();

	useEffect(() => {
		const getTasks = async () => {
			const tasks = await getUserTasks(user.token);
			setTasks(tasks);
		};
		getTasks();
	}, []);

	return (
		<div>
			<h3>You have {tasks.length} tasks</h3>
			{tasks.map((task) => (
				<Task task={task} />
			))}
		</div>
	);
};

export default UserTasks;
