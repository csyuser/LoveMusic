type Picture = {
    id: number
    name: string
    imgUrl: string
    song: Song[]
}
type Song = {
    side: string
    ssid: string
    title: string
    picture: string
    artist: string
    url: string
    lrc: string
}
type LyricObj = {
    [key: string]: string
}