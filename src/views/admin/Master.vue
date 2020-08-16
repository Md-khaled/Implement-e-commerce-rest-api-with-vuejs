<template>
<body class="hold-transition sidebar-mini layout-fixed">
<!-- Site wrapper -->
<div class="wrapper">
  <!-- Navbar -->
<navbar></navbar>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <Sidebar></Sidebar>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Blank Page</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Blank Page</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
   <div class="content">
      <div class="container-fluid">
        <router-view></router-view>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

  <Footer></Footer>
</div>
<!-- ./wrapper -->

 <!-- Scripts -->
</body>
</html>

</template>
<script>
// @ is an alias to /src
// @ is an alias to /src
//require('admin-lte');
import('../../../node_modules/admin-lte/dist/css/adminlte.min.css');
import('../../../node_modules/admin-lte/dist/js/adminlte.js');
import('../../../node_modules/admin-lte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css');
import('../../../node_modules/admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js');
import('../../../node_modules/admin-lte/plugins/fontawesome-free/css/all.css');

import Sidebar from './shared/Sidebar.vue';
import Navbar from './shared/Navbar.vue';
import Footer from './shared/Footer.vue';
export default {
	components:{
    	Sidebar:Sidebar,
    	navbar:Navbar,
    	Footer:Footer,
  	},
  	mounted() {
        let access_token = localStorage.getItem('access_token');
        if(!access_token){
             this.$router.push({name:'Login'})
        }
    },
   
}
</script>
<style scoped>
	
</style>