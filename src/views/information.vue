<template>
    <div class="information">
        <Row class="head">消息管理>{{state}}</Row>
        <Card>
            <Tabs v-model="state">
                <TabPane label="全部消息" name="全部消息">
                    <Table :data="allData" :columns="columns" border ref="selection" >
                        <template slot-scope="{ row, index }" slot="action">
                            <Button type="text" size="small" @click="show(index)">详情</Button>
                            <Button type="text" size="small" @click="del(index)">删除</Button>
                        </template>
                    </Table>
                </TabPane>
                <TabPane label="未读消息" name="未读消息">
                    <Table :data="unReadData" :columns="columns" border ref="selection" >
                        <template slot-scope="{ row, index }" slot="action">
                            <Button type="text" size="small" @click="show(index)">详情</Button>
                            <Button type="text" size="small" @click="del(index)">删除</Button>
                        </template>
                    </Table>
                </TabPane>
                <TabPane label="已读消息" name="已读消息">
                    <Table :data="readData" :columns="columns" border ref="selection" >
                        <template slot-scope="{ row, index }" slot="action">
                            <Button type="text" size="small" @click="show(index)">详情</Button>
                            <Button type="text" size="small" @click="del(index)">删除</Button>
                        </template>
                    </Table>
                </TabPane>
            </Tabs>
            <Button @click="delSelected"/>
        </Card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            state:'全部消息',
            allData:[],
            unReadData:[],
            readData:[],
            columns:[
                {
                    title:"标题",
                    key:'',
                },
                {
                    title:'发布时间',
                    key:'',
                },
                {
                    title:'',
                    solt:'action',
                    align:'center',
                }
            ],
        }
    },
    methods:{
        show(){//点击'详情'，弹框显示信息详情内容。

        },
        del(){//删除一条工单信息

        },
        delSelected(){//删除所有选中的工单信息

        },
    }
}
</script>