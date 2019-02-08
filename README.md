# Lyrical-GraphQL
Starter project from a GraphQL course on Udemy.com

## schema
http://localhost:4000/graphql

## queries
#### query01 add a song
mutation {
  addSong(title: "Cold Night") {
    id
  }
}

#### query02 add a lyric
mutation {
  addLyricToSong(songId: "5c5da0561f2a7e94900d6507", content: "Oh my oh my its a cold night") {
    songId
  }
}

#### query03 get the songs
{
  songs {
    id
    title
    lyrics {
      content
    }
  }
}

#### query04 get the title from each song
{
  songs {
    title
  }
}