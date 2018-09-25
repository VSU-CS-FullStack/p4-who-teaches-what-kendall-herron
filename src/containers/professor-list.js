import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectProfessors } from "../actions/index";
import { selectClasses } from "../actions/index";

class ProfessorsList extends Component {
  renderList() {
    return this.props.professors
      .map(professors => {
        const cn =
          this.props.activeProfessors &&
          this.props.activeProfessors.profName === professors.profName
            ? "list-group-item class-item-mine selected-item-mine"
            : "list-group-item class-item-mine";
        return (
          <li
            onClick={() => {
              this.props.selectProfessors(professors);
              this.props.selectClasses(null);
            }}
            key={professors.profName}
            className={cn}
          >
            <div className="card">
              <div className="card-body">
                <h6 className="card-text">{professors.profName}</h6>
                <p className="card-text">
                  Number of Classes Taught: {professors.numberOfClasses}
                </p>
                <p className="card-text">
                  Number of Credit Hours Taught:{" "}
                  {professors.numberOfCreditHours}
                </p>
              </div>
            </div>
          </li>
        );
      })
      .slice()
      .sort((name1, name2) => {
        if (name1.key.split(" ")[2] < name2.key.split(" ")[2]) {
          return -1;
        } else if (name2.key.split(" ")[2] < name1.key.split(" ")[2]) {
          return 1;
        } else {
          return 0;
        }
      });
  }
  render() {
    return <ul className="list-group">{this.renderList()}</ul>;
  }
}
const compare = (first, second) => {
  const lastName1 = first;
  const lastName2 = second;
  console.log(lastName1, lastName2);
  return 0;
};

function mapStateToProps(state) {
  return {
    professors: state.professors,
    activeProfessors: state.activeProfessors
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectProfessors: selectProfessors, selectClasses: selectClasses },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfessorsList);
