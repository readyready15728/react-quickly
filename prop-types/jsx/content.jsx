class Content extends React.Component {
  render() {
    return <div>
      <Button buttonLabel="Start"/>
      <Button/>
      <Button title={1}/>
      <Button/>
      <Button email="not-a-valid-email"/>
      <Button email="hi@azat.co"/>
    </div>;
  }
}