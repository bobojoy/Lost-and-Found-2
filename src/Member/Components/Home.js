// src/User/Components/Home.js
import React from "react";
import NavBar from "./NavBar";
import "./Home.css";
import Footer from "./Footer";

const Home = () => {
  
 

  return (
    <>
      <div className="home">
        <header className="header">
          <NavBar />
        </header>

        <main>
          <div className="about_section" id="about">
            <div className="about_content">
              <div className="container1">
                <h2 id="what">Lost & Found Tracking Made Simple</h2>
                <p id="para1">
                  “Misplaced your items? No problem! Moringa Lost & Found lets
                  you report and track lost items with ease.”
                </p>
              </div>

              <div className="container">
                <h2 id="what">What We Do?</h2>

                <img
                  className="image1"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSh6om0qMjGENYqqbDhxsBXdnSVFW8vmERsg&s"
                  alt="tracking image"
                />

                <p id="para1">
                  At Moringa Lost and Found, we make it easier to reconnect with
                  whats been lost. Whether you have misplaced something
                  important or found an item that needs to be returned, our
                  community-driven platform helps you track it down. We provide
                  a simple, secure space to post lost and found items, search
                  for belongings, assist others in returning what they have
                  found, and offer rewards for those who help reunite lost items
                  with their rightful owners. Our mission is to make the process
                  of reuniting lost items quick, stress-free, and rewarding,
                  helping bring peace of mind to everyone involved.
                </p>
              </div>

              <h2 id="what">User Guide Overview</h2>

              <img
                className="image1"
                src="https://www.lostfoundrewards.com/wp-content/uploads/2020/01/banner-lost-and-found-rewards-process-1280x500-1.jpg"
                alt="image"
              />

              <img
                className="image1"
                src="https://www.lostfoundrewards.com/wp-content/uploads/2020/01/banner-lost-and-found-rewards-process-finder-1280x500-1.jpg"
                alt="image"
              />

              <img
                className="image1"
                src="https://www.lostfoundrewards.com/wp-content/uploads/2020/01/banner-lost-and-found-rewards-about-us-1280x500-1.jpg"
                alt="image"
              />

              <div className="container">
                <h3 id="what">Why Us?</h3>
                <p id="para1">
                  We simplify the process of recovering lost items by creating a
                  secure, efficient, and transparent system for reporting,
                  tracking, and returning belongings. With real-time updates, a
                  user-friendly interface, and the ability to offer and receive
                  rewards, we make sure lost items are reunited with their
                  owners quickly and fairly.
                </p>
              </div>

              
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;
