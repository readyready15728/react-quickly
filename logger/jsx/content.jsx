class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      currentTime: (new Date()).toLocaleString()
    };
    this.launchClock();
  }

  launchClock() {
    setInterval(() => {
      this.setState({
        counter: ++this.state.counter,
        currentTime: (new Date()).toLocaleString()
      });
    }, 1000);
  }

  render() {
    if (this.state.counter > 2) {
      return <div/>;
    }

    return <Logger time={this.state.currentTime}/>;
  }
}
