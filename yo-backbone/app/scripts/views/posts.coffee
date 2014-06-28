define [
  'jquery'
  'underscore'
  'backbone'
  'templates'
], ($, _, Backbone, JST) ->
  class PostsView extends Backbone.View
    template: JST['app/scripts/templates/posts.ejs']