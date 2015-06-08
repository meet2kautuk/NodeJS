//Tweets
$.mockjax({
  url: "/api/1.0/tweets/trending",
  responseText: {
      status: 1,
      data: {
          tweets: [
          {
              id:'1234-12122-1212',
              text: "Hey watched new movie today @AvengersAOU.. not bad :-)",
              time: "2015-06-08T09:50:49.312Z",
              stats: {
                  likes: 122,
                  shares: 213
              },
              user: {
                  handle: "kk",
                  name:"Kautuk",
                  picURL: "https://pbs.twimg.com/profile_images/2955559089/83f09d26307253decde4d58ecd14c2e9_400x400.jpeg"
              }
          },
          {
              id:'1234-12122-1232',
              text: "Hey watched new movie today @Exodus.. legendary work..",
              time: "2015-06-08T09:58:23.707Z",
              stats: {
                  likes: 1222,
                  shares: 32312
              },
              user: {
                  handle: "samW",
                  name:"Sam Worth",
                  picURL: "https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251_reasonably_small.jpeg"
              }
          }
        ]
      }
    }
});