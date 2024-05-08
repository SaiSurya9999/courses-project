'use client';
import React from "react";
import Navbar from '../components/Navbar';

export default function AboutUs() {
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

      <section className="about">

        <div className="row">

          <div className="image">
            <img src="about-img.svg" alt="" />
          </div>

          <div className="content">
            <h3>why choose us?</h3>
            <p>Coding Made Easy provides you the courses online,where you dont need to roam all places for each topic you can learn them at the comfort of your home.more over its free of cost, and explanations here doesnot need much effort.you can understand them within a single go.</p>
            <a href="courses.html" className="inline-btn">our courses</a>
          </div>

        </div>

        <div className="box-container">

          <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <div>
              <h3>+10k</h3>
              <p>online courses</p>
            </div>
          </div>

          <div className="box">
            <i className="fas fa-user-graduate"></i>
            <div>
              <h3>+40k</h3>
              <p>brilliant students</p>
            </div>
          </div>

          <div className="box">
            <i className="fas fa-chalkboard-user"></i>
            <div>
              <h3>+2k</h3>
              <p>expert tutors</p>
            </div>
          </div>

          <div className="box">
            <i className="fas fa-briefcase"></i>
            <div>
              <h3>100%</h3>
              <p>job placement</p>
            </div>
          </div>

        </div>

      </section>

      <section className="reviews">

        <h1 className="heading">student's reviews</h1>

        <div className="box-container">

          <div className="box">
            <p>Amazing experience. Truly an eye-opener for several faculty like me who enrolled for the course from my institution. Thanks to both the course instructors for their wonderful synergy and contribution.</p>
            <div className="student">
              <img src="pic-2.jpg" alt="" />
              <div>
                <h3>Rishi</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="box">
            <p>If a person takes the time to read all of the attached pdfs and website you can get quite a detailed knowledge of this topic. The course did a very good job of mirroring the principles that it taught.</p>
            <div className="student">
              <img src="pic-3.jpg" alt="" />
              <div>
                <h3>Aarsha</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="box">
            <p>Thanks to the course teachers and others associated with designing such a wonderful learning experience. Appreciate each one of your contributions is peer learning and evaluation. Best wishes</p>
            <div className="student">
              <img src="pic-4.jpg" alt="" />
              <div>
                <h3>sruthi</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="box">
            <p>A wonderful experience and a handy course. The lecturers are great with a very nice way on interacting. Thank you for all your cooperation. Hope to see more of you in future. Thank you once again.</p>
            <div className="student">
              <img src="pic-5.jpg" alt="" />
              <div>
                <h3>ravi</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="box">
            <p>Very interesting subject but for a course on e-learning the methods are quite modest and a bit obsolete. There is a lot of repetitive tasks and lectures following the same pattern. Also a lot of hyperlinks to recommended readings don't work. I've taken a few more appealing courses here already</p>
            <div className="student">
              <img src="pic-6.jpg" alt="" />
              <div>
                <h3>venkat</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="box">
            <p>This course provides me the information about various online tools, strategies and planning for the best techniques for online courses. I will make the use of this valuable information in my work. </p>
            <div className="student">
              <img src="pic-7.jpg" alt="" />
              <div>
                <h3>rani</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>
      <footer className="footer">

        &copy; copyright @ 2024 by <span>Coding Made Easy</span> | all rights reserved!

      </footer>
    </React.Fragment>
  );
}
