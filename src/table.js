import { TableHeader } from "./tableheader";
import { TableBody } from "./tablebody";

export const Table = (props) => {
  return (
    <div className="table">
      <h2>Employee record</h2>
      <table>
        <TableHeader headings={props.headings} />
        <TableBody
          employeeData={props.employeeData}
          deleteRecord={props.deleteRecord}
          setSelectedRecord={props.setSelectedRecord}
        />
      </table>
    </div>
  );
};
