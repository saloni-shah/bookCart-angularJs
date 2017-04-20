var myApp = angular.module("myApp",["ngRoute"]);

myApp.config(function($routeProvider){
	$routeProvider
			.when("/books",{
				templateUrl:"partials/book-list.html",
				controller:"BookListCtrl"
			})
			.when("/cart",{
				templateUrl:"partials/cart-list.html",
				controller:"CartListCtrl"
			})
			.otherwise({
				redirectTo:"/books"
			});
});

myApp.factory("cartService",function(){
	var cart = [];
	return {
		getCart : function(){
			return cart;
		},
		addToCart : function(book){
			cart.push(book);
		},
		buy : function(book){
			console.log("Thanks for buying book"+ book);
		}
	}
});

myApp.controller("CartListCtrl",function($scope,cartService){
	$scope.cart = cartService.getCart();
	$scope.buy = function(book){
		cartService.buy(book);
	}
});

myApp.controller("HeaderCtrl",function($scope){
	//$scope.name ="jhsjds";
	$scope.appDetails = {
		title : "BookCart",
		tagline : "We've 1 Million books for you"
	};
	$scope.isActive = function(path){
		if(path==location.path){
			return true;
		}else{
			return false;
		}
	}
});

myApp.factory("bookService",function(){
	var books = [
		{
			name: "CSS3",
			price: "30",
			rating : 5,
			publisher: "Prof. James",
			releasedate : "3/14/2017",
			details : "gsscvhsgdvhgsdvchgsdvchgsdvfhcfsdfsdyf"
		},
		{
			name: "JS",
			price: "30",
			rating : 5,
			publisher: "Prof. James",
			releasedate : "3/14/2017",
			details : "gsscvhsgdvhgsdvchgsdvchgsdvfhcfsdfsdyf"
		},
		{
			name: "jQuery",
			price: "30",
			rating : 5,
			publisher: "Prof. James",
			releasedate : "3/14/2017",
			details : "gsscvhsgdvhgsdvchgsdvchgsdvfhcfsdfsdyf"
		},
		{
			name: "Bootstrap",
			price: "30",
			rating : 5,
			publisher: "Prof. James",
			releasedate : "3/14/2017",
			details : "gsscvhsgdvhgsdvchgsdvchgsdvfhcfsdfsdyf"
		},
		{
			name: "Promises",
			price: "30",
			rating : 5,
			publisher: "Prof. James",
			releasedate : "3/14/2017",
			details : "gsscvhsgdvhgsdvchgsdvchgsdvfhcfsdfsdyf"
		},
		{
			name: "Call and Apply",
			price: "30",
			rating : 5,
			publisher: "Prof. James",
			releasedate : "3/14/2017",
			details : "gsscvhsgdvhgsdvchgsdvchgsdvfhcfsdfsdyf"
		}

	];
	return {
		getBooks: function(){
			return books;
		}
	}
}); 

myApp.controller("BookListCtrl",function($scope,bookService,cartService){
	$scope.books = bookService.getBooks();
	$scope.addToCart = function(book){
		cartService.addToCart(book);
	}
});
