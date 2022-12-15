// importation des modules 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//importation du css
import '@/Normalizer.css'
import '@/App.css';

import PublicRouter from '@/Pages/Public/PublicRouter';

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

export default App;
