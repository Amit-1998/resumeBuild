export const initialPersonalState = {
    fullName: "",
    designation: "",
    careerObj: "",
    city: "",
    phone: "",
    email: "",
    linkedin: ""
}

export const initialEducState = {
   degree: "",
   university: "",
   passout: "",
   marks: ""
}

export const initialSkillState = {
   skillName: "",
   rate: ""
}

export const initialExperState = {
   company: "",
   designation: "",
   work: [],
   startDate: "",
   currWorking: "",
   endDate: ""
}

export const initialAchievementState = {
    achieve: []
}

export const personalDetailReducer = (state=initialPersonalState, action) => {
    switch (action.type){
        case 'SET_PERSONAL_DETAILS':
            return {...state, ...action.payload };

        case 'SET_ACHIEVEMENTS_DETAILS':
            return {...state, ...action.payload };
        
        default:
            return state;
    }
}

export const eduDetailReducer = (state=initialEducState, action) => {
    switch (action.type) {
        case 'SET_EDUCATION-DETAILS':
            return {...state, ...action.payload };
        
        default: 
           return state;
    }
}

export const skillReducer = (state=initialSkillState, action) => {
    switch (action.type) {
        case 'SET_SKILLS_DETAILS':
            return {...state, ...action.payload };
        
        default: 
           return state;
    }
}

export const experReducer = (state=initialExperState, action) => {
    switch (action.type) {
        case 'SET_EXP_DETAILS':
            return {...state, ...action.payload };
        
        default: 
           return state;
    }
}


export const achievementsReducer = (state=initialAchievementState, action) => {
    switch (action.type) {
        case 'SET_ACHIEVEMENTS_DETAILS':
            return {...state, ...action.payload };
        
        default: 
           return state;
    }
}
