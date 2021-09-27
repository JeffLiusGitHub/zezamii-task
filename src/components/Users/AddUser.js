import React, { useEffect } from "react";
import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import UsersList from "./UsersList";

let usersList = [];

const AddUser = () => {
  /*

	Add functions here. 

	*/
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [nameisEmpty, setNameIsEmpty] = useState(false);
  const [ageisEmpty, setAgeIsEmpty] = useState(false);
  const [notNumber, setNotNumber] = useState(false);
  const [underZero, setUnderZero] = useState(false);

  const nameInputEvent = (event) => {
    setName(event.target.value);
  };

  const ageInputEvent = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    setNameIsEmpty(false);
    setAgeIsEmpty(false);
    setNotNumber(false);
    setUnderZero(false);
  }, [usersList]);

  const addUserEvent = (event) => {
    event.preventDefault();
    setNameIsEmpty(name.trim() === "");
    setAgeIsEmpty(age.trim() === "");
    setNotNumber(isNaN(age));
    setUnderZero(age <= 0);

    if (
      !(name.trim() === "") &&
      !(age.trim() === "") &&
      !isNaN(age) &&
      !(age <= 0)
    ) {
      usersList.push({ id: count, name: name, age: age });
      setCount(count + 1);
    }
    setName("");
    setAge("");
  };

  return (
    <div>
      <Card className={classes.card}>
        <form onSubmit={addUserEvent} className={classes.form}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={name}
            onChange={nameInputEvent}
          />
          {nameisEmpty && (
            <p style={{ color: "red" }}>UserName cannot be empty!</p>
          )}
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" value={age} onChange={ageInputEvent} />
          {ageisEmpty && <p style={{ color: "red" }}>Age cannot be empty!</p>}

          {notNumber && <p style={{ color: "red" }}>Age must be a number!</p>}

          {underZero && <p style={{ color: "red" }}>Age must over Zero!</p>}
          <Button type="submit" className={classes.submit}>
            Add User
          </Button>
        </form>
      </Card>
      <UsersList users={usersList} />
    </div>
  );
};

export default AddUser;
