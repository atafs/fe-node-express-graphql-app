TO CONTINUE... 76. App Challenges

# Lyrical-GraphQL
Starter project from a GraphQL course on Udemy.com

## links
#### client (two routes)
http://localhost:4000/#/
http://localhost:4000/#/song/new

#### graphQL
http://localhost:4000/graphql

#### mongoDB
https://mlab.com/databases/lyricaldb/

## queries
#### query01 add a song
mutation {
  addSong(title: "Cold Night") {
    id
  }
}

#### query02 add a lyric
```
mutation {
  addLyricToSong(songId: "5c5da0561f2a7e94900d6507", content: "Oh my oh my its a cold night") {
    songId
  }
}
```

#### query03 get the songs
```
{
  songs {
    id
    title
    lyrics {
      content
    }
  }
}
```

#### query04 get the title from each song
```
{
  songs {
    title
  }
}
```

#### query05 add a song
```
mutation {
  addSong(title: "Dog Call!!") {
    id
    title
  }
}
```

#### query06 adding a song using query variables
#### - query variable: { "title": "I am using the query variables" }
```
mutation AddSong($title: String) {
  addSong(title: $title) {
    id
    title
  }
}
```
