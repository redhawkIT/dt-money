import styled from 'styled-components';

export const Container = styled.div`
    display: grid; //porque são três ítens do mesmo tamanho e um do lado do outro(o flex tbm serve nessas situações).
    grid-template-columns: repeat(3, 1fr); 
    gap: 2rem; //espaçamento entre cada um dos ítens no grid.
    margin-top: -10rem; //jogando o summary mais para cima.

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block; //tira o padrão do strong que é o inline aí o margin-top não funcionaria. Ele faz o strong se comportar como se fosse uma div.
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.highlight-background {
            background: var(--green);
            color: #fff;
        }
    }
`;
