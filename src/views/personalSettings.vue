<template>
    <div class="personalSettings">
        <div>个人设置>{{msg}}</div>
        <Card dis-hover>
            <Tabs :animated="false">
                <TabPane label="个人中心" name="center">
                    <div class="perCenter">
                        <img><!--头像-->
                        <div class="userName">{{userName}}</div>
                        <Form label-position="left" :label-width="80">
                            <FormItem label="登录账号">{{account}}</FormItem>
                            <FormItem label="用户姓名">
                                <Input v-model="userName"/>
                            </FormItem>
                            <FormItem label="手机">
                                <Input v-model="phoneNumber"/>
                            </FormItem>
                            <FormItem>
                                <Button type="primary" @click="submit()">提交</Button>
                            </FormItem>
                        </Form>
                    </div>
                </TabPane>
                <TabPane label="修改密码" name="password">
                    <div class="pwdChange">
                    <img><!--头像-->
                    <div class="userName">{{userName}}</div>
                        <Form :model="formItem" v-model="formItem.id" ref="formItem"  :rules="validateRules" :label-width="110" label-position="left">
                            <FormItem label="登录账号">{{account}}</FormItem>
                            <FormItem label="请输入新密码" prop="password">
                                <Input maxlength="16" minlength="6" οnkeyup="this.value=this.value.replace(/[^\w]/g,'')" οnpaste="this.value=this.value.replace(/[^\w]/g,'')" v-model="formItem.password"/>
                                <div class="newpassword">6-16位,仅允许数字\下划线\字母组合</div>
                            </FormItem>
                            <FormItem label="确认密码" prop="pwdCheck">
                                <Input maxlength="16" minlength="6" οnkeyup="this.value=this.value.replace(/[^\w]/g,'')" οnpaste="this.value=this.value.replace(/[^\w]/g,'')" v-model="formItem.pwdCheck"/>
                                <div class="newpassword2">6-16位,仅允许数字\下划线\字母组合</div>
                            </FormItem>
                            <FormItem>
                                <Button type="primary" @click="submit1()">提交</Button>
                            </FormItem>
                        </Form>
                    </div>
                </TabPane>
            </Tabs>
        </Card>
    </div>
</template>

<script>
export default {//要从后台获取当前用户的数据
    data(){
        const pwdValidate = (rule, value, callback) => {
            this.$refs.formItem.validateField('pwdCheck');
            callback();
        };
        const pwdCheckValidate = (rule, value, callback) => {
            if (this.formItem.password != '' && value == '') {
                callback(new Error('确认密码不能为空'));
            } else if (this.formItem.password != value) {
                callback(new Error('新密码和确认密码应相同'));
            } else {
                callback();
            }
        };
        return{
            formItem:{
                id:'',
                password:'',
                pwdCheck:'',
            },
            userName:'',
            account:'',
            phoneNumber:'',
            validateRules: {
                password: [
                    {required: true, validator: pwdValidate, trigger: 'blur'}
                ],
                pwdCheck: [
                    {required: true, validator: pwdCheckValidate, trigger: 'blur'}
               ]
            },
        }
    },
    methods:{
        submit(){
            //Todo 这里写更新用户信息的方法
        },
        submit1(){
            //Todo 这里写更新密码的方法
        },
    }
}
</script>

<style lang="scss" scoped>
    .personalSettings{
        .perCenter{
            width: 20%;
            margin: auto;           
        }
        .pwdChange{
            width: 20%;
            margin: auto;
        }
    }
</style>