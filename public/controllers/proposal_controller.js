var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
  $scope.myTxt = "You have not yet clicked submit";
  $scope.myFunc = function () {
      $scope.myTxt = "You clicked submit!";
  }
  
  	$scope.table_show = false ;
	$scope.new_proposal_entry = function() {
	$scope.table_show = !$scope.table_show ;
	}
	
	 $scope.submitbutton = function() {
       if(!($scope.proposal_id && $scope.region  && $scope.country  && $scope.proposal_date  && $scope.proposal_type  &&
		$scope.approval_date   && $scope.number_of_tasks_covered  &&
		$scope.device_qty   && $scope.total_qty ))
		{
		alert("Enter All Fields");
		return;
		}
		else{
		alert("Submitted Successfully ");
		}
		/* var obj = new Object();
   obj.name = "Raj";
   obj.age  = 32;
   obj.married = false;
   var jsonString= JSON.stringify(obj);*/
		var app_proposal_entry_obj = new Object();
		app_proposal_entry_obj.proposal_id = $scope.proposal_id;
		app_proposal_entry_obj.region = $scope.region ;
		app_proposal_entry_obj.country = $scope.country ;
		app_proposal_entry_obj.proposal_type = $scope.proposal_type ;
		app_proposal_entry_obj.proposal_date = $scope.proposal_date.toLocaleDateString() ;
		app_proposal_entry_obj.approval_date = $scope.approval_date.toLocaleDateString() ;
		app_proposal_entry_obj.shared_with_procurement_team_on = $scope.shared_with_procurement_team_on.toLocaleDateString() ;
		app_proposal_entry_obj.approver = $scope.approver ;
		app_proposal_entry_obj.number_of_tasks_covered = $scope.number_of_tasks_covered ;
		app_proposal_entry_obj.device_qty = $scope.device_qty ;
		app_proposal_entry_obj.accessary_periperal_qty = $scope.accessary_periperal_qty ;
		app_proposal_entry_obj.total_qty = $scope.total_qty;
		app_proposal_entry_obj.status = "APPROVED";
		var app_proposal_entry_jsonString = JSON.stringify(app_proposal_entry_obj);
	alert(app_proposal_entry_jsonString);
	
	console.log('app_proposal_entry_jsonString'+app_proposal_entry_jsonString);
		return;
    };
});
