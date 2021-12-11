import { useEffect } from 'react'
import "./App.css";
import styled from "styled-components";

//Context
import { useStateVotes } from "./context/votesContext";

//Components
import Candidato from "./components/candidato/Candidato";
import TodosLosVotos from "./components/todosLosVotos/TodosLosVotos";
import TotalVotos from "./components/totalVotos/TotalVotos";


//Styleds
const Candidatos = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 50px;
  margin-top: 50px;
`;


function App() {

  const { 
    //States
    candidatos,
    totalVotes, 

    //Functions
    setCandidatos,
    setTotalVotes
  } = useStateVotes();


  useEffect(() => {
    let totalVotosReduce = candidatos.reduce((p,n)=>({votes:p.votes+n.votes}))
    console.log(totalVotosReduce);
    setTotalVotes(totalVotosReduce)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [candidatos])


  return (
    <div className="app">
      <Candidatos>
        {candidatos.map((e, i) => (
          <Candidato
            key={i}
            name={e.name}
            img={e.foto}
            votes={e.votes}
            candidatos={candidatos}
            setCandidatos={setCandidatos}
          />
        ))}
      </Candidatos>

      <TodosLosVotos />

      <TotalVotos totalVotos={totalVotes?.votes}/>
    </div>
  );
}

export default App;
