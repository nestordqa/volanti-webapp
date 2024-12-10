import axios from 'axios';
import { create } from 'zustand';

const apiUrl = process.env.REACT_APP_API_URL;

// Crear el store utilizando Zustand
const useStore = create((set) => ({
    customers: [], // Estado inicial para los clientes
    vehicles: [], // Estado inicial para los vehículos
    appointments: [], // Estado inicial para las citas
    phones: [], // Estado inicial para los teléfonos
    
    // Funciones para obtener datos
    fetchCustomers: async () => {
        const response = await axios.get(`${apiUrl}/customers`); // Realizar una solicitud GET para obtener clientes
        set({ customers: response.data }); // Actualizar el estado con los datos obtenidos
    },
    
    fetchVehicles: async () => {
        const response = await axios.get(`${apiUrl}/vehicles`); // Obtener vehículos
        set({ vehicles: response.data }); // Actualizar el estado con los datos de vehículos
    },
    
    fetchAppointments: async () => {
        const response = await axios.get(`${apiUrl}/appointments`); // Obtener citas
        set({ appointments: response.data }); // Actualizar el estado con los datos de citas
    },
    
    fetchPhones: async () => {
        const response = await axios.get(`${apiUrl}/phones`); // Obtener teléfonos
        set({ phones: response.data }); // Actualizar el estado con los datos de teléfonos
    },

    // Funciones para gestionar clientes
    updateCustomer: async (id, updatedCustomer) => {
        const response = await axios.put(`${apiUrl}/customers/${id}`, updatedCustomer); // Actualizar un cliente
        set((state) => ({
            customers: state.customers.map((customer) =>
                customer.id === id ? response.data : customer // Reemplazar el cliente actualizado en el estado
            ),
        }));
    },

    deleteCustomer: async (id) => {
        await axios.delete(`${apiUrl}/customers/${id}`); // Eliminar un cliente
        set((state) => ({
            customers: state.customers.filter((customer) => customer.id !== id), // Filtrar el cliente eliminado del estado
        }));
    },

    // Funciones para gestionar vehículos
    updateVehicle: async (id, updatedVehicle) => {
        const response = await axios.put(`${apiUrl}/vehicles/${id}`, updatedVehicle); // Actualizar un vehículo
        set((state) => ({
            vehicles: state.vehicles.map((vehicle) =>
                vehicle.id === id ? response.data : vehicle // Reemplazar el vehículo actualizado en el estado
            ),
        }));
    },

    deleteVehicle: async (id) => {
        await axios.delete(`${apiUrl}/vehicles/${id}`); // Eliminar un vehículo
        set((state) => ({
            vehicles: state.vehicles.filter((vehicle) => vehicle.id !== id), // Filtrar el vehículo eliminado del estado
        }));
    },

    // Funciones para gestionar citas
    updateAppointment: async (id, updatedAppointment) => {
        const response = await axios.put(`${apiUrl}/appointments/${id}`, updatedAppointment); // Actualizar una cita
        set((state) => ({
            appointments: state.appointments.map((appointment) =>
                appointment.id === id ? response.data : appointment // Reemplazar la cita actualizada en el estado
            ),
        }));
    },

    deleteAppointment: async (id) => {
        await axios.delete(`${apiUrl}/appointments/${id}`); // Eliminar una cita
        set((state) => ({
            appointments: state.appointments.filter((appointment) => appointment.id !== id), // Filtrar la cita eliminada del estado
        }));
    },

    // Funciones para gestionar teléfonos
    updatePhone: async (id, updatedPhone) => {
        const response = await axios.put(`${apiUrl}/phones/${id}`, updatedPhone); // Actualizar un teléfono
        set((state) => ({
            phones: state.phones.map((phone) =>
                phone.id === id ? response.data : phone // Reemplazar el teléfono actualizado en el estado
            ),
        }));
    },

    deletePhone: async (id) => {
        await axios.delete(`${apiUrl}/phones/${id}`); // Eliminar un teléfono
        set((state) => ({
            phones: state.phones.filter((phone) => phone.id !== id), // Filtrar el teléfono eliminado del estado
        }));
    },
}));

export default useStore; // Exportar el store para su uso en otros componentes