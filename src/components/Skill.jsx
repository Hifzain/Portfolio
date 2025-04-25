import React, { useState } from 'react';

export default function Skill() {
  const [activeTab, setActiveTab] = useState("Frontend");

  const skills = {
    Frontend: [
      { id: 1, name: "HTML 5", level: 90 },
      { id: 2, name: "CSS 3", level: 70 },
      { id: 3, name: "JavaScript (ES6+)", level: 60 },
      { id: 4, name: "React.js", level: 50 },
      { id: 5, name: "Bootstrap", level: 60 },
      { id: 6, name: "Tailwind", level: 60 },
      { id: 6, name: "Jquery", level: 50 },
    ],
    Backend: [
      { id: 1, name: "Django", level: 80 },
      { id: 2, name: "DRF", level: 70 },
      { id: 3, name: "Python", level: 70 },
      { id: 4, name: "MySql", level: 80 },
      { id: 5, name: "SQlite", level: 70 },
      { id: 6, name: "API", level: 70 },
      { id: 7, name: "PostgreSQL", level: 50 },
    ],
    Other: [
      { id: 1, name: "Git & GitHub", level: 60 },
      { id: 2, name: "vsCode", level: 80 },
      { id: 3, name: "Jupyter Notebook", level: 50 },
      { id: 4, name: "POSTMAN", level: 50 },
      { id: 5, name: "MicroSoft Office", level: 70 },

    ],
  };

  return (
    <>
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-12 text-black" name="Skills">
      <h1 className="text-3xl font-bold mb-8 underline">Skills</h1>

      {/* Tabs */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {["Frontend", "Backend", "Other"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-md font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === tab ? "bg-green-600 text-white" : "bg-gray-700 text-gray-200"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skill Bars */}
      <div className="grid md:grid-cols-2 gap-6">
        {skills[activeTab].map(({ id, name, level }) => (
          <div key={id}>
            <div className="flex justify-between mb-1">
              <span>{name}</span>
              <span>{level}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2.5">
              <div
                className="bg-blue-500 h-2.5 rounded-full"
                style={{ width:`${level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
     
    </div>
 <hr className='border-gray-200'/>
 </>
  );
}