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
                <button class="btn btn-primary w-100" :disabled='loading'> 
                    <template v-if="loading">
                        Entrando
                        <i class="fa fa-spinner fa-spin"></i>
                    </template>
                    <template v-else>                    
                        Entrar
                        <i class="fa fa-sign-in-alt"></i>
                    </template>
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
            loading: false,
            email: 'rita@admin.com',
            password: '123456789'
        }
    },
    methods: {
        async doLogin () { 
            this.loading = true
            const { email, password } = this // const email = this.email 
            try {
                console.log(this.$firebase.auth)
              const res =  await this.$firebase.auth().signInWithEmailAndPassword(email, password)
              console.log(res)

              window.uid = res.user.uid // Window é variavel mais alto nivel do JS, quando o uid esta vazio, significa que o usuario n ta logado. Portanto, 
            //   this.$router.push({ name: 'home' })
            }catch (err) {
                console.log(err)
            }

            this.loading = false
        }
    },
    // Antes da rota chamada rolar
    beforeRouteEnter(to, from, next ) {
        next(vm => {
            if (window.uid){
                vm.$router.push( { name: 'home' } )
            }
        })

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