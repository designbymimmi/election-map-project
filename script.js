var createPolitician = function(name, partyColor){

    var politician = {};
    politician.name = name;
    politician.partyColor = partyColor;
    politician.electionResults = null;
    politician.totalVotes = 0;
    politician.tallyVotes = function(){

  for (var i = 0; i < this.electionResults.length; i++) {
    this.totalVotes = this.totalVotes + this.electionResults[i];
  }
};

    return politician;

};

var snoop = createPolitician("Snoop", [132, 17, 11]);

var kanye = createPolitician("Kanye", [245, 141, 136]);

var winner;

snoop.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

kanye.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

snoop.electionResults[9] = 1;
kanye.electionResults[9] = 28;

snoop.electionResults[4] = 17;
kanye.electionResults[4] = 38;

snoop.electionResults[43] = 11;
kanye.electionResults[43] = 27;

var setStateResults = function(state){

  theStates[state].winner = null;

  if (snoop.electionResults[state] < kanye.electionResults[state]){
    theStates[state].winner = snoop;
  } else if (snoop.electionResults[state] > kanye.electionResults[state]){
    theStates[state].winner = kanye;
  }

  var stateWinner = theStates[state].winner;

  if (stateWinner !== null){
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rgbColor = [11, 32, 57];
  }

  var countryInfoTable = document.getElementById('countryResults');
  var row = countryInfoTable.children[0].children[0];

  row.children[0].innerText = snoop.name;
  row.children[1].innerText = snoop.totalVotes;
  row.children[2].innerText = kanye.name;
  row.children[3].innerText = kanye.totalVotes;
  row.children[5].innerText = winner;

  var stateInfoTable = document.getElementById('stateResults');
  var header = stateInfoTable.children[0];
  var body = stateInfoTable.children[1];
  var stateName = header.children[0].children[0];
  var abbrev = header.children[0].children[1];
  var candidate1Name = body.children[0].children[0];
  var candidate2Name = body.children[1].children[0];
  var candidate1Results = body.children[0].children[1];
  var candidate2Results = body.children[1].children[1];
  var winnersName = body.children[2].children[1];

  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";
  candidate1Name.innerText = snoop.name;
  candidate2Name.innerText = kanye.name;
  candidate1Results.innerText = snoop.electionResults[state];
  candidate2Results.innerText = kanye.electionResults[state];

  if (snoop.electionResults[state] < kanye.electionResults[state]){
    winnersName.innerText = kanye.name;
  } else if (snoop.electionResults[state] > kanye.electionResults[state]){
    winnersName.innerText = snoop.name;
  } else {
    winnersName.innerText = "Tie";
  }
}

snoop.tallyVotes();
kanye.tallyVotes();

  if (snoop.totalVotes > kanye.totalVotes){
    winner = snoop.name;
  } else if (snoop.totalVotes < kanye.totalVotes){
    winner = kanye.name;
  } else {
    winner = "Draw";
  };
