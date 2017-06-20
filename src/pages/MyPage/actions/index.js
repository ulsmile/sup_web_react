export const changeCheck = (check) => {
  return {
    type: 'CHANGE_CHECK',
    check
  }
}

export const setRankingPermission = () => {
  const url = 'https://api.github.com/users'
  const check = []
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      var check = json[0]["site_admin"]
      console.dir(check)
    })
  return {
    type: 'SET_RANKING_PERMISSION',
    check
  }
}

/*export function uploadFile(dispatch: Dispatch<any>, file: File) {
  const formData = new FormData();
    formData.append('myFile', file);

  return fetch('/api/upload', {method: 'POST', body: formData})
    .then(successCB)
    .catch(failCB);
}

export const listPlayers = () => {
  const url = 'http://localhost:3001/players/'
	const url = 'https://api.github.com/users'
	const players = []
	fetch(url).then(function(response) {
		  return response.json();
	}).then(function(json) {
		console.dir(json)
			let i = 0
		for (let player of json) {
			  players[i] = player.login
			  console.log(player.login);
				i = i + 1
		}
	});
 return {
    type: 'LIST_PLAYERS',
		players 
	} 

}*/
