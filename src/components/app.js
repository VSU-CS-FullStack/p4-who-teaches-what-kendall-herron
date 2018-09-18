import React, { Component } from "react";

export default class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<h2>Courses </h2>
						<ClassList />
					</div>
					<div className="col-md-4">
						<h2>Professors </h2>
						<ProfessorList />
					</div>
					<div className="col-md-3">
						<h2>Assignments </h2>
						<AssignmentList />
					</div>
				</div>
			</div>
		);
	}
}
