import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeAssignment } from "../actions/index";
import { addClasses } from "../actions/index";
import { downgradeProfessors } from "../actions/index";

class AssignmentList extends Component {
	renderList() {
		return this.props.assignment.map(assignment => {
			let classes = assignment.classes;
			let identification =assignment.identification;
			let professors = assignment.professors;

			return (
				<li
					onClick={() => {
						this.props.removeAssignment(identification, classes, professors);
						this.props.addClasses(classes);
						this.props.downgradeProfessors(professors, classes);
					}}
					key={identification}
					className="list-group-item"
				>
					<div className="card">
						<div className="card-body">
							<p className="card-text">{professors.name}</p>
							<p className="card-text">{classes.code}</p>
						</div>
					</div>
				</li>
			);
		});
	}

	render() {
		return this.props.professors ? (
			<ul className="list-group">{this.renderList()}</ul>
		) : (
			<p>Select a professor and class</p>
		);
	}
}

function mapStateToProps(state) {
	return {
		assignment: state.assignment,
		classes: state.activeClasses,
		professors: state.activeProfessors
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			removeAssignment: removeAssignment,
			addClasses: addClasses,
			downgradeProfessors: downgradeProfessors
		},
		dispatch
	);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AssignmentList);
