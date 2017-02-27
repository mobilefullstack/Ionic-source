

angular.module('bayer.controllers')

.directive('dynamicSlides', function () {
  return {
      require: ['^ionSlideBox'],
      link: function (scope, elem, attrs, slider) {
          scope.$watch(function () {
          	var slides = scope.$eval(attrs.dynamicSlides);

          	if (typeof slides !== "undefined")
          		return slides.length;
          }, function () {
              slider[0].__slider.update();
          });
      }
  };
})

.directive('compile', ['$compile', function ($compile) {
	return function(scope, element, attrs) {
		scope.$watch(
			function(scope) {
			  return scope.$eval(attrs.compile);
			},
			function(value) {
			  element.html(value);
			  $compile(element.contents())(scope);
			}
		)
	};
}])

.controller('InsiderCtrl', function($scope, $rootScope, $state, $stateParams, $ionicScrollDelegate, $ionicSlideBoxDelegate, $ionicSlideBoxDelegate, $ionicPopover, $timeout, $window, $cordovaGoogleAnalytics, $ionicHistory, $utils) {
	
	// INITIALLY ZOOM VIEW CONTENT
	// $scope.scrollCSS = "height: " + $utils.getDCHeight() + "px; " +
	// 			 "width: " + $utils.getDCWidth() + "px; " + 
	// 			 "font-size: " + parseFloat($window.innerWidth * 0.02) + "px;";
	// $scope.iContentCSS = $scope.iFooterCSS = "width: 100%;";

	// INITIALLY SHOW ACTUAL SIZE FOR IPAD
	// $scope.scrollCSS = "height: " + $utils.getDCHeight() + "px; " +
	// 			 "width: " + $utils.getDCWidth() + "px;";
	// $scope.iContentCSS = $scope.iFooterCSS = "width: 766px;";

	$scope.disableNavigation = false;
	$scope.popover = null;
	$scope.footnote = null;

	// if (ionic.Platform.isAndroid())
		$scope.disable_delay = 800;
	// else
		// $scope.disable_delay = 0;

	$scope.getIconClass = function(){
		return ionic.Platform.isIOS()?'ios':'android';
	}

	$scope.onBookmark = function(){
            if ($utils.isBookmarked(true))
                  $utils.removeBookmark(true);
            else
                  $utils.saveCurrentState(true);
	}

	$scope.onClose = function(){
		$rootScope.insiderIndex = -1;
		$rootScope.dlgInsider.hide();
	}

	$scope.getBookmarkCls = function(){
            return $utils.isBookmarked(true)?"ion-android-star":"ion-android-star-outline";
	};

	$scope.onLink = function($event){
		var link = $($event.target).html();

		if ((link.indexOf("http://") < 0) && (link.indexOf("https://") < 0))
			link = "http://" + link;

		$utils.openURL(link);
	};

	$scope.showAnnotation = function(){
		if ($ionicHistory.currentStateName() == "app.dialog-scripts")
			return false;
		return true;
	};

	$scope.onFootnote = function($event){

		if ($scope.footnote != null)
			return;

		var template = '\
			<ion-popover-view class="footnote-view">\
			<div class="footnote-title">' + $($event.target).attr("title") + '</div>\
			<div class="footnote-inner">\
				<div class="footnote-inner-content">' + $($event.target).attr("content") + '</div>\
				<div class="button icon-left button-clear ion-close-circled footnote-inner-close" ng-click="onFootnoteClose()"></div>\
			</div>\
			</ion-popover-view>\
		';

		$scope.footnote = $ionicPopover.fromTemplate(template, {
			scope: $scope
		});

		$scope.footnote.show($event);
	};

	$scope.onFootnoteClose = function(){
		$scope.footnote.remove();
		$timeout(function(){
			$scope.footnote = null;
		}, 100);
	};

	$scope.onPopover = function($event){

		var cName = "insider-popover-ol";

		if ($scope.popover != null)
			return;

		var target = $($event.target);
		if (!target.attr("content")) target = target.parent();

		$scope.popoverContents = target.attr("content").split("</>");
		$scope.popoverStart = target.attr("number");

		if ($scope.popoverStart == "*")
			cName = "insider-popover-asterisk";
		else if ($scope.popoverStart.length == 0)
			cName = "insider-popover-no-style";

		var template = '\
			<ion-popover-view>\
			<div class="popover-inner">\
				<ol class="' + cName +'" start="' + target.attr("number") + '">\
					<li ng-repeat="pcontent in popoverContents track by $index" compile="pcontent"></li>\
				</ol>\
				<div class="button icon-left button-clear ion-close-circled popover-inner-close" ng-click="onPopoverClose()"></div>\
			</div>\
			</ion-popover-view>\
		';

		$scope.popover = $ionicPopover.fromTemplate(template, {
			scope: $scope
		});

		$scope.popover.show($event);
	};

	$scope.onPopoverClose = function(){
		$scope.popover.remove();
		$timeout(function(){
			$scope.popover = null;
		}, 100);
	};

	$scope.onGoLeft = function(counter){

		if (($scope.disableNavigation || 
		    ($rootScope.insiderSIndex >= $rootScope.insiderIndex) || 
		    !$rootScope.INSIDERS.insiders[$rootScope.insiderIndex].hasNavButtons) && !counter)
			return;
		
		if (!counter) counter = 1;

		$scope.disableNavigation = true;
		$timeout(function(){
			$scope.disableNavigation = false;
		}, $scope.disable_delay);

		$timeout(function(){
			$rootScope.insiderIndex -= counter;
			$utils.getSlideBoxByHandle("sb-insider").slide(0, 1);
			$utils.getScrollByHandle('id-scl-insider').scrollTop(false);
			$utils.resizeScroll('id-scl-insider', 500);
			$scope.fixSlideBox();
		}, 200);
	};

	$scope.onGoRight = function(counter){

		if (($scope.disableNavigation || 
		    ($rootScope.insiderEIndex <= $rootScope.insiderIndex) ||
		    !$rootScope.INSIDERS.insiders[$rootScope.insiderIndex].hasNavButtons) && !counter)
			return;

		if (!counter) counter = 1;

		$scope.disableNavigation = true;
		$timeout(function(){
			$scope.disableNavigation = false;
		}, $scope.disable_delay);

		$timeout(function(){
			$rootScope.insiderIndex += counter;
			$utils.getSlideBoxByHandle("sb-insider").slide(0, 1);
			$utils.getScrollByHandle('id-scl-insider').scrollTop(false);
			$utils.resizeScroll('id-scl-insider', 500);
			$scope.fixSlideBox();
		}, 200);
	};

	$scope.fixSlideBox = function(){
		$timeout(function(){
			var insider = $rootScope.INSIDERS.insiders[$rootScope.insiderIndex];
			var sh = $utils.getSlideBoxByHandle("sb-insider");

			if ((typeof insider === "undefined") || (typeof insider.slideContent === "undefined") || (insider.slideContent.slides.length == 1))
				sh.enableSlide(false);
			else
				sh.enableSlide(true);
		}, 100);
	};

	$scope.onInsiderPDF = function(){
		$utils.openPDF($rootScope.INSIDERS.insiders[$rootScope.insiderIndex].pdfIndex);
	};

	$scope.trustAsHtml = function(string) {
		return $utils.trustAsHtml(string);
	};

	$scope.getSlideStyle = function(index){
		var slideWidth = $utils.getDCWidth();
		var style = {
			width: slideWidth + "px", 
			left: "-" + slideWidth * index + "px",
			"transition-duration": "300ms",
			"-webkit-transition-duration": "300ms",
			"-webkit-transform": "translate(" + slideWidth * index + "px, 0px) translateZ(0px)" 
		};

		return style;
	};

	$scope.$on('popover.hidden', function() {
		$timeout(function(){
			if ($scope.popover)
				$scope.popover.remove();
			if ($scope.footnote)
				$scope.footnote.remove();
			$timeout(function(){
				$scope.popover = null;
				$scope.footnote = null;
			}, 100);
		}, 100);
	});

	$scope.onTapImgTitle = function(){
		$scope.onClose();
		$utils.goState("app.home", {});
	}

	$scope.onPager = function(index){
		$utils.getSlideBoxByHandle('sb-insider').slide(index);
	}

	$scope.fixSlideBox();
})