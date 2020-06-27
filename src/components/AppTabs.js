import React, { useState } from 'react';
import './App.css';
import Article from './components/Article';

function App() {
    
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
    }
    
    export default App;