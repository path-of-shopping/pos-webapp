import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
  router: service('router'),

  showResults(search) {
    this.get('router').transitionTo('search.results', search.get('key'));
  }
});
