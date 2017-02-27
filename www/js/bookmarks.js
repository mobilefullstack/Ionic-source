

angular.module('bayer.controllers')

.controller('BookmarksCtrl', function($scope, $rootScope, $state, $stateParams, $utils, $ionicHistory, $ionicScrollDelegate, $ionicListDelegate, $localStorage, $timeout) {

	$rootScope.bookmarks = $utils.getBookmarks();

	$scope.onTapItem = function(ev, index){

		$ionicListDelegate.$getByHandle('id-lst-bookmarks').closeOptionButtons();
	}

	$scope.onOpenBookmark = function(ev, index){
		var parItems = $(ev.target).parents(".item").find(".item-options"); // or .list instead of .item

		for (var i=0; i<parItems.length; i++)
			if ($(parItems[i]).attr('class') == "item-options")
				return;

		if ($rootScope.bookmarks[index].state == "insider"){
			var iIndex = $rootScope.bookmarks[index].insiderIndex;
			$utils.openInsiderModal(iIndex);
		}else{
			$rootScope.dcpChildTabId = $rootScope.bookmarks[index].tabId;
			$utils.goState($rootScope.bookmarks[index].state, {});
		}
	}

	$scope.onDelete = function(index){
	  	$ionicListDelegate.$getByHandle('id-lst-bookmarks').closeOptionButtons();

	  	var itemContent = $(".item-right-editable .item-content");
	  	itemContent.css("transition-duration", "0ms");
	  	$timeout(function(){
	  		itemContent.css("transition-duration", "250ms");
	  	}, 0);

	  	$rootScope.bookmarks.splice(index, 1);
	  	$localStorage.set("BOOKMARK-DATA", $rootScope.bookmarks);

	  	$utils.resizeScroll();
	}

	$scope.onTapImgTitle = function(){
		$utils.goState("app.home", {});
	};
	
})