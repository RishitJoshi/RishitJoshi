import React from "react";
import styled from "styled-components";
import Container from "../../components/Container";
import Placeholder from "../../components/Placeholder/Placeholder";
import rishit from "./Rishit.jpg";

const Section = styled.section`
  display: flex;
`;

const AboutMe = styled.div`
  img {
    transition: all 0.3s ease;
    border-radius: 4px;
  }
  img:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.02);
  }

  @media screen and (min-width: 768px) {
    display: grid;
    place-items: center;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    img {
      align-self: flex-start;
    }
  }
`;

const Left = styled.div`
  margin-bottom: 2em;

  p:nth-child(4) {
    margin-bottom: 1.5em;
  }

  p + p {
    margin-top: 1em;
  }
  @media screen and (min-width: 1024px) {
    margin: 0;
    width: 55%;
    img {
      width: 35%;
    }
  }
`;

const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  padding: 0;
  margin: 20px 0 0;
  li {
    position: relative;
    margin: 0 0 10px;
    padding-left: 20px;
  }
  li::before {
    content: "▹";
    position: absolute;
    color: #ffc857;
    left: 0;
    top: 50%;
    line-height: 1px;
  }

  @media screen and (max-width: 320px) {
    grid-template-columns: repeat(2, minmax(140px, 200px));
    li {
      font-size: 0.75rem;
    }
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media screen and (max-width: 280px) {
    grid-template-columns: repeat(2, minmax(70px, 150px));
  }
`;

const About = () => {
  return (
    <>
      <Section>
        <Container>
          <Placeholder title="About Me"></Placeholder>
          <AboutMe id="about">
            <Left>
              <p>
                Hello! I'm Rishit, a machine learning enthusiast based in
                Gujarat, IN.
              </p>
              <p>
                I like to understand math behind Machine learning algorithms and
                want to use it to develop pixel perfect solutions
              </p>
              <p>
                I have pursued my Bachelor of Computer Engineering from{" "}
                <a href="https://git.org.in" style={{ color: "#ffc857" }}>
                  Gandhinagar Institute Of Technology.{" "}
                </a>
                I have pursued my Bachelor of Computer Engineering from GIT and
                currently working as Machine Learning intern at{" "}
                <a href="https://www.gahanai.com" style={{ color: "#ffc857" }}>
                  GahanAi.{" "}
                </a>{" "}
                I am also pursuing PG Diploma in Applied Mathematics from{" "}
                <a href="http://ignou.ac.in" style={{ color: "#ffc857" }}>
                  IGNOU
                </a>
                university
              </p>
              <p>Here are a few technologies I've been working with Python:</p>
              <Ul>
                <li>Pandas </li>
                <li>Numpy </li>
                <li>Matplotlib </li>
                <li>TensorFlow</li>

                <li>Scikit-Learn</li>
                <li>OpenCv </li>
                <li>JSON </li>
                <li>Regex </li>
                <li>Pickle </li>
                <li>Flask </li>
              </Ul>
            </Left>

            <img src={rishit} alt="About me" />
          </AboutMe>
        </Container>
      </Section>
    </>
  );
};

export default About;
