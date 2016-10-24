import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    searchArticles: function(e) {
      e.preventDefault();
    }
  }
});
