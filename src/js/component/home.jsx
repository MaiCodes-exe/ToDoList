import React, { useState } from "react";
import Todo from "./todo";
import Form from "./form";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div>
			<Todo />
			<Form />
		</div>
	);
};

export default Home;
