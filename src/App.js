import { useRef } from "react";
import './App.css';
import React from 'react';
import Typewriter from "./script";
import Navbar from './Navbar';
import pro from './propic.png'
import { LuGraduationCap } from "react-icons/lu";
import { GrDocumentText } from "react-icons/gr";
import { SlSocialLinkedin } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io"
import astro from './astro.png';
import website from './website.png';
import chase from './for.png';
import att from './att.png';
import { Link } from 'react-scroll';


const App = () => {
  return (
    <div>
      <Navbar />
        <div className="Home"> 
          <h2> WILSON HUANG </h2>
          <Typewriter />
          <Link to="AboutTitle" smooth={true} duration={500}>
            <IoIosArrowDown size='3rem' color='black' className="arrow" />
          </Link>
        </div>
        <div className="AboutTitle"> 
          <h2> ABOUT ME </h2>
          <span> MY INTRODUCTION </span>
        </div>
        <div className="About"> 
            <img src={pro} alt="pro" className="pro"/>

            <div className="aboutgrid">

              <div className="aboutbox">
                <LuGraduationCap size='3rem' color='black'/>           
                <h3 className="abouttitle">UNIVERSITY OF HOUSTON</h3>
                <span className="aboutsubtitle">MAY 2025</span>
              </div>

              <div className="aboutbox">
                <GrDocumentText size='3rem' color='black'/>           
                <h3 className="abouttitle"> RESUME DOWNLOAD</h3>
                <span className="aboutsubtitle">CLICK HERE</span>
              </div>

              <div className="aboutbox">
                <SlSocialLinkedin size='3rem' color='black'/>           
                <h3 className="abouttitle">LINKEDIN</h3>
                <h3 className="abouttitle">REDIRECT</h3>
                <a href="https://google.com" className="aboutsubtitle" target="_blank" rel="noopener noreferrer"> CLICK HERE </a>
            </div>
          </div>
        </div>
        <div className="aboutme">
            <p className="description">
              Hi! I'm currently starting my third year at the University of Houston majoring in
              Computer Science. I am currently looking for internship opportunities in order to be
              able to expand my knowledge and gain professional experience! I have a strong passion
              for computer science and would love to showcase that through this website.
            </p>
          </div>

        <div className="Projects"> 
          <h2> CURRENT PROJECTS </h2> 
          <span> CLICK TO VIEW MORE </span>
          <div className="image-grid">
            <div className="image">
              <img src={astro} alt="astro" className="grid-image"/>
              <div className="info">
                <h2> Astro Race Galaxy </h2>
                <p> React, CSS, HTML, JS </p>
                <button onClick={() => window.open('https://github.com/wilsonhuangcs/JSC-Hack-2023', '_blank')}> GITHUB </button>
                <button onClick={() => window.open('https://www.loom.com/share/2e6c966433a84c6b85a39d118ab96188', '_blank')}> DEMO </button>
              </div>
            </div>
            <div className="image">
              <img src={website} alt="website" className="grid-image"/>
              <div className="info">
                <h2> Personal Website </h2>
                <p> React, CSS, HTML, JS </p>
                <button onClick={() => window.open('https://github.com/wilsonhuangcs/wilsonhuang', '_blank')}> GITHUB </button>
              </div>
            </div>
            <div className="image">
              <img src={chase} alt="chase" className="grid-image"/>
              <div className="info">
                <h3> SWE Virtual Experience </h3>
                <p> Perspective, React, TypeScript </p>
                <button onClick={() => window.open('https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_SAEvHAdxStKxuZb4t_1688709554512_completion_certificate.pdf', '_blank')}> Certificate </button>
              </div>
            </div>
            <div className="image">
              <img src={att} alt="att" className="grid-image"/>
              <div className="info">
                <h2> AT&T SWE Externship </h2>
                <p> Agile, Machine Learning, & MORE! </p>
                <button onClick={() => window.open('https://www.credly.com/badges/1c10a4a9-3ef3-4078-889b-079c1cde03f2/public_url', '_blank')}> BADGE </button>
              </div>
            </div>
          </div>
          <h1>  MORE PROJECTS TO COME...</h1>
        </div>
        <div className="Experience"> 
          <h2> EXPERIENCE </h2>
          <span> MY PROFESSIONAL JOURNEY</span>
          <h3> COMING SOON... </h3>
          <div class="loading-bar">LOADING...</div>
        </div>
        <div className="bottom">
          <ul>
            <li onClick={() => window.open('https://www.linkedin.com/in/wilsonhuangcs/', '_blank')}> LINKEDIN </li>
            <p> • </p>
            <li  onClick={() => window.open('https://github.com/wilsonhuangcs/', '_blank')}> GITHUB </li>
            <p> • </p>
            <li onClick={() => window.open('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJqTfgnMBFvfmFrzwtFZfgNFptrNcQKNSCnjKwCHpxjJtzQbMKZzjGsnDcwPlpSrqbpdptL', '_blank')}> EMAIL </li>
            <p> • </p>
            <li onClick={() => window.open('https://www.youtube.com/watch?v=AdaDtrcN3-4&pp=ygUlbmFoIHNwaWRlcm1hbiBhY3Jvc3MgdGhlIHNwaWRlciB2ZXJzZQ%3D%3D', '_blank')} > 🤠 </li>
          </ul>
          <span> Created by Wilson Huang </span>
        </div>
    </div>
  );
};

export default App;
