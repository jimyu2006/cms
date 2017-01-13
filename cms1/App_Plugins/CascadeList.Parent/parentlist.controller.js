angular.module("umbraco").controller("cascadeList.parentlistController", function ($scope, $q, cascadeListResource, notificationsService) {

    cascadeListResource.getBrands().then(function (response) {
        $scope.parentListItems = response.data;
    }, function (response) {
        notificationsService.error("Error", "Error loading brands");
        console.log(response.data);
    });

    if ($scope.model.value.brandid) {
        cascadeListResource.getModels().then(function (response) {
            $scope.brandid = "";
            $scope.allItems = response.data;
            $scope.childListItems = angular.copy($scope.allItems);
        }, function (response) {
            notificationsService.error("Error", "Error loading models");
            console.log(response.data);
        });
    }

    $scope.update = function () {
        var curBrandID = $scope.model.value.brandid;
        $scope.childListItems = $scope.allItems.filter(function (item, index, array) {
            if (item.BrandID == curBrandID) {
                return item;
            }
        });
        //$scope.$emit("brandID", curBrandID);
    }
}
);