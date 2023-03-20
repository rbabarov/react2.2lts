import React from 'react';
import propTypes from 'prop-types';

function ListView(props) {
  const { item } = props;
  return (
    <div className='content_list'>
      {item.map((el, index) => {
        return(
          <div className='item' key={index}>
            <img className='item_img' src={el.img} alt={(`images ${item.name}`)}/>
            <h2 className='name'>{el.name}</h2>
            <p className='item_color'>{el.color}</p>
            <p className='price'>${el.price}</p>
            <button className='btn'>Add to card</button>
          </div>
        )
      })}
    </div>
  )
}

ListView.protoType = {
  item: propTypes.func.isRequired
}

export default ListView;
