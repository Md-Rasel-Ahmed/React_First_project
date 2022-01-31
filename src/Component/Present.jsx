// import { useState } from "react";
function Present(props) {
  // const [absent, setAbsent] = useState([]);
  //   console.log(props.absent);
  return (
    <div className="present">
      <h2>Present Students</h2>
      <ul>
        {props.present.map((present) => {
          return <li key={present}>{present}</li>;
        })}
      </ul>
    </div>
  );
}
export default Present;
