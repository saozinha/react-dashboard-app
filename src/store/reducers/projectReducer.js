const initState = {

    projects: [
        {id: '1', title : 'Maratona code in house', content:' This is my routinne , i am great progress in react '},
        {id: '2', title : 'Coding your app lous', content:'Today i am go coding my future app'},
        {id: '3', title : 'Create your newpapers in app lous', content:'I Need publish more news about my app '},
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