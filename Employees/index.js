var peer = new Peer({key: 'wpmm85n280rdaemi', debug: 3});

peer.on('open', function(id) {
  console.log('My peer ID is: ' + id);
});


var conn = peer.connect('47hknqry919k9');
conn.on('open', function(){
  conn.send('hi!');
});

peer.on('connection', function(conn) {
  conn.on('data', function(data){
    console.log(data);
  });
});
