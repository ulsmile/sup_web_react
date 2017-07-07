/*export const selectSubreddit = (subreddit) => {
  return {
    type: 'SELECT_SUBREDDIT',
    subreddit
  }
}*/

/*export const invalidateSubreddit = (subreddit) => {
  return {
    type: 'INVALIDATE_SUBREDDIT',
    subreddit
  }
}*/

export const requestPosts = (subreddit) => {
  return {
    type: 'REQUEST_POSTS',
    subreddit
  }
}

export const receivePosts = (subreddit, json) => {
  return {
    type: 'RECEIVE_POSTS',
    subreddit,
    //posts: json.data.map(child => child.data),
    name: json[0]["login"],
    rankingPermissionCheck: json[1]["site_admin"],
    hpPermissionCheck: json[0]["site_admin"],
    receivedAt: Date.now()
  }
}

export const receiveWeatherPosts = (subreddit, json) => {
  return {
    type: 'RECEIVE_WEATHER_POSTS',
    subreddit,
    windSpeed: json["query"]["results"]["channel"]["wind"]["speed"],
    windChill: json["query"]["results"]["channel"]["wind"]["chill"],
    windDirection: json["query"]["results"]["channel"]["wind"]["direction"],
    humidity: json["query"]["results"]["channel"]["atmosphere"]["humidity"],
    sunrise: json["query"]["results"]["channel"]["astronomy"]["sunrise"],
    sunset: json["query"]["results"]["channel"]["astronomy"]["sunset"],
    date: json["query"]["results"]["channel"]["item"]["condition"]["date"],
    temp: json["query"]["results"]["channel"]["item"]["condition"]["temp"],
    text: json["query"]["results"]["channel"]["item"]["condition"]["text"]
  }
}

export function fetchPosts(subreddit, url) {
  return function (dispatch) {
    dispatch(requestPosts(subreddit))

    return fetch(url)
      .then(response => response.json())
      .then(json =>
        dispatch(receivePosts(subreddit, json))
      )
  }
}

export function fetchWeatherPosts(subreddit, url) {
  return function (dispatch) {
    dispatch(requestPosts(subreddit))

    return fetch(url)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveWeatherPosts(subreddit, json))
      )
  }
}
      /*.then(function(json){
        if(url=url1){
        dispatch(receivePosts(subreddit, json))
        }
        else if(url=weatherUrl){
        dispatch(receiveWeatherPosts(subreddit, json))
        }
      }*/
