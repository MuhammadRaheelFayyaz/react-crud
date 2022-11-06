export const TableBody = (props) => {
  return (
    <tbody>
      {props.employeeData.map((employee) => (
        <tr>
          <td>{employee.name}</td>
          <td>{employee.department}</td>
          <td>
            <span
              className="action"
              onClick={() => props.deleteRecord(employee)}
            >
              Delete
            </span>
            <span> | </span>
            <span
              className="action"
              onClick={() => props.setSelectedRecord(employee)}
            >
              Edit
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  );
};