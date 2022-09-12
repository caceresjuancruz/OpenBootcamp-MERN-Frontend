import axios from '../utils/config/axios.config';

/**
 * Login Method
 * @param {string} email Email to login a user
 * @param {string} password Password to login a user
 * @returns 
 */
export const login = (email: string, password: string) => {

    let body = {
        email, password
    };

    // Send POST request to login endpoint
    return axios.post('/auth/login', body);
}

/**
 * Register Method
 * @param {string} name Name of user
 * @param {string} email Email of user
 * @param {number} age Age of user
 * @param {string} password Password of user 
 * @returns 
 */
export const register = (name: string, email: string, age: number, password: string) => {

    let body = {
        name, email, age, password
    };

    // Send POST request to register endpoint
    return axios.post('/auth/register', body);
}