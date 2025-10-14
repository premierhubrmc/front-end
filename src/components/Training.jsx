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
    </div>
  </section>
);

};

export default Training;
