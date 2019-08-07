let Reducer = (state = {}, action) => {
    switch (action.type) {
        case "SET_CHAT":
            state.chat = action.payload.chat;
            return {...state}

        default:
          return state
      }
}

export default Reducer;