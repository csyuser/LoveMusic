import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    audio: new Audio(),
    number: 0
  },
  mutations: {
    // parseImg(state,path: string) {
    //   console.log('执行了')
    //   console.log(require("../assets/images/" + path + ".jpg"))
    //   console.log(path)
    //   // return require("../assets/images/" + path + ".jpg")
    //   return 111
    // },
    updateCover(state, payload: {item: Picture,number:number}) {
      const themeImg = document.getElementById("themeImg");
      const bg = document.getElementById("bg");
      const tag = document.getElementById("tag");
      const title = document.getElementById("title");
      const author = document.getElementById("author");
      const lyric = document.getElementById("lyric");
      // const songImgUrl = store.commit('parseImg',item.song[0].imgUrl)
      const songImgUrl = require("../assets/images/" + payload.item.song[payload.number].imgUrl + ".jpg")

      if (themeImg === null || bg === null || tag === null || title === null || author === null || lyric === null) return;
      themeImg.style.backgroundImage = "url(" + songImgUrl + ")";
      bg.style.backgroundImage = "url(" + songImgUrl + ")";
      tag.innerHTML = payload.item.name;
      title.innerHTML = payload.item.song[payload.number].title;
      author.innerHTML = payload.item.song[payload.number].artist;
      state.audio.src = require("../assets/music/" + payload.item.song[payload.number].url + ".mp3");
      state.audio.play();
      // console.log('songImgUrl')
      // console.log(songImgUrl)
    },
    switchPlay(state, status) {
      if (status === 'pause') {
        if (state.audio.src === '') {
          state.audio.src = require("../assets/music/1973.mp3")
        }
        state.audio.play()
      } else {
        state.audio.pause()
      }
    },
    updateNext(state, item) {
      state.number+=1
      store.commit('updateCover', {item:item,number:state.number})
      console.log(state.number)
    }
    // updatePlay(state) {
    //   if (state.btnPlay === 'pause') {
    //     state.btnPlay = 'play'
    //     store.commit('switchPlay', 'play')
    //   } else {
    //     state.btnPlay = 'pause'
    //     store.commit('switchPlay', 'pause')
    //   }
    //   console.log('state.btnPlay')
    //   console.log(state.btnPlay)
    // }

  },
  actions: {
  },
  modules: {
  }
})
export default store