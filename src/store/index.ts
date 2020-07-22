import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    audio: new Audio(),
    statusClock: 0,
    tagName: '校园',
    title: '1973',
    author: 'James Blunt',
    currentBarWidth: '0%',
    currentTime: '0:00',
    songSid: '',
    songSsid: '',
    lyricObj: {} as LyricObj,
    lyric: ''
  },
  mutations: {
    updateCover(state, channel_id: string) {
      const themeImg = document.getElementById("themeImg");
      const bg = document.getElementById("bg");

      Axios.get('http://api.jirengu.com/fm/v2/getSong.php', { params: channel_id }).then(response => {
        const songs = response.data.song
        if (themeImg === null || bg === null || songs[0] === undefined) 
        {
          window.alert('暂无数据，请稍后')
          return;
        }
        themeImg.style.backgroundImage = "url(" + songs[0].picture + ")";
        bg.style.backgroundImage = "url(" + songs[0].picture + ")";
        state.tagName = channel_id;
        state.title = songs[0].title;
        state.author = songs[0].artist;
        state.audio.src = songs[0].url;
        state.audio.play();
        state.songSid = songs[0].sid
        state.songSsid = songs[0].ssid
        store.commit('eventListener')
        store.commit("getLyric")
      }).catch(error => { window.alert(error) })
    },
    eventListener(state) {
      state.audio.addEventListener('play', () => {
        clearInterval(state.statusClock)
        state.currentBarWidth = '0%'
        const statusClock = setInterval(() => {
          store.commit('updateStatus')

        }, 1000)
        state.statusClock = statusClock
      })
      state.audio.addEventListener('pause', () => {
        clearInterval(state.statusClock)
      })
    },
    updateStatus(state) {
      state.lyric = ''
      const min = Math.floor(state.audio.currentTime / 60)
      let second = Math.floor(state.audio.currentTime % 60) + ""
      second = second.length === 2 ? second : '0' + second
      state.currentTime = min + ':' + second
      state.currentBarWidth = (state.audio.currentTime / state.audio.duration) * 100 + '%'
      const line = state.lyricObj['0' + min + ':' + second]
      if (line) {
        state.lyric = line
      }
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
    getLyric(state) {
      Axios.get('http://api.jirengu.com/fm/v2/getLyric.php', { params: { sid: state.songSid, ssid: state.songSsid } }).then(response => {
        const lyric = response.data.lyric
        lyric.split('\n').forEach((line: string) => {
          const times = line.match(/\d{2}:\d{2}/g)
          const content = line.replace(/\[.+?\]/g, '')
          if (Array.isArray(times)) {
            times.forEach((time) => {
              state.lyricObj[time] = content;
            })
          }
        })
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
export default store