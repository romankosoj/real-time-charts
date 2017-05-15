import React from "react";

export default class TickCard extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         actionClass: "trade-card-holder normal-class"
      }
      this.dragStart = this.dragStart.bind(this);
      this.dragEnd = this.dragEnd.bind(this);

   }
   dragStart() {
      this.setState({actionClass: "trade-card-holder reduced-class"});
   }
   dragEnd() {
      this.setState({actionClass: "trade-card-holder normal-class"});
   }
   render() {

      return (
         <div className={this.state.actionClass}>
            {this.props.card}
         </div>
   })
}
};