/* global React */

class Note extends React.Component {
  confirmLeave(e) {
    let confirmMessage = 'Do you really want to close?';
    /* These two alternative approaches have to do with different browser
    "standards" */
    e.returnValue = confirmMessage;
    return confirmMessage;
  }
  
  componentDidMount() {
    console.log('Attaching confirmLeave event listener for beforeunload');
    window.addEventListener('beforeunload', this.confirmLeave);
  }
  
  componentWillMount() {
    console.log('Removing confirmLeave event listener for beforeunload');
    window.removeEventListener('beforeunload', this.confirmLeave);
  }
  
  render() {
    console.log('Render');
    return <div>Here will be our input field for notes (parent will remove in {this.props.secondsLeft} seconds)</div>;
  }
}