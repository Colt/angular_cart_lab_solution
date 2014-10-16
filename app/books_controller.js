var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.bookApp.filter("searchFor", function(){
	return function(arr, searchString){
		if(!searchString){
			return arr;
		}

		var res = [];
		angular.forEach(arr,function(book){
			if (book.title.toLowerCase().indexOf(searchString)!==-1 || book.author.toLowerCase().indexOf(searchString)!==-1){
				res.push(book);
			}
		});
		return res;
	}

});

bookly.bookApp.filter("orderBy", function(){
	return function(arr, type){
		if(!type){
			return arr;
		}
		var res = _.sortBy(arr, type);
		return res;
	}

});

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;
  $scope.type ="author";
  $scope.itemCount = 0;
  $scope.total = 0;
  $scope.cart = [];

  $scope.addToCart  = function(book){
  	$scope.itemCount++;
  	var uniq = true;
  	for(var i = 0; i<$scope.cart.length; i++){
  		if($scope.cart[i].book===book){
  			$scope.cart[i].quantity++;
  			uniq = false;
  		}
  	}
  	if(uniq){
  		var cartItem = {
	  		book: book,
	  		quantity: 1
  		}
  		$scope.cart.push(cartItem);
  	}
  	$scope.total+=book.price;
  }

  $scope.emptyCart = function(){
  	$scope.cart = [];
  	$scope.total = 0;
  	$scope.itemCount = 0;
  }
};
