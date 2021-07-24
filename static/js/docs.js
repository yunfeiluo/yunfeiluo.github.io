function fetch_projects(){
    var fs = require('fs');
    var files = fs.readdirSync('/articles/projects/');
    alert(files);
}