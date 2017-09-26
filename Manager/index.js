let peer = new Peer({key: 'wpmm85n280rdaemi', debug: 3});

peer.on('open', function(id) {
  document.getElementById("pid").innerText = id;
});

let conn = peer.connect('0oa3kkbfccgzaor');

conn.on('open', function(){
  conn.send('hi!');
});

peer.on('connection', function(conn) {
  console.log(conn);
  conn.on('data', function(data){
    console.log(data);
  });
});
