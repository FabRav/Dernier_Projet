// importation des modules 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//importation du css
import '@/Normalizer.css'
import '@/App.css';

import PublicRouter from '@/Pages/Public/PublicRouter';

// creation du routing principal

const App = () => {

  return (
    <div className="Setup">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRouter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// export de la fonction app pour appel dans l'index

export default App;
