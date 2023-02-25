import { useState } from 'react';
import './global.scss'
import { useQuery } from '@apollo/client';
import { ICountyEntity, ICountyGql } from 'entities/country';
function App() {

  const [query, setQuery] = useState<string>('');

  const { data } = useQuery<{ countries: ICountyEntity[] }>(ICountyGql.QueryCounty, {
    variables: query
      ? { filter: { code: { eq: query.toUpperCase() } } }
      : {},
  });

  console.log(data)
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  );
}

export default App;
