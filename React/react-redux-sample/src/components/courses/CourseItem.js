import React from "react";
import { Link } from "react-router-dom";

const CourseItem = ({ item, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td style={{ cursor: "pointer" }}>
        <Link to={"/course/" + item.id}>{item.title}</Link>
      </td>
      <td>{item.category}</td>
      <td>{item.authorName}</td>
    </tr>
  );
};

export default CourseItem;
