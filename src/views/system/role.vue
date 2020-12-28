<template>
    <div class="role">
        <Layout>
            <Header>
                <above/>
            </Header>
            <Layout style="position:absolute;top: 64px;bottom: 0px;left: 0px;right: 0px;">
                <Sider hide-trigger :style="{background: '#fff'}" >
                    <menuCheck active="2-3"/>
                </Sider>
                <Content>
                    <Card dis-hover style="height:100%">
                        <div>系统管理>角色管理</div>
                        <Row>
                            <Col span=6>
                                <Button  @click="newRole">新建角色</Button>
                            </Col>
                            <Col span="15">
                                <Input v-model="companySearch" placeholder="选择角色"/>
                            </Col>
                            <Col span="3">
                                <Button @click="search">查询</Button>
                            </Col>
                        </Row> 
                        <Table :data="data" :columns="columns">
                            <template slot-scope="{ row, index }" slot="action">
                                <Button type="text" size="small" @click="show(index)">查看</Button>
                                <Button type="text" size="small" @click="change(index)">分配用户</Button>
                            </template>     
                        </Table>
                    </Card>  
                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<script>
import above from '../../components/layout/above'
import menuCheck from '../../components/layout/menuCheck'
export default {
    components:{
        above,
        menuCheck,
    },
    data() {
        return {
            companySearch:'',//搜索栏输入的值
            state:'',//根据当前状态显示页面的位置
            columns: [//Todo写成和后台一样的
                {
                    title: '角色名称',
                    key: ''
                },
                {
                    title: '状态',
                    key: ''
                },
                {
                    title: '创建时间',
                    key: ''
                },
                {
                    title:'操作',
                    slot:'action',
                    align:'center'
                }
            ],
            data: [],//表格数据（随着分页而变化）
        };
    },
    computed: {
    },
    methods: {
        show(){
            //Todo 这里写转到查看公司详情页的方法
        },
        change(){
            //Todo 这里写转到修改公司详情页的方法
        },
        newRole(){
            //this.$router.push('/companyOperate')
            //Todo转到新建公司页
        },
        search(){
            //Todo搜索公司的方法
        },
        loadData() {//Todo这里的内容要根据接口改
        },
    //改变页码时的方法
    },
    created() {},
    mounted() {
        this.loadData();
    }
};
</script>

<style lang="scss" scoped>
    .role{
        height: 100%;
        width: 100%;
    }
</style>