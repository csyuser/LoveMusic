import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {

  },
  mutations: {
    // parseImg(state,path: string) {
    //   console.log('执行了')
    //   console.log(require("../assets/images/" + path + ".jpg"))
    //   console.log(path)
    //   // return require("../assets/images/" + path + ".jpg")
    //   return 111
    // },
    updateCover(state,item: Picture) {
    const themeImg = document.getElementById("themeImg");
    const bg = document.getElementById("bg");
    const tag = document.getElementById("tag");
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const lyric = document.getElementById("lyric");
    const audio = new Audio();
    // const songImgUrl = store.commit('parseImg',item.song[0].imgUrl)
    const songImgUrl = require("../assets/images/" + item.song[0].imgUrl + ".jpg")

      if (themeImg === null ||bg === null ||tag === null ||title === null ||author === null ||lyric === null )return;
      themeImg.style.backgroundImage = "url(" + songImgUrl + ")";
      bg.style.backgroundImage = "url(" + songImgUrl + ")";
      tag.innerHTML = item.name;
      title.innerHTML = item.song[0].title;
      author.innerHTML = item.song[0].artist;
      audio.src = require("../assets/music/" + item.song[0].url + ".mp3");
      audio.play();
      // console.log('songImgUrl')
      // console.log(songImgUrl)
    }
  },
  actions: {
  },
  modules: {
  }
})
export default store