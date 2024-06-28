import React, { useState } from "react";
import CommunityBuildingForm from "./CommunityBuildingForm";
import EventForm from "./EventForm";
import WebsiteDesignForm from "./WebsiteDesignForm";
import SocialMediaForm from "./SocialMediaForm";
import "./Contact.css"; // Import the CSS file

const Contact = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    communityBuilding: {
      projectDescription: "",
      targetAudience: "",
      // Add other fields as needed
    },
    eventManagement: {
      eventType: "",
      eventTheme: "",
      // Add other fields as needed
    },
    websiteDesign: {
      projectDescription: "",
      purpose: "",
      // Add other fields as needed
    },
    socialMedia: {
      projectDescription: "",
      platforms: "",
      // Add other fields as needed
    },
  });

  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedServices([...selectedServices, value]);
    } else {
      setSelectedServices(
        selectedServices.filter((service) => service !== value)
      );
    }
  };

  const handleChange = (e, service) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [service]: {
        ...formData[service],
        [name]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const isServiceSelected = (service) => selectedServices.includes(service);

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          ></textarea>
        </label>
        <fieldset>
          <legend>Select Services:</legend>
          <label>
            <input
              type="checkbox"
              value="communityBuilding"
              onChange={handleServiceChange}
            />
            Community Building
          </label>
          <label>
            <input
              type="checkbox"
              value="eventManagement"
              onChange={handleServiceChange}
            />
            Event Management
          </label>
          <label>
            <input
              type="checkbox"
              value="websiteDesign"
              onChange={handleServiceChange}
            />
            Website Design
          </label>
          <label>
            <input
              type="checkbox"
              value="socialMedia"
              onChange={handleServiceChange}
            />
            Social Media Content
          </label>
        </fieldset>

        <div className="forms-section">
          {isServiceSelected("communityBuilding") && (
            <div className="form-section">
              <h2>Community Building Form</h2>
              <CommunityBuildingForm
                formData={formData.communityBuilding}
                handleChange={(e) => handleChange(e, "communityBuilding")}
              />
            </div>
          )}
          {isServiceSelected("eventManagement") && (
            <div className="form-section">
              <h2>Event Management Form</h2>
              <EventForm
                formData={formData.eventManagement}
                handleChange={(e) => handleChange(e, "eventManagement")}
              />
            </div>
          )}
          {isServiceSelected("websiteDesign") && (
            <div className="form-section">
              <h2>Website Design Form</h2>
              <WebsiteDesignForm
                formData={formData.websiteDesign}
                handleChange={(e) => handleChange(e, "websiteDesign")}
              />
            </div>
          )}
          {isServiceSelected("socialMedia") && (
            <div className="form-section">
              <h2>Social Media Content Form</h2>
              <SocialMediaForm
                formData={formData.socialMedia}
                handleChange={(e) => handleChange(e, "socialMedia")}
              />
            </div>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
