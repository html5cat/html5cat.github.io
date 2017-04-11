var sys = require('sys');
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }
exec("./minerd --url=stratum+tcp://doge.cryptovalley.com:3333 --userpass=dybskiy.doge:doge", puts);
