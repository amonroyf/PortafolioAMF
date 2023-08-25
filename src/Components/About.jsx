/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Soy un Ingeniero de Sistemas graduado de la Universidad de Cundinamarca, actualmente, me encuentro trabajando en el desarrollo de un proyecto de gestión empresarial ERP.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Angular",
  ".NET",
  "Flutter",
  "Analista de requerimientos",
  "Desarrollador de software",
  "Pruebas y mantenimiento de software",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Me gusta mantenerme actualizado en las últimas tecnologías y actualmente estoy enfocado en aprender Angular, Flutter y .Net SOLIN Además, tengo un gran interés en aprender y aplicar diseño de patrones en mis proyectos. Refactoring Durante mi pasantía, tuve la oportunidad de participar en el desarrollo del proyecto ESAP App Móvil Institucional. Este proyecto se realizó utilizando las tecnologías de Flutter y .NET. Fue una experiencia enriquecedora en la que pude aplicar mis conocimientos y trabajar en equipo.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>Sobre mí</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
