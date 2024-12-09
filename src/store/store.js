// src/store.js
import create from 'zustand';
import api from './api';

const apiUrl = process.env.REACT_APP_API_URL;

const useStore = create((set) => ({
    customers: [],
    vehicles: [],
    appointments: [],
    phones: [],
    
    // Fetching functions
    fetchCustomers: async () => {
        const response = await api.get(`${apiUrl}/customers`);
        set({ customers: response.data });
    },
    
    fetchVehicles: async () => {
        const response = await api.get(`${apiUrl}/vehicles`);
        set({ vehicles: response.data });
    },
    
    fetchAppointments: async () => {
        const response = await api.get(`${apiUrl}/appointments`);
        set({ appointments: response.data });
    },
    
    fetchPhones: async () => {
        const response = await api.get(`${apiUrl}/phones`);
        set({ phones: response.data });
    },

    // Customer functions
    updateCustomer: async (id, updatedCustomer) => {
        const response = await api.put(`${apiUrl}/customers/${id}`, updatedCustomer);
        set((state) => ({
            customers: state.customers.map((customer) =>
                customer.id === id ? response.data : customer
            ),
        }));
    },

    deleteCustomer: async (id) => {
        await api.delete(`${apiUrl}/customers/${id}`);
        set((state) => ({
            customers: state.customers.filter((customer) => customer.id !== id),
        }));
    },

    // Vehicle functions
    updateVehicle: async (id, updatedVehicle) => {
        const response = await api.put(`${apiUrl}/vehicles/${id}`, updatedVehicle);
        set((state) => ({
            vehicles: state.vehicles.map((vehicle) =>
                vehicle.id === id ? response.data : vehicle
            ),
        }));
    },

    deleteVehicle: async (id) => {
        await api.delete(`${apiUrl}/vehicles/${id}`);
        set((state) => ({
            vehicles: state.vehicles.filter((vehicle) => vehicle.id !== id),
        }));
    },

    // Appointment functions
    updateAppointment: async (id, updatedAppointment) => {
        const response = await api.put(`${apiUrl}/appointments/${id}`, updatedAppointment);
        set((state) => ({
            appointments: state.appointments.map((appointment) =>
                appointment.id === id ? response.data : appointment
            ),
        }));
    },

    deleteAppointment: async (id) => {
        await api.delete(`${apiUrl}/appointments/${id}`);
        set((state) => ({
            appointments: state.appointments.filter((appointment) => appointment.id !== id),
        }));
    },

    // Phone functions
    updatePhone: async (id, updatedPhone) => {
        const response = await api.put(`${apiUrl}/phones/${id}`, updatedPhone);
        set((state) => ({
            phones: state.phones.map((phone) =>
                phone.id === id ? response.data : phone
            ),
        }));
    },

    deletePhone: async (id) => {
        await api.delete(`${apiUrl}/phones/${id}`);
        set((state) => ({
            phones: state.phones.filter((phone) => phone.id !== id),
        }));
    },
}));

export default useStore;