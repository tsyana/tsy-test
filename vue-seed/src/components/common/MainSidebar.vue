<template>
    <aside class="main-sidebar">
        <section class="sidebar" style="height: auto;">
            <!-- Sidebar user panel -->
            <!-- search form -->
            <!-- /.search form -->
            <!-- sidebar menu: : style can be found in sidebar.less -->
            <ul class="sidebar-menu">
                <li class="header">MAIN NAVIGATION</li>
                <li class="active treeview" v-for="item in menuList" v-link-active>
                    <a v-link="{name:item.url,activeClass: 'active'}">
                        <i class="fa {{item.icon}}"></i> <span>{{item.name}}</span>
                        <span class="pull-right-container">
                          <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li v-for="child in item.son" v-link-active><a v-link="{name:child.url,activeClass: 'active'}"><i class="fa fa-circle-o"></i> {{child.name}}</a></li>
                    </ul>
                </li>
            </ul>
        </section>
    </aside>
</template>
<style scoped>
.treeview.active ul.treeview-menu {
    display: block;
}
</style>
<script>
export default {
    name: 'main-sidebar',
    ready: function() {
        //console.log("main sidebar is ready")
    },
    props: {
        menuList: []
    }
}
</script>
