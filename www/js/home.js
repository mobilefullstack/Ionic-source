

angular.module('bayer.controllers')

.controller('HomeCtrl', function($scope, $rootScope, $state, $stateParams, $ionicModal, $ionicHistory, $ionicScrollDelegate, $ionicBackdrop, $timeout, $utils, $localStorage) {

	$scope.$on( "$ionicView.beforeEnter", function( scopes, states ) {
		$scope.isApOpened = false;

		if (JSON.stringify($localStorage.get("SURVEY-PHAR-INDEX")) != "{}") return;

            $timeout(function(){
                  $ionicModal.fromTemplateUrl('templates/survey-popup.html', {
                        scope: $rootScope,
                        backdropClickToClose: false
                  }).then(function(modal) {
                        $rootScope.surveyPopup = modal;
                        $rootScope.surveyPopup.show();
                  });
            }, 100);
	});

	$scope.onAboutProg = function(){
		$scope.isApOpened = !$scope.isApOpened;
		$utils.resizeScroll();
	}

	$scope.onDCP = function(){
		$utils.goState("app.dcp", {});
	}

	$scope.onMTC = function(){
		$utils.goState("app.mtc-main", {});

		// $utils.openAlert($utils.getDCWidth() + " x " + $utils.getDCHeight());
		// $ionicBackdrop.retain();

		// var parViews = $("ion-nav-view");

		// if ($(parViews[0]).css("-webkit-filter") == "none"){
		// 	$(parViews[0]).css("-webkit-filter", "blur(15px)");
		// 	$(parViews[0]).css("-moz-filter", "blur(15px)");
		// }else{
		// 	$(parViews[0]).css("-webkit-filter", "none");
		// 	$(parViews[0]).css("-moz-filter", "none");
		// }
	}

	$scope.onDR = function(){
		$utils.goState("app.diabetes-review", {});
	}

	$scope.onSC = function(){
		$utils.goState("app.solution-center", {});
	}

	$scope.onTapImgTitle = function(){
		$utils.goState("app.home", {});
	};
})