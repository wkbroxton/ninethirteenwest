import React, { useState } from "react";
import "./SocialMediaForm.css"; // Import the CSS file

const SocialMediaForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    contactNumber: "",
    email: "",
    address: "",
    communicationMethod: "",
    projectDescription: "",
    platforms: "",
    targetAudience: "",
    objectives: "",
    budget: "",
    timeline: "",
    contentCalendar: "",
    strategyAssistance: "",
    contentType: "",
    branding: "",
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
        Platforms:
        <input
          type="text"
          name="platforms"
          value={formData.platforms}
          onChange={handleChange}
        />
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
        Key Objectives:
        <textarea
          name="objectives"
          value={formData.objectives}
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
        Timeline:
        <input
          type="text"
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
        />
      </label>
      <label>
        Content Calendar:
        <input
          type="text"
          name="contentCalendar"
          value={formData.contentCalendar}
          onChange={handleChange}
        />
      </label>
      <label>
        Do you need assistance with strategy planning?
        <input
          type="text"
          name="strategyAssistance"
          value={formData.strategyAssistance}
          onChange={handleChange}
        />
      </label>
      <label>
        Content Type:
        <textarea
          name="contentType"
          value={formData.contentType}
          onChange={handleChange}
        ></textarea>
      </label>
      <label>
        Branding:
        <input
          type="text"
          name="branding"
          value={formData.branding}
          onChange={handleChange}
        />
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

export default SocialMediaForm;
