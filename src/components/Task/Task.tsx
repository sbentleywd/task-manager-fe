import React from "react";

const Task = (props: { task: TaskInterface }) => {
	return <div>{props.task.description}</div>;
};

export default Task;

export interface TaskInterface {
	completed: boolean;
	_id: string;
	description: string;
	owner: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
}
