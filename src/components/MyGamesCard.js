import React, { Component } from 'react';
import GoogleMapComponent from './GoogleMapComponent'

class MyGamesCard extends Component{
	
    handleDeleteGame = (e) => {
			e.preventDefault()
			fetch(`http://localhost:3000/api/users/${this.props.userId}/games/${this.props.gameId}`,{
				mode: 'cors', 
				credentials: 'include',
				method: 'DELETE',
				body: JSON.stringify({
					game_id: this.props.gameId
				}),
				headers:{
					'Content-Type': 'application/json'
				}
			})
			.then( () => {
				this.props.changeLoadedStatus()
			})
		}

		backgroundImage = () => {
			let sport = this.props.locationData.sport
			switch(sport){
			case 'Basketball':
			return "accordian-bg-basketball";
			case 'Soccer':
			return "accordian-bg-soccer";
			case 'Volleyball':
			return "accordian-bg-volleyball";
			case 'Ultimate-frisbee':
			return "accordian-bg-frisbee";
			case 'Tennis':
			return "accordian-bg-tennis";
			default:
			console.log('no sports');
		}
	}
		


    render(){
			const classes = `my-game-card ${this.backgroundImage()}`
			return(
				<div className={classes}>
				<button className="btn btn-danger saved-games-remove-button" onClick={this.handleDeleteGame}>Remove</button>
				<br></br>
				<p className="saved-game-distance">{Math.round( this.props.locationData.dist * 10 ) / 10} km away</p>
					<p className="saved-games-players">With {this.props.locationData.other_players - 1} other players</p>
					<div className="saved-games-map">
			<GoogleMapComponent location={this.props.locationData.location}/>
			</div>
			</div>
			)
    }
}

export default MyGamesCard
