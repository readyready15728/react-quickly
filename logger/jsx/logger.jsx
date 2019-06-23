class Logger extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  componentWillMount() {
    console.log('componentWillMount is triggered');
  }

  componentDidMount(e) {
    console.log('componentDidMount is triggered')
    console.log('DOM node: ', ReactDOM.findDOMNode(this));
  }

  componentWillReceiveNewProps(newProps) {
    console.log('componentWillReceiveNewProps is triggered');
    console.log('new props: ', newProps);
  }

  shouldComponentUpdate(newProps, newState) {
    console.log('shouldComponentUpdate is triggered');
    console.log('newProps: ', newProps);
    console.log('newState: ', newState);

    return true;
  }

  componentDidUpdate(oldProps, oldState) {
    console.log('componentDidUpdate is triggered');
    console.log('oldProps: ', oldProps);
    console.log('oldState: ', oldState);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount is triggered');
  }

  render() {
    console.log('Rendering... display:');
    return <div>{this.props.time}</div>;
  }
}
