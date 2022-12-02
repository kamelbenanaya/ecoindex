import React from "react";
import Image from "next/image";

const s = `Notre site a pour but de mettre en valeur les impacts positifs
                de l'informatique pour lutter contre le SIDA et dégager les
                impacts négatifs de l'informatique qui contribuent à affecter
                leurs comportements sexuels`;
const objectif = () => {
  return (
    <div>
      <section class="page-section clearfix">
        <div class="container">
          <div class="intro">
            <div class="intro-text left-0 text-center bg-faded p-5 rounded">
              <h2 class="section-heading mb-4">
                <span class="section-heading-upper">Notre but</span>
                <span class="section-heading-lower">Our support to HIV</span>
              </h2>
              <p class="mb-3">{s}</p>
              <div class="intro-button mx-auto">
                <a class="btn btn-primary btn-xl" href="#!">
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
              src="/hands.jpg"
              alt="GFG logo imported from public directory"
              width="300"
              height="300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default objectif;
