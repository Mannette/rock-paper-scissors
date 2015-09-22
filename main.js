$(document).ready(function() {
  $('#rock').click(function() {
    playerOne.choice = 0;
    getWinner(playerOne, computerPlayer);
  });
  $('#paper').click(function() {
    playerOne.choice = 1;
    getWinner(playerOne, computerPlayer);
  });
  $('#scissors').click(function() {
    playerOne.choice = 2;
    getWinner(playerOne, computerPlayer);
  });
  $('#lizard').click(function() {
    playerOne.choice = 3;
    getWinner(playerOne, computerPlayer);
  });
  $('#spock').click(function() {
    playerOne.choice = 4;
    getWinner(playerOne, computerPlayer);
  });
  $('#wins').text(playerOne.wins);
  $('#losses').text(playerOne.losses);

  $('#reset').click(function() {
    playerOne.wins = 0;
    playerOne.losses = 0;
    $('#wins').text(0);
    $('#losses').text(0);
    $('#message').text('');
  });

  function computerChoice() {
    computerPlayer.choice = Math.floor(Math.random() * 5);
  }

  function getWinner(playerOne, computerPlayer) {
    computerChoice();
    if (playerOne.choice === computerPlayer.choice) {
      $('#message').html('tie');
      return;
    }
    if (playerOne.choice === 0 && computerPlayer.choice !== (1 || 4)) {
      playerOne.wins += 1;
      getPoints(playerOne.wins, playerOne.losses);
      $('#message').html('rock wins');
      return;
    } else if (playerOne.choice === 0 && computerPlayer.choice === (1 || 4)) {
      playerOne.losses += 1;
      getPoints(playerOne.wins, playerOne.losses);
      $('#message').html('rock loses');
      return;
    }
    if (playerOne.choice === 1 && computerPlayer.choice !== (2 || 3)) {
      playerOne.wins += 1;
      getPoints(playerOne.wins, playerOne.losses);
      $('#message').html('paper wins');
      return;
    } else if (playerOne.choice === 1 && computerPlayer.choice === (2 || 3)) {
      playerOne.losses += 1;
      getPoints(playerOne.wins, playerOne.losses);
      $('#message').html('paper loses');
      return;
    }
    if (playerOne.choice === 2 && computerPlayer.choice !== (0 || 4)) {
      playerOne.wins += 1;
      getPoints(playerOne.wins, playerOne.losses);
      $('#message').html('scissors wins');
      return;
    } else if (playerOne.choice === 2 && computerPlayer.choice === (0 || 4)) {
      playerOne.losses += 1;
      getPoints(playerOne.wins, playerOne.losses);
      $('#message').html('scissors loses');
      return;
    }
    if (playerOne.choice === 3 && computerPlayer.choice !== (0 || 2)) {
      playerOne.wins += 1;
      getPoints(playerOne.wins, playerOne.losses);
      $('#message').html('lizard wins');
      return;
    } else if (playerOne.choice === 3 && computerPlayer.choice === (0 || 2)) {
      playerOne.losses += 1;
      getPoints(playerOne.wins, playerOne.losses);
      $('#message').html('lizard loses');
      return;
    }
    if (playerOne.choice === 4 && computerPlayer.choice !== (3 || 1)) {
      playerOne.wins += 1;
      getPoints(playerOne.wins, playerOne.losses);
      $('#message').html('spock wins');
      return;
    } else if (playerOne.choice === 3 && computerPlayer.choice === (3 || 1)) {
      playerOne.losses += 1;
      getPoints(playerOne.wins, playerOne.losses);
      $('#message').html('spock loses');
      return;
    }

  }

  function getPoints(playerWins, playerLosses) {
    $('#wins').html(playerWins);
    $('#losses').html(playerLosses);
  }

});

var Player = function() {
  this.wins = 0;
  this.losses = 0;
  this.choice = undefined;
};
var playerOne = new Player();
var computerPlayer = new Player();
