	"use strict";

var app = angular.module('ngplay', []);	


app.directive('productsList', function(){
	return {
		scope: {
			items: '='			
		},

		link: function postLink(scope, element){
			console.log(scope.items, element);
			if(scope.items){
			element[0].innerHTML = '<ul>'+ scope.items.map(function(fruit){
				return '<il>'+fruit+'</li>';
			}) + '</ul>';
		}else{
			element[0].innerHTML = '<p>no dice</p>'
		}
		//templateUrl: 'products.html'
		}
	};
});



