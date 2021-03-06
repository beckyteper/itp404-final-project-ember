import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('news-search', function() {
    this.route('results');
  });
  this.route('account');
});

export default Router;
