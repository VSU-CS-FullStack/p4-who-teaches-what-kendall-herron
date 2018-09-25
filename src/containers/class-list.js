import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectClasses } from "../actions/index";
import { updateAssignment } from "../actions/index";
import { updateClasses } from "../actions/index";
import { updateProfessors } from "../actions/index";
import { removeClasses } from "../actions/index";
import { updateIdentification } from "../actions/index";

class ClassesList extends Component {
  renderList() {
    return this.props.classes
      .map(classes => {
        const cn =
          this.props.professors &&
          this.props.classes &&
          this.props.classes.profName === classes.profName
            ? "list-group-item class-item-mine selected-item-mine"
            : "list-group-item class-item-mine";
        return (
          <li
            onClick={() => {
              if (!this.props.professors) {
                return null;
              } else {
                this.props.selectClasses(classes, this.props.professors);
                this.props.updateIdentification(0);
                this.props.updateAssignment(classes, this.props.professors, this.props.identification);
                this.props.updateClasses(classes);
                this.props.updateProfessors(this.props.professors, classes);
                this.props.removeClasses(classes);
              }
            }}
            key={classes.code}
            className={cn}
          >
            <div className="card">
              <div className="card-body">
                <p className="card-text float-right">
                  Number of Sections to Offer: {classes.numberOfSections}
                </p>
                <h5 className="card-title"> {classes.code}</h5>
                <p className="card-text">{classes.name}</p>
                <h6 className="card-text">
                  {" "}
                  Credit Hours: {classes.creditHours}
                </h6>
                <p />
                <h6 className="card-text float-left">
                  {" "}
                  Semester: {classes.semester}
                </h6>
              </div>
            </div>
          </li>
        );
      })
      .slice()
      .sort((classes1, classes2) => {
        return classes1.key - classes2.key;
      });
  }

  render() {
    return <ul className="list-group">{this.renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    identification: state.identification,
    classes: state.classes,
    professor: state.activeProfessors,
    class: state.activeClasses
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectClasses: selectClasses,
      updateAssignment: updateAssignment,
      updateClasses: updateClasses,
      updateProfessors: updateProfessors,
      updateIdentification: updateIdentification,
      removeClasses: removeClasses
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassesList);
