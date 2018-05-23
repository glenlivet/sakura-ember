import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    query: function(query) {
      this.transitionToRoute('products', { queryParams: { q: query}});
    }    
  }
});
