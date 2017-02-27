

angular.module('bayer.controllers')

.controller('DCPTabCtrl', function($scope, $rootScope, $state, $stateParams, $ionicScrollDelegate, $timeout, $utils) {
	
	$rootScope.$on( "onDCPTab", function( ev, args ) {
		$scope.tabIndex = args.tabId;
	});

	$scope.$on( "$ionicView.beforeEnter", function( scopes, states ) {

		$scope.tabIndex = $rootScope.dcpTabId;
		
		if (!$rootScope.dcpTabId)
			$scope.tabIndex = 0;

		var imageObj = $(".dcp-tab-img0"+parseInt($scope.tabIndex+1));

		// alert(imageObj.css("opacity"));
		imageObj.addClass("dcp-tab-img-aa");
		// alert(imageObj.css("opacity"));

		$timeout(function(){
			imageObj.removeClass("dcp-tab-img-aa");
		}, 800);
	});

	$scope.$on( "$ionicView.afterEnter", function( scopes, states ) {
		// $timeout(function(){
			var imageObj = $(".dcp-tab-header-img");

			imageObj.css("transition", ".3s all linear")
				  .css("-webkit-transition", ".3s all linear")
				  .css("-moz-transition", ".3s all linear");
		// }, 100);
	});

	$scope.goTab = function(index){
		// var imageObj = $(".dcp-tab-img0"+parseInt($scope.tabIndex+1));
		// imageObj.removeClass("dcp-tab-img-aa");

		$scope.tabIndex = index;
		$rootScope.dcpTabId = index;
		$timeout(function(){
			// tcss.css("padding-bottom", "5%");
			$utils.resizeScroll();
		}, 100);
	}

	$scope.onBGM = function(){
		$scope.goTab(0);
	};

	$scope.onDHE = function(){
		$scope.goTab(1);
	};

	$scope.onPA = function(){
		$scope.goTab(2);
	};

	$scope.onDBB = function(){
		$scope.goTab(3);
	};

	$scope.onSC = function(){
		$utils.goState("app.solution-center", {});
	};

	$scope.onBGMTP = function(){
        $rootScope.dcpChildTabId = 0;
        $utils.goState("app.bgm-tab", {});
	};

	$scope.onBGMBI = function(){
        $rootScope.dcpChildTabId = 1;
        $utils.goState("app.bgm-tab", {});
	};

	$scope.onBGMPEM = function(){
        $rootScope.dcpChildTabId = 2;
        $utils.goState("app.bgm-tab", {});
	};

	$scope.onHETP = function(){
        $rootScope.dcpChildTabId = 0;
        $utils.goState("app.he-tab", {});
	};

	$scope.onHEBI = function(){
        $rootScope.dcpChildTabId = 1;
        $utils.goState("app.he-tab", {});
	};

	$scope.onHEPEM = function(){
        $rootScope.dcpChildTabId = 2;
        $utils.goState("app.he-tab", {});
	};

	$scope.onPATP = function(){
        $rootScope.dcpChildTabId = 0;
        $utils.goState("app.pa-tab", {});
	};

	$scope.onPABI = function(){
        $rootScope.dcpChildTabId = 1;
        $utils.goState("app.pa-tab", {});
	};

	$scope.onPAPEM = function(){
        $rootScope.dcpChildTabId = 2;
        $utils.goState("app.pa-tab", {});
	};
	
	$scope.onDBIWD = function(){
		$utils.openInsiderModal(29, 29, 31);
	};

	$scope.onDBITDM = function(){
		$utils.openInsiderModal(30, 29, 31);
	};

	$scope.onDBINDS = function(){
		$utils.openInsiderModal(31, 29, 31);
	};

	$scope.onTapImgTitle = function(){
		$utils.goState("app.home", {});
	};
})

