const predictedScores = [
    {name: "Eric", score: "85%"},
    {name: "Sandor", score: "85%"},
    {name: "Ben", score: "78%"},
    {name: "Leigh", score: "70%"},
    {name: "Keratuwe", score: "80%"},
    {name: "Yana", score: "85%"},
    {name: "Matthew", score: "80%"},
    {name: "Michael", score: "90%"},
    {name: "Noah", score: "90%"},
    {name: "Martha", score: "79%"},
    {name: "Denise", score: "90%"},
    {name: "Gemma", score: "72%"},
    {name: "Kara", score: "75%"},
    {name: "Kaye", score: "85%"},
    {name: "Yuna", score: "81%"},
    {name: "John", score: "80%"},
    {name: "Wisdom", score: "70%"},
    {name: "Fatima", score: "75%"} 
]


  
  predictedScores.sort( function( a, b ) {
    if ( a.score < b.score ){
      return -1;
    }
    if ( a.score > b.score ){
      return 1;
    }
    return 0;
  } );

console.log(predictedScores)