import { useState } from "react";
import { EmployeeForm } from "./form";
import { Table } from "./table";

const headings = ["Employee Name", "Department", "Actions"];
const employeeRecord = [
  {
    name: "Raheel",
    department: "Technical Department",
  },
  {
    name: "Ashar",
    department: "Sis Department",
  },
  {
    name: "Saqib Naseeb",
    department: "Technical Department",
  },
  {
    name: "Bushra",
    department: "HCM Department",
  },
];

export const App = () => {
  const [employeeData, setEmployeeData] = useState(employeeRecord);
  const [selectedEmployee, setSelectedRecord] = useState(undefined);
  const deleteRecord = (employee) => {
    const temp = employeeData.filter((record) => record !== employee);
    //upate state with update record
    setEmployeeData(temp);
  };

  const addRecord = (newEmployee) => {
    setEmployeeData([...employeeData, newEmployee]);
  };

  const updateRecord = (newRecord) => {
    const index = employeeData.indexOf(selectedEmployee);
    const temp = [...employeeData];
    temp[index] = newRecord;
    setEmployeeData(temp);
    setSelectedRecord(undefined);
  };
  return (
    <div className="container">
      <Table
        headings={headings}
        employeeData={employeeData}
        deleteRecord={deleteRecord}
        setSelectedRecord={setSelectedRecord}
      />
      <EmployeeForm
        addRecord={addRecord}
        selectedEmployee={selectedEmployee}
        updateRecord={updateRecord}
      />
    </div>
  );
};
