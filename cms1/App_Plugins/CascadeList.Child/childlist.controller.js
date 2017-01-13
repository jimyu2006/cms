angular.module("umbraco").controller("cascadeList.childlistController", function ($scope, $rootScope,cascadeListResourceChild, notificationsService) {
    cascadeListResourceChild.getModels().then(function (response) {
        console.log($scope);
        $scope.brandid = "";
        $scope.allItems = response.data;
        $scope.childListItems = angular.copy($scope.allItems);

    }, function (response) {
        notificationsService.error("Error", "Error loading documents");
        console.log(response.data);
    });

    $rootScope.$on("brandID", function (event, data) {
        //$scope.brandid = data;
        $scope.childListItems = $scope.allItems.filter(function (item, index, array) {
            if (item.BrandID == data) {
                return item;
            }
        });
    });
});