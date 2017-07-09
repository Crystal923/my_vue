var Mock = require('mockjs')

module.exports = function () {
  return {
    user_list: Mock.mock({
      'status': 200,
      'total': 20,
      'data|20': [{
        'id|+1': 1,
        'name|1': ['@name', '@cname'],
        'age|18-25': 28,
        'sex|1': ['男', '女'],
        'address|1': ['北京市朝阳区华腾世纪总部公园A座9层', '北京市昌平区回龙观东大街', '北京市东城区东直门外大街108号']
      }]
    }),
    student_list: Mock.mock({
      'data|2': [{
        'name|1': ['@name', '@cname'],
        'age|0-10': 28,
        'sex|1': ['男', '女'],
        'email': '@EMAIL',
        'address|1': ['北京市昌平区回龙观东大街', '北京市朝阳区华腾世纪总部公园A座9层', '北京市东城区东直门外大街108号']
      }]
    })
  }
}
