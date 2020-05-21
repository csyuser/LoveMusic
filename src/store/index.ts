import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    audio: new Audio(),
    statusClock: 0,
    tagName:'校园',
    title:'1973',
    author:'James Blunt',
    currentBarWidth:'0%',
    currentTime:'0:00',
    btnPlayName:'play',
    // songs:[{side: '',ssid: '',title: '',picture: '',artist: '',url: '',lrc: ''}]
  },
  mutations: {
    // parseImg(state,path: string) {
    //   console.log('执行了')
    //   console.log(require("../assets/images/" + path + ".jpg"))
    //   console.log(path)
    //   // return require("../assets/images/" + path + ".jpg")
    //   return 111
    // },
    updateCover(state, channel_id:string ) {
      const themeImg = document.getElementById("themeImg");
      const bg = document.getElementById("bg");

      Axios.get('http://api.jirengu.com/fm/v2/getSong.php',{params:channel_id}).then(response=>{
      const songs = response.data.song
      if (themeImg === null || bg === null ||songs[0]===undefined) return;
      themeImg.style.backgroundImage = "url(" +songs[0].picture + ")";
      bg.style.backgroundImage = "url(" +songs[0].picture + ")";
      state.tagName = channel_id;
      state.title = songs[0].title;
      state.author = songs[0].artist;
      state.audio.src = songs[0].url;
      state.audio.play();
      state.btnPlayName='pause'
      console.log(state.btnPlayName)
      store.commit('eventListener')
    }).catch(error=>{window.alert(error)})
    },
    eventListener(state){
      state.audio.addEventListener('play', () => {
        clearInterval(state.statusClock)
        state.currentBarWidth='0%'
        const statusClock = setInterval(() => { store.commit('updateStatus') }, 1000)
        state.statusClock = statusClock
      })
      state.audio.addEventListener('pause', () => {
        clearInterval(state.statusClock)
      })
    },
    updateStatus(state) {
      const min = Math.floor(state.audio.currentTime / 60)
      let second = Math.floor(state.audio.currentTime % 60) + ""
      second = second.length === 2 ? second : '0' + second
      state.currentTime = min + ':' + second
     state.currentBarWidth = (state.audio.currentTime/state.audio.duration)*100 + '%'
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