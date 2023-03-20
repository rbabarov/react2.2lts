import React, { Component }  from 'react';
import IconSwitch from './IconSwitch';
import products from '../products';
import CardsView from './CardsView';
import ListView from './ListView';

export class Store extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'list' };
  }

  iconToggle(evn) {
    evn.target.alt === 'list' ?
    this.setState({ value: 'module' }) :
    this.setState({ value: 'list' });
  }

  render() {
    return (
      <>
      <IconSwitch icon = {this.state.value} onSwitch = {(evn) => this.iconToggle(evn)} />
      {this.state.value === 'list' ? <CardsView card={products}/> : <ListView item={products}/>}
      </>
    )
  }
}
