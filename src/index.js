import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './index.css';

// class Statement extends Component{
// 	constructor(props){
// 		super(props);
// 		console.log(this.props);
// 		console.log(this.props.props.currentVersion);
// 	}

	
// 	render(){
// 		return (
// 			<tr>
// 			<th>{this.props.props.documentType}</th>
// 			<th>{this.props.props.currentVersion}</th>
// 			<th>{this.props.props.previousVersion}</th>
// 			<th>{this.props.props.comparison}</th>
// 			</tr>
// 			)
// 		}
// }

// class StatementTable extends Component{
// 	constructor(props){
// 		super(props);
// 		this.state = {statements: []}
// 	}


//   componentDidMount() {
//   	 const params = {cusip:'cusip', reportingDate:'reportingDate', statementType:'statementType', reviewStep:'reviewStep'};
//   	 fetch('http://localhost:9000/getStatements?cusip=${encodeURIComponent(params.cusip)}&reportingDate=${encodeURIComponent(params.reportingDate)}&statementType=${encodeURIComponent(params.statementType)}&reviewStep=${encodeURIComponent(params.reviewStep)}')
//   	 .then(res => res.json())
//   	 .then((data) => {
//   	 	this.setState({ statements: data})
//   	 })
//   	 .catch(console.log)
//   }

// 	render() {
// 		const statements = this.state.statements
// 		return(

// 		statements.map((item, index) => {
// 		return (
// 			<table>
// 			<Statement props = {item} />
// 			</table>
// 			)}
// 		)
// 		);
// 	}
// }

class CheckListMain extends Component{
	constructor(props) {
		super(props);
		this.state = {"data": [{"sectionId":"1","sectionName":"section1","itemList":[{"itemId":"i1","text":"what is your name?", "options":["Done", "N/A"]},{"itemId":"i1","text":"what is your age?", "options":["Done", "N/A"]}]},{"sectionId":"2","sectionName":"section2","itemList":[{"itemId":"i3","text":"what is your fav food?", "options":["Done", "N/A"]},{"itemId":"i4","text":"what is your fav song?", "options":["Done", "N/A"]}]}]}
	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	}


  handleChange(event) {
    let data = [...this.state.data]
    data[event.target.dataset.id][event.target.className] = event.target.value.toUpperCase()
    this.setState({ data }, () => console.log(this.state.data))
  }

  handleSubmit(event) {
    event.preventDefault();
  }

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label> Form </label>
				{this.state.data.map((section, index) => {
					return (
					<CheckListSection props = {section} handleChange={this.handleChange}/>
					)})}
				<input type="submit" value="submit"/>
			</form>
		);
	}
}

class CheckListSection extends Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			this.props.props.itemList.map((item, index) => {
					return (
						<CheckList props = {item} handleChange={this.handleChange} />
				)}
			)
		);
	}
}

class CheckList extends Component{
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
			<label>{this.props.props.text}</label>
			  {this.props.props.options.map((option, index) =>{
			  	return(
			  	  <div>
				  <input type="checkbox" id="index" name="index" value="index" onChange={this.handleChange}/>
	  			  <label htmlFor="vehicle1">{option}</label>
	  			  </div>
			  	)
			  })}
			</div>
		)
	}
}

// ReactDOM.render(<StatementTable />, document.getElementById('root'));
ReactDOM.render(<CheckListMain />, document.getElementById('root'));
