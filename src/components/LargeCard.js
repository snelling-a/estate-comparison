import React from 'react';

const LargeCard = (props) => {
  const {
    images,
    name,
    prize_czk: price,
    locality,
    building_area: floorArea,
    land_area: landArea,
    company_logo: logo,
    company_name: realtor,
  } = props.house;

  const {
    prize_czk: price2 = Infinity,
    building_area: floorArea2 = -Infinity,
    land_area: landArea2 = -Infinity,
  } = props.house2;

  const priceStyle = price < price2 ? '#F09191' : '#7EDA7E';
  const floorStyle = floorArea > floorArea2 ? '#F09191' : '#7EDA7E';
  const landStyle = landArea > landArea2 ? '#F09191' : '#7EDA7E';

  return (
    <div className='large-cards__card'>
      <figure>
        <img src={images[0]} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
      <table className='tg'>
        <tbody>
          <tr style={{ backgroundColor: priceStyle }}>
            <td className='tleft'>Price</td>
            <td className='tright'>{price.toLocaleString('cs-CZ')} Kč</td>
          </tr>
          <tr>
            <td className='tleft'>Locality</td>
            <td className='tright'>{locality}</td>
          </tr>
          <tr style={{ backgroundColor: floorStyle }}>
            <td className='tleft'>Floor area</td>
            <td className='tright'>{floorArea}</td>
          </tr>
          <tr style={{ backgroundColor: landStyle }}>
            <td className='tleft'>Land area</td>
            <td className='tright'>{landArea}</td>
          </tr>
        </tbody>
      </table>
      <div className='realtor'>
        <img src={logo} alt={realtor} />
        <p>{realtor}</p>
      </div>
    </div>
  );
};

export default LargeCard;

// green: #F09191
// red:   #7EDA7E
