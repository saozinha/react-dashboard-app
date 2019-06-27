const initState = {

    projects: [
        {id: '1', title : 'Maratona code in house', content:'blah blah  blah  blah blah blah blah blah blah '},
        {id: '2', title : 'Coding your app lous', content:'blah blah  blah  blah blah blah blah blah blah '},
        {id: '3', title : 'Create your newpapers in app lous', content:'blah blah  blah  blah blah blah blah blah blah '},
    ]
} 

const projectReducer = (state = initState, action) => {

    switch (action.type) {
        case 'CREATE_PROJECT':
                console.log('call CREATE_PROJECT --- ', action.project)
            break;
    
        default:
            console.log('Default Case  --- ', action.project)
            break;
    }
 

    return state
}

export default projectReducer