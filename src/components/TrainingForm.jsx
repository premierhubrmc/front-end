import React, { useState } from "react";
import { Upload, FileText, Image, Send } from "lucide-react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const TrainingForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pdf, setPdf] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!pdf || !image) {
      alert("Please upload both a PDF and an Image.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("pdf", pdf);
    formData.append("image", image);

    try {
      setLoading(true);
        await axios.post(
          `${API_URL}/api/trainings`, 
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );


      alert("Training program uploaded successfully!");
      setTitle("");
      setDescription("");
      setPdf(null);
      setImage(null);
    } catch (err) {
      console.error("UPLOAD ERROR:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Failed to upload training.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="landscape-form-container">
      <div className="form-header">
        <h2>Upload Training Program</h2>
        <p>Create and share your training materials with ease</p>
      </div>

      <form onSubmit={handleSubmit} className="landscape-form">
        <div className="form-row">
          <div className="form-group">
            <label>
              <FileText className="label-icon" />
              Training Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter training program title"
              required
            />
          </div>

          <div className="form-group">
            <label>
              <Upload className="label-icon" />
              Training Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your training program"
              required
            />
          </div>
        </div>

        <div className="form-row">
          {/* PDF Upload */}
          <div className="form-group file-group">
            <label>
              <FileText className="label-icon" />
              Upload Training PDF
            </label>
            <div className="file-input-wrapper">
              <input
                type="file"
                accept="application/pdf"
                onChange={(e) => setPdf(e.target.files[0])}
                required
                id="pdf-input"
              />
              <label htmlFor="pdf-input" className="file-input-label">
                <Upload className="upload-icon" />
                {pdf ? pdf.name : "Choose PDF file"}
              </label>
            </div>
          </div>

          {/* Image Upload */}
          <div className="form-group file-group">
            <label>
              <Image className="label-icon" />
              Upload Training Image
            </label>
            <div className="file-input-wrapper">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                required
                id="image-input"
              />
              <label htmlFor="image-input" className="file-input-label">
                <Upload className="upload-icon" />
                {image ? image.name : "Choose image file"}
              </label>
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-button" disabled={loading}>
            <Send className="button-icon" />
            {loading ? "Uploading..." : "Upload Training Program"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TrainingForm;
