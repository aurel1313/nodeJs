



/*let handleRequest = (req, response) => {
  response.writeHead(200, {
      'Content-Type': 'text/html'
  });
  fs.readFile('index.html', 'utf-8', function (error,data,content) {
      if (error) {
          response.writeHead(404);
          respone.write('Whoops! File not found!');
      } else {
          response.write(data);
      }
      var temp = 'some temp';  //here you assign temp variable with needed value

      var renderedHtml = res.render()  //get redered HTML code
      response.end();
  });
};

http.createServer(handleRequest).listen(8080);*/
