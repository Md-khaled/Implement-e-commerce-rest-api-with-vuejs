<template>
    <div>
        <h2 class="text-center mb-3">All Categories</h2>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Sn</th>
                    <th scope="col">Category Name</th>
                    <th scope="col">Category Description</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(category, index) in categories" v-bind:key="category.id" >
                    <th scope="row">{{index+1}}</th>
                    <td>{{category.category_name}}</td>
                    <td>{{category.category_description}}</td>
                    <td>{{category.created_at}}</td>
                    <td>
                        <div class="btn-group">
                            <router-link :to="{name: 'edit-category', params:{category_id: category.id}}" class="btn btn-outline-warning">Edit</router-link>
                            <button @click="deleteCategory(category.id)" class="btn btn-outline-danger">Delete</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data(){
        return{
            categories:[],
        }
    },
    methods:{
        get_all_categories(){
            axios.get('/admin/category')
            .then(response =>{
                this.categories = response.data;
                //console.log(response);
            })
        },
        deleteCategory(category_id){
            let ref=this;
             iziToast.question({
                    timeout: 20000,
                    close: false,
                    overlay: true,
                    displayMode:'once',
                    id:'question',
                    zindex:999,
                    title:'Hey',
                    message:'Are you sure to delete that?',
                    position:'center',
                    buttons:[
                    ['<button><b>Yes</b></button>',function(instance,toast) {
                        instance.hide({transitionOut:'fadeOut'},toast,'button');
                        axios.delete('/admin/category/'+category_id)
                            .then(response=>{
                                ref.get_all_categories();
                                iziToast.warning({
                                    title: 'Warning',
                                    message: response.data.success,
                                });
                                // console.log(res);
                            })
                    },true],
                    ['<button><b>Cancel</b></button>',function(instance,toast) {
                        instance.hide({transitionOut:'fadeOut'},toast,'button');
                    }],
                    ],
                    onClosing:function(instance,toast,closedBy) {
                        console.info('closing|closedBy:'+closedBy)
                    },
                    onClosed:function(instance,toast,closedBy) {
                        console.info('closed|closedBy:'+closedBy)
                    },

                });
            
        }
    },
   mounted() {
       this.get_all_categories();
   },
}
</script>