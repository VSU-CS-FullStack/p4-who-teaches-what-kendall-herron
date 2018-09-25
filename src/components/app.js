import React, { Component } from "react";
import ClassesList from "../containers/class-list";
import ProfessorsList from "../containers/professor-list";
import AssignmentList from "../containers/assignment-list";

export default class App extends Component {
	render() {
		return (
			<div className="containers">
				<div className="row">
					<div className="col-md-5">
						<h2>Classes </h2>
						<ClassesList />
					</div>
					<div className="col-md-4">
						<h2>Professors </h2>
						<ProfessorsList />
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
