# sendlist

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


弹出填写工作量界面  accept  
弹出协作处理界面 cooperate
工单审核 check
工单结算 settle 这个里面集成了发起结算和结算审核
共单打分 point

在工单列表界面需要实现的功能：
一个表格，能分页显示；可多选行，能对选中的行进行操作；根据进入人的身份不同显示不同的内容；
一个搜索框，能模糊搜索两种元素；
一个日期选择框，需要加入搜索字段；
一个下拉菜单，加入搜索字段；
删除按钮；
下载按钮；

role角色管理
information消息管理
accepted是工单处理信息的组件
后缀带Sta的是数据统计页面

工单详情界面要实现的方法：
工单需求审核check 审核人
转到工单修改newlist需求发起人   派单 check审核人
受理工单 accept 支撑接口人   选择协作 cooperate 支撑接口人
工单打分point 需求发起人  这里要显示组件accepeted的第一栏
工单结算审核 settle 审核人 结算前显示组件accepted的第一栏，结算后显示组件accepted的两栏
结算 upload 支撑接口人 这里要显示组件accepted的两栏

details是支撑接口人处理完之前的工单详情
detailsDone是支撑接口人处理完之后的工单详情