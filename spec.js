describe('Products', function(){
	beforeEach(module('ngplay'));
	it('should render an empty list', inject(function($compile, $rootScope){
		$rootScope.fruits = [];
		expect($compile('<products-list items="fruits"></products-list>')).toBeTruthy();
	}));

	it('should render a list with one element "Apple"', inject(function($compile, $rootScope){
		$rootScope.fruits = ['Apple'];
		var li = $compile('<products-list items="fruits"></products-list>')($rootScope).find('li');
		expect(li.length).toBe(1);
		expect(li[0].innerHTML).toBe("Apple");
	}));

	it('should render a list with 2 elements "Orange and Pear"', inject(function($compile, $rootScope){
		$rootScope.fruits = ['Orange', 'Pear'];
		var li = $compile('<products-list items="fruits"></products-list>')($rootScope).find('li');		
		expect(li.length).toBe(2);
		expect(li[0].innerHTML).toBe('Orange');
		expect(li[1].innerHTML).toBe('Pear');
	}));

});