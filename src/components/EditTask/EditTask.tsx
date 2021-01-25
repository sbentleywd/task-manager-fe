import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { StaticContext } from "react-router";
import { TaskInterface } from "../Task/Task";

const EditTask = (
	props: RouteComponentProps<{}, StaticContext, TaskInterface>
) => {
	const task = props.location.state;
	return <div>Editing task {task._id}</div>;
};

export default EditTask;
