const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: 'Iniciando com React',
      lessons: [
        {id: 1, title: 'Primeira Aula'},
        {id: 2, title: 'Segunda Aula'}
      ]
    },
    {
      id: 2,
      title: 'Aprendendo Redux',
      lessons: [
        {id: 1, title: 'Terceira Aula'},
        {id: 2, title: 'Quarta Aula'}
      ]
    }
  ]
}

function classes (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "TOGGLE_LESSON":
      return {
        ...state,
        activeLesson: action.lesson,
        activeModule: action.module,
      }
  
    default:
      return state;
  }
}

export default classes;