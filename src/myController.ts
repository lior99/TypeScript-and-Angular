module myModule {
	'use strict';

		// interface IPerson{
		// 	name: string;
		// 	age: number;
		// }

		class Team { 
			private _name: string;
			private _position: number;
			private _wins: number;
			private _loss: number;
			private _draws: number;


			constructor(name: string, wins?: number, loss?: number, draws?: number) {
				this._name = name;
				this._wins = wins;
				this._loss = loss;
				this._draws = draws;
				// this._position = position;
			}

			get name(){
				return this._name;
			}	

			get position(){
				return this._position;
			}

			get wins() {
				return this._wins;
			}

			get loss() {
				return this._loss;
			}

			get draws() {
				return this._draws;
			}		

			get points(){
				return this._wins * 3 + this._draws * 1;
			}	

			get gamesPlayed(){
				return this._wins + this._draws + this._loss;
			}

			addWin(){
				this._wins++;
			}

			addLoss(){
				this._loss++;
			}

			addDraw(){
				this._draws++;
			}
			

		}

	 class myController {
		 private _teams = [];
		 private _game = {
		 	score1 : 0,
		 	score2 : 0
		 }

	 	constructor() { 
			  this._teams.push(new Team("Barcelona", 10, 2, 3));
			  this._teams.push(new Team("Real Madrid", 8, 5, 2));
			  this._teams.push(new Team("Atletico Madrid", 8, 0, 7));
			  this._teams.push(new Team("Celta Vigo", 14, 0 ,1));
			  this._teams.push(new Team("Viaarieal", 4, 7, 4));
			  this._teams.push(new Team("Atletico Bilbao", 1, 3, 11));
	 	}

	 	get teams(){
			  this._teams.sort(function(a: Team, b: Team) {
				  if (a.points > b.points) return -1;
				  if (a.points < b.points) return 1;
				  return 0;
			  });

				  // this.teams.forEach((elm, index) => { 
					 //  elm.games = elm.gamesPlayed(); 
				  // });

			  return this._teams;
	 	}

	 	setScore(){
			console.log("Hi there!!!");
			if (this._game.score1 > this._game.score2){
				this._teams[2].addWin();
				this._teams[4].addLoss();
			}
			else{
				if (this._game.score1 < this._game.score2){
					this._teams[2].addLoss();
					this._teams[4].addWin();
				}
				else{
					this._teams[2].addDraw();
					this._teams[4].addDraw();
				}
			}

			// $inject	
			// $scope.$apply();

			return this._teams;


	 	}

	 	get game(){
			  return this._game;
	 	}

	 }

	 angular.module('myModule', []).controller('myController', myController);

}

