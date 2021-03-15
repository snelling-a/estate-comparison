import React from 'react';

const SmallCard = (props) => {
  // console.log(props.house);

  const { images, name_extracted, locality } = props.house;

  return (
    <div
      className={`small-cards__card ${
        props.id === 'a' ? 'a' : props.id === 'b' ? 'b' : ''
      }`}
      onClick={props.handleCompare}
    >
      <img src={images[0]} alt='name' />
      <p>
        {name_extracted} {locality}
      </p>
      <div className='a'></div>
    </div>
  );
};

export default SmallCard;
