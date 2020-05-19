type Picture = {
    id: number
    name: string
    imgUrl: string
    song: Song[]
}
type Song = {
    title: string
    artist: string
    url: string
    imgUrl: string
}