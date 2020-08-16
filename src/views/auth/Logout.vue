<template>
    <div>
        <h2>Log out succefully</h2>
    </div>
</template>
<script>
export default {
    created(){
        localStorage.removeItem('access_token');
        this.$router.push({name:'Home'})
    }
}
</script>