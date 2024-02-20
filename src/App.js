import React from 'react';
import Inscricao from './components/formInscricao/formInscricao';
import Comentario from './components/formComentario/formComentario';
import Form from './components/hoc/hoc';

function App() {
  
  return (
    <div>
    
      <Inscricao />
      <Comentario />
      <Form />
      
    </div>
  );
}

export default App;