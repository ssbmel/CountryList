import styled from "styled-components";

type CountryCardPropsType = {
  flag: string;
  common : string;
  capital : string;
  onClick : ()=>void;
} 

export default function CountryCard({ flag, common, capital, onClick }: CountryCardPropsType) {
  return (
    <>
        <StCountryCard onClick={onClick}>
          <StFlag src={flag}></StFlag>
          <StCommon>{common}</StCommon>
          <div>{capital}</div>
        </StCountryCard>
    </>
  );
}


const StCountryCard = styled.div`
  width: 80%;
  min-width: 150px;
  height: 80%;
  min-height: 100px;
  border-radius: 10px;
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 5%;
  gap: 10px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;
const StFlag = styled.img`
  width: 80%;
  height: auto;
  margin: 0 auto;
`;
const StCommon = styled.div`
  font-size: 1.5rem;
`;
