angular.module('madApp', [])
	.controller('myCtrl', function($scope) {
		
		
		$scope.name = 'Name'
		$scope.jobtitle = 'Job Title'
		$scope.tedioustask= 'Tedious Task'
		$scope.dirtytask= 'Dirty Task'
		$scope.celebrity='Celebrity'
		$scope.uselessskill='Useless Skill'
		$scope.adjective='Adjective'
		$scope.obnoxiouscelebrity='Obnoxious Celebrity'
		$scope.hugenumber='Huge Number'
		$scope.gender=true
        $scope.submitted=false

	    $scope.submit = function(){
		    if (this.inputForm.$valid) {
		    	$scope.submitted=true
		    };
		}

		$scope.click = function(){
			$scope.name = 'Name'
			$scope.jobtitle = 'Job Title'
			$scope.tedioustask= 'Tedious Task'
			$scope.dirtytask= 'Dirty Task'
			$scope.celebrity='Celebrity'
			$scope.uselessskill='Useless Skill'
			$scope.adjective='Adjective'
			$scope.obnoxiouscelebrity='Obnoxious Celebrity'
			$scope.hugenumber='Huge Number'
			$scope.submitted=false
			
		}

    })


	
