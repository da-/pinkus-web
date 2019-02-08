// Created by iWeb 2.0.4 local-build-19691231

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id1" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="511" height="399" style="height: 399px; left: 165px; position: absolute; top: 22px; width: 511px; z-index: 1; "><param name="src" value="Media/Pearl%20spoke%20Yidish.mov" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id1" type="video/quicktime" width="511" height="399" style="height: 399px; left: 165px; position: absolute; top: 22px; width: 511px; z-index: 1; "><param name="src" value="Pearl_spoke_only_Yiddish_files/Pearl%20spoke%20Yidish.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/Pearl%20spoke%20Yidish.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id1" type="video/quicktime" width="511" height="399" data="Media/Pearl%20spoke%20Yidish.mov" style="height: 399px; left: 165px; position: absolute; top: 22px; width: 511px; z-index: 1; "><param name="src" value="Media/Pearl%20spoke%20Yidish.mov"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(0.0000,0.0000),color:'#463c3c',opacity:0.750000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Pearl_spoke_only_Yiddish_files/Pearl_spoke_only_YiddishMoz.css')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
