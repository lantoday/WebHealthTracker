import React from "react";
import Image from "next/image";

const Introduction = () => {
  return (
    <div className="p-3 mt-2">
      <Image
        width={1000}
        height={550}
        src="/introduction.jpg"
        alt="Health Monitoring"
      />

      <section className="mt-3 p-3">
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

      <section className="mt-3 p-3">
        <h2>Why choose WebHealthTracker?</h2>
        <ul className="benefits-list">
          <li>
            <strong>User-Friendly Interface:</strong> Experience seamless
            navigation with our intuitive design, making it easy for users of
            all ages to access and utilize features without any hassle.
          </li>
          <li>
            <strong>Data Insights:</strong> Unlock actionable insights derived
            from your activity and sleep data, empowering you to make informed
            decisions that enhance your overall well-being.
          </li>
          <li>
            <strong>Privacy First:</strong> Enjoy peace of mind knowing that
            your personal data is secure and stored privately on your device,
            prioritizing your privacy and confidentiality at every step.
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
