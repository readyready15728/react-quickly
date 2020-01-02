class Content extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleRadio = this.handleRadio.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);

    this.state = {
      description: 'With the right pattern, applications will be more scalable and easy to maintain. If you aspire one day to be a Node.js architect (or maybe you are one and want to extend you knowledge), this presentation is for you.',
      radioGroup: {
        angular: false,
        react: true,
        polymer: false
      },
      checkboxGroup: {
        node: false,
        react: true,
        express: false,
        mongodb: false
      },
      selectedValue: 'node'
    };
  }
  
  handleRadio(event) {
    let obj = {};
    obj[event.target.value] = event.target.checked;
    this.setState({radioGroup: obj});
  }
  
  handleCheckbox(event) {
    let obj = Object.assign(this.state.checkboxGroup);
    obj[event.target.value] = event.target.checked;
    this.setState({checkboxGroup: obj});
  }
  
  handleSelectChange(event) {
    this.setState({selectedValue: event.target.value});
  }
  
  handleChange(event) {
    console.log('onChange event: ', event.target.value, event.target.checked);
  }
  
  handleInput(event) {
    console.log('onInput event:', event.target.value, event.target.checked);
  }
  
  handleFirstNameChange(event) {
    this.setState({firstName: event.target.value});
  }
  
  handleSubmit(event) {
    console.log(event.target.value, event.target.checked);
    fetch(this.props['data-url'], {method: 'POST', JSON.stringify(this.state)})
      .then((response) => {return response.json();})
      .then((data) => {console.log('Submitted:' data);});
  }
  
  handleSelectChange(event) {
    this.setState({selectedValue: event.target.value});
    console.log(event.target.value, event.target.selected);
  }
  
  render() {
    return <div className="container">
      <form onSubmit={this.handleSubmit}>
        <h2>input: text</h2>
        <input type="text" name="newBookTitle" defaultValue="Node: The Best Parts"/>
        <hr/>
        <h2>input: password</h2>
        <input type="password" defaultValue="123456" onChange={this.handleChange} onInput={this.handleInput}/>
        <hr/>
        <h2>input: radio</h2>
        <label for="angular">Angular</label>
        <input id="angular" type="radio" name="radioGroup" value="angular" checked={this.state.radioGroup['angular']} onChange={this.handleRadio}/>
        <br/>
        <label for="reactRadio">React</label>
        <input id="reactRadio" type="radio" name="radioGroup" value="react" checked={this.state.radioGroup['react']} onChange={this.handleRadio}/>
        <br/>
        <label for="polymer">Polymer</label>
        <input id="polymer" type="radio" name="radioGroup" value="polymer" checked={this.state.radioGroup['polymer']} onChange={this.handleRadio}/>
        <hr/>
        <h2>input: checkbox</h2>
        <label for="node">Node</label>
        <input id="node" type="checkbox" name="checkboxGroup" value="node" checked={this.state.checkboxGroup['node']} onChange={this.handleCheckbox}/>
        <br/>
        <label for="reactCheckbox">React</label>
        <input id="reactCheckbox" type="checkbox" name="checkboxGroup" value="react" checked={this.state.checkboxGroup['react']} onChange={this.handleCheckbox}/>
        <br/>
        <label for="express">Express</label>
        <input id="express" type="checkbox" name="checkboxGroup" value="express" checked={this.state.checkboxGroup['express']} onChange={this.handleCheckbox}/>
        <br/>
        <label for="mongodb">MongoDB</label>
        <input id="mongodb" type="checkbox" name="checkboxGroup" value="mongodb" checked={this.state.checkboxGroup['mongodb']} onChange={this.handleCheckbox}/> 
        <hr/>
        <textarea name="description" defaultValue={this.state.description} onChange={this.handleChange}/>
        <hr/>
        <textarea name="description1" defaultValue={"Pro Express.js is for the reader\nwho wants to quickly get up-to-speed with Express.js, \nthe flexible Node.js framework"} onChange={this.handleChange}/>
        <hr/>
        <select value={this.state.selectedValue} onChange={this.handleSelectChange}>
          <option value="ruby">Ruby</option>
          <option value="node">Node</option>
          <option value="python">Python</option>
        </select>
        <hr/>
        <select multiple={true} defaultValue={['meteor', 'react']} readOnly>
          <option value="meteor">Meteor</option>
          <option value="react">React</option>
          <option value="jquery">jQuery</option>
        </select>
        <hr/>
        <h2>input: first name</h2>
        <input type="text" name="firstName" onChange={this.handleFirstNameChange}/>
        <hr/>
        <h2>input: button</h2>
        <input type="button" defaultValue="Send" onClick={this.handleSubmit}/>
      </form>
    </div>;
  }
}