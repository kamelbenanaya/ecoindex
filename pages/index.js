import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import media from "styled-media-query";
import styled from "styled-components";

export const QuisommesNousContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  /* overflow-x: hidden; */
  margin: 50px;
`;
export const QuisommesNousText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  /* overflow-x: hidden; */
`;
export const QuisommesNousTextTtile = styled.div`
  font-size: 40px;
  /* overflow-x: hidden; */
`;
export const QuisommesNousTextDescription = styled.div`
  display: flex;
  justify-content: right;
  align-self: start;
  /* overflow-x: hidden; */
`;

export default function Home() {
  return (
    <QuisommesNousContainer>
      <QuisommesNousText>
        <QuisommesNousTextTtile>Qui sommes nous</QuisommesNousTextTtile>
        <QuisommesNousTextDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat
        </QuisommesNousTextDescription>
      </QuisommesNousText>
      <QuisommesNousText>
        <QuisommesNousTextTtile>Qui sommes nous</QuisommesNousTextTtile>
      </QuisommesNousText>
    </QuisommesNousContainer>
  );
}
