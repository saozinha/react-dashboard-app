const initState = { } 

const projectReducer = (state = initState, action) => {

    switch (action.type) {
        case 'CREATE_PROJECT':
                console.log('call CREATE_PROJECT --- ', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('CREATE_PROJECT ERROR --- ', action.err)
            return state;
        default: 
            return state;
    } 
}

export default projectReducer