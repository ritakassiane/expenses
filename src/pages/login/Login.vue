<template>
    <form @submit.prevent="doLogin()" class="form-login">
        <div class="card">
            <div class="card-header text-center">
                <h1 class="mb-0">Expenses</h1>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <input 
                    required
                    type="text" 
                    class="form-control" 
                    placeholder="email"
                    v-model="email"
                    >
                </div>
                <div class="form-group">
                    <input
                    required 
                    type="password" 
                    class="form-control" 
                    placeholder="Senha"
                    v-model="password"
                    >
                </div>
                <button class="btn btn-primary w-100"> 
                Entrar
                </button>
            </div>
        </div>
    </form>
</template>
<script>
export default {
    name: 'Login',
    data: () => {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        doLogin () { 
            this.$firebase.auth().signInWithEmailAndPassword()
        }
    }
}
</script>
<style lang="scss" scoped>
.form-login{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    .card {
        color: var(--darker);
        width: 25%;
    }
    h1 {
        font-size: 18pt;
    }
}
</style>