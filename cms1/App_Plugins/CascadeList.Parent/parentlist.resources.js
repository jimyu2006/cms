angular.module('umbraco.resources').factory('cascadeListResource', function ($q, $http) {
     	return {
         		getAll: function () {
             		return $http.get("~/json/Models.json");
         		},
         		getBrands: function () {
         		    return $http.get("/json/Models.json");
         		},
         		getModels: function () {
         		    return $http.get("/json/Models2.json");
         		}
     	};
7 });