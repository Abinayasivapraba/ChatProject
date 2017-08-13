app.controller('UserController',['$scope','$location','$rootScope','$firebaseArray','$firebaseAuth',
                                 function($scope,$location,$rootScope,$firebaseArray,$firebaseAuth){
	
	
	console.log("UserController")
	
	var ref=firebase.database().ref().child('users');
	$scope.users=$firebaseArray(ref);
	console.log(ref);
	$scope.addUsers=function(){
		console.log("Adding users")
		$scope.users.$add({
			username: $scope.username,
			role:$scope.role,
			email:$scope.email,
			password:$scope.password,
			contact:$scope.contact
			})
			.then(function(){
				
				console.log("Added Users");
				alert("User Registered Successfully")
				$location.path("/")
				
				$scope.username='';
				$scope.role='';
				$scope.email='';
				$scope.contact=''
				
			});
	};
	
	$scope.signIn=function($scope){
		console.log("User Signin function")
		firebase.auth().signInWithEmailAndPassword(email,password)({
			email:$scope.email,
			password:$scope.password,
		})
		.then(function(){
			console.log("User login");
			alert("Successful Login");
			$location.path("/")
			
		})
		
	}
	
	
	
	
	
	
	
	
	
}])