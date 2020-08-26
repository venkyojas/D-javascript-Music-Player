const album = [
    { "album_id": "101", "album_name": "Orange", title: [201, 202, 203], artist: [301, 302], genre: [401, 402], "year": "2015", "language": "Telugu" },
    { "album_id": "102", "album_name": "Style", title: [204, 205, 206], artist: [303, 304], genre: [403, 404], "year": "2017", "language": "Telugu" },
    { "album_id": "103", "album_name": "Ala Vaikuntapuramlo", title: [207, 208, 209], artist: [305, 306], genre: [405, 406], "year": "2018", "language": "Telugu" },
    { "album_id": "104", "album_name": "Chitralahari", title: [210, 211, 212], artist: [307, 308], genre: [407, 408], "year": "2019", "language": "Telugu" },
];
const title = [
    { "title_id": "201", "title_name": "Nenu Nuvvantu Song", album: [101], artist: [301], genre: [401] },
    { "title_id": "202", "title_name": "Rooba Rooba", album: [101], artist: [302], genre: [402] },
    { "title_id": "203", "title_name": "Hello Rammante", album: [101], artist: [303], genre: [403] },
    { "title_id": "204", "title_name": "Raa Raa", album: [102], artist: [304], genre: [404] },
    { "title_id": "205", "title_name": "Yedalo yedo", album: [102], artist: [305], genre: [405] },
    { "title_id": "206", "title_name": "Chiru Cheyaste", album: [102], artist: [306], genre: [406] },
    { "title_id": "207", "title_name": "Samajavagamana", album: [103], artist: [307], genre: [407] },
    { "title_id": "208", "title_name": "Butta Bomma", album: [103], artist: [308], genre: [408] },
    { "title_id": "209", "title_name": "Ramuloo Ramulaa", album: [103], artist: [301], genre: [409] },
    { "title_id": "210", "title_name": "Prema Vennela", album: [104], artist: [302], genre: [4010] },
    { "title_id": "211", "title_name": "Glassmates", album: [104], artist: [303], genre: [411] },
    { "title_id": "212", "title_name": "Parugu Parugu", album: [104], artist: [304], genre: [412] }
];
const artist = [
    { "artist_id": "301", "artist_name": "DSP", album: [101], genre: [401, 402], title: [201, 209], "profession": "Music Director" },
    { "artist_id": "302", "artist_name": "Larence", album: [101], genre: [403, 404], title: [210, 212], "profession": "Dancer" },
    { "artist_id": "303", "artist_name": "Madhu Priya", album: [102], genre: [405, 406], title: [203, 211], "profession": "Singer" },
    { "artist_id": "304", "artist_name": "Sai Tej", album: [102], genre: [407, 408], title: [204, 212], "profession": "Lyricist" },
    { "artist_id": "305", "artist_name": "Keeravani MM", album: [103], genre: [409, 410], title: [205, 201], "profession": "Music" },
    { "artist_id": "306", "artist_name": "Sunitha", album: [103], genre: [411, 412], title: [206, 202], "profession": "Dancer" },
    { "artist_id": "307", "artist_name": "S.P.Balasubramanyam", album: [104], genre: [413, 414], title: [207, 204], "profession": "Music Director" },
    { "artist_id": "308", "artist_name": "Janaki", album: [104], genre: [415, 416], title: [208, 203], "profession": "Singer" }
];
const genre = [
    { "genre_id": "401", "genre_name": "HipHop", album: [101], artist: [301], title: [201] },
    { "genre_id": "402", "genre_name": "Rock", album: [101], artist: [302], title: [202] },
    { "genre_id": "403", "genre_name": "Folk", album: [102], artist: [303], title: [203] },
    { "genre_id": "404", "genre_name": "Classical", album: [102], artist: [304], title: [204] },
    { "genre_id": "405", "genre_name": "Jazz", album: [103], artist: [305], title: [205] },
    { "genre_id": "406", "genre_name": "Disco", album: [103], artist: [306], title: [206] },
    { "genre_id": "407", "genre_name": "Tecno", album: [104], artist: [307], title: [207] },
    { "genre_id": "408", "genre_name": "Pop Rock", album: [104], artist: [308], title: [208] },
    { "genre_id": "409", "genre_name": "Western", album: [101], artist: [301], title: [209] },
    { "genre_id": "410", "genre_name": "Electro", album: [101], artist: [302], title: [210] },
    { "genre_id": "411", "genre_name": "Rock", album: [102], artist: [303], title: [211] },
    { "genre_id": "412", "genre_name": "Classical", album: [102], artist: [304], title: [212] },
    { "genre_id": "413", "genre_name": "HipHop", album: [103], artist: [305], title: [201] },
    { "genre_id": "414", "genre_name": "Disco", album: [103], artist: [306], title: [202] },
    { "genre_id": "415", "genre_name": "Tecno", album: [104], artist: [307], title: [203] },
    { "genre_id": "416", "genre_name": "Melody", album: [10], artist: [308], title: [204] }
];