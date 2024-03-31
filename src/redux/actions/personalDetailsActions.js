export const personalDetailCreator = (details) => {
    return {
        type: 'SET_PERSONAL_DETAILS',
        payload: details,
    }
}

export const educationDetailCreator = (details) => {
   return {
    type: 'SET_EDUCATION_DETAILS',
    payload: details,
   }
}

export const skillsCreator = (details) => {
    return {
        type: 'SET_SKILLS_DETAILS',
        payload: details,
    }
}

export const experienceCreator = (details) => {
    return {
        type: 'SET_EXP_DETAILS',
        payload: details,
    }
}

export const achievementsCreator = (details) => {
    return {
       type: 'SET_ACHIEVEMENTS_DETAILS',
       payload: details,
    }
}

