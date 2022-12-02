import React from "react";
import Image from "next/image";
const c = `Le manque de soutien social et la stigmatisation perçue liée au VIH augmentent le risque de résultats négatifs liés à la santé chez les personnes vivant avec le VIH. Cette étude examine l'utilisation des médias sociaux par les PVVIH participant à un programme de traitement de santé comportementale.`;
const a = ` La capacité des nouvelles technologies à redynamiser le mouvement antisida ne fait aucun doute. Nous avons vraiment besoin d’une révolution de la prévention du VIH centrée sur les médias sociaux et les technologies mobiles. `;
const ImpactPostive = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <section class="page-section clearfix">
          <div class="container">
            <div class="intro" style={{ width: "110%" }}>
              <div class="intro-text left-0 text-center bg-faded p-5 rounded">
                <h2 class="section-heading mb-4">
                  <span class="section-heading-upper">
                    Prévention du VIH par les médias sociaux
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
                src="/images5.png"
                alt="GFG logo imported from public directory"
                width="300"
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
                src="/images6.png"
                alt="GFG logo imported from public directory"
                width="300"
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
                    Groupe de soutien aux médias sociaux
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

export default ImpactPostive;
