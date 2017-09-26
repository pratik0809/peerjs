let peer = new Peer({key: 'wpmm85n280rdaemi', debug: 3});

peer.on('open', function(id) {
  document.getElementById("pid").innerText = id;
});

	let conn = peer.connect('d4vp2pdnqpzrrudi');

	function connect(){
		conn.on('data', function(data) {
    		console.log(data);

        });
	}

	function check(res){
		document.getElementById("checkbox").checked = res;
	}

	 conn.on('open', function() {
        connect(conn);
      });

	peer.on('connection', function(conn) {
	  	console.log(conn);
	  	conn.on('data', function(data){
	  		console.log(data);
	  		check(data);
	  	});

	});

	function submit(){
	 	//conn.send(document.getElementById("message").value);
	 	conn.send(document.getElementById("checkbox").checked);
	 }


	






	/*peer.on('open')function(conn) {
	  	console.log(conn);
	  	console.log("conn ---");
	  	conn.on('data', function(data){
	  	console.log(data);
	  		});
		});
	*/








	/*conn.on('open', function(){
  		conn.send('NOPE');
 		conn.send('wassup, fucker');
 	});*/

	/*conn.on('open', function(){
		message = document.getElementById("message").value;
		conn.send('hi!');
		conn.send('wassup, bietch');
		conn.send(message);
	});*/








