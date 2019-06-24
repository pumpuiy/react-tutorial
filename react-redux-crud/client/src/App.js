import React from 'react';
import CommentForm from './components/CommentForm';
import ShowComment from './components/ShowComment';

function App() {
  return (
    <div className="App">
      <CommentForm />
      <br/>
      <ShowComment />
    </div>
  );
}

export default App;
