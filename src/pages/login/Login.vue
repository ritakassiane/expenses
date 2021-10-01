<template>

    <form action="" class="form-login">
        <div class="card">
            <div class="card-header text-center">
                <h1 class="mb-0">Expenses</h1>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="email">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Senhas">
                </div>
                <button class="btn btn-primary w-100"> 
                Enviar
                </button>
            </div>
        </div>
    </form>
</template>
<script>
export default {
    
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
        width: 35%;
    }
}
</style>