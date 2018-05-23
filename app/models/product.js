import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  brand: DS.attr('string'),
  image: DS.attr('string'),
  price: DS.attr('string'),
  spec: DS.attr('string')
});
