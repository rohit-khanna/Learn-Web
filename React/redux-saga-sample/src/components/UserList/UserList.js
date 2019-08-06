import React from "react";
import "./UserList.css";

const UserList = ({ users }) => {
  return users.length
    ? users.map(user => <ListItem user={user} key={user.id} />)
    : "-- No Records found --";
};

const ListItem = ({
  user: {
    id,
    name,
    email,
    company,
    address: { street, suite, city, zipcode }
  }
}) => {
  return (
    <div className="item">
      <div className="row">
        <div className="col-md-2 head">ID: {id}</div>
        <div className="col-md-auto head">{name}</div>
      </div>
      <div className="row">
        <div className="col-md-5 companyName">
          {" "}
          <i>Company: </i>
          {company.name}
        </div>
        <div className="col-md-auto email">{email}</div>
      </div>
      <div className="row">
        <div className="col-sm-auto">
          {" "}
          <i>Address: </i>
        </div>
        <div className="col-sm-auto address">
          {street} , {suite} , {city} , {zipcode}
        </div>
      </div>
    </div>
  );
};

export default UserList;
