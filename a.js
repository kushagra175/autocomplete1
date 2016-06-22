var socket=io('http://localhost:8000');
  socket.on('result',function(data){
  $(document).ready(
    function (){
    $( "#fruits" ).autocomplete({
      source:data,
      autoFocus: true ,
    });
  }
);
});

