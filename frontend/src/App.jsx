import React, {Component} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/admin/Home.jsx";
import ShowFlower from "./pages/admin/ShowFlower.jsx";
import CreateFlower from "./pages/admin/CreateFlower.jsx";
import UpdateFLower from "./pages/admin/UpdateFLower.jsx";
import DeleteFlower from "./pages/admin/DeleteFlower.jsx";

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