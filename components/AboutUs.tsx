import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-10 py-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">About US</h1>
      </div>
      <div>
        <h2 className="font-semibold text-lg mt-2">
          Welcome to Rongo University Tech Community
        </h2>
        <p>
          Are you a passionate developer at Rongo University, eager to learn,
          grow, and collaborate with like-minded individuals? Look no further!
          RUTC is your gateway to an amazing community of students and faculty
          who share a passion for exploring the latest Google developer tools
          and technologies.
        </p>
      </div>
      <div>
        <h2 className="font-semibold text-lg mt-2">What we do</h2>
        <p>
          At RUTC, we delve into a wide array of Google developer technologies.
          Whether you are starting your developer journey or looking to expand
          your skillset, we have something for you. Here is a glimpse into what
          we offer:
        </p>
        <ul>
          <li>
            <b>Web Development:</b> Craft dynamic web experiences leveraging
            Firebase, Chrome, and other web technologies.
          </li>
          <li>
            <b>Android Development:</b> Build robust mobile applications using
            Android and related tools.
          </li>
          <li>
            <b>UI/UX design:</b> Build appealing user interfaces using different
            tools like Figma, Adobe, and others.
          </li>
          <li>
            <b>Cloud Computing:</b> Explore the power of cloud computing with
            Google Cloud Platform, including App Engine.
          </li>
          <li>
            <b>Advanced APIs:</b> Learn about and utilize Google&apos;s advanced
            product APIs like YouTube API, Maps API, and Chart Tools.
          </li>
        </ul>
      </div>
      <div>
        <h2 className="font-semibold text-lg mt-2">Why Join RUTC?</h2>
        <ul>
          <li>
            <b>Learning:</b> Attend informative workshops, seminars, and coding
            sessions to gain hands-on experience with cutting-edge technologies.
          </li>
          <li>
            <b>Networking:</b> Connect with fellow developers, industry experts,
            and faculty members. Share your knowledge, learn from others, and
            build a strong network.
          </li>
          <li>
            <b>Innovation:</b> Participate in hackathons, coding competitions,
            and collaborative projects to bring your ideas to life and showcase
            your skills.
          </li>
          <li>
            <b>Support:</b> Get guidance and mentorship from experienced
            developers and faculty who are invested in your success.
          </li>
        </ul>
      </div>
      <div>
        <h2 className="font-semibold text-lg mt-2">Join RUTC today!</h2>
        <p>
          Ready to take your skills to the next level and join a vibrant
          developer community? Sign up for RUTC today and embark on your journey
          to becoming a Google technology expert!
        </p>
      </div>
      <div>
        <h2 className="font-semibold text-lg mt-2">Want to Learn More?</h2>
        <p>
          For more information on the global GDG program and how to get involved
          with RUTC specifically,{" "}
          <a href="https://x.com/DscRongo" className="text-blue-500">
            follow us on X
          </a>
          Let us build the future together!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
