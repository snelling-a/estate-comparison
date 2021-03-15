import './scss/index.scss';
import { useEffect, useState } from 'react';
import SmallCard from './components/SmallCard';
import LargeCard from './components/LargeCard';
import Loading from './components/Loading';

function App() {
  const [houses, setHouses] = useState(null);
  const [houseA, setHouseA] = useState(null);
  const [houseB, setHouseB] = useState(null);
  const [currentHouse, setCurrentHouse] = useState(false);

  async function fetchData() {
    const results = await fetch(
      'https://estate-comparison.codeboot.cz/list.php',
    );
    const data = await results.json();
    setHouses(data);
  }

  function handleCompare(thisHouse) {
    !currentHouse ? setHouseA(thisHouse) : setHouseB(thisHouse);
    setCurrentHouse(!currentHouse);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Estate Comparison</h1>
      {!houses ? (
        <Loading />
      ) : (
        <>
          <div className='small-cards'>
            {Array(10)
              .fill(null)
              .map((n, i) => (
                <SmallCard
                  key={i}
                  house={houses[i]}
                  handleCompare={() => {
                    handleCompare(houses[i]);
                  }}
                  id={
                    houseA === houses[i]
                      ? 'a'
                      : houseB === houses[i]
                      ? 'b'
                      : null
                  }
                />
              ))}
          </div>
          <div className='large-cards'>
            {houseA ? (
              <LargeCard
                house={houseA || houses[0]}
                house2={houseB || houses[1]}
              />
            ) : null}
            {houseB ? (
              <LargeCard
                house={houseB || houses[1]}
                house2={houseA || houses[0]}
              />
            ) : null}
          </div>
        </>
      )}
    </>
  );
}

export default App;
