import Ember from 'ember';
import baseQueriable from './base_queriable';

export default Ember.Controller.extend(baseQueriable, {
  queryParams: ['q'],
  q: null
});
