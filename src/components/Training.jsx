import React, { useEffect, useState } from "react";
import axios from "axios";

const Training = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await axios.get("http://localhost:8001/api/trainings");
        setPrograms(res.data);
      } catch (err) {
        console.error("FETCH TRAININGS ERROR:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  const handleClick = (e, pdfUrl) => {
    e.preventDefault();
    if (pdfUrl) {
      window.open(pdfUrl, "_blank"); // open PDF in new tab
    } else {
      alert("PDF not available for this program.");
    }
  };

  if (loading) {
    return <p className="text-center">Loading trainings...</p>;
  }

  return (
    <section id="training" className="training">
      <div className="container">
        <div className="section-header">
          <h2>Training Programs</h2>
          <p>
            At Premier Hub you will access world class training that equips and
            skills you to run:
          </p>
        </div>

        <div className="programs-grid">
          {programs.length === 0 ? (
            <p className="text-center">No training programs available yet.</p>
          ) : (
            programs.map((program) => (
              <div key={program.id} className="program-card">
                <div className="program-image">
                  <img
                    src={program.image_url}
                    alt={program.title}
                    onError={(e) => (e.target.src = "/images/placeholder.jpg")} // fallback
                  />
                </div>
                <div className="program-content">
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>

                  <button
                    className="btn btn-outline"
                    onClick={(e) => handleClick(e, program.pdf_url)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Training;
