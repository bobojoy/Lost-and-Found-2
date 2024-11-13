import React from "react";
import NavBar from "./NavBar";
import "../Home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <header className="header">
          <NavBar/>
          
        </header>

        <main>
          <div className="about_section" id="about">
            <div className="about_content">
              <img
                className="image1"
                src="https://www.istockphoto.com/photo/young-singer-recording-and-sounds-a-new-song-album-inside-music-production-studio-gm1476171860-505444748?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ftalent-shows&utm_medium=affiliate&utm_source=unsplash&utm_term=talent+shows%3A%3Aaffiliate-collections%3Ab"
                alt="image"
              />
              <div className="container">
                <h2 id="what">Lost & Found Tracking Made Simple</h2>
                <p id="para1">
                  “Misplaced your items? No problem! Moringa Lost & Found lets
                  you report and track lost items with ease.”
                </p>
              </div>
              <img
                className="image1"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSh6om0qMjGENYqqbDhxsBXdnSVFW8vmERsg&s"
                alt="tracking image"
              />
              <div className="container">
                <h2 id="what">What We Do?</h2>

                <p id="para1">
                  At Moringa Lost and Found, we make it easier to reconnect with
                  what’s been lost. Whether you’ve misplaced something important
                  or found an item that needs to be returned, our
                  community-driven platform helps you track it down. We provide
                  a simple, secure space to post lost and found items, search
                  for belongings, assist others in returning what they’ve found,
                  and offer rewards for those who help reunite lost items with
                  their rightful owners. Our mission is to make the process of
                  reuniting lost items quick, stress-free, and rewarding,
                  helping bring peace of mind to everyone involved.
                </p>
              </div>
              <h1 className="head">ABOUT US</h1>

              <img
                className="image1"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR_H6JCr6svlxiw4URA1YqJk03WWTexQuAxw&s"
                alt="lost and found image"
              />
              <div className="container">
                <h3 id="what">Why Moringa Lost & Found?</h3>
                <p id="para1">
                  Your paragMoringa Lost & Found simplifies the process of
                  recovering lost items by creating a secure, efficient, and
                  transparent system for reporting, tracking, and returning
                  belongings. With real-time updates, a user-friendly interface,
                  and the ability to offer and receive rewards, we make sure
                  lost items are reunited with their owners quickly and fairly.
                </p>
              </div>
              <div className="container">
                <h3 id="what">Why should you use Moringa Lost & Found?</h3>
                <p id="para1">
                  If you’ve ever lost something important or found an item and
                  didn’t know how to return it, Moringa Lost & Found provides a
                  seamless solution to ensure your belongings are easily tracked
                  and recovered. Whether you’re a student, staff member, or
                  visitor, our platform makes sure that no lost item stays
                  forgotten. Wouldn't you want a simple way to recover what’s
                  yours or help someone else get their lost items back?
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;