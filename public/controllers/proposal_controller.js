var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope,$http) {

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
		
		var app_proposal_entry_obj = new FormData();
		
		app_proposal_entry_obj.append('proposal_id', $scope.proposal_id);
		app_proposal_entry_obj.append('region', $scope.region);
		app_proposal_entry_obj.append('country', $scope.country);
		app_proposal_entry_obj.append('proposal_type', $scope.proposal_type);
		app_proposal_entry_obj.append('proposal_date', $scope.proposal_date.toLocaleDateString());
		app_proposal_entry_obj.append('approval_date', $scope.approval_date.toLocaleDateString());
		app_proposal_entry_obj.append('shared_with_procurement_team_on', $scope.shared_with_procurement_team_on.toLocaleDateString());
		app_proposal_entry_obj.append('approver', $scope.approver);
		app_proposal_entry_obj.append('number_of_tasks_covered', $scope.number_of_tasks_covered);
		app_proposal_entry_obj.append('device_qty', $scope.device_qty);
		app_proposal_entry_obj.append('accessary_periperal_qty', $scope.accessary_periperal_qty);
		app_proposal_entry_obj.append('total_qty', $scope.total_qty);
		app_proposal_entry_obj.append('status', 'APPROVED');
	
				
		console.log('clicked submit');

  
		$http({
			url: 'http://localhost:5000/proposal_form',
			method: 'POST',
			data:app_proposal_entry_obj,
	   	    transformRequest: angular.identity,
            headers: {
                    'Content-Type': undefined
            }
	
			})
			.success(function(data) {
                console.log('Proposal form submitted successfully....');
				})
			.then(function (httpResponse) {
				console.log('response:', httpResponse);
			})

    };
});
