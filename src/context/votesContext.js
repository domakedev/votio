import { createContext, useContext, useState } from "react";

//Fotos
import SteveJobs from "../images/steve.jpg"
import Oprah from "../images/oprah.jpg"
import BillGates from "../images/bill.jpeg"
import Chica from "../images/chica.png"


//Crear Contexto
const VotesContext = createContext();

//Fake Data
const listaCandidatos = [
  {
    name: "Steve Jobs",
    foto: SteveJobs,
    votes: 0,
  },
  {
    name: "Oprah",
    foto: Oprah,
    votes: 0,
  },
  {
    name: "Bill Gates",
    foto: BillGates,
    votes: 0,
  },
  {
    name: "Margaret",
    foto: Chica,
    votes: 0,
  },
];

//Crear Provider
export const VotesProvider = ({ children }) => {

  const [candidatos, setCandidatos] = useState(listaCandidatos);
  
  const [votePercentGlobal, setVotePercentGlobal] = useState(false);

  const [totalVotes, setTotalVotes] = useState();

  return (
    <VotesContext.Provider
      value={{
        //States
        candidatos,
        votePercentGlobal,
        totalVotes,
        //Funciones
        setCandidatos,
        setVotePercentGlobal,
        setTotalVotes
      }}
    >
      {children}
    </VotesContext.Provider>
  );
};


//Exportar facilmente el contexto/state
export const useStateVotes = () => {

  const context = useContext(VotesContext);

  if (context === undefined) {
    throw new Error("useStateVotes must be used within a VotesContextProvider");
  }

  return context;
};
