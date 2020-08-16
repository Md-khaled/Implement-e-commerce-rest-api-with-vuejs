<template>
    <div>
       <div class="card m-auto w-50 ">
           <div class="card-header">
               <h2>User Login</h2>
           </div>
           <div class="card-body">
                <div class="form-group">
                    <label for="userEmail">Email</label>
                    <input type="email" v-model="user.email" class="form-control" id="userEmail"  placeholder="Enter email">
                    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                </div>
                <div class="form-group">
                    <label for="userpass">Password</label>
                    <input type="password" v-model="user.password" class="form-control" id="userpass" placeholder="Password">
                </div>
                <div class="float-left">
                 <router-link :to="{name:'Home'}" >Home</router-link>
                </div>
                <button type="submit" @click="userLogin()" class="btn btn-primary">Login</button>
                <div class="float-right">
                 <router-link :to="{name:'Registration'}" >Register</router-link>
                </div>
           </div>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            user:{email:null,password:null}
        }
    },
    methods:{
        userLogin(){
            axios.post('auth/login',{
                email:this.user.email ,
                password:this.user.password ,
            })
            .then((response)=>{
                localStorage.setItem('access_token',response.data.data.access_token);
                 this.$router.push({name:'Dashboard'})
                console.log(response);
            })
            .catch((error)=>{
                console.log(error);
            })
        }
    },
    mounted() {
        var access_token = localStorage.getItem('access_token');
        if(access_token){
             this.$router.push({name:'Dashboard'})
        }
    },
   
}
</script>