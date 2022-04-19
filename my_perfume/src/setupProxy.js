

const { createProxyMiddleware } = require('http-proxy-middleware') 
module.exports = (app) => {
     app.use( createProxyMiddleware( 
         ['/push','/filtering'], 
         { 
            target:'http://3.34.132.19' , 
            changeOrigin: true, 
            
             } )
             ); 
    app.use(
        createProxyMiddleware('/version3',{
            target: 'https://gn4gbj4pn4.execute-api.ap-northeast-2.amazonaws.com' , 
            changeOrigin: true, 
        })
    );
            }

