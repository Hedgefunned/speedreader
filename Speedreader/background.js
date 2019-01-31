var myVar;
var div = document.createElement("p");
var speedReadTextColor = "black";
var speedReadBackgroundColor = "#ededed";
var readerFlip = false;


$(document).keydown(function( event ) {
  if ( event.which == 17 ) {
    readerFlip = !readerFlip;
    // var msg = readerFlip;
    // console.log(msg);
}
});


$("p").hover(function(){
    prepareText(this);
}, function() {

    clearTimeout(myVar);
    div.style.display= "none";

});


// var xTriggered = 0;
// $(document).keydown(function( event ) {
//   if ( event.which == 13 ) {
//    event.preventDefault();
//   }
//   xTriggered++;
//   var msg = "Handler for .keydown() called " + xTriggered + " time(s).";
//   $.print( msg, "html" );
//   $.print( event );
// });


function prepareText(paragraph){
    if (readerFlip) {
        var crunched = paragraph.innerText.split(" ");
        overBox(paragraph, crunched[0]);
        read(crunched);
    }
}

function overBox (readObject, initialText){    
    div.style.background = speedReadBackgroundColor;
    div.style.color = speedReadTextColor;
    div.setAttribute("id", "test");
    div.style.display = "block";
    div.style.width= "25%";
    div.style.heigth =  "1.3em";
    div.style.zindex = "2";
    div.style.position = "absolute";
    div.style.textAlign = "center";
    div.style.margin = "5px";
    div.style.padding = "20px";
    div.style.fontSize = "20px";
    div.style.boxShadow = "1px 1px 1px 1px #888888";
    
    div.innerText = initialText;
    readObject.prepend(div);
}

function read (text){
    var time = 0;
    var string = text;
    var regularTimeout = 150;

    function instance() {
        regularTimeout = 150;
        if (time==string.length) {myVar = setTimeout(closeUp, regularTimeout*2)}

            $('#test').text(string[time]);
        if (div.innerText.slice(-1)==".") {regularTimeout = regularTimeout*2}
            time += 1;
        myVar = setTimeout(instance,regularTimeout);
    }
    myVar = setTimeout(instance, regularTimeout);
}

function closeUp(){
    clearTimeout(myVar);
    div.style.display= "none";

}
