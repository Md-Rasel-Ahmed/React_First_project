// import { useState } from "react";
function Absent(props) {
  // const [absent, setAbsent] = useState([]);
  return (
    <div className="absent">
      <h2>Absent Students</h2>
      <ul>
        {props.absent.map((absent) => {
          return (
            <li key={absent}>
              <span>{absent}</span>
              <button>Present</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Absent;
