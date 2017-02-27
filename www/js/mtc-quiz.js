

angular.module('bayer.controllers')

.controller('MTCQuizCtrl', function($scope, $rootScope, $state, $stateParams, $utils, $localStorage, $ionicModal, $ionicHistory, $ionicScrollDelegate, $timeout) {

	$scope.qNo = 0;
	$scope.qCount = $rootScope.CONFIG.quizzes.length;
	$scope.alertModal = null;

	$scope.$on( "$ionicView.beforeEnter", function( scopes, states ) {
		if (states.direction === "back"){
			$scope.quizEnded = true;
			$scope.qCount = $localStorage.get("mtcq-qCount");
			$scope.cCount = $localStorage.get("mtcq-cCount");
		}else{
			$scope.quizEnded = false;
			$scope.initQuiz();
		}
	});

	$scope.initQuiz = function(){
		if ($scope.qNo == 0)
			$scope.cCount = 0;

		$scope.quiz = $rootScope.CONFIG.quizzes[$scope.qNo];
		$scope.choiceType = $scope.quiz.type;
		$scope.choices = [];
		$scope.curChoices = [];
		$scope.isDirty = false;
		$scope.wrongCount = 0;

		for (var i=0; i<$rootScope.CONFIG.choices.length; i++){
			var choiceId = $utils.removeSpaces($rootScope.CONFIG.choices[i].id);
			var prefix = (choiceId.split("-"))[0].toLowerCase();
			var quizId = $rootScope.CONFIG.quizzes[$scope.qNo].id.toLowerCase();

			if (prefix == quizId){
				$scope.choices.push($rootScope.CONFIG.choices[i])
				$scope.curChoices.push(0);
			}
		}

		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("id-scl-quiz").scrollTop(false);
		}, 50);
	}

	$scope.getChoiceClass = function(index){
		if ($scope.choiceType == 0)
			return $scope.curChoices[index]?'ion-android-radio-button-on':'ion-android-radio-button-off';
		else
			return $scope.curChoices[index]?'ion-android-checkbox':'ion-android-checkbox-outline-blank';
	}

	$scope.trustAsHtml = function(string){
		return $utils.trustAsHtml(string);
	}

	$scope.onTapChoice = function(index){
		$scope.isDirty = true;
		
		// $rootScope.dcpChildTabId = 0;
		// $utils.goState("app.bgm-tab", {});

		if ($scope.choiceType == 1){
			if ($scope.curChoices[index] == 1)
				$scope.curChoices[index] = 0;
			else
				$scope.curChoices[index] = 1;
		}else{
			$scope.curChoices[index] = 1;

			for (var i=0; i<$scope.choices.length; i++)
				if (i==index)
					continue;
				else
					$scope.curChoices[i] = 0;
		}
	}

	$scope.checkChoices = function(){
		for (var i=0; i<$scope.choices.length; i++)
			if ($scope.choices[i].value != $scope.curChoices[i])
				return false;

		return true;
	}

	$scope.onSubmit = function(){

		$scope.goNextQuiz = false;
		$scope.isTrueChoice = true;

		if (!$scope.checkChoices()){
			$scope.wrongCount++;
			$scope.isTrueChoice = false;

			if ($scope.wrongCount == 2)
				$scope.goNextQuiz = true;
		}else
			$scope.goNextQuiz = true;

		if ($scope.isTrueChoice){
			$scope.cCount++;
		}

		$scope.openQuizPopup();
	}

	$scope.openQuizPopup = function(){
		$ionicModal.fromTemplateUrl('templates/quiz-popup.html', {
			scope: $scope,
			backdropClickToClose: false
		}).then(function(modal) {
			$scope.alertModal = modal;
			$scope.alertModal.show();
			$(".modal-backdrop-bg").css("opacity", "0.5");
		});
	}

	$scope.onClosePopup = function(){
		$scope.alertModal.remove();
		$(".quiz-popup").remove();
		$(".modal-backdrop-bg").remove();
		
		if ($scope.goNextQuiz){
			$scope.qNo++;

			if ($scope.qNo == $scope.qCount){
				console.log("correct count: " + $scope.cCount);

				$localStorage.set("mtcq-qCount", $scope.qCount);
				$localStorage.set("mtcq-cCount", $scope.cCount);

				$scope.quizEnded = true;
			}else
				$scope.initQuiz();
		}
	}

	$scope.getRate = function(){
		return parseInt($scope.cCount / $scope.qCount * 100);
	}

	$scope.getQPButtonCaption = function(){
		if ($scope.goNextQuiz)
			return "Continue";
		else
			return "Try Again"
	}

	$scope.getPopupIconClass = function(){
		if (!$scope.isTrueChoice)
			return "ion-close-circled color-red";
		else
			return "ion-checkmark-circled color-green";
	}

	$scope.getIconClass = function(){
		if ($scope.getRate() < 80)
			return "ion-close-circled color-red";
		else
			return "ion-checkmark-circled color-green";
	}

	$scope.getFinalSubMsg = function(){
		if ($scope.getRate() < 80)
			return "You did not pass this assessment.";
		else
			return "You successfully passed the final assessment.";
	}

	$scope.getFinalComment1 = function(){
		if ($scope.getRate() < 80)
			return 'Select <span class="mtcq-link" ng-click="onRetake()">Retake</span> to try again.';
		else
			return 'Select <span class="mtcq-link" ng-click="onReview()">Review</span> to see the answer details again.';
	}

	$scope.getFinalComment2 = function(){
		if ($scope.getRate() < 80)
			return 'Select <span class="mtcq-link" ng-click="onContinue()">Continue</span> if you want to go back to the Meter Training Page and exit the quiz.';
		else
			return 'Select <span class="mtcq-link" ng-click="onContinue()">Continue</span> when you are ready to proceed to the end of the learning program.';
	}

	$scope.onReview = function(){

	}

	$scope.onRetake = function(){

	}

	$scope.onContinue = function(){
		if ($scope.getRate() < 80)
			$ionicHistory.goBack(-2);
		else
			$utils.goState("app.mtc-final", {});
	}

	$scope.onTapImgTitle = function(){
		$utils.goState("app.home", {});
	};

	// $rootScope.$ionicGoBack = function() {
	// 	if (($ionicHistory.currentStateName() != "app.mtc-quiz") || $scope.quizEnded)
	// 		$ionicHistory.goBack();
	// };
})