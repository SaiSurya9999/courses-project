'use client';
import React from "react";
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <React.Fragment>

      <header className="header">
        <section className="flex">

          <a href="home.html" className="logo">Coding Made Easy</a>

          <form action="search.html" method="post" className="search-form">
            <input type="text" name="search_box" required placeholder="search courses..." />
            <button type="submit" className="fas fa-search"></button>
          </form>

          <div className="icons">
            <div id="menu-btn" className="fas fa-bars"></div>
            <div id="search-btn" className="fas fa-search"></div>
            <div id="user-btn" className="fas fa-user"></div>
            <div id="toggle-btn" className="fas fa-sun"></div>
          </div>

          <div className="profile">
            <img src="pic-1.jpg" className="image" alt="" />
            <h3 className="name">yasaswini</h3>
            <p className="role">student</p>
            <a href="profile.html" className="btn">view profile</a>
            <div className="flex-btn">
              <a href="login.html" className="option-btn">login</a>
              <a href="register.html" className="option-btn">register</a>
            </div>
          </div>

        </section>
      </header>
      <div className="side-bar">

        <div id="close-btn">
          <i className="fas fa-times"></i>
        </div>

        <div className="profile">
          <img src="pic-1.jpg" className="image" alt="" />
          <h3 className="name">yasaswini</h3>
          <p className="role">student</p>
          <a href="profile.html" className="btn">view profile</a>
        </div>

        <Navbar />

      </div>

      <section className="home-grid">

        <h1 className="heading">quick options</h1>

        <div className="box-container">

          <div className="box">
            <h3 className="title">likes and comments</h3>
            <p className="likes">total likes : <span>25</span></p>
            <a href="#" className="inline-btn">view likes</a>
            <p className="likes">total comments : <span>12</span></p>
            <a href="#" className="inline-btn">view comments</a>
            <p className="likes">saved playlists : <span>4</span></p>
            <a href="#" className="inline-btn">view playlists</a>
          </div>

          <div className="box">
            <h3 className="title">top categories</h3>
            <div className="flex">
              <a href="#"><i className="fas fa-code"></i><span>development</span></a>
              <a href="#"><i className="fas fa-chart-simple"></i><span>business</span></a>
              <a href="#"><i className="fas fa-pen"></i><span>design</span></a>
              <a href="#"><i className="fas fa-chart-line"></i><span>marketing</span></a>
              <a href="#"><i className="fas fa-music"></i><span>music</span></a>
              <a href="#"><i className="fas fa-camera"></i><span>photography</span></a>
              <a href="#"><i className="fas fa-cog"></i><span>software</span></a>
              <a href="#"><i className="fas fa-vial"></i><span>science</span></a>
            </div>
          </div>

          <div className="box">
            <h3 className="title">popular topics</h3>
            <div className="flex">
              <a href="#"><i className="fab fa-html5"></i><span>HTML</span></a>
              <a href="#"><i className="fab fa-css3"></i><span>CSS</span></a>
              <a href="#"><i className="fab fa-js"></i><span>javascript</span></a>
              <a href="#"><i className="fab fa-react"></i><span>react</span></a>
              <a href="#"><i className="fab fa-php"></i><span>PHP</span></a>
              <a href="#"><i className="fab fa-bootstrap"></i><span>bootstrap</span></a>
            </div>
          </div>

          <div className="box">
            <h3 className="title">become a tutor</h3>
            <p className="tutor">If you want to start teaching with us.Sign up with us right away.</p>
            <a href="teachers.html" className="inline-btn">get started</a>
          </div>

        </div>

      </section>



      <section className="courses">

        <h1 className="heading">our courses</h1>

        <div className="box-container">

          <div className="box">
            <div className="tutor">
              <img src="pic-2.jpg" alt="" />
              <div className="info">
                <h3>yasaswini</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img src="thumb-1.png" alt="" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete HTML tutorial</h3>
            <a href="playlist.html" className="inline-btn">view playlist</a>
          </div>

          <div className="box">
            <div className="tutor">
              <img src="pic-3.jpg" alt="" />
              <div className="info">
                <h3>yoshitha</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img src="thumb-2.png" alt="" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete CSS tutorial</h3>
            <a href="playlist.html" className="inline-btn">view playlist</a>
          </div>

          <div className="box">
            <div className="tutor">
              <img src="pic-4.jpg" alt="" />
              <div className="info">
                <h3>amulya</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img src="thumb-3.png" alt="" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete JS tutorial</h3>
            <a href="playlist.html" className="inline-btn">view playlist</a>
          </div>

          <div className="box">
            <div className="tutor">
              <img src="pic-5.jpg" alt="" />
              <div className="info">
                <h3>sahithi</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img src="thumb-4.png" alt="" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete Boostrap tutorial</h3>
            <a href="playlist.html" className="inline-btn">view playlist</a>
          </div>

          <div className="box">
            <div className="tutor">
              <img src="pic-6.jpg" alt="" />
              <div className="info">
                <h3>shyamala</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img src="thumb-5.png" alt="" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete JQuery tutorial</h3>
            <a href="playlist.html" className="inline-btn">view playlist</a>
          </div>

          <div className="box">
            <div className="tutor">
              <img src="pic-7.jpg" alt="" />
              <div className="info">
                <h3>harsh</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img src="thumb-6.png" alt="" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete SASS tutorial</h3>
            <a href="playlist.html" className="inline-btn">view playlist</a>
          </div>

        </div>

        <div className="more-btn">
          <a href="courses.html" className="inline-option-btn">view all courses</a>
        </div>

      </section>

      <footer className="footer">

        &copy; copyright @ 2022 by <span>Coding Made Easy</span> | all rights reserved!

      </footer>
    </React.Fragment>
  );
}
