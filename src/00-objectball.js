function gameObject() {
  const obj = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["black", "white"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["turquoise", "purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
      }
    }
  }
  return obj;
}

function homeTeamName() {
  let object = gameObject();
  return object.home.teamName;
}

function numPointsScored(playerName) {
  let obj = gameObject();
  let points;
  for (let key in obj) {
    if (playerName in obj[key]["players"]) {
      points = obj[key]["players"][playerName]["points"];
    }
  }
  return points || "Player doesn't exist.";
}

// console.log(numPointsScored("Alan Anderson"))

function shoeSize(playerName) {
  let obj = gameObject();
  let shoeSize;
  for (let key in obj) {
    if (playerName in obj[key]["players"]) {
      shoeSize = obj[key]["players"][playerName]["shoe"];
    }
  }
  return shoeSize || "Player doesn't exist.";
}

// console.log(shoeSize("Alan Anderson"))

function teamColors(teamName) {
  let obj = gameObject();
  let colors;
  for (let key in obj) {
    if (obj[key]["teamName"] === teamName) {
      colors = obj[key]["colors"];
    }
  }
  return colors || "Team doesn't exist."
}

// console.log(teamColors("Brooklyn Nets"))

function teamNames() {
  let obj = gameObject();
  let teams = [];
  for (let key in obj) {
    teams.push(obj[key]["teamName"])
  }
  return teams;
}

// console.log(teamNames())

function playerNumbers(teamName) {
  let obj = gameObject();
  let jerseyNums = [];
  for (let key in obj) {
    if (obj[key]["teamName"] === teamName) {
      for (let player in obj[key]["players"]) {
        jerseyNums.push(obj[key]["players"][player]["number"]);
      }
    }
  }
  return jerseyNums;
}

// console.log(playerNumbers("Brooklyn Nets"))

function playerStats(playerName) {
  let obj = gameObject();
  for (let key in obj) {
    if (playerName in obj[key]["players"]) {
      return obj[key]["players"][playerName];
    }
  }
  return "Player not found."
}

// console.log(playerStats("Ben Gordon"))

function bigShoeRebounds() {
  let obj = gameObject();
  let current = {
    playerName: Object.keys(obj.home.players)[0],
    shoeSize: obj.home.players[Object.keys(obj.home.players)[0]].shoe,
    rebounds: obj.home.players[Object.keys(obj.home.players)[0]].rebounds
  }
  for (let key in obj) {
    for (let player in obj[key]["players"]) {
      if (obj[key]["players"][player]["shoe"] > current.shoeSize) {
        current.playerName =  player;
        current.shoeSize = obj[key]["players"][player]["shoe"];
        current.rebounds = obj[key]["players"][player]["rebounds"];
      }
    }
  }
  return current;
}

// console.log(bigShoeRebounds())

function mostPointsScored() {
  let obj = gameObject();
  let current = {
    playerName: Object.keys(obj.home.players)[0],
    points: obj.home.players[Object.keys(obj.home.players)[0]].points
  }
  for (let key in obj) {
    for (let player in obj[key]["players"]) {
      if (obj[key]["players"][player]["points"] > current.points) {
        current.playerName =  player;
        current.points = obj[key]["players"][player]["points"];
      }
    }
  }
  return current;
}

console.log(mostPointsScored());

function winningTeam() {
  let obj = gameObject();
  let homePoints = 0;
  let awayPoints = 0;
  for (let player in obj["home"]["players"]) {
    homePoints += obj["home"]["players"][player].points;
  }
  for (let player in obj["away"]["players"]) {
    awayPoints += obj["away"]["players"][player].points;
  }
  return homePoints > awayPoints 
         ? `Home team won with ${homePoints} points.`
         : `Away team won with ${awayPoints} points.`
}

// console.log(winningTeam()); 

function playerWithLongestName() {
  let obj = gameObject();
  let current = {
    longestName: Object.keys(obj.home.players)[0],
    nameLength: Object.keys(obj.home.players)[0].length
  }
  for (let key in obj) {
    for (let player in obj[key]["players"]) {
      if (player.length > current.nameLength) {
        current.longestName = player;
        current.nameLength = player.length;
      }
    }
  }
  return current;
}

// console.log(playerWithLongestName())

function doesLongNameStealATon() {
  let obj = gameObject();
  let longName = playerWithLongestName().longestName;
  let longNameSteals;
  for (let key in obj) {
    if (longName in obj[key]["players"]) {
      longNameSteals = obj[key]["players"][longName]["steals"]
    }
  }
  let mostSteals = longNameSteals;
  for (let key in obj) {
    for (let player in obj[key]["players"]) {
      if (obj[key]["players"][player]["steals"] > mostSteals) {
        mostSteals = obj[key]["players"][player]["steals"];
      }
    }
  }
  return longNameSteals >= mostSteals
         ? `Yes, ${longName} had the most steals.`
         : `No, ${longName} did not have the most steals.`
}

// console.log(doesLongNameStealATon())