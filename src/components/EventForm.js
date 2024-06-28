import React, { useState } from "react";
import "./EventForm.css"; // Import the CSS file

const EventForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    contactNumber: "",
    email: "",
    address: "",
    communicationMethod: "",
    eventType: "",
    eventTheme: "",
    eventDate: "",
    venue: "",
    attendees: "",
    audience: "",
    objectives: "",
    budget: "",
    speakers: "",
    marketingAssistance: "",
    registrationAssistance: "",
    technicalRequirements: "",
    eventMaterials: "",
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
        Event Type:
        <input
          type="text"
          name="eventType"
          value={formData.eventType}
          onChange={handleChange}
        />
      </label>
      <label>
        Event Theme:
        <input
          type="text"
          name="eventTheme"
          value={formData.eventTheme}
          onChange={handleChange}
        />
      </label>
      <label>
        Event Date:
        <input
          type="date"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleChange}
        />
      </label>
      <label>
        Venue:
        <input
          type="text"
          name="venue"
          value={formData.venue}
          onChange={handleChange}
        />
      </label>
      <label>
        Expected Number of Attendees:
        <input
          type="number"
          name="attendees"
          value={formData.attendees}
          onChange={handleChange}
        />
      </label>
      <label>
        Target Audience:
        <textarea
          name="audience"
          value={formData.audience}
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
        Speakers:
        <textarea
          name="speakers"
          value={formData.speakers}
          onChange={handleChange}
        ></textarea>
      </label>
      <label>
        Do you need assistance with marketing?
        <input
          type="text"
          name="marketingAssistance"
          value={formData.marketingAssistance}
          onChange={handleChange}
        />
      </label>
      <label>
        Do you need assistance with registration?
        <input
          type="text"
          name="registrationAssistance"
          value={formData.registrationAssistance}
          onChange={handleChange}
        />
      </label>
      <label>
        Technical Requirements:
        <textarea
          name="technicalRequirements"
          value={formData.technicalRequirements}
          onChange={handleChange}
        ></textarea>
      </label>
      <label>
        Event Materials:
        <textarea
          name="eventMaterials"
          value={formData.eventMaterials}
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

export default EventForm;
