const Test = require('../model/Test')

const callApi = function(req, res){
  Test.callApi(req, res)
  .then((d)=>{
    console.log('resolved ' + d)
    console.log(req.body)
    console.log(req.query)
    res.json({t:'haha' + Math.random()})
  })
  .catch((e)=>{
    console.log('rejected ' + e)
    res.json({t:'error'})
  })
}

const fetchDataOnFirstLoad = function(res, req){
  Test.fetchDataOnFirstLoad(req, res)
  .then((d)=>{
    return Promise.resolve({data:d})
  })
  .catch((e)=>{
    return Promise.reject({error:e})
  })
}

module.exports = {
  callApi,
  fetchDataOnFirstLoad
}
