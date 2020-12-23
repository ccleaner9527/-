<template>
    <div class="userOperate">
        <Layout>
            <Header>
                <above/>
            </Header>
            <Layout style="position:absolute;top: 64px;bottom: 0px;left: 0px;right: 0px;">
                <Sider hide-trigger :style="{background: '#fff'}">
                    <menuCheck active="2-2"/>
                </Sider>
                <Content>
                    <Row>系统管理>用户管理</Row>
                    <Card dis-hover style="height:100%">
                        <Icon type="ios-create" size="48"/>
                        <Row>请填写用户信息</Row>
                        <Row class="listFile">
                            <Col span="4" offset="10">
                                <Form ref="newData" :model="newData" :label-width="120" :rules="ruleValidate">
                                    <FormItem label="用户姓名" prop="userName">
                                        <Input v-model="newData.userName" placeholder="请输入用户姓名"></Input>
                                    </FormItem>
                                    <FormItem label="所在区域" prop="city">
                                        <Row type="flex" justify="space-between">
                                            <Col span="11">
                                                <Select v-model="newData.city">
                                                    <Option value="武汉">武汉</Option>
                                                </Select>
                                            </Col>
                                            <Col span="11">
                                                <Select v-model="newData.area">
                                                    <Option v-for="item in newData.arealist" :value="item.value" :key="item.value">{{item.lable}}</option>
                                                </Select>
                                            </Col>
                                        </Row>
                                    </FormItem>
                                    <FormItem label="手机号" prop="phoneNumber">
                                        <Input v-model="newData.phoneNumber" placeholder="请输入手机号码"></Input>
                                    </FormItem>
                                    <FormItem label="用户角色" prop="userState">
                                        <Select v-model="userState" placeholder="请选择选择角色">
                                            <Option :value="1">需求发起人</Option>
                                            <Option :value="2">支撑接口人</Option>
                                        </Select>
                                    </FormItem>
                                    <FormItem label="所属公司" prop="userCompany">
                                        <Select v-model="newData.userCompany" placeholder="请选择公司">
                                            <Option v-for="item in companyList" :value="item.value" :key="item.value">{{item.label}}</Option>
                                        </Select>
                                    </FormItem>
                                    <FormItem label="是否启用" >
                                        <i-switch v-model="newData.switch1" @on-change="change" />
                                    </FormItem>
                                    <FormItem>
                                        <Button type="primary" @click="submit('newData')">提交</Button>
                                    </FormItem>
                                </Form>
                            </Col>
                        </Row>
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
    data(){
        return{
            newData:{
                userName:'',
                area:'',
                phoneNumber:'',
                userState:1,
                userCompany:'',
                switch1:false,
                city:[
                    {
                        value:'江岸区',
                        lable:'江岸区'
                    },
                    {
                        value:'江汉区',
                        lable:'江汉区'
                    },
                    {
                        value:'硚口区',
                        lable:'硚口区'
                    },
                    {
                        value:'汉阳区',
                        lable:'汉阳区'
                    },
                    {
                        value:'武昌区',
                        lable:'武昌区'
                    },
                    {
                        value:'青山区',
                        lable:'青山区'
                    },
                    {
                        value:'洪山区',
                        lable:'洪山区'
                    },
                    {
                        value:'东西湖区',
                        lable:'东西湖区'
                    },
                    {
                        value:'汉南区',
                        lable:'汉南区'
                    },
                    {
                        value:'蔡甸区',
                        lable:'蔡甸区'
                    },
                    {
                        value:'江夏区',
                        lable:'江夏区'
                    },
                    {
                        value:'黄陂区',
                        lable:'黄陂区'
                    },
                    {
                        value:'新洲区',
                        lable:'新洲区'
                    },
                ],
            },
            companyList:[],//公司列表，从后台来
            ruleValidate: {
                phoneNumber: [
                        { required: true,message: '请输入手机号码',  trigger: 'blur' }
                ],
                city: [
                        { required: true,message: '请选择所在区域',  trigger: 'change' }
                ],
                userName: [
                        { required: true,message: '请输入用户名称',  trigger: 'blur' }
                ],
                userState: [
                        { required: true,message: '请选择用户角色',  trigger: 'change' }
                ],
                userCompany: [
                        { required: true,message: '请选择用户公司',  trigger: 'change' }
                ],
            }
        }
    },
    methods:{
        change(status){
            this.newData.switch1=status
        },
        submit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    //Todo 这里写新建和修改用户的方法
                    this.flag1=true;
                } 
            });
            //Todo下面是两个成功对话框，根据入口是新建还是更新择一显示
            this.$Modal.success({
                title: "提示",
                content: "提交成功"
            });//这里是创建一个成功对话框
            this.$Modal.success({
                title: "提示",
                content: "更新成功"
            });//这里是创建一个成功对话框
        },
    }
}
</script>

<style lang="scss" scoped>
    .userOperate{
        height: 100%;
        width: 100%;
    }
</style>