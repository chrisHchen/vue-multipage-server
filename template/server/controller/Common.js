const path = require('path')

const whiteList = [/^\/test\/\.*/, /^\/test2\/\.*/]
const apiList = [/^\/api\/\.*/]

const getView = function(req, res, next) {
    const url = req.url
    const isWhite = isWhiteList(req.url)
    // console.log(isStatic(url), url)
    if (isWhite) {
        if (path.isAbsolute(url)) {
            return res.render(url.substring(1), {
                bundle: path.basename(url)
            })
        } else {
            return res.render(url, {
                bundle: path.basename(url)
            })
        }
    } else if (!isStatic(url) && !isApiList(url)) {
        /**
         * TODO
         * return index page
         */
        return res.render('test/index', {
            bundle: 'index'
        })
    }
    return next()
}

const interceptor = function(req, res, next) {
    if (!isStatic(req.url)) {
        console.log('inercepted request :' + req.url)
    }
    return next()
}

const isStatic = function(url) {
    if (url.indexOf('static/') > 0 ||
        (global.NODE_ENV === 'development' &&
            url.indexOf('__webpack_hmr') > 0)
    ) {
        return true
    } else {
        return false
    }
}

const isApiList = function(url) {
    let isApi = false
    apiList.forEach((item) => {
        if (item.test(url)) {
            return isApi = true
        }
    })
    return isApi
}

const isWhiteList = function(url) {
    let isWhite = false
    whiteList.forEach((item) => {
        if (item.test(url)) {
            return isWhite = true
        }
    })
    return isWhite
}

module.exports = {
    getView,
    interceptor
}
