<template>
    <div class="listSta">
        <Layout>
            <Header>
                <above/>
            </Header>
            <Layout style="position:absolute;top: 64px;bottom: 0px;left: 0px;right: 0px;">
                <Sider hide-trigger :style="{background: '#fff'}">
                    <menuCheck active="3-3"/>
                </Sider>
                <Content>
                    <div calss="head">数据统计>满意度统计</div>
                    <Card dis-hover style="height:100%">
                        <Row>
                            <Col span="10">
                                <span>选择时间段</span>
                                <DatePicker type="date" placement="bottom-end" v-model="beginTime" ></DatePicker>
                                <DatePicker type="date" placement="bottom-end" v-model="endTime" @on-change="dateSelect" ></DatePicker>
                            </Col>
                            <Col span="10">
                                <Button @click="show(month)" type="primary">近一个月</Button>
                                <Button @click="show(week)" type="primary">近一周</Button>
                                <Button @click="show(threeMonths)" type="primary">近三个月</Button>
                                <Button @click="show(year)" type="primary">近一年</Button>
                            </Col>
                            <Col span="4">
                                <Button @click="downLoad">导出数据</Button>
                            </Col>
                        </Row>
                        <div id="chart" style="width:1720px; height:600px"></div>
                        <div class="table">
                            <Table :data="data" :columns="columns" border show-summary></Table>
                        </div>
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
            option:{//这里面的source需要从后台获取数据
                color:['#2db7f5','#ff9900','#19be6b','#ed4014'],
                title:{ text:'工单统计'},
                legend: {},
                tooltip: {},
                dataset: {
                    source: [
                        ['product','工单总数','待办','已办','超时'],
                        ['2012', 41.1, 30.4, 65.1, 53.3],
                        ['2013', 86.5, 92.1, 85.7, 83.1],
                        ['2014', 24.1, 67.2, 79.5, 86.4],
                        ['2015', 24.1, 67.2, 79.5, 86.4],
                    ]
                },
                xAxis: {type: 'category'},
                yAxis: {},
                grid: [
                    {bottom: '55%'},
                    {top: '55%'}
                ],
                series: [
                {type: 'bar', },
                {type: 'bar'},
                {type: 'bar'},
                {type: 'bar'},
                ]
            },
            data:[],
            beginTime:'',
            endTime:'',
            columns:[//Todo key写成和后台一样的
                {
                    title:'全部',
                    key:'',
                },
                {
                    title:'汉江区',
                    key:'',
                },
                {
                    title:'江岸区',
                    key:'',
                },
                {
                    title:'硚口区',
                    key:'',
                },
                {
                    title:'汉阳区',
                    key:'',
                },
                {
                    title:'武昌区',
                    key:'',
                },
                {
                    title:'青山区',
                    key:'',
                },
                {
                    title:'洪山区',
                    key:'',
                },
                {
                    title:'东西湖区',
                    key:'',
                },
                {
                    title:'蔡甸区',
                    key:'',
                },
                {
                    title:'江夏区',
                    key:'',
                },
                {
                    title:'黄陂区',
                    key:'',
                },
                {
                    title:'新洲区',
                    key:'',
                },
            ],
        }
    },
    methods:{
        drawLine(){
            let chart = this.$echarts.init(document.getElementById('chart'));
            chart.setOption(this.option)
        },
        dateSelect(){//处理日期选择器的筛选

        },
        show(type){//处理四个时间按键的筛选
            switch (type) {
                case "month":
                    
                    break;
                case "week":
                    
                    break;
                case "threemonths":
                    
                    break;
                case "year":
                    
                    break;           
                default:
                    break;
            }
        },
        download(){//导出数据的方法

        },
    },
    mounted(){
    this.drawLine();
    },
}
</script>

<style lang="scss" scoped>
    .areaSta{
        height: 100%;
        width: 100;
    }
</style>