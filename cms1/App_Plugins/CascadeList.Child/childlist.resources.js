angular.module('umbraco.resources').factory('cascadeListResourceChild', function ($q, $http) {
     	return {
         		getModels: function () {
         		    return $http.get("/json/Models2.json");
         		},
     	};
7 });