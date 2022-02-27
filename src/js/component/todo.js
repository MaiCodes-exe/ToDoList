import React, { useState } from "react";
import ReactDOM from "react-dom";
import Form from "./form";

const Todo = () => {
	const [edit, setEdit] = useState({
		id: null,
		value: "",
	});
	return (
		<div>
			<h1> To Do List</h1>
		</div>
	);
};
export default Todo;
