import React from "react";
import Image from "next/image";
const c = `                  Les jeunes s'intéressent au sexe pour une raison biologique.
Les paroles et les images suggestives qu'ils entendent ou
voient dans les chansons, à la radio, dans la publicité, dans
les films et à la télévision contribuent à piquer leur
intérêt.`;
const a = ` Certaines sites redirigent l'utilisateur vers des sites 
malveillants qui stimulent leurs besoins sexuelles. `;
const impactnegative = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <section class="page-section clearfix">
          <div class="container">
            <div class="intro" style={{ width: "160%" }}>
              <div class="intro-text left-0 text-center bg-faded p-5 rounded">
                <h2 class="section-heading mb-4">
                  <span class="section-heading-upper">
                    Impactes des sites sexuelles
                  </span>
                  <span class="section-heading-lower">Our support to HIV</span>
                </h2>
                <p class="mb-3">{a}</p>
                <div class="intro-button mx-auto">
                  <a class="btn btn-primary btn-xl" href="/contactus">
                    Contactez nous
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <Image
                src="/images1.jpg"
                alt="GFG logo imported from public directory"
                width="500"
                height="300"
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div class="overlay-containera">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <Image
                src="/images2.jpg"
                alt="GFG logo imported from public directory"
                width="500"
                height="300"
              />
            </div>
          </div>
        </div>
        <section class="page-section clearfix">
          <div class="container">
            <div class="intro">
              <div class="intro-text left-0 text-center bg-faded p-5 rounded">
                <h2 class="section-heading mb-4">
                  <span class="section-heading-upper">
                    Influence des médias sur les relations
                  </span>
                  <span class="section-heading-lower">Our support to HIV</span>
                </h2>
                <p class="mb-3">{c}</p>
                <div class="intro-button mx-auto">
                  <a class="btn btn-primary btn-xl" href="/contactus">
                    Contactez nous
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default impactnegative;
