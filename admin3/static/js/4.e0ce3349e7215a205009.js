webpackJsonp([4],{"3BbJ":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{title:"简单的列表",tableOption:{tableColumn:[{prop:"name",label:"姓名"},{prop:"status",label:"状态"},{prop:"address",label:"描述",minWidth:"150"},{prop:"date",label:"日期",minWidth:"200"}],tableData:[{id:1,name:"张三",status:1,address:"我是描述",date:"2022-01-01"},{id:2,name:"李四",status:2,address:"我是描述2",date:"2022-01-02"}],page:{currentPage:1,pageSize:10,total:20}}}},methods:{handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){console.log("当前页: "+e)}},created:function(){}},r={render:function(){var e=this.$createElement;return(this._self._c||e)("h-crud",{attrs:{title:this.title,"table-option":this.tableOption},on:{"size-change":this.handleSizeChange,"current-change":this.handleCurrentChange}})},staticRenderFns:[]};var i=a("C7Lr")(n,r,!1,function(e){a("5sK5")},"data-v-c7b8a080",null);t.default=i.exports},"5sK5":function(e,t){}});