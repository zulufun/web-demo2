import React from "react";
import { useNavigate } from "react-router";
import './Hero.scss';

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="Hero">
      <div className="hero-content center">
        <h2 className="heading">Web Demo nhóm 1</h2>
        <p className="subheading">
          Viện Công nghệ thông tin
        </p>
        <button onClick={() => navigate('/')} className="cta btn-primary">
                Explore more</button>
      </div>
    </div>
  );
}

export default Hero;
