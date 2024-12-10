import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UploadCSV from './components/ImportCVS';
import { CustomersTable } from './components/tables/CustomersTable';
import { VehiclesTable } from './components/tables/VehiclesTable';
import { AppointmentTable } from './components/tables/AppointmentTable';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<UploadCSV />}/>
                <Route path='costumers' element={<CustomersTable />}/>
                <Route path='vehicles' element={<VehiclesTable />}/>
                <Route path='appointments' element={<AppointmentTable />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
