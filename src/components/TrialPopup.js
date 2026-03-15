import { useState } from "react";

function TrialPopup({ closePopup }) {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const submitForm = () => {

    const message = `Hello PowerFit Gym! 
Name: ${name} 
Phone: ${phone} 
I want to book a free trial.`;

    const whatsappURL =
      "https://wa.me/918668961856?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="popup-overlay">
      <div className="popup">

        <h2>Book Your Free Trial</h2>

        <input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <div style={{ marginTop: "10px" }}>

          <button className="submit" onClick={submitForm}>
            Submit
          </button>

          <button className="close" onClick={closePopup}>
            Close
          </button>

        </div>

      </div>
    </div>
  );
}

export default TrialPopup;