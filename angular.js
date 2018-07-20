 let options = new RequestOptions();
 options.headers = new Headers();
 options.headers.append('Content-Type', 'application/json');
 options.headers.append('authorization', 'Bearer ' + this.token);
 const connection = new XHRBackend(new BrowserXhr(), new ResponseOptions(), new CookieXSRFStrategy());
 const http: Http = new Http(connection, options);
 his.source = new ServerDataSource(http, {
   endPoint: 'http://192.168.31.213:1337/customer/find?filters',
   totalKey: 'totalCount',
   dataKey: 'customers',
   pagerPageKey: 'page',
   pagerLimitKey: 'perPage',
 });
 
 
 the above code is to deal with front end and backend pagenation of ng smart table
