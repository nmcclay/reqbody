var http = require('http');

module.exports = function(options,callback) {
	if (!options.encoding) options.encoding = 'utf8';
	var request = http.get(options, function(res) {
		res.body = '';
		res.setEncoding(options.encoding);
		
		res.on('data', function(chunk){
	    	res.body += chunk;
	    })
	    
	    res.on('end',function() {
	    	callback(res)
	    })
	})
	
	return request;
}
