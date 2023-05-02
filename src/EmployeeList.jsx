import { employees } from "./data";

export function EmployeeList() {
  return (
    <div>
      <h3>Employee List</h3>
      <ul>
        {employees.map((employee) => (
          <li
            style={{
              border:
                employee.designation === "President" ? "solid 3px orange" : ""
            }}
          >
            name : {employee.name}, level : {employee.level}, dept :{" "}
            {employee.dept}, designation : {employee.designation}, salary :{" "}
            {employee.salary}
          </li>
        ))}
      </ul>
    </div>
  );
}
