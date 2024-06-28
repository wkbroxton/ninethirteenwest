import React, { useState } from "react";
import "./WebsiteDesignForm.css"; // Import the CSS file

const WebsiteDesignForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    contactNumber: "",
    email: "",
    address: "",
    communicationMethod: "",
    projectDescription: "",
    purpose: "",
    existingWebsite: "",
    targetAudience: "",
    objectives: "",
    platform: "",
    budget: "",
    timeline: "",
    designStyle: "",
    logo: "",
    pages: "",
    content: "",
    features: "",
    maintenance: "",
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
        Purpose of the Website:
        <input
          type="text"
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
        />
      </label>
      <label>
        Existing Website URL:
        <input
          type="text"
          name="existingWebsite"
          value={formData.existingWebsite}
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
        Preferred Platform:
        <input
          type="text"
          name="platform"
          value={formData.platform}
          onChange={handleChange}
        />
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
        Design Style:
        <input
          type="text"
          name="designStyle"
          value={formData.designStyle}
          onChange={handleChange}
        />
      </label>
      <label>
        Logo and Branding:
        <input
          type="text"
          name="logo"
          value={formData.logo}
          onChange={handleChange}
        />
      </label>
      <label>
        Pages:
        <textarea
          name="pages"
          value={formData.pages}
          onChange={handleChange}
        ></textarea>
      </label>
      <label>
        Content:
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
        ></textarea>
      </label>
      <label>
        Features:
        <textarea
          name="features"
          value={formData.features}
          onChange={handleChange}
        ></textarea>
      </label>
      <label>
        Ongoing Maintenance
        <input
          type="text"
          name="maintenance"
          value={formData.maintenance}
          onChange={handleChange}
        />
      </label>
      <label>
        Additional Information:
        <textarea
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
        ></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default WebsiteDesignForm;
