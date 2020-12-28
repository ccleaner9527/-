<template>
    <div class="company">
        <Layout>
            <Header>
                <above/>
            </Header>
            <Layout style="position:absolute;top: 64px;bottom: 0px;left: 0px;right: 0px;">
                <Sider hide-trigger :style="{background: '#fff',maxWidth:'320px',minWidth:'320px'}">
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
                                <Button type="text" size="small" @click="show(row,index)">查看</Button>
                                <Button type="text" size="small" @click="change(row,index)">修改</Button>
                            </template>
                            <Page
                            :total="total"
                            :current="page"
                            :page-size="10"
                            show-total
                            @on-change="pageChange"
                            slot="footer"
                            show-elevator
                            />      
                        </Table>
                    </Card>
                </Content>  
            </Layout>
        </Layout>
        <Modal v-model="delFlag" title="提示" @on-ok="delOk">
            <p>此操作将永久删除用户相关数据，是否确认删除？</p>
        </Modal>
        <Modal v-model="resetFlag" title="提示" @on-ok="resetOk">
            <p>确认重置密码？（默认密码为123456）</p>
        </Modal>
    </div>
</template>

<script>
import axios from '../../api/axios'
import above from '../../components/layout/above'
import menuCheck from '../../components/layout/menuCheck'
export default {
    components:{
        above,
        menuCheck,
    },
    data(){
        return{
            srow:'',
            index:'',
            total:'',
            page: 1,//默认为第一页
            companySearch:'',//搜索公司的字段
            data:[],//后台来的数据
            columns: [//Todo写成和后台一样的
                {
                    title: '公司名称',
                    key: 'comName'
                },
                {
                    title: '地区',
                    key: 'region'
                },
                {
                    title: '状态',
                    key: 'flag',
                    render:(h,params)=>{
                        let tmpStr = "";
                        if(params.row.flag==1){
                            tmpStr="启用";
                        }else if(params.row.flag==2){
                            tmpStr="禁用";
                        }
                        return h('span',tmpStr)
                    }
                },
                {
                    title:'操作',
                    slot:'action',
                    align:'center'
                }
            ],
        }
    },
    created(){
        this.getData(1);
    },
    methods: {
        newCompany(){
            this.$router.push('/companyOperate')
        },
        show(row,index){
            this.srow=row;
            this.index=index;
            console.log(this.srow,this.index)
            this.$router.push(
                {
                    path:'/companyOperate',
                    query:{data:this.srow,flag:true}
                }
            )
        },
        change(row,index){
            this.srow=row;
            this.index=index;
            console.log(this.srow,this.index)
            this.$router.push(
                {
                    path:'/companyOperate',
                    query:{data:this.srow,flag:false}
                }
            )
        },
        search(){
            this.getData(1);
            this.page=1;
        },
        leadIn(){
            //Todo批量导入的方法
        },
        getData(page){
            axios.axios({
                method:'post',
                url:'userinfo/companyList',
                data:{pageSize:10,currentPage:page,condition:{comName:this.companySearch}},
                headers:{'token':localStorage.getItem("token")}
            }).then((data)=>{
                this.total=data.data.total;
                this.data=data.data.data;
                console.log(data)
            });
        },
        pageChange(page) {
            this.page = page ;
            this.getData(page);
            console.log(this.page);
        },
    },
}
</script>

<style lang="scss" scoped>
    .user{
        height: 100%;
        width: 100%;
    }
</style>