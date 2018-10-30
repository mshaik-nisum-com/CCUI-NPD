module.exports = {

  //Router Constants
  INDEXROUTER: "./routes/index",
  USERROUTER: "./routes/users",
  MARKETROUTER: "./routes/markets",
  AUTHROUTER:"./routes/auth",
  PRODUCTROUTER : "./routes/products",
  ORDERNUMGENERATORROUTER: "./routes/orderNumGenerator",
  OAUTHROUTER:"./routes/oauth",

  //Path constants
  AUTHPATH: "/auth",
  OAUTHPATH:"/oauth",
  MIDDLEWAREPATH:"./middleware/authMiddleware",

  LOGS: "/ccui-npd.log",
  MARKETS: "/markets",
  GENERATEORDERNUM:"/generateOrderNum",
  DATASOURCE: "./dataSource/dataSource",
  PRODUCTS:"/products",

  MarketCodes : {
    1: '01234GFEDCBA56789ABCDEFG',
    2: '56789HIJKLM01234MLKJIH',
    3: '89123UVWXYZZYXWVU45670',
    4: '12389NOPQRSTTSRQPON45670'
    },

    AUTHPATHS: [
        "/auth/login",
        "/auth/register",
        "/auth/logout",
        "/markets/marketList",
        "/oauth/getOAuthLoginUrl",
        "/oauth/oauthcallback"
    ]
};