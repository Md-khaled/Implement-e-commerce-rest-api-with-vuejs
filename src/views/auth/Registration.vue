<template>
    <div>
       <div class="card m-auto w-50">
           <div class="card-header">
               <h2>User Register</h2>
           </div>
           <div class="card-body">
                <div class="form-group">
                    <label for="Name">Name</label>
                    <input type="text"  v-model="user.name" class="form-control" id="Name"  placeholder="Enter Name">
                </div>
                <div class="form-group">
                    <label for="Email">Email address</label>
                    <input type="email" v-model="user.email" class="form-control" id="Email" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="Pass">Password</label>
                    <input type="password" v-model="user.password" class="form-control" id="Pass" placeholder="Password">
                </div>
               <div class="form-group">
                    <label for="Passc">Confirmed Password</label>
                    <input type="password" v-model="user.c_password" class="form-control" id="Passc" placeholder="Confirmed Password">
                </div>
                <button type="submit" @click="userRegister()" class="btn btn-primary">Register</button>
                <div class="float-right">
                    <router-link :to="{name:'Login'}" >Login</router-link>
                </div>
           </div>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            user:{name:null,email:null,password:null,c_password:null}
        }
    },
    methods:{
        userRegister(){
            axios.post('auth/register',{
                name:this.user.name ,
                email:this.user.email ,
                password:this.user.password ,
                c_password:this.user.c_password ,
            })
            .then((response)=>{
                localStorage.setItem('access_token',response.data.access_token);
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
