import * as angular from 'angular';
import * as _ from "underscore";
const moduleName = require('feed-mgr/feeds/define-feed/module-name');


export default class DefineFeedCompleteController {

    model: any;
    error: any;
    isValid: any;

    // static readonly $inject = ["$scope", "$q", "$http", "$mdToast", "$transition$", "RestUrlService", "FeedService", "StateService"];

    constructor(private $scope: any, private $q: any, private $http: any, private $mdToast: any, private $transition$: any, private RestUrlService: any, private FeedService: any, private StateService: any) {

        this.model = $transition$.params().feedModel;
        this.error = $transition$.params().error;

        this.isValid = this.error == null;
             
    };

    /**
         * Gets the feed id from the FeedService
         * @returns {*}
    */
    getFeedId() {
        var feedId = this.model != null ? this.model.id : null;
        if (feedId == null && this.FeedService.createFeedModel != null) {
            feedId = this.FeedService.createFeedModel.id;
        }
        if (feedId == null && this.FeedService.editFeedModel != null) {
            feedId = this.FeedService.editFeedModel.id;
        }
        return feedId;
    }
    /**
        * Navigate to the Feed Details first tab
    */
    onViewDetails() {
        var feedId = this.getFeedId();
        this.StateService.FeedManager().Feed().navigateToFeedDetails(feedId, 0);
    }
    gotIt() {
        this.onViewFeedsList();
    }

    /**
         * Navigate to the Feed List page
         */
    onViewFeedsList() {
        this.FeedService.resetFeed();
        this.StateService.FeedManager().Feed().navigateToFeeds();
    }

    /**
         * Navigate to the Feed Details SLA tab
    */
    onAddServiceLevelAgreement = function () {
        //navigate to Feed Details and move to the 3 tab (SLA)
        var feedId = this.getFeedId(this.FeedService);
        this.StateService.FeedManager().Feed().navigateToFeedDetails(feedId, 3);
    }
}

angular.module(moduleName).controller('DefineFeedCompleteController', ["$scope","$q","$http","$mdToast","$transition$","RestUrlService","FeedService","StateService",DefineFeedCompleteController]);