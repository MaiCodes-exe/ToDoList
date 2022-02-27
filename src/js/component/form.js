import ReactDOM from "react-dom";
import React, { useState } from "react";

function Form(props) {
	const [input, setInput] = useState("");
	const handleChange = (e) => {
		setInput(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			Text: input,
		});
		setInput("");
	};
	return (
		<form className="todo-form" onSubmit={handleSubmit}>
			<input
				placeholder="add a task"
				value={input}
				className="todo-input"
				onChange={handleChange}></input>
			<button className="todo-button">Click to add a task</button>
		</form>
	);
}

export default Form;
