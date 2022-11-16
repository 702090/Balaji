import React, { useState } from "react";
import { useNavigate} from "react-router-dom";

export default function Form() {
  const [name, setname] = useState("");
  const [decease, setDecease] = useState("");
  const [age, setAge] = useState([]);
  const [date, setDate] = useState([]);
  const [docname, setDocname] = useState("");

  let navigate = useNavigate();

  const handleName = (e) => {
    setname(e.target.value);
  };
  const handledecease = (e) => {
    setDecease(e.target.value);
  };
  const handleage = (e) => {
    setAge(e.target.value);
  };
  const handledate = (e) => {
    setDate(e.target.value);
  };
  const handledocname = (e) => {
    setDocname(e.target.value);
  };
  const handleSubmit = (e) => {
    navigate('/welcome')
  };

  return (
    <div className="abc">
      <form onSubmit={handleSubmit}>
        <p>
          Patient Name:
          <input
            type="text"
            name="name"
            required="required"
            value={name}
            onChange={handleName}
          />
        </p>
        <p>
          Decease:
          <input
            type="text"
            name="name"
            required="required"
            value={decease}
            onChange={handledecease}
          />
        </p>
        <p>
          Age:
          <input
            type="number"
            name="name"
            required="required"
            value={age}
            onChange={handleage}
          />
        </p>
        <p>
          Appointment Date:
          <input
            type="date"
            name="name"
            required="required"
            value={date}
            onChange={handledate}
          />
        </p>
        <p>
          Doctor Name:
          <input
            type="text"
            name="name"
            required="required"
            value={docname}
            onChange={handledocname}
          />
        </p>
        <button type="submit" value="Submit">
          Submit{" "}
        </button>
      </form>
    </div>
  );
}
