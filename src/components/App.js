import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import {
  add_Reminder,
  clear_Reminders,
  remove_Reminder,
} from "../redux/actions/action";
import moment from "moment";

class App extends Component {
  state = {
    text: "",
    date: null,
  };

  render_Remminders = () => {
    const { reminders } = this.props;
    return (
      <ul className="list-group">
        {reminders.map((reminder) => {
          return (
            <li className="list-group-item" key={reminder.id}>
              <div>{reminder.text}</div>
              <div>{moment(new Date(reminder.date)).fromNow()}</div>
              <button
                className="remove btn btn-danger closeIcon"
                onClick={() => this.props.remove_Reminder(reminder.id)}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
    );
  };
  render() {
    return (
      <div className="App">
        <img src="/reminder.png" alt="reminder"/>
        <div className="reminder-title">
          <h2>What Should U Do ?</h2>
        </div>
        <input
          type="text"
          placeholder="Enter What U think ...?"
          className="form-control"
          value={this.state.text}
          onChange={(e) => this.setState({ text: e.target.value })}
        />

        <DatePicker
          className="form-control"
          value={this.state.date}
          selected={this.state.date}
          onChange={(date) => this.setState({ date: date })}
          showTimeSelect
          timeFormat="HH:mm"
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
          placeholderText="Enter Date"
        />
        <button
          className="btn btn-primary w-100"
          onClick={() => {
            this.props.add_Reminder(this.state.text, this.state.date);
            this.setState({text: "", date: null})
          }}
        >
          Add Reminder
        </button>
        {this.render_Remminders()}
        <button
          className="btn btn-danger w-100"
          onClick={() => {
            this.props.clear_Reminders();
          }}
        >
          Clear Reminders
        </button>
      </div>
    );
  }
}
// function mapDispatchToProps(dispatch) {
//   return {
//     add_Reminder: () => dispatch(add_Reminder()),
//   };
// }

function mapStateToProps(state) {
  return {
    reminders: state,
  };
}
export default connect(mapStateToProps, {
  add_Reminder,
  clear_Reminders,
  remove_Reminder,
})(App);
