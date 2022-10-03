import React from 'react';
import './post-add-form.css';

export default function PostAddForm() {
  return (
    <form className='bottom-panel d-flex'>
      <input
        type="text"
        placeholder='О чем вы думаете сейчас?'
        className='form-cotrol new-post-label'
      />
      <button
        type='submit'
        className='btn btn-outline-secondary'
      >Добавить</button>
    </form>
  )
}
