
/************movies main controller******************/
/******Handle all the inputs and outputs*************/
/****************************************************/

app.controller('moviesController', ['$scope','moviesService','$window' , function($scope, moviesService, $window){



  var moviesOptions = [];
<<<<<<< HEAD:movies_controller.js

=======
>>>>>>> 438637b888c2389370008d9b4546e58bbbab631b:public/movies_controller.js

  moviesService.getGenreList().then(function () {
       $scope.genreOptions = moviesService.genre;
       $scope.selectedGenre = moviesService.genre[0];
  });
  

  

  $scope.pgOptions = moviesService.pg;

  $scope.selectedpg = moviesService.pg[0];

  $scope.suggestedMovies = moviesOptions;


  $scope.btnRand = function(){

      moviesService.getMoviesFromDummy();
      for(var i = 0; i < 2; i++){
        moviesOptions[i] = moviesService.getRandMovie();
      }
  };

  $scope.btnRemove = function(movie){
    // if(moviesService.movie < 2){
    //   moviesOptions[moviesOptions.indexOf(movie)] = moviesService.getRandMovie();
    // }else{
    //   $window.alert('Thats It !!!');
    // }
    var temp = moviesService.getRandMovie();
    if (temp){
      moviesOptions[moviesOptions.indexOf(movie)] = temp;
    }else{
      $window.alert('Thats it !!!');
    }
  };



}]);
