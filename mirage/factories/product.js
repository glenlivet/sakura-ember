import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `Product ${i + 1}`;
  },
  brand(i) {
    return `Brand ${i + 1}`;
  },
  image(i) {
    return `Image ${i + 1}`;
  },
  price() {
    return '$' + faker.finance.amount();
  }
});
