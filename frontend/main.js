const { createApp } = Vue;

createApp({
    data() {
        return {
            message: "Hello from Vue!",
            name: "",
            response: ""
        }
    },
    methods: {
        async sendData() {
            const res = await fetch('http://127.0.0.1:5000/api/data', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: this.name })
            });
            const data = await res.json();
            localStorage.setItem("userData", JSON.stringify(data));
            window.location.href = "output.html";
            this.response = data.message;
        }
    }
}).mount('#app')
