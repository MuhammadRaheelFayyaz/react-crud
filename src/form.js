import { useEffect, useState } from "react";

export const EmployeeForm = (props) => {
  const [state, setState] = useState({
    name: "",
    department: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const addRecord = () => {
    props.addRecord(state);
    setState({
      name: "",
      department: "",
    });
  };

  useEffect(() => {
    props.selectedEmployee
      ? setState(props.selectedEmployee)
      : setState({
          name: "",
          department: "",
        });
  }, [props.selectedEmployee]);
  return (
    <div>
      <h2>Employee From</h2>
      <div className="input-group">
        <label>Employee Name</label>
        <input
          name="name"
          value={state.name}
          onChange={(e) => changeHandler(e)}
        />
      </div>
      <div className="input-group">
        <label>Employee Department</label>
        <input
          name="department"
          value={state.department}
          onChange={(e) => changeHandler(e)}
        />
      </div>
      {props.selectedEmployee ? (
        <button onClick={() => props.updateRecord(state)}>
          {" "}
          Update Record
        </button>
      ) : (
        <button onClick={() => addRecord()}> Add Record</button>
      )}
    </div>
  );
};
