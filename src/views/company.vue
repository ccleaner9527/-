<template>
    <div class="company">
        <Layout>
            <Header>
                <above/>
            </Header>
            <Layout style="position:absolute;top: 64px;bottom: 0px;left: 0px;right: 0px;">
                <Sider hide-trigger :style="{background: '#fff'}">
                    <menuCheck active="2-1"/>
                </Sider>
                <Content>
                    <div>系统管理>公司管理</div>
                    <Card dis-hover style="height:100%">
                        <Row>
                            <Col span=6>
                                <Button type="text" @click="newCompany">新建公司</Button>
                                <Poptip trigger="hover" content="批量导入数据">
                                    <Button icon="ios-open-outline" @click="leadIn" />
                                </Poptip>
                            </Col>
                            <Col span="15">
                                <Input v-model="companySearch" placeholder="公司名称"/>
                            </Col>
                            <Col span="3">
                                <Button @click="search">查询</Button>
                            </Col>
                        </Row> 
                        <Table :data="data" :columns="columns">
                            <template slot-scope="{ row, index }" slot="action">
                                <Button type="text" size="small" @click="show(index)">查看</Button>
                                <Button type="text" size="small" @click="change(index)">修改</Button>
                            </template>
                        <Page
                        :total="progressData.length"
                        :current="page"
                        :page-size="10"
                        show-total
                        @on-change="handlerPage"
                        slot="footer"
                        show-elevator
                        />      
                        </Table>
                    </Card>  
                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<script>
import above from '../components/layout/above'
import menuCheck from '../components/layout/menuCheck'
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
                    title: '公司名称',
                    key: ''
                },
                {
                    title: '支撑接口人',
                    key: ''
                },
                {
                    title: '状态',
                    key: ''
                },
                {
                    title:'操作',
                    slot:'action',
                    align:'center'
                }
            ],
            progressData: [],//调用接口获取数据
            data: [],//表格数据（随着分页而变化）
            page: 1//默认为第一页
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
        leadIn(){
            //Todo批量导入的方法
        },
        newCompany(){
            this.$router.push('/companyOperate')
            //Todo转到新建公司页
        },
        search(){
            //Todo搜索公司的方法
        },
        loadData() {//Todo这里的内容要根据接口改
        },
    //改变页码时的方法
        handlerPage(page) {
            this.changeData(page);
        },
    //修改数据
        changeData(page) {
            this.page = page;
            if (this.progressData.length > 10) {
                this.data = this.progressData.slice((page - 1) * 10, page * 10);
            } else {
                this.data = this.progressData;
            }
        }
    },
    created() {},
    mounted() {
        this.loadData();
    }
};
</script>

<style lang="scss" scoped>
    .company{
        height: 100%;
        width: 100%;
    }
</style>