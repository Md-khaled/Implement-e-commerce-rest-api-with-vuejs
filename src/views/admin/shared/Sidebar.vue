<template>
  <div>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="../../index3.html" class="brand-link">
      <img src="../../../../node_modules/admin-lte/dist/img/AdminLTELogo.png"
           alt="AdminLTE Logo"
           class="brand-image img-circle elevation-3"
           style="opacity: .8">
      <span class="brand-text font-weight-light">AdminLTE 3</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="../../../../node_modules/admin-lte/dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Alexander Pierce</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
           <li class="nav-item">
           <router-link to="/dashboard" class="nav-link"> <i class="nav-icon fas fa-tachometer-alt"></i><p class="pl-2">Dashboard</p></router-link>
          </li>
          <li class="nav-item has-treeview ">
            <a href="#" class="nav-link active">
              <i class="fas fa-file"></i>
              <p class="pl-2">
                Category
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link :to="{name:'add-category'}" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Add Category</p>
               </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{name:'all-category'}" class="nav-link ">
                  <i class="far fa-circle nav-icon"></i>
                  <p>All Category</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
                <a href="#" class="nav-link active">
                  <i class="fas fa-file"></i>
                  <p class="pl-2">
                   Product
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <router-link :to="{name:'all-products'}" class="nav-link ">
                      <i class="far fa-circle nav-icon"></i>
                      <p>All Product</p>
                    </router-link>
                  </li>
                </ul>
              </li>
          <li class="nav-item">
           <router-link to="/logout" class="nav-link"> <i class="fas fa-power-off"></i><p class="pl-2">Log Out</p></router-link>
          </li>
          
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>

  </div>
</template>
<script>
// @ is an alias to /src

export default {
  mounted(){
   //$('[data-widget="treeview"]').Treeview('init');
}
}
</script>
<style scoped>
  
</style>