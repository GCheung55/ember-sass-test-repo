import Ember from 'ember';
import $ from 'jquery';

export function initialize(/* application */) {
  // application.inject('route', 'foo', 'service:foo');
  if (!Ember.$) { 
    Ember.$ = $; 
  }
}

export default {
  initialize
};
