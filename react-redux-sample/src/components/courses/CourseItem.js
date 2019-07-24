import React from "react";
import { Link } from "react-router-dom";

const CourseItem = ({ item }) => {
  return (
    <tr>
      <td>{item.id}</td>
      <td style={{ cursor: "pointer" }}>
        <Link to={"/course/" + item.id}>{item.title}</Link>
      </td>
      <td>{item.category}</td>
      <td>{item.authorName}</td>
    </tr>
  );
};

export default CourseItem;
