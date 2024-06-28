"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const BugForm = ({ bug }) => {
  const router = useRouter();
  const EDITMODE = bug._id === "new" ? false : true;

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (EDITMODE) {
      const res = await fetch(`/api/Bugs/${bug._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });
      if (!res.ok) {
        throw new Error("Failed to Update Bug");
      }
    } else {
      const res = await fetch("/api/Bugs", {
        method: "POST",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });
      if (!res.ok) {
        throw new Error("Failed to add Bug");
      }
    }
    // router.refresh(2);
    // Refresh the page
    // location.reload();
    router.push("/edit");
    router.refresh();
    // try {

    // } catch (error) {
    // console.error(error);
    // }
  };

  const startingBugData = {
    title: "",
    description: "",
    priority: 1,
    status: "not started",
    progress: 0,
    category: "UI",
  };

  if (EDITMODE) {
    startingBugData["title"] = bug.title;
    startingBugData["description"] = bug.description;
    startingBugData["priority"] = bug.priority;
    startingBugData["status"] = bug.status;
    startingBugData["progress"] = bug.progress;
    startingBugData["category"] = bug.category;
  }

  const [formData, setFormData] = useState(startingBugData);

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>{EDITMODE ? "Update Your Bug" : "Add New Bug"}</h3>
        <label>Bug Name</label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          required={true}
        />

        <label>Bug Description</label>
        <textarea
          id="description"
          name="description"
          rows={5}
          value={formData.description}
          onChange={handleChange}
          required={true}
        />

        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="UI">UI</option>
          <option value="DB">DB</option>
          <option value="Backend">Backend</option>
        </select>

        <label>Priority</label>
        <div>
          <input
            id="priority-1"
            name="priority"
            type="radio"
            value="1"
            onChange={handleChange}
            checked={formData.priority == 1}
          />
          <label>1</label>
          <input
            id="priority-2"
            name="priority"
            type="radio"
            value="2"
            onChange={handleChange}
            checked={formData.priority == 2}
          />
          <label>2</label>
          <input
            id="priority-3"
            name="priority"
            type="radio"
            value="3"
            onChange={handleChange}
            checked={formData.priority == 3}
          />
          <label>3</label>
        </div>
        <label>Progress</label>
        <input
          type="range"
          name="progress"
          onChange={handleChange}
          value={formData.progress}
          min="0"
          max="100"
        />
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="not started">Not Started</option>
          <option value="in progress">In Progress</option>
          <option value="fixed">Fixed</option>
        </select>
        <input
          type="submit"
          className="btn "
          value={EDITMODE ? "Update Bug" : "Add Bug"}
        />
      </form>
    </div>
  );
};

export default BugForm;
