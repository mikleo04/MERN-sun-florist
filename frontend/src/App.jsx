import React, {Component} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home.jsx";
import ShowFlower from "./pages/ShowFlower.jsx";
import CreateFlower from "./pages/CreateFlower.jsx";
import UpdateFLower from "./pages/UpdateFLower.jsx";
import DeleteFlower from "./pages/DeleteFlower.jsx";

class App extends Component {
    render() {
        return (
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/flowers/details/:id' element={ <ShowFlower/> } />
                <Route path='/flowers/create' element={ <CreateFlower/> } />
                <Route path='/flowers/update/:id' element={ <UpdateFLower/> } />
                <Route path='/flowers/delete/:id' element={ <DeleteFlower/> } />
            </Routes>
        );
    }
}

export default App;