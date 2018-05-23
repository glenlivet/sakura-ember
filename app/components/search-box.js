import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    search: function(query) {
      this.get("onSearch")(query);
    }
  }
});
