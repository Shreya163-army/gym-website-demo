import { FaDumbbell, FaRunning, FaSpa } from "react-icons/fa";

function Programs() {
  return (
    <section className="programs" id="programs">

      <h2>Our Programs</h2>

      <div className="cards">

        <div className="card">
        <FaDumbbell size={30} color="#ff4d4d"/>
          <h3>Weight Training</h3>
          <p>Build muscle and strength with expert guidance.</p>
        </div>

        <div className="card">
        <FaRunning size={30} color="#ff4d4d"/>
          <h3>Cardio Training</h3>
          <p>Improve endurance and burn calories fast.</p>
        </div>

        <div className="card">
        <FaSpa size={30} color="#ff4d4d"/>
          <h3>Yoga & Flexibility</h3>
          <p>Enhance flexibility and mental focus.</p>
        </div>

      </div>

    </section>
  );
}

export default Programs;