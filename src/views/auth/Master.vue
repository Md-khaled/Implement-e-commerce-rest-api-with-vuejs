<template>
    <div>
        <div class="container">
            <h2>Authentication</h2>
                <router-view></router-view>
        </div>
    </div>
</template>
<script>

export default {

    mounted() {
       let access_token = localStorage.getItem('access_token');
        if(access_token){
             this.$router.push({name:'Dashboard'})
        }
    },
    
}
</script>