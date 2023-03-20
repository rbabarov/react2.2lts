import React from 'react';
import propTypes from 'prop-types';

function CardsView(props) {
  const { card } = props;
  return (
    <div className='content_card'>
      {card.map((item, index) => {
        return(
          <div className='card' key={index}>
            <h2 className='name'>{item.name}</h2>
            <p className='card_color'>{item.color}</p>
            <img className='card_img' src={item.img} alt={`pikche ${item.name}`}/>
            <div className='card_footer'>
              <p className='price'>${item.price}</p>
              <button className='btn'>Add to card</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

CardsView.propTypes = {
  card: propTypes.array.isRequired
}

export default CardsView;
