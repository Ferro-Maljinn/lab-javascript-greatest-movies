// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(films) {
  let allDirectors = films.map((movie) => {
    return movie.director;
  });
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
//should be declared
function howManyMovies(countDrama) {
  let sspielbergDrama = countDrama.filter(
    (movies) => {
    return movies.director == "Steven Spielberg" &&
     movies.genre.includes("Drama")
  });
    return sspielbergDrama.length;
}




// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(nums) {
  let total = nums.reduce(
    (previousValue, currentValue) => previousValue += currentValue.score || 0
    , 0
)
  let avg = total / nums.length || 0;
  let jo = avg.toFixed(2); //limit to 2 decimal
  return parseFloat(jo)  // convert from str to float and return
}
//should return average even if one of the movies does not have score



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(avg) {
  return avg.reduce((movie, score) => (movie + score)) / avg.length;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(sortedYear) {
/*   const sortedByYear = JSON.parse(JSON.stringify(year)).sort((acc, year) => {
    return arr.year - year.year
  }) */
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
