function APCollect() {
  var docBody = DocumentApp.getActiveDocument().getBody();
  // var text = docBody.editAsText();

  var lookingText = "AP ";
  // var found = false;
  var child = docBody.getChild(0);
  var childrenCount = docBody.getNumChildren();
  var parTxt = "";
  for(var i = 0; i < childrenCount; i++){
    child = docBody.getChild(i);
    if(child.getType() == DocumentApp.ElementType.PARAGRAPH){
      parTxt = child.asParagraph().getText();
      if(contains(parTxt, lookingText)){
        docBody.appendParagraph(parTxt);
      }
    }
  }
}


function onOpen(e){
  DocumentApp.getUi()
  .createMenu("AP collector")
  .addItem("Collect all APs", 'APCollect')
  .addToUi();
}
