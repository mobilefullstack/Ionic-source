

angular.module('bayer.controllers')

.controller('MTCMainCtrl', function($scope, $rootScope, $state, $stateParams, $utils, $ionicHistory, $ionicModal, $ionicScrollDelegate, $timeout, $cordovaGoogleAnalytics) {

	$scope.$on( "$ionicView.beforeEnter", function( scopes, states ) {
		// if (ionic.Platform.isIOS() && (typeof window.screen.unlockOrientation !== "undefined")){
		// 	screen.unlockOrientation();
		// }
	});

	$scope.$on( "$ionicView.beforeLeave", function( scopes, states ) {
		// if (ionic.Platform.isIOS() && (typeof window.screen.unlockOrientation !== "undefined")){
  //                 screen.lockOrientation('portrait-primary');
  //           }
	});

	$scope.trustAsHtml = function(string) {
		return $utils.trustAsHtml(string);
	};

	$scope.openTranscript = function(index){

		$ionicModal.fromTemplateUrl('templates/transcript-popup.html', {
			scope: $scope,
			backdropClickToClose: false
		}).then(function(modal) {
			$scope.scriptIndex = index;
			$scope.transcriptModal = modal;
			$scope.transcriptModal.show();
			$(".modal-backdrop-bg").css("opacity", "0.5");
		});
	};

	$scope.openVideo = function(index){

		if ($utils.isOffline()){
			$utils.openAlert("You must be connected to the Internet to use this feature.");
			return;
		}
		
		if (typeof cordova === "undefined"){
			$utils.openAlert("video is not available here");
			return;
		}

		if (window.analytics){
			var title = $rootScope.CONFIG.mtcMain.videoNames[index];
			$cordovaGoogleAnalytics.trackView("VIDEO: " + title);
		}

		// $utils.showLoading("&nbspLoading video... please wait for a second.");
		// cordova.plugins.disusered.open(
		// 	$rootScope.CONFIG.mtcMain.videoLinks[index],
		// 	function() {
		// 		$utils.hideLoading();
		// 	},
		// 	function(code) {
		// 		$utils.hideLoading();
		// 		if (code === 1) {
		// 			alert('No file handler found');
		// 		} else {
		// 			alert('Undefined error');
		// 		}
		// 	},
		// 	true
		// );
		window.plugins.streamingMedia.playVideo($rootScope.CONFIG.mtcMain.videoLinks[index]);
	};

	$scope.onCNMTV = function() {
		$scope.openVideo(0);
	};

	$scope.onCNEMTV = function() {
		$scope.openVideo(1);
	};

	$scope.onIntro = function(arg) {
		if (arg)
			$scope.openTranscript(0);
		else
			$scope.openVideo(2);
	};

	$scope.onAccuracy = function(arg) {
		if (arg)
			$scope.openTranscript(1);
		else
			$scope.openVideo(3);
	};

	$scope.onCalibration = function(arg) {
		if (arg)
			$scope.openTranscript(2);
		else
			$scope.openVideo(4);
	};

	$scope.onTSC = function(arg) {
		if (arg)
			$scope.openTranscript(3);
		else
			$scope.openVideo(5);
	};

	$scope.onACG = function(arg) {
		if (arg)
			$scope.openTranscript(4);
		else
			$scope.openVideo(6);
	};

	$scope.onGlossary = function(arg) {
		$scope.openTranscript(5);
	};

	$scope.onQuiz = function() {
		$utils.goState("app.mtc-quiz-intro", {});
	};

	$scope.onClosePopup = function(){
		$scope.transcriptModal.remove();
		$(".transcript-popup").remove();
		$(".modal-backdrop-bg").remove();
	}

	$scope.trustAsHtml = function(string){
		return $utils.trustAsHtml(string);
	};

	$scope.onTapImgTitle = function(){
		$utils.goState("app.home", {});
	};
})