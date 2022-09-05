import React, {useEffect, useState} from "react";
import axios from "axios";
import { MusicImage, MainDiv, MusicDiv } from "./styled";

const MusicPlayer = () => {

let [contador, setContador] = useState(0, [])

const [musicas, setMusicas] = useState([]);
useEffect(() => {
    axios.get("http://localhost:3000/musicas") //Get para localhost
    // axios.get("http://192.168.15.5:3000/musicas") // Get para rede local
    .then((response) => {
        setMusicas(response.data)
    })
}, [])

const todasMusicas = musicas.map((musica) => {
    let song = new Audio(musica.src);

    function play(){
        song.play()
    }

    function pause(){
        song.pause()
    }

    function next(){
        song.pause()
        if(contador > 4)
        {
            let inicio = 0
            setContador(inicio)
        }
        else
        {
            contador++
            setContador(contador)
        }
    }
    
    function previous(){
        song.pause()
        if(contador < 1)
        {
            let fim = 5
            setContador(fim)
        }
        else 
        {
            contador--
            setContador(contador)
        }
    }

    return (
        <MusicDiv>
            <MusicImage src={musica.imagem}/>
            <h2>{musica.nome}</h2>
            <h3>{musica.artista}</h3>
            <img onClick={previous} className="buttons-icons" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABmJLR0QA/wD/AP+gvaeTAAABhUlEQVRoge2ZPUoDQRiG35GIFzAgCB5CLWwES+MRFCz1CnoDLyCK1lqIvTaxEcTCQ2iCF1DQwuKxcANh2Q3ZyXybJX5PP++7z+zf7KzkOI7jOI6TDGAH6FNOH+hEZi8CZ8AdcATMpz7+otJRMgN6EbmrwGsu59TCIV88FhUz94GvgphPK4/h8mRCQAs4STUxUaQSAtrAQ4qJmboQsAa8pZiYPHPxanEAB5KeJK3U3V1I7BkCFoCLccfHnqFWGs3RAMuSbiVtWHeZX3LApqQX1SAjGQtl90tX0pJlzzBmlxxwJWnXKr+MUHVAzI06CSGESsdY+2PbGhdqOi7UdFyo6VgKXRtml2ImFELYk3Qo6ceqo7C36oBxVwqDN3y2OL1R5HqucSuFEMKjpHVJz9ZdUk0PhRDCu6QtSZd19FVi0i9N/rasvq2+WGsXyjLMNkmmIpTltIHuzAhlWbOz0ZjLLNsK/rDyGC6fuc36DtAbJQNsR2YvAufAPXBMHb9THMdxHMf5R/wCjD8jzFmepdwAAAAASUVORK5CYII="/>
            <img onClick={play} className="buttons-icons" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABWUlEQVRoge2ZPU4DMRBGZ4GQBjpamhwAiYaGG3AIbsCPBAfgCpS0lLRcAAlRkvTUtElFgxA8CjQSIZD1rtcezeJXb/G9lWV/HosUCoXCd4BzYN06RzR88QQcWGeJgnlugZF1plawyCtwCWxaZ2vELyLKM3AIVNYZg1giotwBO9Y5awkQAXgHroEt67x/EiiiTIETYNU69wINRZQxsG+dfY6WIgAfwA2wbe0gIlEiygtwAQy9iyi27aBDEcWmHSQQAYt2kEhEydcOEoso6dtBJhGAN+CKVO0go4jSqB0Er0mA9r8hiomIHFVV9bDso5VMYWLYFZF7atqBB5Eg1qwDBDAWkWPPS2smIqcislcn0YiMu1Uvtl/3B6L7iqKlcSO5QEIR9zXe/cXK/VW3F8OHR5yPg9wP6NKeyl0QIOF+iO3+WSH/qdwFPyTcP7314jH0DBhY5ygUCv+cTyS4gJtcT/1lAAAAAElFTkSuQmCC"/>
            <img onClick={pause} className="buttons-icons" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAA1UlEQVR4nO3RgQmAMBAEwcT+e441BIwuMlPA/cOOAQAAAAAA8G/z9IG11npyb8659fPX93ddJ8fZJ0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIAAAAAAAALzqBuhzCIjulnQcAAAAAElFTkSuQmCC"/>
            <img onClick={next} className="buttons-icons" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABmJLR0QA/wD/AP+gvaeTAAABVElEQVRoge2ZMUoDURRF7xMj2KdxExbpBDsbY6mNILgFS4MrcAOithHcglrY2QlZQ0yws1MEUTgWkmaYDJnv/O/M+E4/974D82HmfclxHMdxHKcygA5wAtwBF0A3MGcHmDKfKdCvev68Qc4zxWOgF5BTJDNjEsMhO8hbTvE7cFgyZyFieSw6yCWwUkFObYQAHoC1NgkBPAMbbRIC+ASO2yQ0YwisphKyEKGyz0gaSdozs3HZHDMrNeNSycFC6Ul6BLZiF6USkqSupFsKzlUVLMcMn9N3CqzHKkh1hoKp6xlKhgvVHReqOy5Ud/5K6DpWcGqhL0kDMzuIVZDy0+dF0r6Z3ccsSSU0krRrZk+xi1K8cleSNlPIBFHiT/UDOPptTl2EWrUkadUaq5GLxtec3kavgs8ynY1f1neAAXDDz01E6HVKH5gUyQDbVc/vOI7jOM5/5hs+9ncxvuXc9AAAAABJRU5ErkJggg=="/>
        </MusicDiv>
    )
})



    return (
        <MainDiv>
            <h1>Rocky <br/> Balboa Jukebox</h1>
            {todasMusicas[contador]}
        </MainDiv>
    )
}

export default MusicPlayer;