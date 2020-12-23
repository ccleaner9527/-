<template>
    <div class="details">
        <Layout>
            <Header>
                <above/>
            </Header>
            <Layout style="position:absolute;top: 64px;bottom: 0px;left: 0px;right: 0px;">
                <Sider hide-trigger :style="{background: '#fff'}">
                    <!-- 根据roll显示页边栏 1需求 2审核 3支撑 -->
                    <menuRequire v-if="roll===1"/>
                    <menuCheck v-if="roll===2"/>
                    <menuAccept v-if="roll===3"/>
                </Sider>
                <Content>
                    <Row class="head" :gutter="16">
                        <Col span="4">工单状态:{{state}}</Col>
                        <Col span="4">需求发起人:{{aquireName}}</Col>
                        <Col span="4">审核人:{{checkName}}</Col>
                        <Col span="4">支撑接口人:{{supportName}}</Col>
                        <Col>
                            <Button @click="back()">关闭</Button>
                        </Col>
                    </Row>
                    <Divider/>
                    <Row class="title">
                        <Col span="18">湖北武汉移动政企信息化IT技术支撑服务项目</Col>
                        <Col span="4">
                            <Button disabled v-if="roll===1">修改</Button>
                            <Button :disabled="ispoint" @click="point()" v-if="roll===1">打分</Button>
                            <Button :disabled="isCheck" @click="check()" v-if="roll===2">审核</Button>
                            <Button disabled v-if="roll===2">结算</Button>
                            <Button  disabled v-if="roll===3">受理</Button>
                            <Button  disabled v-if="roll===3">需协作</Button>
                            <Button :disabled="isSettle3" @click="settle3" v-if="roll===3">结算</Button>
                        </Col>
                    </Row>
                    <Divider/>
                    <div class="form">
                        <div class="left">需求发起人：{{aquireName}}</div>
                        <div class="right">手机号：{{phoneNumber}}</div>
                        <div class="left">工单编号：{{listNumber}}</div>
                        <div class="right">创建时间：{{setupTime}}</div>
                        <div class="left">需求开始时间：{{beginDate}}</div>
                        <div class="right">需求结束时间：{{endDate}}</div>
                        <div class="left">所在区域：{{area}}</div>
                        <div class="right">项目预估金额：{{cost}}</div>
                        <div class="des">需求内容描述:</div>
                        <div class="card">
                            <Card dis-hover>
                                <div>{{description}}</div>
                            </Card>
                        </div>
                        <div class="attach">附件:</div>
                        <!--Todo 这里写下载附件的方法-->
                        <div class="check">审核意见:{{opinion}}</div>
                    </div>
                </Content>
            </Layout>
        </Layout>
        <point :pointFlag="pointFlag" @disable="change($event)"/>
        <settle :state1="state1" :state2="state2"/>
    </div>
</template>

<script>
import above from '../components/layout/above'
import menuCheck from '../components/layout/menuCheck'
import menuRequire from '../components/layout/menuRequire.vue'
import menuAccept from '../components/layout/menuAccept.vue'
import settle from '../components/modals/settle.vue'
import Point from '../components/modals/point.vue'
export default {
  components: { 
        menuAccept,
        menuRequire,
        menuCheck,
        settle,
        above,
        Point,
    },
    methods:{
        change(flag){
            this.pointFlag=flag;
        },
        back(){
            this.$router.push(-1)
        },
        point(){
            this.pointFlag=true;
            //Todo 弹出打分对话框
        },
        check(){
            //弹出审核对话框
            this.state1=true;
        },
        settle3(){
            //弹出结算对话框
            this.state2=true;
        }
    },
    data(){
        return{
            pointFlag:false,
            state1:false,
            state2:false,
            state:'',//工单状态
            aquireName:'',//需求发起人姓名
            checkName:'',//审核人姓名
            phoneNumber:'',//需求发起人手机号
            listNumber:'',//工单编号
            setupTime:'',//工单创建时间
            beginDate:'',//开始时间
            endDate:'',//结束时间
            area:'',//所在区域
            cost:'',//预期花费
            description:'',//工单详情
            opinion:'',//审核人意见
            roll:this.$store.state.role,//角色
            //这组是控制相应的按钮是否可用，true是不可用
            isModify:true,//修改工单
            isCheck:true,//审核
            //Todo 这里写从其它组件穿过来的值。
        }
    }
}
</script>

<style lang="scss" scoped>
    .details{
        .form{
            .left{
                text-align: left;
                width: 30%;
                margin-left: 20%;
                display:inline-block;
            }
            .des{
                float: left;
                text-align: left;
                display: inline-block;
                width: auto;
                vertical-align: top;
                margin-left:20%; ;
            }
            .right{
                text-align: left;
                width: 40%;
                margin-left: 10%;
                display:inline-block;
            }
            .card{
                float: left;
                width:50%;
                word-break:break-all;
                display:inline-block;
            }
            .attach{
                margin-left:20% ;
                width: auto;
                text-align: left;
                clear: left;
            }
            .check{
                clear: left;
                margin-left:20% ;
                width: auto;
                text-align: left;
            }
        }
    }
</style>

<style lang="scss" scoped>
    .detailsDone{
        height: 100%;
        width: 100%;
    }
</style>