module.exports = {

   appUrl: 'http://localhost:80',
 
   auth: {
     static: {
       username: 'admin',
       password: '123456'
     },
    }, 

    jwt: {
      token_secret: 'EB9F0CA4414893F7B72DDF0F8507D88042DB4DBF8BD9D0A5279ADB54158EB2F0'
    },
 
    connections: {
      postgresql: {
        adapter: 'sails-postgresql',
        host: 'localhost',
        user: 'electron_release_server_user',
        password: '123456',
        database: 'electron_release_server'
     }
    },
    
    session: {
       secret: 'EB9F0CA4414893F7B72DDF0F8507D88042DB4DBF8BD9D0A5279ADB54158EB2F0',
       database: 'electron_release_server_sessions',
       host: 'localhost',
       user: 'electron_release_server_user',
       password: '123456',
       port: 5432
    },
    
    files: {
       dirname: '/Users/kongpf/Desktop/electron-release-server/releases',
    }

 };