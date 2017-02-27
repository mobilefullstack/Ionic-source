


angular.module('bayer.services', [])

	.factory('$api', ['$http', function ($http) {

		var host = 'http://52.74.179.74:8080/api';

		return {
			call: function (service, method, data) {
				var req = {
					method: method,
					url: host + service,
					data: data,
					headers: {}
				}
				return $http(req);
			}
		}
	}])


	.factory('$localStorage', ['$window', function ($window) {

		return {

			contains: function (key) {
				return $window.localStorage.hasOwnProperty(key);
			},

			remove: function (key) {
				$window.localStorage.removeItem(key);
			},

			get: function (key) {
				return JSON.parse($window.localStorage[key] || '{}');
			},

			set: function (key, value) {
				$window.localStorage[key] = JSON.stringify(value);
			}
		}
	}])

	.factory('$utils', ['$rootScope', '$state', '$ionicLoading', '$ionicHistory', '$ionicScrollDelegate', '$ionicSlideBoxDelegate', '$ionicModal', '$timeout', '$cordovaDialogs', '$window', '$sce', '$localStorage', '$cordovaInAppBrowser', '$cordovaGoogleAnalytics', '$cordovaSocialSharing', '$cordovaNetwork',
		function ($rootScope, $state, $ionicLoading, $ionicHistory, $ionicScrollDelegate, $ionicSlideBoxDelegate, $ionicModal, $timeout, $cordovaDialogs, $window, $sce, $localStorage, $cordovaInAppBrowser, $cordovaGoogleAnalytics, $cordovaSocialSharing, $cordovaNetwork) {

		var utils = {

			showLoading: function (msg, showClose) {
				var message = msg;
				var sIcon = ionic.Platform.isIOS()?'ios':'android'

				if (typeof msg === "undefined")
					message = "Loading...";

				$ionicLoading.isShowing = true;

				var options = showClose?
				{
					template: "<ion-spinner icon='" + sIcon + "' class='spinner-stable'></ion-spinner><div style='float: right; line-height: 28px; padding-left: 14px;'>" + message + "<i class='ion-ios-close btn-smooth' style='line-height: 28px; font-size: 24px; float: right; padding-left: 12px; padding-top: 2px;' ng-click='onHideLoading()'></i></div>"
				}:
				{
					template: "<ion-spinner icon='" + sIcon + "' class='spinner-stable'></ion-spinner><br><div style='margin-top: .5em; float: right; line-height: 1.2em; text-align: center;'>" + message + "</div>"
				};

				$ionicLoading.show(options);
			},

			hideLoading: function () {
				$ionicLoading.isShowing = false;
				$ionicLoading.hide();
			},

			openAlert: function(msg, title, button, callback){

				if (typeof title === "undefined")
					title = "Alert";

				if ($cordovaDialogs){
					$cordovaDialogs.alert(msg, title, button).then(callback);
				}else
					alert(msg);
			},

			openPrompt: function(msg, title, buttons, callback){

				if (typeof title === "undefined")
					title = "Prompt";

				if ($cordovaDialogs){
					$cordovaDialogs.prompt(msg, title, buttons).then(callback);
				}else
					alert(msg);
			},

			isRootState: function (stateName) {

				if (!stateName)
					stateName = $ionicHistory.currentStateName();

				var rootStates = [
					"app.bookmarks",
					"app.dialog-scripts",
					"app.patient-materials",
					"app.solution-center",
					"app.home",
					"app.dcp",
					"app.dcp-tab",
					"app.mtc",
					"app.mtc-main",
					"app.diabetes-review",
					"app.updates"
				]

				return rootStates.indexOf(stateName) >= 0;
			},

			isBookmarkable: function (stateName) {

				if (!stateName)
					stateName = $ionicHistory.currentStateName();

				var rootStates = [
					"app.bookmarks",
					"app.dialog-scripts",
					"app.patient-materials",
					"app.solution-center",
					"app.home",
					"app.dcp",
					"app.dcp-tab",
					"app.mtc",
					"app.diabetes-review",
					"app.updates",
					"app.mtc",
					"app.mtc-register",
					"app.mtc-main",
					"app.mtc-quiz-intro",
					"app.mtc-quiz",
					"app.mtc-final"
				]

				return rootStates.indexOf(stateName) < 0;
			},

			openInsiderModal: function(insiderIndex, startIndex, endIndex){

				if (window.analytics){
					var title = $rootScope.INSIDERS.insiders[insiderIndex].title;
					$cordovaGoogleAnalytics.trackView(title);
				}

      			$rootScope.insiderIndex = insiderIndex;

      			if (typeof startIndex === "undefined")
					$rootScope.insiderSIndex = insiderIndex;
				else
					$rootScope.insiderSIndex = startIndex;
      			if (typeof endIndex === "undefined")
					$rootScope.insiderEIndex = insiderIndex;
				else
					$rootScope.insiderEIndex = endIndex;

				$ionicModal.fromTemplateUrl('templates/insider-dialog.html', {
					scope: $rootScope,
					backdropClickToClose: false
				}).then(function(modal) {
					$rootScope.dlgInsider = modal;
					$rootScope.dlgInsider.show();
					$(".modal-backdrop-bg").css("opacity", "0");
				});
			},

			getDCHeight: function(){
				return $window.innerHeight - document.getElementById("id-side-header-bar").offsetHeight;
			},

			getDCWidth: function(){
				return $window.innerWidth;
			},

			isPhone: function(){
				if ($window.innerWidth > 590)
					return false;
				return true;
			},

			trustAsHtml: function(string) {
				return $sce.trustAsHtml(string);
			},

			getScrollByHandle: function(handle){
				var sclInstances = $ionicScrollDelegate.$getByHandle(handle)._instances;

				return sclInstances[sclInstances.length-1];
			},

			getSlideBoxByHandle: function(handle){
				var sclInstances = $ionicSlideBoxDelegate.$getByHandle(handle)._instances;

				return sclInstances[sclInstances.length-1];
			},

			removeSpaces: function(str){
				return str.replace(/\s/g, '');
			}
		};

		utils.isOnline = function(){
			if (typeof navigator.connection === "undefined") return true;

			return $cordovaNetwork.isOnline();
		};

		utils.isOffline = function(){
			if (typeof navigator.connection === "undefined") return false;

			return $cordovaNetwork.isOffline();
		};

		utils.openURL = function(url){

			if (utils.isOffline()){
				utils.openAlert("You must be connected to the Internet to use this feature.");
				return;
			}

			var options = {
				closebuttoncaption: "Close",
				location: "no",
				enableViewportScale: "yes"
			};

			if (typeof cordova !== "undefined"){
				utils.showLoading("Loading...", true);
				options.hidden = "yes";
			}

			$cordovaInAppBrowser.open(url, '_blank', options);

			$rootScope.$on('$cordovaInAppBrowser:loadstop', function(e, event){

				if (!$ionicLoading.isShowing) return;

				utils.hideLoading();
				$cordovaInAppBrowser.show();
			});

			$rootScope.$on('$cordovaInAppBrowser:loaderror', function(e, event){

				console.log("link error: " + JSON.stringify(e));
				if (!$ionicLoading.isShowing) return;

				utils.hideLoading();
				utils.openAlert("Could not fully load this page. Please check your internet connection.");
			});
		};

		utils.goState = function(state, params){
 
 			if (window.analytics){
 				var name = $rootScope.CONFIG.pageNames[state];
 				if (typeof name != "undefined") $cordovaGoogleAnalytics.trackView(name);
 			}

			if ((state == "app.dcp-tab") && (state == $ionicHistory.currentStateName())){
	            	$rootScope.$broadcast('onDCPTab', {tabId: $rootScope.dcpTabId});

	            	return;
			}

			if (utils.isRootState(state)){
				$ionicHistory.nextViewOptions({
					historyRoot: true,
					disableAnimate: true,
					disableBack: true
				});
			}

			$state.go(state, params);
		};

		utils.isBookmarked = function(isInsider){
			var bookmarks = utils.getBookmarks();

			if (isInsider){
				for (var i=0; i<bookmarks.length; i++)
					if ((bookmarks[i].state == "insider") && 
					     (bookmarks[i].insiderIndex == $rootScope.insiderIndex))
						return true;
			}else{
				for (var i=0; i<bookmarks.length; i++)
					if ((bookmarks[i].state == $ionicHistory.currentStateName()) && 
				     	    (bookmarks[i].tabId == $rootScope.dcpChildTabId))
						return true;
			}

			return false;
		};

		utils.removeBookmark = function(isInsider){
			var bookmarks = utils.getBookmarks();
			
			if (isInsider){
				for (var i=0; i<bookmarks.length; i++)
					if ((bookmarks[i].state == "insider") && 
					     (bookmarks[i].insiderIndex == $rootScope.insiderIndex)){
						bookmarks.splice(i, 1);
						break;
					}
			}else{
				for (var i=0; i<bookmarks.length; i++)
					if ((bookmarks[i].state == $ionicHistory.currentStateName()) && 
				     	    (bookmarks[i].tabId == $rootScope.dcpChildTabId)){
						bookmarks.splice(i, 1);
						break;
					}
			}

			$localStorage.set("BOOKMARK-DATA", bookmarks);
		};

		utils.saveCurrentState = function(isInsider){
			var bookmarks = utils.getBookmarks();

			if (isInsider){
				var item = $rootScope.CONFIG.bookmarks.content["insider-" + $rootScope.insiderIndex];
				item.state = "insider";
				item.insiderIndex = $rootScope.insiderIndex;
				bookmarks.push(item);
			}else{

				var state = $ionicHistory.currentStateName();
				var tabId = $rootScope.dcpChildTabId;
				var item = $rootScope.CONFIG.bookmarks.content[state][tabId];
				item.state = state;
				item.tabId = tabId;
				bookmarks.push(item);
			}

			$localStorage.set("BOOKMARK-DATA", bookmarks);
		};

		utils.shareViaEmail = function(to, subject, message){
			if (typeof window.plugins == "undefined"){
				window.open("mailto:" + to + "?subject=" + subject + "&body=" + message);
			}else{
				$cordovaSocialSharing.canShareViaEmail()
				.then(function(result) {
					$cordovaSocialSharing
					.shareViaEmail(message, subject, [to], null, null, null)
					.then(function(result) {
					}, function(err) {
					});
				}, function(err) {
					utils.openAlert("You have no email account registered on your device. Please add one and try again.");
				});
			}
		};

		utils.getBookmarks = function(){
			var data = $localStorage.get("BOOKMARK-DATA");

			if (JSON.stringify(data) == "{}")
				data = [];

			return data;
		};

		utils.resizeScroll = function(handle, time_offset){
			var time = 400;

			if (time_offset) time = time_offset;
			$timeout(function(){
				if (!handle)
					$ionicScrollDelegate.resize();
				else
					utils.getScrollByHandle(handle).resize();
			}, time);
		};

		utils.openPDF = function(index){

			if (utils.isOffline() && ionic.Platform.isAndroid()){
				utils.openAlert("You must be connected to the Internet to use this feature.");
				return;
			}

			if (typeof cordova === "undefined"){
				utils.openAlert("pdf is not available here");
				return;
			}

			if (window.analytics){
				var title = $rootScope.CONFIG.pm.pdfLinks[index].name;
				$cordovaGoogleAnalytics.trackView("PDF: " + title);
			}
			
			var pdfLocation = ionic.Platform.isIOS()?
						cordova.file.applicationDirectory + $rootScope.CONFIG.pm.pdfLinks[index].path:
						$rootScope.CONFIG.pm.pdfLinks[index].link;

			utils.showLoading("&nbspOpening PDF...");
			
			cordova.plugins.disusered.open(
				pdfLocation,
				function() {
					utils.hideLoading();
				},
				function(code) {
					utils.hideLoading();
				},
				true
			);
		}

		return utils;
	}]);