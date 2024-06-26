import { useEffect, useState } from "react";
import { getCountry } from "../src/api/countryAPI";
import Country from "./types";
import styled from "styled-components";
import CountryCard from "./CountryCard";

export default function CountryList() {
  const [countryList, setCountryList] = useState<Country[]>([]);

  const getCountryData = async () => {
    const country = await getCountry();
    setCountryList(country);
  };

  useEffect(() => {
    getCountryData();
  }, []);

  const changeHandler = (country: Country) => {
    console.log(country);
    
    const newList = countryList.map((list) => {
      return list.id === country.id
        ? {
            ...list,
            favorite: !country.favorite,
          }
        : {...list}
    });
    setCountryList(newList);
  };
  
  return (
    <>
      <StWrap>
      <StAboveTitle>Favorite Countries</StAboveTitle>
        <StCardBox>
        {countryList.filter((list)=>list.favorite === true).map((data) => (
            <CountryCard
              key={data.id}
              flag={data.flags.png}
              common={data.name.common}
              capital={data.capital?.length > 0? data.capital[0] : ""}
              onClick={() => changeHandler(data)}
            />
          ))}
        </StCardBox>
        
        <StUnderTitle>Countries</StUnderTitle>
        <StCardBox>
          {countryList.filter((list)=>list.favorite === false).map((data) => (
            <CountryCard
              key={data.id}
              flag={data.flags.png}
              common={data.name.common}
              capital={data.capital?.length > 0? data.capital[0] : ""}
              onClick={() => changeHandler(data)}
            />
          ))}
        </StCardBox>
      </StWrap>
    </>
  );
}

const StWrap = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;
`;
const StCardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 100px;
`;
const StUnderTitle = styled.h1`
  font-size: 2rem;
`;
const StAboveTitle = styled.h1`
  font-size: 2rem;
`;
