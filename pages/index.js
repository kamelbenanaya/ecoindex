import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section class="page-section clearfix">
        <div class="container">
          <div class="intro">
            <div class="intro-text left-0 text-center bg-faded p-5 rounded">
              <h2 class="section-heading mb-4">
                <span class="section-heading-upper"> Qui sommes nous</span>
                <span class="section-heading-lower">Our support to HIV</span>
              </h2>
              <p class="mb-3">
                Nous somme la société Organisation, note but principale est de
                sensibiliser les gens pour lutter contre la contamination de
                SIDA
              </p>
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
}
