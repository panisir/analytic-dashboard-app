import axios from 'axios';

// Spring Boot uygulamanızın URL'i
const API_URL_USER_MANAGEMENT = process.env.REACT_APP_API_URL + '/api/v1/users';

export const getUsers = async () => {
    let users = [];
    try {
        const response = await axios.get(`${API_URL_USER_MANAGEMENT}`, {
            headers: {
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).access_token
            }
        });

        users = response.data ? response.data : [];
    } catch (error) {
        console.error('Error while fetching users', error);
    } finally {
        return users;

    }

};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};
