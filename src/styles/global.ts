import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   :root {
       --background: #f0f2f5;
       --red: #e52e40;
       --blue: #5429cc;

       --blue-light: #6933ff;

       --text-title: #363f5f;
       --text-body: #969c83;

       --shape: #ffffff;

       --green: #33cc95;
   }

   * {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
   }

   html {
      @media (max-width: 1000px) {
          font-size: 93.75%;
      }

      @media (min-width: 720px) {
          font-size: 87.5%;
      }
   }

   body {
       background: var(--background);
       -webkit-font-smoothing: antialised;
   }

   body, input, textarea, button {
       font-family: 'Poppins', sans-serif;
       font-weight: 400;
   } 

   h1, h2, h3, h4, h5, h6, strong {
      font-weight: 600;
   }

   button {
       cursor: pointer;
   }

   [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
   }

   .rect-modal-overlay {
     background: rgba(0, 0, 0, 0.5); //50% de opacidade
     position: fixed; //ocupar a tela toda
     top: 0;
     bottom: 0;
     right: 0;
     
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
  }


    .react-modal-content {
       width: 100%;
       max-width: 576px;
       background: var(--background);
       padding: 3rem;
       position: relative; //pq depoisvamos ter conteúdos com position absolute, senão não funcionariam lá
       border-radius: 0.25rem;
  }
`;

