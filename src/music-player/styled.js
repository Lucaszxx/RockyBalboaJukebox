import styled from "styled-components";

const MusicImage = styled.img `
    max-width: 24.6em;
    min-height: 26em;
    opacity: calc(0.9);
`
const MainDiv = styled.div `
    margin-top: -1.4em;
    height: 44.9em;
    background: rgba(0, 0, 0, 0.5);

    h1 {
        margin-top: 1.4em;
        color: white;
        text-shadow: black 4px 4px;
        font-family: 'Aboreto', cursive;
    }

    .next-previous-button {
        width: 4em;
        padding-left: 8em;
    }
`

const MusicDiv = styled.div `
    margin-top: 2.3em;
    background: rgba(100, 100, 100, 0.5);
    height: max-content;

    .buttons-icons {
        padding: 1em 1em;
        width: 3em;
        :hover {
            transform: scale(1.3);
        }
    }

    h1 {
        color: white;
        text-shadow: black 4px 4px;
        font-family: 'Aboreto', cursive;
    }

    h2 {
        margin-top: -0.04em;
        margin-left: 0.7em;
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        color: white;
        font-size: x-large;
    }

    h3 {
        margin-top: -0.7em;
        margin-left: 1em;
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        color: snow;
    }
`

export {MusicImage, MainDiv, MusicDiv}