import React, { useState } from "react";
import "./CommunityBuildingForm.css"; // Import the CSS file

const CommunityBuildingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    contactNumber: "",
    email: "",
    address: "",
    communicationMethod: "",
    projectDescription: "",
    targetAudience: "",
    location: "",
    objectives: "",
    startDate: "",
    duration: "",
    existingEfforts: "",
    budget: "",
    metrics: "",
    challenges: "",
    partnerships: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Organization:
        <input
          type="text"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
        />
      </label>
      <label>
        Contact Number:
        <input
          type="text"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>
      <label>
        Preferred Method of Communication:
        <input
          type="text"
          name="communicationMethod"
          value={formData.communicationMethod}
          onChange={handleChange}
        />
      </label>
      <label>
        Project Description:
        <textarea
          name="projectDescription"
          value={formData.projectDescription}
          onChange={handleChange}
        ></textarea>
      </label>
      <label>
        Target Audience:
        <textarea
          name="targetAudience"
          value={formData.targetAudience}
          onChange={handleChange}
        ></textarea>
      </label>
      <label>
        Geographic Location:
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </label>
      <label>
        Key Objectives:
        <textarea
          name="objectives"
          value={formData.objectives}
          onChange={handleChange}
        ></textarea>
      </label>
      <label>
        Expected Start Date:
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />
      </label>
      <label>
        Duration:
        <input
          type="text"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
        />
      </label>
      <label>
        Existing Efforts:
        <textarea
          name="existingEfforts"
          value={formData.existingEfforts}
          onChange={handleChange}
        ></textarea>
      </label>
      <label>
        Budget:
        <input
          type="number"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
        />
      </label>
      <label>
        Specific Metrics:
        <textarea
          name="metrics"
          value={formData.metrics}
          onChange={handleChange}
        ></textarea>
      </label>
      <label>
        Challenges:
        <textarea
          name="challenges"
          value={formData.challenges}
          onChange={handleChange}
        ></textarea>
      </label>
      <label>
        Partnerships:
        <textarea
          name="partnerships"
          value={formData.partnerships}
          onChange={handleChange}
        ></textarea>
      </label>
      <label>
        Additional Information:
        <textarea
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
        ></textarea>
      </label>
    </form>
  );
};

export default CommunityBuildingForm;
