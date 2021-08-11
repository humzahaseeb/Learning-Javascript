
// John's team
let Team_1, goals_In_Last_3Games_team1;

Team_1 = "John's Team";
goals_In_Last_3Games_team1 = 90 + 20 + 10;

let average_score_team_1 = goals_In_Last_3Games_team1 / 3;

// Mike's Team

let Team_2, goals_In_Last_3Games_team2;

Team_2 = "Mike's Team";
goals_In_Last_3Games_team2 = 15 + 90 + 15;

let average_score_team_2 = goals_In_Last_3Games_team2 / 3;

// Marie's Team

var Team_3, goals_In_Last_3Games_team3;

Team_3 = "Marie's Team";
goals_In_Last_3Games_team3 = 5 + 100 + 5;

var average_score_team_3 = goals_In_Last_3Games_team3 / 3;





// Declaring who won    
    
if (average_score_team_1 > average_score_team_2 && average_score_team_3) {
    console.log(Team_1 + " won with the average score of " + average_score_team_1);
}
else if (average_score_team_2 > average_score_team_1 && average_score_team_3) {
    console.log(Team_2 + " won with the average score of " + average_score_team_2);
}
else if (average_score_team_3 > average_score_team_1 && average_score_team_2) {
    console.log(Team_3 + " won with the average score of " + average_score_team_3);
}
else {
    console.log("All teams have drawn with same average score");
}




