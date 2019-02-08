// Created by iWeb 2.0.4 local-build-19691231

function createMediaStream_id2()
{return IWCreatePhotocast("file://localhost/Volumes/Leon%20Thumb%20Drive/Esther/at_the_Cemetery_files/rss.xml",true,true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('file://localhost/Volumes/Leon%20Thumb%20Drive/Esther',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('file://localhost/Volumes/Leon%20Thumb%20Drive/Esther',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(3,new IWSize(176,176),new IWSize(176,34),new IWSize(211,225),27,27,0,new IWSize(0,0)),new IWStrokeParts([{rect:new IWRect(-2,-1,1,178),url:'at_the_Cemetery_files/stroke.png'},{rect:new IWRect(-2,-2,1,1),url:'at_the_Cemetery_files/stroke_1.png'},{rect:new IWRect(-1,-2,178,1),url:'at_the_Cemetery_files/stroke_2.png'},{rect:new IWRect(177,-2,1,1),url:'at_the_Cemetery_files/stroke_3.png'},{rect:new IWRect(177,-1,1,178),url:'at_the_Cemetery_files/stroke_4.png'},{rect:new IWRect(177,177,1,1),url:'at_the_Cemetery_files/stroke_5.png'},{rect:new IWRect(-1,177,178,1),url:'at_the_Cemetery_files/stroke_6.png'},{rect:new IWRect(-2,177,1,1),url:'at_the_Cemetery_files/stroke_7.png'}],new IWSize(176,176)),imageStream,range,null,null,1.000000,{backgroundColor:'#000000',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=getArgs();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
IWRegisterNamedImage('contribution overlay','Media/Photo-Overlay-Contribution.png')
loadMozillaCSS('at_the_Cemetery_files/at_the_CemeteryMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');fixAllIEPNGs('Media/transparent.gif');Widget.onload();initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
