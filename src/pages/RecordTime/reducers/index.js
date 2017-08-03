function recordTimeReducers(state = {
    isFetching: false,
    boardTypeSelect: "hard", distanceSelect: "3",
    registerValue: false,
    time: "",
    //weather:{windChill:"10", windDirection:"", windSpeed:"", humidity:"", sunrise:"", sunset:"", date:"", temp:"", text:""}
    windChill:"10", windDirection:"", windSpeed:"", humidity:"", sunrise:"", sunset:"", date:"", temp:"", text:""
}, action) {
    switch(action.type) {
    case 'REQUEST_UPDATE':
      return Object.assign({}, state, {
        isFetching: false,
    //    data:state 
      });
    case 'CHANGE_RECORD_TIME_BOARD_TYPES_SELECT':
        return Object.assign({}, state, {boardTypeSelect: action.boardTypeSelect})
    case 'CHANGE_RECORD_TIME_DISTANCE_SELECT':
        return Object.assign({}, state, {distanceSelect: action.distanceSelect})
    case 'PUSH_REGISTER_BUTTON':
        return Object.assign({}, state, {registerValue: !state.registerValue})
    case 'CHANGE_TIME':
        return Object.assign({}, state, {time: action.time})
    case 'REQUEST_POSTS':
      return Object.assign({}, state, {
        isFetching: true,
      });
    case 'RECEIVE_WEATHER_POSTS':
      return Object.assign({}, state, {
        isFetching: false,
        windSpeed: action.windSpeed,
        windChill: action.windChill,
        windDirection: action.windDirection,
        humidity: action.humidity,
        sunrise: action.sunrise,
        sunset: action.sunset,
        date: action.date,
        temp: action.temp,
        text: action.text
      });
    default:
        return state;
    }
}
export default recordTimeReducers
