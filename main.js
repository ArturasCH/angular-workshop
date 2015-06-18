	"use strict";

var app = angular.module('ngplay', []);	


app.directive('productsList', function(){
	return {
		scope: {
			items: '='			
		},

		link: function postLink(scope, elem){
			console.log(scope.items, elem);
			if(scope.items){
			elem[0].innerHTML = '<ul>'+ scope.items.map(function(fruits){
				return '<li>'+fruits+'</li>';
			}) + '</ul>';
		}else{
			elem[0].innerHTML = '<p>no dice</p>'
		}
		//templateUrl: 'products.html'
		}
	};
});



