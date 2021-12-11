import React, { useState, useEffect } from "react";

//Traer State y Context
import { useStateVotes } from "../../context/votesContext";

//Styleds
import styled from "styled-components";
import {
  CandidatoContainer,
  Data,
  Numero,
  Porcentaje,
  Switch,
  ShowNoShow,
} from "./styleds";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Check = styled.div`
  svg:hover {
    color: #2cac53;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

const DefaultImg =
  "https://img.blogs.es/anexom/wp-content/uploads/2020/06/pestana-de-incognito-navegacion-oculta.jpg";

const Candidato = ({
  name = "CANDIDATO",
  img = DefaultImg,
  voted,
  votes = 0,
  candidatos,
  setCandidatos,
}) => {
  const { totalVotes, votePercentGlobal } = useStateVotes();

  const [votesInPercent, setVotesInPercent] = useState(false);

  const [show, setShow] = useState(true)

  useEffect(() => {
    setVotesInPercent(votePercentGlobal);
  }, [votePercentGlobal]);

  const votar = () => {
    console.log(`Votaste por:${name}`);
    const addVote = candidatos.map((c) => {
      if (c.name === name) {
        c.votes++;
        return c;
      }
      return c;
    });
    console.log(addVote);
    setCandidatos(addVote);
  };

  const swPercent = (e) => {
    const state = e.target.checked ? true : false;
    console.log(totalVotes.votes);
    setVotesInPercent(state);
  };

  return (
      <CandidatoContainer show={show}>
        <Check>
          <BsFillCheckSquareFill
            size={"70px"}
            cursor={"pointer"}
            onClick={votar}
          />
        </Check>

        <img src={img} alt={name} />

        <h3>{name}</h3>

        <Numero>
          {votesInPercent ? (
            <p>{((votes / totalVotes.votes) * 100).toFixed(2)} %</p>
          ) : (
            <p>{votes}</p>
          )}
        </Numero>

        <Data>
          <Numero>
            <h4>Votos</h4>
          </Numero>

          <Switch>
            <input
              type="checkbox"
              onChange={swPercent}
              checked={votesInPercent}
            />
            <span className="slider round"></span>
          </Switch>

          <Porcentaje>
            <h4>% Porc.</h4>
          </Porcentaje>
        </Data>

        <ShowNoShow onClick={()=>setShow(!show)}>
            {show?
                <AiFillEye size={"30px"} />
            :
                <AiFillEyeInvisible size={"30px"} />
            }
        </ShowNoShow>

      </CandidatoContainer>
  );
};

export default Candidato;
