// Use it to restore the movie_info database and complete the following challenges:

// Select only the names of all the movies.
// Select the oldest movie.
// Select all movies that start with a T.
// Select all movies that have a release year of 1994 or 2010.
// Select all movie names that have a null value for the release year or category.
// Select all movies that have a release year of 2020 and "the" in the movie name.
// Select all movie names that do not have a release year of 2020.
// Update the release year of the movie with no release year.
// Insert a record of your favorite movie.
// Delete the record you just created in the previous step.
// View possible solutions to the above challenges here. If you are not sure how to restore the movie_info database, review the steps in part 1 of this activity.

// SELECT * FROM movies;

// SELECT MIN(release_year) FROM movies;

// SELECT * FROM movies
// WHERE movie_name LIKE 'T%';

// SELECT * FROM movies
// WHERE release_year = 1994 or release_year = 2010;

// SELECT * FROM movies
// WHERE release_year IS NULL OR category IS NULL;

// SELECT * FROM movies
// WHERE release_year = 2021 OR movie_name LIKE 'The%';

// SELECT * FROM movies 
// WHERE NOT release_year = 2020;

// UPDATE movies
// SET release_year = 2020
// WHERE release_year IS NULL;

// INSERT INTO movies (movie_id, movie_name, release_year, category)
// VALUES (0, 'Jackie Chan : God Armour', 1997, 'Action' )
