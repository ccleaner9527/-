<template>
    <div class="check">
        <Modal
            v-model="checkFlag1"
            title="审核意见"
            @on-ok="send"
            @on-cancel="reject"
            ok-text="派单"
            cancel-text="驳回">
                <p>工单编号：{{listNumber}}</p>
                <Input v-model="checkView" type="textarea" :rows="4"></Input>
        </Modal>
        <Modal v-model="confirmFlag">
            <p slot="header">进行派单</p>
            <div>工单编号{{listNumber}}</div>
            <Row type="flex" align="middle">
                <Col span="8">请选择支撑接口人:</Col>
                <Col span="16">
                    <Select v-model="supportPerson" placeholder="请选择支撑接口人">
                        <Option v-for="item in peopleList" :value="item.value" :key="item.value" @on-change="enable">{{item.label}}</Option>
                    </Select>
                </Col>
            </Row>
            <div slot="footer">
                <Button @click="confirm" disabled="ableFlag">确认</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        props:{
            checkFlag:Boolean,
        },
        data () {
            return {
                checkFlag1:false,
                checkView:'',//审核意见 需要传值
                confirmFlag:false,//控制进行派单对话框的出现
                supportPerson:'',//这是选择的支撑接口人 需要传值
                ableFlag:true,//控制进行派单对话框的确认按钮
                listNumber:'',//工单编号，需要传进来的值
                peopleList:[],//这个数组是支撑接口人名单 需要传进来的值
            }
        },
        watch:{
            checkFlag(){
                this.checkFlag1=this.checkFlag
            }
        },
        methods: {
            send () {
                this.confirmFlag=true;
                this.checkFlag1=false;
                this.$emit('disable',this.checkFlag1)
            },
            reject () {
                //Todo 这里写驳回的方法
                this.$Message.info('Clicked cancel');
                this.checkFlag1=false;
            },
            enable(){
                this.ableFlag=false;
            },
            confirm(){
                //Todo 这里写确认派单的方法
            }
        }
    }
</script>