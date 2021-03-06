import React from 'react';
import '../styles/NetworkContainer.css';
import Network from './Network';
import LegendContainer from './LegendContainer'
import Flexbox from 'flexbox-react'


class NetworkContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.store.subscribe(function () {
      this.setState(this.props.store.getState());
    }.bind(this));
  }

  render() {
    console.log(this.props.store.getState().graph);
    return <Flexbox flexDirection={'row'} width={'100vw'} height={'150vh'} className={'NetworkContainer'}>
      <LegendContainer store={this.props.store}/>
     <Network store={this.props.store}/>
     <LegendContainer store={this.props.store}/>
    </Flexbox>
  }
}

export default NetworkContainer;