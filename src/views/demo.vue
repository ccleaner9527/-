<template>
    <div class="allList.vue">
        <Layout style="height:73px;background-color:#077AF0">
            <Header style="height:'100%';background-color:#077AF0">
                <above/>
            </Header>
            <Layout style="position:absolute;top: 73px;bottom: 0px;left: 0px;right: 0px;">
                <Sider hide-trigger :style="{background: '#fff',maxWidth:'320px',minWidth:'320px'}">
                    <menuCheck v-show="role===1"/>
                    <menuRequire v-show="role===2"/>
                    <menuAccept v-show="role===3"/>
                </Sider>
                <Content :style="{padding: '0 18px 18px'}">
                    <div class="title" style="height:64px;line-height:64px;font-size:18px">工单管理>全部工单</div>
                    <Card dis-hover style="height:73px; width:1563px;">
                        <Form  :model="formInline" inline >
                            <span style="font-size:16px;">关键字</span>
                            <FormItem style="margin-left:9px;">
                                <Input v-model="form.keyWord" Icon type="ios-search" placeholder="工单编号/工单标题搜索" style="width:256px;height:37px"/>
                            </FormItem>
                            <span style="font-size:16px; margin-left:91px">发布时间</span>
                            <FromItem style="margin-left:9px">
                                <DatePicker type="datetime" placeholder="请选择开始时间" v-model="startTime" format="yyyy-MM-dd HH:mm" style="width:201px;height:37px"/>
                                <DatePicker type="datetime" placeholder="请选择结束时间" v-model="finishTime" format="yyyy-MM-dd HH:mm" style="margin-left:9px;width:201px;height:37px"/>
                            </FromItem>
                            <span style="font-size:16px;margin-left:101px">状态</span>
                            <FormItem style="margin-left:9px">
                                <Select v-model="form.searchStatus" placeholder="选择工单状态" style="width:256px">
                                    <Option :value="0">全部</Option>
                                    <Option :value="1">待办</Option>
                                    <Option :value="2">已办</Option>
                                    <Option :value="3">超时</Option>
                                </Select>
                            </FormItem>
                            <FromItem style="margin-left:119px">
                                <Button type="primary" icon="ios-search" @click="check">筛选</Button>
                            </FromItem>
                        </Form>
                    </Card>
                    <Card dis-hover style="height:745px;width:1563px;margin-top:18px">
                        <div class="buttonGroup">
                            <Button type="primary" @click="settle()" style="width:101px;height:37px">结算</Button>
                            <Button @click="download()" style="width:101px;height:37px;margin-left:18px">下载</Button>
                            <Button @click="Del()" style="width:101px;height:37px;margin-left:18px">删除</Button>
                        </div>
                        <Table 
                        :data="data" 
                        :columns="columns" 
                        @on-select="handleSelect"
                        @on-select-all="handleSelectAll"
                        @on-select-all-cancel="handleCancelSelectAll" 
                        @on-select-cancel="handleCancel"
                        ref="selection"
                        style="margin-top:18px;font-size:16px">
                        </Table>
                        <div class="page" style="margin-top:10px">
                            <Page 
                            @on-change="pageChange"
                            :total="total"
                            :page-size="pagesize"
                            show-elevator
                            style="margin-left:1164px" />
                        </div>
                    </Card>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<script>
import above from '../components/layout/above'
import menuCheck from '../components/layout/menuCheck.vue';
import menuRequire from '../components/layout/menuRequire.vue';
import menuAccept from '../components/layout/menuAccept.vue';
export default {
    components: { 
        menuCheck,
        above,
        menuRequire,
        menuAccept 
    },
    data(){
        return{
            data:[],
            startTime:'',
            finishTime:'',
            role:1,//判断当前的角色显示对应页边栏1审核2需求3支撑
            listState:'',//左上角的工单状态
            form:{//搜索栏和工单状态的下拉菜单
                keyWord:'',
                searchStates:'',
            },
            page:1,
            pageSize:10,
            total:0,
            selected:[],//这个是所有已选项的数组
            curPageSelected:[],//这个是当页已选的数组
            columns:[//Todo 这里的key写成和后台一样的
                {
                    type:'selection',
                    align:'center'
                },
                {
                    title:'工单编号',
                    key:'orderCode',
                },
                {
                    title: '状态',
                    key: 'stateTemp',
                    render:(h,params)=>{
                        return h('span',{
                            style:{
                                color: (params.row.stateTemp=="超时")?"#ff9900":"#2d2d2d"
                            }
                        },params.row.stateTemp)
                    }
                },
                {
                    title:'工单标题',
                    key:'orderName',
                },
                {
                    title:'发布时间',
                    key:'createTimeStr',
                },
                {
                    title:'发起人',
                    key:'createName',
                },
                {
                    title:'审核人',
                    key:'auditorName',
                },{
                    title:'支撑接口人',
                    key:'supportName',
                },
                {
                    title:'审核意见',
                    key:'proposalContent',
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
    .allList{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height: 100%;
        width: 100%;
    }
</style>