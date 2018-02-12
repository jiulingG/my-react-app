import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './component/Homepage';
import Storypage from './component/Storypage';
import Hobypage from './component/Hobypage';
import Picturespage from './component/Picturespage';
import Dreamspage from './component/Dreamspage';


const App=()=>(

   <div className="SS">
   <Route path="/" exact component={Homepage} /> 
   <Route path="/Storypage" exact component={Storypage} />
   <Route path="/Picturespage" exact component={Picturespage} /> 
   <Route path="/Hobypage" exact component={Hobypage} />
   <Route path="/Dreamspage" exact component={Dreamspage} /> 
    </div>
    );

export default App;