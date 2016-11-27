tabris.ui.set("toolbarVisible", false);
var page = new tabris.Page({
topLevel: true
}).open();
//---------------------------------------------------------------------------------------------------------------------------

var a = 255;
var seti = 0;

var whw = 55;

var backri = "rgba(0,0,0,0.05)";

var composite = new tabris.Composite({
  layoutData: {left: 13, bottom: 13, height: whw, width: whw},
  background: "white",
  elevation: 10,
  cornerRadius: 7.5
}).on("tap", function(widget){
 if (seti == 0){
  widget.animate({transform: {scaleX: 5.5, scaleY: 5.5, translationX: 140, translationY: -250}},{duration: 400})
     page.find("#o").animate({opacity: 0.3, transform: {scaleX: 1, scaleY: 1}},{duration: 650})
     page.find("#o").set({enabled: true, highlightOnTouch: true})
 }
  }).on("pan", function(widget){
if (seti == 1) {
   widget.animate({transform: {scaleX: 1, scaleY: 1, translationX: 0, translationY: 0}},{duration: 400})
   page.find("#o").animate({transform: {scaleX: 0.8, scaleY: 0.8}},{duration: 650})
   page.find("#o").set({enabled: false, highlightOnTouch: false})
 }
}).on("animationstart", function(widget){
  if (seti == 1){
    seti = 0
    page.set("background", "rgba(0,0,0,0)")
  } else if (seti == 0){
    seti = 1
    page.set("background", "rgba(0,0,0,0.1)")
  }
}).on("animationend", function(widget){
  if (seti == 1){
    page.find("#o").set("background", "rgba(0,0,0,0)")
  } else if (seti == 0){
    page.find("#o").set("background", backri)
  }
}).appendTo(page);

var wh = whw/3.45;
var hw = 3;

var slot1 = new tabris.Composite({
  id: "o",
    layoutData: {top: hw, left: hw, height: wh, width: wh},
    background: backri,
  enabled: false,
      elevation: 0.3,
 	 cornerRadius: 1.5,
  }).appendTo(composite);    

var slot2 = new tabris.Composite({
    layoutData: {top: hw, centerX: 0, height: wh, width: wh},
  	id: "o",
    background: backri,
  enabled: false,
      elevation: 0.3,
 	 cornerRadius: 1.5,
  }).appendTo(composite);   

var slot3 = new tabris.Composite({
    layoutData: {top: hw, right: hw+0.2, height: wh, width: wh},
  	id: "o",
    background: backri,
  enabled: false,
      elevation: 0.3,
 	 cornerRadius: 1.5,
  }).appendTo(composite);    

var slot4 = new tabris.Composite({
  id: "o",
    layoutData: {centerY: 0, left: hw, height: wh, width: wh},
    background: backri,
  enabled: false,
      elevation: 0.3,
 	 cornerRadius: 1.5,
  }).appendTo(composite);    

var slot5 = new tabris.Composite({
    layoutData: {centerY: 0, centerX: 0, height: wh, width: wh},
  	id: "o",
    background: backri,
  enabled: false,
      elevation: 0.3,
 	 cornerRadius: 1.5,
  }).appendTo(composite);   

var slot6 = new tabris.Composite({
    layoutData: {centerY: 0, right: hw+0.2, height: wh, width: wh},
  	id: "o",
    background: backri,
  enabled: false,
      elevation: 0.3,
 	 cornerRadius: 1.5,
  }).appendTo(composite);    

var slot7 = new tabris.Composite({
  id: "o",
    layoutData: {bottom: hw+0.2, left: hw, height: wh, width: wh},
    background: backri,
  enabled: false,
      elevation: 0.3,
 	 cornerRadius: 1.5,
  }).appendTo(composite);    

var slot8 = new tabris.Composite({
    layoutData: {bottom: hw+0.2, centerX: 0, height: wh, width: wh},
  	id: "o",
    background: backri,
  enabled: false,
      elevation: 0.3,
 	 cornerRadius: 1.5,
  }).appendTo(composite);   

var slot9 = new tabris.Composite({
    layoutData: {bottom: hw+0.2, right: hw+0.2, height: wh, width: wh},
  	id: "o",
    background: backri,
  enabled: false,
      elevation: 0.3,
 	 cornerRadius: 1.5,
  }).appendTo(composite); 
