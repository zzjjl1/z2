import Vue from 'vue'
import Router from 'vue-router'
import MovieList from '@/components/movie/MovieList'
// import Header from '@/components/common/Header'
// import Bottom from '@/components/common/Bottom'
import MusicList from '@/components/music/MusicList'
import BookList from '@/components/book/BookList'
import ImgsList from '@/components/imgs/ImgsList'
import MovieDetail from '@/components/movie/MovieDetail'
import MusicPage from '@/components/music/MusicPage'
import ImgDetail from '@/components/imgs/ImgDetail'









Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/movie/movieList'

    },
    {
      path: '/movie/movieList',
      component: MovieList
    },
    {
      path: '/music/musicList',
      component: MusicList
    },
    {
      path: '/book/bookList',
      component:BookList
    },
    {
      path:'/imgs/imgsList',
      component:ImgsList
    },
    {
      path:'/movie/movieDetail:movieId',
      component:MovieDetail
    },
    {
      path:'/music/musicPage:musicId',
      component:MusicPage
    },
    {
      path:'/imgs/imgDetail:imgId',
      component:ImgDetail
    },






  ]
})
