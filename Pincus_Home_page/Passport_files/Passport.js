// Created by iWeb 2.0.4 local-build-19691231

function createMediaStream_id1()
{return IWCreatePhotocast("file://localhost/Volumes/Leon%20Thumb%20Drive/Pincus_Home_page/Passport_files/rss.xml",true,true);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('file://localhost/Volumes/Leon%20Thumb%20Drive/Pincus_Home_page',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('file://localhost/Volumes/Leon%20Thumb%20Drive/Pincus_Home_page',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(2,new IWSize(233,233),new IWSize(233,42),new IWSize(280,290),27,27,0,new IWSize(31,34)),new IWPhotoFrame([IWCreateImage('Passport_files/Freestyle_01.png'),IWCreateImage('Passport_files/Freestyle_02.png'),IWCreateImage('Passport_files/Freestyle_03.png'),IWCreateImage('Passport_files/Freestyle_06.png'),IWCreateImage('Passport_files/Freestyle_09.png'),IWCreateImage('Passport_files/Freestyle_08.png'),IWCreateImage('Passport_files/Freestyle_07.png'),IWCreateImage('Passport_files/Freestyle_04.png')],null,2,0.800000,3.000000,3.000000,3.000000,3.000000,22.000000,24.000000,23.000000,25.000000,166.000000,222.000000,166.000000,222.000000,null,null,null,0.100000),imageStream,range,new IWShadow({blurRadius:9,offset:new IWPoint(0.7071,0.7071),color:'#463c3c',opacity:0.300000}),null,1.000000,{backgroundColor:'#000000',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=getArgs();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
IWRegisterNamedImage('contribution overlay','Media/Photo-Overlay-Contribution.png')
loadMozillaCSS('Passport_files/PassportMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
fixAllIEPNGs('Media/transparent.gif');Widget.onload();initializeMediaStream_id1()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}