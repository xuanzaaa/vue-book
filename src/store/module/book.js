const book = {
    state: () => ({ 
        test: 1
    }),
    mutations: {
        changeLogin (state, val) {
          state.test = val
        }
    }
}

export default book