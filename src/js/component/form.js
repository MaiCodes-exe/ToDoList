import ReactDOM from "react-dom";
import React, { useState } from "react";

function Form() {
	const [newTask, setnewTask] = useState("");
	const [tasks, setTasks] = useState([]);
	const handleChange = (e) => {
		setInput(e.target.value);
	};

	function addTask() {
		setTasks([...tasks, newTask]);
	}
	function deleteTask(index) {
		var delarray = [...tasks];
		delarray.splice(index, 1);
		setTasks(delarray);
	}
	const taskList = tasks.map((object, index) => {
		return (
			<div>
				<h1 className="number">
					{index + 1} {object}
				</h1>
				<button
					onClick={() => {
						deleteTask(index);
					}}>
					Delete
				</button>
			</div>
		);
	});
	return (
		<div className="task">
			<h1 className="title"> Simple Do To List</h1>
			<div>
				<input
					type="text"
					placeholder="Add your task"
					value={newTask}
					onChange={(e) => {
						setnewTask(e.target.value);
					}}></input>
				<button onClick={addTask} className="button">
					Click me to add task
				</button>
			</div>
			{taskList}
		</div>
	);
}

export default Form;
