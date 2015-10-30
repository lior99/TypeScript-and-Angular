/// <reference path="./typings/angularjs/angular.d.ts"/>
var myModule;
(function (myModule) {
    'use strict';
    // interface IPerson{
    // 	name: string;
    // 	age: number;
    // }
    var Team = (function () {
        function Team(name, wins, loss, draws) {
            this._name = name;
            this._wins = wins;
            this._loss = loss;
            this._draws = draws;
            this._teamName = this._name.toLowerCase().replace(' ', '_');
            // this._points = points()
            this._points = this._wins * 3 + this._draws;
        }
        Object.defineProperty(Team.prototype, "name", {
            /***
            properties
            ***/
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Team.prototype, "position", {
            get: function () {
                return this._position;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Team.prototype, "wins", {
            get: function () {
                return this._wins;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Team.prototype, "loss", {
            get: function () {
                return this._loss;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Team.prototype, "draws", {
            get: function () {
                return this._draws;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Team.prototype, "points", {
            get: function () {
                return this._points;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Team.prototype, "gamesPlayed", {
            get: function () {
                return this._wins + this._draws + this._loss;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Team.prototype, "teamName", {
            get: function () {
                return this._teamName;
            },
            enumerable: true,
            configurable: true
        });
        /*
        methods
        */
        Team.prototype.addWin = function () {
            this._wins++;
            this._points += 3;
        };
        Team.prototype.addLoss = function () {
            this._loss++;
        };
        Team.prototype.addDraw = function () {
            this._draws++;
            this._points++;
        };
        return Team;
    })();
    var myController = (function () {
        function myController() {
            this._teams = [];
            this._game = {
                score1: 0,
                score2: 0
            };
            this._teams.push(new Team("Barcelona", 10, 2, 3));
            this._teams.push(new Team("Real Madrid", 8, 5, 2));
            this._teams.push(new Team("Atletico Madrid", 8, 0, 7));
            this._teams.push(new Team("Celta Vigo", 14, 0, 1));
            this._teams.push(new Team("Viaarieal", 4, 7, 4));
            this._teams.push(new Team("Atletico Bilbao", 1, 3, 11));
            console.log("Testing....", this.getTeamByName('atletico_madrid'));
        }
        myController.prototype.getTeamByName = function (name) {
            var team = this._teams.filter(function (team) {
                return team.teamName == name;
            });
            return team[0];
        };
        Object.defineProperty(myController.prototype, "teams", {
            get: function () {
                this._teams.sort(function (a, b) {
                    if (a.points > b.points)
                        return -1;
                    if (a.points < b.points)
                        return 1;
                    return 0;
                });
                // this.teams.forEach((elm, index) => { 
                //  elm.games = elm.gamesPlayed(); 
                // });
                return this._teams;
            },
            enumerable: true,
            configurable: true
        });
        myController.prototype.setScore = function () {
            if (this._game.score1 > this._game.score2) {
                this.getTeamByName("atletico_madrid").addWin();
                this.getTeamByName("viaarieal").addLoss();
            }
            else {
                if (this._game.score1 < this._game.score2) {
                    this.getTeamByName("atletico_madrid").addLoss();
                    this.getTeamByName("viaarieal").addWin();
                }
                else {
                    this.getTeamByName("atletico_madrid").addDraw();
                    this.getTeamByName("viaarieal").addDraw();
                }
            }
            //return this._teams;
        };
        Object.defineProperty(myController.prototype, "game", {
            get: function () {
                return this._game;
            },
            enumerable: true,
            configurable: true
        });
        return myController;
    })();
    angular.module('myModule', []).controller('myController', myController);
})(myModule || (myModule = {}));
//# sourceMappingURL=myController.js.map