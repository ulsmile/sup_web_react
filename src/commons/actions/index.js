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
  const Records = []
  var Time = 0
  var Name = ""
  var Gender = ""
  console.dir(json.length)
  for(var i=0 ; i<json.length ; i++){
     Time =  json[i]["records"][0]["record_time"]
     Time = ((Number(Time[0])*10+Number(Time[1]))*60+Number(Time[3])*10+Number(Time[4]))*60+Number(Time[6])*10+Number(Time[7])
    //json[i]["records"][0]["record_time"] = Time
    // second_records[i] = json[i]["records"][0]
     Records[i] = json[i]["records"][0]
     Records[i]["record_second_time"] = Time
     Name =  json[i]["name"]
     Gender =  json[i]["gender"]
     Records[i]["name"] = Name
     Records[i]["gender"] = Gender
  }
  console.dir(Records)   
  return {
    type: 'RECEIVE_POSTS',
    subreddit,
    //posts: json.data.map(child => child.data),
    name: json[0]["name"],
    gender: json[0]["gender"],
    rankingPermissionCheck: json[0]["ranking_permission"],
    hpPermissionCheck: json[0]["hp_permission"],
    //genderSelect: json[0]["gender"],
    records: Records,
    //records: json[0]["records"],
    //receivedAt: Date.now()
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
