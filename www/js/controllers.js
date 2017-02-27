

angular.module('bayer.controllers', [])

.controller('AppCtrl', function($scope, $rootScope, $state, $utils, $ionicModal, $ionicHistory, $ionicScrollDelegate, $window, $timeout) {

      $scope.onExpand = function(index){
            $rootScope.menuItems[index].expanded = !$rootScope.menuItems[index].expanded;

            $utils.resizeScroll();
      };

      $scope.onBookmark = function(){
            if ($utils.isBookmarked(false))
                  $utils.removeBookmark(false);
            else
                  $utils.saveCurrentState(false);
      };

      $scope.onTapBookmarks = function(){
            $utils.goState("app.bookmarks", {});
      };

      $scope.onTapDS = function(){
            $utils.goState("app.dialog-scripts", {});
      };

      $scope.onTapPM = function(){
            $utils.goState("app.patient-materials", {});
      };

      $scope.onTapSC = function(){
            $utils.goState("app.solution-center", {});
      };

      $scope.onTapHome = function(){
            $utils.goState("app.home", {});
      };

      $scope.onTapDCP = function(){
            $utils.goState("app.dcp", {});
      };

      $scope.onTapMTCMain = function(){
            $utils.goState("app.mtc-main", {});
      };

      $scope.onTapDR = function(){
            $utils.goState("app.diabetes-review", {});
      };

      $scope.onTapPAI = function(){
            $utils.openPDF(10);
      };

      $scope.onTapContact = function(){
            $utils.shareViaEmail("DCUSMarketing@ascensia.com", "ConNext Ed App Support & Feedback", "");
      };

      $scope.onTapUpdate = function(){
            $utils.openAlert("Content is up to date.", "Updates");
      };

      $scope.onTapDCPTab = function(index){
            
            $rootScope.dcpTabId = index;
            $utils.goState("app.dcp-tab", {});
      };

      $scope.getChevronCls = function(index){
            return $rootScope.menuItems[index].expanded?"ion-chevron-down":"ion-chevron-right";
      };

      $scope.getBookmarkCls = function(){
            return $utils.isBookmarked(false)?"ion-android-star":"ion-android-star-outline";
      };

      $scope.isRootState = function(){
            return $utils.isRootState();
      };

      $scope.isBookmarkable = function(){
            return $utils.isBookmarkable();
      };

      $rootScope.onHideLoading = function(){
            $utils.hideLoading();
      };

      // $rootScope.$on("modal.shown", function(modal){
      //       // $rootScope.allowDragDrawer(false);
      // })

      $rootScope.$on("modal.hidden", function(modal){

            // $rootScope.allowDragDrawer(true);

            $rootScope.bookmarks = $utils.getBookmarks();
      })
})