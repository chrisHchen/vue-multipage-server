
const callApi = function(req, res){
  /**
   * fetch data or call api here
   */
  return new Promise(function(resolve, reject){
    setTimeout(()=>{
      if(Math.random() > 0.3){
        resolve('data')
      }else{
        reject('error')
      }
  }, 600)
  })
}

const fetchDataOnFirstLoad = function(req, res){

  return new Promise(function(resolve, reject){
    setTimeout(()=>{
      if(Math.random() > 0.3){
        resolve('data')
      }else{
        reject('error')
      }
    }, 100)
  })
}

module.exports = {
  callApi,
  fetchDataOnFirstLoad
}
