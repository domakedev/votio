import styled from "styled-components";

//States and context
import {useStateVotes} from "../../context/votesContext"

//Styleds
import { Switch } from "../candidato/styleds";

const Container = styled.div`
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 405px;
  padding: 36px;
  margin-top: 70px;
`;

const Titulo = styled.h3`
  font-style: normal;
  font-weight: 900;
  font-size: 2.5rem;
  line-height: 29px;
  text-align: center;
  color: #000000;
`;

const Switchito = styled(Switch)`
  width: 98px;
  height: 40px;

  .slider:before {
  position: absolute;
  content: "";
  height: 24px;
  width: 24px;
  bottom: 7.6px;
}

input:checked + .slider:before {
  -webkit-transform: translateX(60px);
  -ms-transform: translateX(60px);
  transform: translateX(60px);
}
`;

const Chooser = styled.div`
  margin-top: 22px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 2.4rem;
    line-height: 28px;
    text-align: center;

    color: #000000;
  }
`;

const TodosLosVotos = () => {

  const {setVotePercentGlobal} = useStateVotes()

  return (
    <Container>
      <Titulo>TODOS LOS VOTOS</Titulo>

      <Chooser>
        <p>Número</p>
        <Switchito>
          <input 
          type="checkbox" 
          onChange={(e)=> setVotePercentGlobal(e.target.checked)}
          />
          <span className="slider round"></span>
        </Switchito>
        <p>% Porc.</p>
      </Chooser>
    </Container>
  );
};

export default TodosLosVotos;
