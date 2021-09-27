import React from "react";

import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {
          /*  Add List of Users here.  */
          props.users.map((users) => (
            <li key={users.id}>
				{/* User{users.id} */}
				{/* display user.id if you want, cause the example follow this rule*/}
              User {users.name} ({users.age} years old)
            </li>
          ))
        }
      </ul>
    </Card>
  );
};

export default UsersList;
