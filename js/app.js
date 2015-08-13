
$(function(){
	
  $.getJSON('https://www.googleapis.com/youtube/v3/search?part=cat&key=AIzaSyDG8MLiT8pDk-_Abq7eWY9306iB7qna6bQ', function(data){
    myData = data.Search;
    $.each(myData, function(index,value){
      console.log(value.Title);
    });
  });
});
