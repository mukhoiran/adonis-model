'use strict'
//load model Post
const Post = use('App/Models/Post')

class PostController {
  // async index(){
  //   return 'Posts'
  // }
  async index({ view }){
    // const posts = [
    //   {title: 'Post One', body: 'This is post one'},
    //   {title: 'Post Two', body: 'This is post two'},
    //   {title: 'Post Three', body: 'This is post three'},
    // ]

    const posts = await Post.all();

    return view.render('posts.index',{
      title: 'Latest Post',
      posts: posts.toJSON()
    })
  }
}

module.exports = PostController
