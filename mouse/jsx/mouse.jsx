class Mouse extends React.Component {
  render() {
    return <div>
      <div
        style={{border: '1px solid red'}}
        onMouseOver={(event)=>{
          console.log('mouse is over with event');
          console.dir(event);}} >
          Open the console and move your mouse cursor over here
        </div>
    </div>
  }
}
