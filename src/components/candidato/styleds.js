import styled from "styled-components";

export const CandidatoContainer = styled.div`

  opacity: ${({show})=>(show?1:0.1)};
  width: 300px;
  background-color: white;

  background: #ffffff;
  box-shadow: inset 0px 0px 5px 3px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  position: relative;


  img {
    width: 200px;
    height: 200px;
    display: block;
    margin: 0 auto;
    margin-top: 73px;

    border: 5px solid #222222;
    border-radius: 10px;

    
    
  }

  h3 {
    font-style: normal;
    font-weight: 900;
    font-size: 2rem;
    line-height: 23px;
    text-align: center;
    margin-top: 10px;
  }

  svg {
    position: absolute;
    left: 115px;
    top: 41px;
    background-color: white;

    box-shadow: 0px 4px 9px 5px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
`;

export const Data = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
`;

export const BoxVotes = styled.div`
  h4 {
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 18px;
    /* identical to box height */

    text-align: center;
  }

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 2rem;
    line-height: 36px;
    text-align: center;
    background: #ffffff;

    box-shadow: 0px 4px 10px rgb(0 0 0 / 74%);
    border-radius: 10px;

    width: fit-content;
    padding: 15px;
    height: 40px;
    margin: 0 auto;
    margin-top: 15px;
    
    display:flex;
    align-items: center
  }
`;



export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 57px;
  height: 23px;
  
  box-shadow: 0px 4px 9px 5px rgba(0, 0, 0, 0.25);
  
  border-radius: 23px;
  
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #787878;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 6px;
    bottom: 4.5px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(30px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
`;

export const Porcentaje = styled(BoxVotes)``;
export const Numero = styled(BoxVotes)``;


export const ShowNoShow = styled.button`
  cursor: pointer;
  position: absolute;

  bottom: 30px;
  left: 19px;

  svg{
    padding:3px;
  }
`;