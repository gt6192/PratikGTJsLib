# PratikGTJsLib
This is a short JS animation liberary, till now it contains just one class #Pratik_GT_textAp.
This class is used to creat a text animation, for example it takes one text and display its single character one by one following given amount interval time.
It takes three parameters: -
Text.
Interval time.
Id of an html where you want to perform this animation.

For example: -
<h1 id="mytext"></h1>
<script>
window.onload = function(){
new Pratik_GT_textAp("hello world!", 100, "mytext");
}
</script>
Dont forget to link the PratikGTJsLib.js file.

It takes the string and split it's all single characters and stores in list. Then displays single single character.