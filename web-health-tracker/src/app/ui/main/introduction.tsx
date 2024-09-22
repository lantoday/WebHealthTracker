import React from "react";
import Image from "next/image";

const Introduction = () => {
  return (
    <div className="p-3">
      <Image
        width={1000}
        height={550}
        src="/introduction.jpg"
        alt="Health Monitoring"
      />

      <section className="mt-5">
        <h2>Features at a Glance</h2>
        <ul className="features-list">
          <li>
            🦶 <strong>Step Tracker</strong>: Stay active and reach your daily
            goals with real-time tracking of your steps.
          </li>
          <li>
            🏃 <strong>Running Log</strong>: Record your runs, monitor your
            pace, and watch your progress over time.
          </li>
          <li>
            🏋️‍♂️ <strong>Workout Record</strong>: Track personalized workouts for
            your fitness level and preferences.
          </li>
          <li>
            😴 <strong>Sleep Monitor</strong>: Analyze your sleep patterns and
            gain insights into improving your rest.
          </li>
          <li>
            📋 <strong>Medical History</strong>: Keep a detailed record of your
            medical history for easy reference during doctor visits.
          </li>
        </ul>
      </section>

      <section className="mt-5">
        <h2>Why Choose WebHealthTracker?</h2>
        <ul className="benefits-list">
          <li>
            <strong>User-Friendly Interface:</strong> Navigate effortlessly
            through our intuitive design.
          </li>
          <li>
            <strong>Customizable Goals:</strong> Set personalized goals that
            align with your health aspirations.
          </li>
          <li>
            <strong>Data Insights:</strong> Receive actionable insights based on
            your activity and sleep data.
          </li>
          <li>
            <strong>Privacy First:</strong> Your data is secure and privatly
            stored in your personal laptop.
          </li>
        </ul>
      </section>

      <footer className="introduction-footer mt-5">
        <hr />
        <p>
          Join thousands of users taking proactive steps toward a healthier
          life. <br /> Exploer WebHealthTracker today and start your journey to
          a better you!
        </p>
      </footer>
    </div>
  );
};

export default Introduction;
