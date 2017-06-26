export const changeRankingPermissionCheck = (check) => {
  return {
    type: 'CHANGE_RANKING_PERMISSION_CHECK',
    check:check
  }
}

export const changeHpPermissionCheck = (check) => {
  return {
    type: 'CHANGE_HP_PERMISSION_CHECK',
    check:check
  }
}
export const changeGenderSelect = (select) => {
  return {
    type: 'CHANGE_GENDER_SELECT',
    select
  }
}
export const changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  }
}
/*export const changeToFemale = (select) => {
  return {
    type: 'MALE',
    select:select
  }
}
export const changeToMale = (select) => {
  return {
    type: 'FEMALE',
    select:select
  }
}*/
/*export const setRankingPermission = () => {
  const url = 'https://api.github.com/users'
  var check = false
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      check = json[0]["site_admin"]
      console.dir(check)
    })
  return {
    type: 'SET_RANKING_PERMISSION',
    check
  }
}*/

export const fetchRankingPermission = () => {
    return {
        type: 'FETCH_RANKING_PERMISSION',
    };
}

export const receiveRankingPermission = () => {
    return {
        type: 'RECEIVE_RANKIG_PERMISSION',
        check:check
    };
}

function getRankingPermission(check) {
   const url = 'https://api.github.com/users'
   return dispatch => {
     dispatch(fetchRankingPermission());
     fetch(url)
       .then(function(response) {
         return response.json();
       })
       .then(function(json) {
         check = json[1]["site_admin"]
         console.dir(check)
       })
    //return $.getJSON('https://api.github.com/users')
         //.then(data => dispatch(receiveRankingPermission(data.check)));
   };
}

//console.dir(store.getState())
//console.dir(state)
//console.dir(store.getState())
export const getRankingPermissionIfNeeded = () => {
    return (dispatch, getState) => {
        //console.dir(state.checks.isFetching)
        console.dir(getState().isFetching)
        if(state.checks.isFetching) {
            return Promise.resolve();
        } else {
            return dispatch(getRankingPermission());
        }
    };
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
