<template>
    <div class="wrapper">
        <main-header></main-header>
        <main-sidebar :menu-list="menuList"></main-sidebar>
        <div class="content-wrapper">
            <section class="content">
                <router-view></router-view>
            </section>
        </div>
    </div>
</template>
<script>
import MainHeader from './components/common/MainHeader'
import MainSidebar from './components/common/MainSidebar'
export default {
    name: 'app',
    components: {
        MainHeader,
        MainSidebar
    },
    data: function() {
        return {
            menuList: [{
                name: "page1",
                id: "1",
                url: "page1",
                icon: "fa-pie-chart",
                son: [{
                    name: "child1 in page1",
                    id: "3",
                    url: "page1-child1",
                    son: []
                }]
            }, {
                name: "page2",
                id: "2",
                url: "page2",
                icon: "fa-laptop",
                son: []
            }]
        }
    }
}
</script>
<style lang="less">
.wrapper {
    min-height: 600px;
}

.sidebar-menu li.active>a>.fa-angle-left,
.sidebar-menu li.active>a>.pull-right-container>.fa-angle-left {
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg)
}
</style>
