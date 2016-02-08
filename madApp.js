angular.module('madApp', ['ngAnimate'])
	.controller('myCtrl', function($scope) {
		

		init()

	    
	    $scope.submit = function(){
		    if (this.inputForm.$valid) {
		    	$scope.submitted=true
		    };
		}

		$scope.click = init


		function init(){
			if ($scope.submitted) {$scope.inputForm.$setPristine()}
			$scope.name = 'Name'
			$scope.jobtitle = 'Job Title'
			$scope.tedioustask= 'Tedious Task'
			$scope.dirtytask= 'Dirty Task'
			$scope.celebrity='Celebrity'
			$scope.uselessskill='Useless Skill'
			$scope.adjective='Adjective'
			$scope.obnoxiouscelebrity='Obnoxious Celebrity'
			$scope.hugenumber=null
			$scope.gender=true
			$scope.submitted=false
			
		}

    })


	
