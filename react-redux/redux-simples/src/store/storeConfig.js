import { createStore, combineReducers} from 'redux'

const reducers = combineReducers ({
    numeros: function(state, action) {
        switch(action.type) {
            case 'NUM_MIN_ALTERADO':
                return {
                    ...state,
                    min: action.payload
                }
            case 'NUM_MAX_ALTERADO':
                return {
                    ...state,
                    max: action.payload
                }
        default:
           return {
                min: 1,
                max: 10
           }
        }
    },
    nomes: function(state, action) {
      console.log('Reducer Nomes...')
      console.log(state, ' ', action)
        return [
            'Ana',
            'Bia',
            'Carlos'
        ]
    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig