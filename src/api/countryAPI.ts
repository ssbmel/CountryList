import uuid from 'react-uuid';
import Country from '../types';

export async function getCountry(): Promise<Country[]> {
  const res = await fetch('https://restcountries.com/v3.1/all');
  if(!res.ok) {
    throw new Error();
  }
  const data = await res.json();
  return data.map((d : Country)=>({...d, id:uuid(), favorite: false})) 
}