define [
  'underscore'
  'backbone'
  'models/Posts-model'
], (_, Backbone, PostsModel) ->

  class PostsCollection extends Backbone.Collection
    model: PostsModel