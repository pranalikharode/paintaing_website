import React, { useState } from "react"; // Import useState here

const FormBox = ({ handleNext, formData }) => {
  const [localData, setLocalData] = useState(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalData({ ...localData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext(localData); // Passing the updated data to the parent (MultiStepForm)
  };
  
  return (
    <div style={styles.box}>
      <h2 style={{ textAlign: "center" }}>BOOK SITE VISIT</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.fieldGroup}>
          <input
            type="text"
            name="name"
            value={localData.name || ""}
            onChange={handleChange}
            style={styles.input}
            placeholder="Name"
            required
          />
          <input
            type="text"
            name="contact"
            value={localData.contact || ""}
            onChange={handleChange}
            style={styles.input}
            placeholder="+91 Phone Number"
            required
          />
          <select
            name="dropdown"
            value={localData.dropdown || ""}
            onChange={handleChange}
            style={styles.select}
            required
          >
            <option value="">Select a location</option>
            <option value="Option 1">Pune</option>
            <option value="Option 2">Shegaon</option>
            <option value="Option 3">Telhara</option>
          </select>
        </div>
        <div style={styles.buttonWrapper}>
          <button type="submit" style={styles.button}>
            Book Site Visit
          </button>
        </div>
      </form>
    </div>
  );
};

const styles = {  // Make sure to define styles like this
  box: {
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "20px",
    padding: "20px",
    width: "70%",
    margin: "20px auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    width: "100%",
    justifyContent: "space-between",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    fontSize: "14px",
    flex: 1,
    boxSizing: "border-box",
  },
  select: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    fontSize: "14px",
    flex: 1,
    boxSizing: "border-box",
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#78e5eb",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    textAlign: "center",
  },
};

export default FormBox;
