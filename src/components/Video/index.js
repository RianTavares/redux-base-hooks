import React from 'react';
import { useSelector } from 'react-redux';

const Video = () => {
  const activeLesson = useSelector((state) => state.classes.activeLesson);
  const activeModule = useSelector((state) => state.classes.activeModule);
  return (
    <div>
      <strong>{activeModule.title} - </strong>
      <span>{activeLesson.title}</span>
    </div>
  );
}

export default Video;