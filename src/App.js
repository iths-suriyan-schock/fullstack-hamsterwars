// Profile Card

import React, { useState } from 'react';
import './App.css';
import SelectedBook from './components/books/SelectedBook';
import BookList from  './components/books/BookList';
// import ProfileCard from './components/ProfileCard';
// import Grandparent from './components/Grandparent';
// import Parent from './components/Parent';
// import Child from './components/Child';

function App() {
    
    import React, { useState } from 'react';
    import './App.css';
    import Article from './components/Article';
        
        const [activeTab, setTab] = useState(1);
        const [user, setUser] = useState({id: 1, role: 'hamsterlover' })
        
        return (
            <div className="App">
            <nav>
            <a href="#" className={ (activeTab === 1) ? 'active' : '' } onClick={() => setTab(1)} >Flik 1</a>
            <a href="#" className={ (activeTab === 2) ? 'active' : '' } onClick={() => setTab(2)} >Flik 2</a>
            <a href="#" className={ (activeTab === 3) ? 'active' : '' } onClick={() => setTab(3)} >Flik 3</a>
            </nav>
            <Article title={ 'Article 1' } visible={(activeTab === 1) ? true : false } user={user} />
            <Article title={ 'Article 2' } visible={(activeTab === 2) ? true : false } user={user} />
            <Article title={ 'Article 3' } visible={(activeTab === 3) ? true : false } user={user} />
            </div>
            );

    const [name, updateName] = useState(true);
    const [title, updateTitle] = useState(true);
    
    return (
        <main className="App">
            {/* <div className="Grandprent"><Grandparent></Grandparent></div>
            <button onClick={() => updateTitle(name)}>{ (title) ? 'what name?' : 'what title?' }</button> */}
        </main>
        )
    }
    
    export default App;    
    
    //   const [name, updateName] = useState(true);
    //   const [title, updateTitle] = useState(true);
    
    //   return (
    //     <main className="App">
    //       <p>Title has been updated to { (!lock1 && !lock2) ? 'unlocked' : 'locked' }!</p>
    //       <button onClick={() => updateTitle(!lock1)}>{ (lock1) ? 'locked' : 'unlocked' }</button>
    
    //     </main>
    //   );
    // }
    
    
    
    // import React, { useState } from 'react';
    // import './App.css';
    // import User from './components/User';
    
    // function App() {
    
    //   return (
    //     <main className="App">
    //       <User user={ user }/>
    //     </main>
    //   );
    // }
    
    // export default App;
    
    
    
    
    // 2 Locks App
    
    // import React, { useState } from 'react';
    // import './App.css';
    
    // function App() {
    
    //   const [lock1, toggleLock1] = useState(true);
    //   const [lock2, toggleLock2] = useState(true);
    
    //   return (
    //     <main className="App">
    //       <p>Its { (!lock1 && !lock2) ? 'unlocked' : 'locked' }!</p>
    //       <button onClick={() => toggleLock1(!lock1)}>{ (lock1) ? 'locked' : 'unlocked' }</button>
    //       <button onClick={() => toggleLock2(!lock2)}>{ (lock2) ? 'locked' : 'unlocked' }</button>
    //     </main>
    //   );
    // }
    
    // export default App;
    
    // import React from 'react';
    // import './App.css';
    // import Greeting from './components/Greeting';
    
    // function App() {
    //   return (
    //     <div className="App">
    //       <Greeting />
    //     </div>
    //   );
    // }
    
    // export default App;