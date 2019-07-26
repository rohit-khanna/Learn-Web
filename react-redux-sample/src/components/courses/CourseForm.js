import React from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
const CourseForm = ({
  course,
  authors,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h4>{course.id ? "Edit" : "Add"} Course</h4>
      {errors.onSave && (
        <div className="alert alert-danger">{errors.onSave}</div>
      )}
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
      />
      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId || ""}
        defaultOption={"Select Author"}
        options={authors.map(a => ({
          value: a.id,
          text: a.name
        }))}
        onChange={onChange}
      />
      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

export default CourseForm;
