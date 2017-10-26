/*var app = angular.module('myApp1', []);
app.controller('myCtrl1', function($scope) {
	console.log("form submi");
   $scope.submit= function(){
	   console.log("Entered submit..")
      var data = $.param({
        book: JSON.stringify({
            author: $scope.author,
            title : $scope.title,
            body : $scope.body
        })
      });
	  
	  
	   console.log("data"+data);

      $http.post("/api/book/", data).success(function(data, status) {
        console.log('Data posted successfully');
      })
   }
});*/
	  
 var app = angular.module('myApp1', []);
 app.controller('myCtrl1', function($scope,$http) {
 $scope.formModel = {};
 

            
$scope.submit= function(){
    console.log('clicked submit');
	
	
	 console.log($scope.formModel);
	 
	 var fd = new FormData();
          
            fd.append('author', $scope.author);
	 
	  $http({
        url: 'http://localhost:5000/book',
        method: 'POST',
       // data: $scope.formModel,
	   data:fd,
	   
	    transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
	
	  })
	  .then(function (httpResponse) {
        console.log('response:', httpResponse);
    })
	/* 
$http.post('http://localhost:5000/book',$scope.formModel)
		.success(function(data){
			console.log("**************");
			console.log(":)");
		}
		)
		.error(function(data){
			console.log(":(");}
			);*/
 /*
  var fd = new FormData();
          
            fd.append('formNo', $scope.author);
			
			console.log("form data"+fd);
    $http({
        url: 'http://localhost:5000/book',
        method: 'POST',
        data: $.param({abcd:"It is form HTTP"}),
		transformRequest: angular.identity,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
    }).success(function(data) {
               console.log('data'+data);
               }).error(function() {
                alert('Error in creating Tier-3 Form. Please retry.');
                //console.log('data was not updated successfully');
                //$location.url("/profile");
            });
	/*.then(function (httpResponse) {
        console.log('response:', httpResponse);
    })*/
   }
 });
 
 /*var app = angular.module('myApp1', []);
app.controller('myCtrl1', function($scope) {
	
	console.log("angular controller");
   $scope.submit= function(){
      var data = $.param({
        book: JSON.stringify({
            author: $scope.author,
            title : $scope.title,
            body : $scope.body
        })
      });
	  
	  console.log("angular controller"+data);

      $http.post("/api/book/", data).success(function(data, status) {
        console.log('Data posted successfully');
      })
   }
});*/

	  
	 