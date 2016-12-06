
/************movies main controller******************/
/******Handle all the inputs and outputs*************/
/****************************************************/

app.controller('moviesController', ['$scope','moviesService', function($scope, moviesService){

  var moviesOptions = [];

  $scope.suggestedMovies = moviesOptions;


  $scope.btnRand = function(){

      moviesService.getMoviesFromDummy();
      for(var i = 0; i < 2; i++){
        moviesOptions[i] = moviesService.getRandMovie();
      }
  };

  $scope.btnRemove = function(movie){
    moviesService.removeMovieFromPull(movie);
    moviesOptions[moviesOptions.indexOf(movie)] = moviesService.getRandMovie();
  };



}]);