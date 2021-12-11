import styled from "styled-components";


//Styleds
const Container = styled.div`
  background: #ffffff;
  box-shadow: inset 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  max-width: 1094px;
  margin: 0 auto;
  margin-top: 30px;
  padding: 44px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap:43px;

  h2 {
    display: inline-block;
    font-family: Quantico;
    font-style: normal;
    font-weight: normal;
    font-size: 83px;
    line-height: 119px;
    max-height: fit-content;
    text-align: center;

    color: #000000;
  }
`;

const Counter = styled.div`
  box-shadow: inset 0px 4px 27px rgba(0, 0, 0, 0.25);

  font-style: normal;
  font-weight: 300;
  font-size: 64px;
  line-height: 75px;
  text-align: center;
  padding: 25px 44px;
  border-radius: 10px;


  color: #000000;
`;

const TotalVotos = ({totalVotos=0}) => {




  return (
    <Container>
      <h2>TOTAL DE VOTOS</h2>

      <Counter>{totalVotos}</Counter>
    </Container>
  );
};

export default TotalVotos;
