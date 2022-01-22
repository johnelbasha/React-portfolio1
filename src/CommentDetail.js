import react from "react";
import faker from 'faker';

const commentDetail = () => {
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img alt='avatar' src={faker.image.image()} />
      </a>
      <div className='content'>
        <a href='/' className='author'>Sam</a>
        <div className='metadata'>
          <span className='date'>Today at 6pm</span>
        </div>
        <div className='text'>Nice blog post</div>
      </div>
    </div>
  );
};

export default commentDetail;