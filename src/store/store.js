// src/store.js
import axios from 'axios';
import { create } from 'zustand';

const apiUrl = process.env.REACT_APP_API_URL;

const useStore = create((set) => ({
    customers: [],
    vehicles: [],
    appointments: [],
    phones: [],
    
    // Fetching functions
    fetchCustomers: async () => {
        const response = await axios.get(`${apiUrl}/customers`);
        set({ customers: response.data });
    },
    
    fetchVehicles: async () => {
        const response = await axios.get(`${apiUrl}/vehicles`);
        set({ vehicles: response.data });
    },
    
    fetchAppointments: async () => {
        const response = await axios.get(`${apiUrl}/appointments`);
        set({ appointments: response.data });
    },
    
    fetchPhones: async () => {
        const response = await axios.get(`${apiUrl}/phones`);
        set({ phones: response.data });
    },

    // Customer functions
    updateCustomer: async (id, updatedCustomer) => {
        const response = await axios.put(`${apiUrl}/customers/${id}`, updatedCustomer);
        set((state) => ({
            customers: state.customers.map((customer) =>
                customer.id === id ? response.data : customer
            ),
        }));
    },

    deleteCustomer: async (id) => {
        await axios.delete(`${apiUrl}/customers/${id}`);
        set((state) => ({
            customers: state.customers.filter((customer) => customer.id !== id),
        }));
    },

    // Vehicle functions
    updateVehicle: async (id, updatedVehicle) => {
        const response = await axios.put(`${apiUrl}/vehicles/${id}`, updatedVehicle);
        set((state) => ({
            vehicles: state.vehicles.map((vehicle) =>
                vehicle.id === id ? response.data : vehicle
            ),
        }));
    },

    deleteVehicle: async (id) => {
        await axios.delete(`${apiUrl}/vehicles/${id}`);
        set((state) => ({
            vehicles: state.vehicles.filter((vehicle) => vehicle.id !== id),
        }));
    },

    // Appointment functions
    updateAppointment: async (id, updatedAppointment) => {
        const response = await axios.put(`${apiUrl}/appointments/${id}`, updatedAppointment);
        set((state) => ({
            appointments: state.appointments.map((appointment) =>
                appointment.id === id ? response.data : appointment
            ),
        }));
    },

    deleteAppointment: async (id) => {
        await axios.delete(`${apiUrl}/appointments/${id}`);
        set((state) => ({
            appointments: state.appointments.filter((appointment) => appointment.id !== id),
        }));
    },

    // Phone functions
    updatePhone: async (id, updatedPhone) => {
        const response = await axios.put(`${apiUrl}/phones/${id}`, updatedPhone);
        set((state) => ({
            phones: state.phones.map((phone) =>
                phone.id === id ? response.data : phone
            ),
        }));
    },

    deletePhone: async (id) => {
        await axios.delete(`${apiUrl}/phones/${id}`);
        set((state) => ({
            phones: state.phones.filter((phone) => phone.id !== id),
        }));
    },
}));

export default useStore;