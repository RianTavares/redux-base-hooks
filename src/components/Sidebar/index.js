import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as ClassesActions from '../../store/actions/classes';

const Sidebar = () => {
  const dispatch = useDispatch();
  const modules = useSelector((state) => state.classes.modules);

  return (
    <aside>
      {modules.map(module => (
        <div key={module.id}>
          <strong>{module.title}</strong>
          <ul>
            {module.lessons.map(lesson => (
              <li key={lesson.id}>
                {lesson.title}
                <button onClick={() => dispatch(ClassesActions.toggleLesson(module, lesson))}>
                  Selecionar
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;