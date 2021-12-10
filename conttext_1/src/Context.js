import * as React from 'react';

const ContextCount = React.createContext();

function countReducer(state, action) {
    switch(action.type) {
        case 'increment': {
            return {count: state.count + 1}
        }
        case 'decrement': {
            return {count: state.count - 1}
        }
        default: {
            throw new Error('Something went wrong')
        }
    }
}

function CountProvider({children}) {
    const [state, dispatch] = React.useReducer(countReducer, {count: 0});
    const value = {state, dispatch};
    return (
        <ContextCount.Provider value={value}>{children}</ContextCount.Provider>
    )
}

function useCount() {
    const context = React.useContext(ContextCount);
    if (context === undefined) {
        throw new Error('useCount must be used within a CountProvider')
    }
    return context
}

export {CountProvider, useCount};