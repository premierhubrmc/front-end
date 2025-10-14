import React, { useEffect, useState } from "react";
import axios from "axios";
import "./training.css"

const API_URL = import.meta.env.VITE_API_URL;

const Training = () => {
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPdfs = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/trainings`);
        setPdfs(res.data);
      } catch (err) {
        console.error("FETCH TRAININGS ERROR:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPdfs();
  }, []);

  if (loading) {
    return <p className="text-center">Loading training materials...</p>;
  }

  return (
  <section id="training" className="training" style={{ backgroundColor: "#fff" }}>
    <div className="container">
      <div className="section-header text-center mb-4">
             {/* Header part */}
      <div className="section-header">
        <div className="about-container">
          <div className="logo">
            <img src="./logo.svg" alt="PhRMC Logo" />
            <div className="brand-title">
              <span className="line">
                Premier <span className="hub">HUB</span>{" "}
                <span className='logo_small_text'>for</span>
              </span>
              <span className="line">Risk Management &</span>
              <span className="line">Compliance</span>
            </div>
          </div> 
          <div>
            <h2 style={{ color: "#fff" }}>Training Programs</h2>
          </div>           
        </div>
      </div>
      </div>
      <div className="training-intro">
        <p>At Premier <span>Hub</span> you will access world class training that equips and skills you to run:</p>
        <img src="/images/training_intro.png" alt="training itro" />
      </div>
      <div className="pdf-display-grid">
        {pdfs.length === 0 ? (
          <p className="text-center">No training materials available yet.</p>
        ) : (
          pdfs.map((item) => {
            const pdfUrl = item.pdf_url?.startsWith("http")
              ? item.pdf_url
              : `https://files.premierhubrmc.com/${item.pdf_url}`;

            return (
              <div key={item.id} id={`pdf-${item.id}`}>
                <embed
                  src={
                    item.pdf_url?.startsWith("http")
                      ? item.pdf_url
                      : `https://files.premierhubrmc.com/${item.pdf_url}`
                  }
                  type="application/pdf"
                  width="100%"
                  height="1400px"
                />
              </div>

            );
          })
        )}
      </div>
<main className="training-details">
  <div className="training-fees">
    <h1>Training Fees</h1>
    <p>5-day training @ Ksh 130,000 or US$ 1,000 per person</p>
    <p>10-day training @ Ksh 260,000 or US$ 2,000 per person</p>
  </div>

  <div className="customized-solutions">
    <h1>Customized Solutions</h1>
    <p>
      We focus on equipping clients with the skills, knowledge and behaviours
      needed for optimum performance. We assemble our training and consultancy
      solutions completely around client desired outcomes. We also design
      customized in-house courses and training.
    </p>
    <p>
      All our learning is designed to be fun and engaging — watch videos and
      animations. The trainings include quizzes and ‘reflection points’ to help
      your teams review their learning and complete interactive activities.
    </p>
  </div>
</main>

      
    </div>
  </section>
);

};

export default Training;
