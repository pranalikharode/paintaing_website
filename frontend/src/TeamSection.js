// TeamSection.js
import React from "react";
import "./TeamSection.css";

const teamMembers = [
  {
    name: "Brijesh",
    age: 30,
    location: "Gorkhakpur, UP",
    experience: 11,
    akpExperience: 8,
    quote:
      "I faced a lot of hardships early in my life. Due to my family's financial situation, I had to seek a job and become a painter. I bought land in Bangalore and arranged my sister's wedding. I aim to grow further with AKP.",
    image: "https://via.placeholder.com/150", // Replace with actual image
  },
  {
    name: "Manju GM",
    age: 27,
    location: "Kolar, Karnataka",
    experience: 9,
    akpExperience: 6,
    quote:
      "I hail from Kolar. I'm the sole breadwinner for my family. I joined AKP because I have a strong passion for painting and am eager to expand my skills. My dream is to empower the people in my village by providing employment.",
    image: "https://via.placeholder.com/150", // Replace with actual image
  },
];

const TeamSection = () => {
  return (
    <div className="team-section">
      <h2 className="title">
        Our Team Who <span className="highlight">Makes You Happy</span>
      </h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="team-image" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-info">
              {member.age}-year-old painter from {member.location}, has {member.experience} years of experience, including {member.akpExperience} years with AKP.
            </p>
            <div className="team-quote">
              <p>“ {member.quote} ”</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;