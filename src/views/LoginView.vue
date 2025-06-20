<template>
    <div class="d-flex justify-content-center align-items-center min-vh-100">
    <AppCard>
        <h2>Login</h2>
        <form @submit.prevent="login">
            <div class="form-group">
                <input id="username" v-model="username" placeholder="Enter username" />
            </div>
            <div class="form-group">
                <input id="password" type="password" v-model="password" placeholder="Enter password" />
            </div>
            <button type="submit">Login</button>
        </form>
    </AppCard>
    </div>
</template>

<script>
import AppCard from '@/components/AppCard.vue';

const endpoint = 'http://localhost:3000'

export default {
    name: 'LoginView',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        async login() {
            if (!this.username || !this.password) {
                alert('Please enter both username and password');
                return;
            }
            if (this.username.length < 3 || this.password.length < 3) {
                alert('Username and password must be at least 3 characters long');
                return;
            }
            const data = await this.sendRequestLogin();
            this.saveToken(data.token);
        },
        saveToken(token) {
            if (!token) {
                console.error('No token provided');
                return;
            }
            if (typeof token !== 'string' || token.length === 0) {
                console.error('Invalid token received:', token);
                alert('Login failed. Please check your credentials.');
                return;
            }
            sessionStorage.setItem('token', token);
        },
        async sendRequestLogin() {
            try {
                const response = await this.fetchLogin();
                if (!response || !response.token) {
                    throw new Error('Invalid response from server');
                }
                return await response.json();
            } catch (error) {
                console.error('Error during login:', error);
                alert('Login failed. Please try again later.');
            }
        },
        async fetchLogin() {
            const url = `${endpoint}/api/login`;
            const headers = {
                'Content-Type': 'application/json'
            };
            const body = JSON.stringify({
                username: this.username,
                password: this.password
            });

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: headers,
                    body: body
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response;
            } catch (error) {
                console.error('Fetch error:', error);
                alert('Login failed. Please check your network connection.');
            }
        }
    },
    components: {
        AppCard
    }
}
</script>

<style>

.form-group {
    margin-bottom: 1rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
}

input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 3px;
}

button {
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-radius: 3px;
    background-color: #007BFF;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>