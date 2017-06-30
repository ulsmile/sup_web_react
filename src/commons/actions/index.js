export const selectSubreddit = (subreddit) => {
  return {
    type: 'SELECT_SUBREDDIT',
    subreddit
  }
}

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
    posts: json[0]["login"],
    name: json[0]["login"],
    rankingPermissionCheck: json[1]["site_admin"],
    hpPermissionCheck: json[0]["site_admin"],
    receivedAt: Date.now()
  }
}

export function fetchPosts(subreddit) {
  return function (dispatch) {
    dispatch(requestPosts(subreddit))

    return fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(json =>
        dispatch(receivePosts(subreddit, json))
      )
  }
}

