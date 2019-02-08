// Created by iWeb 2.0.4 local-build-19691231

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id1" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="511" height="399" style="height: 399px; left: 165px; position: absolute; top: 17px; width: 511px; z-index: 1; "><param name="src" value="Media/The%203%20Brothers.mov" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id1" type="video/quicktime" width="511" height="399" style="height: 399px; left: 165px; position: absolute; top: 17px; width: 511px; z-index: 1; "><param name="src" value="4_Sisters_Recall_3_Brothers_files/The%203%20Brothers.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/The%203%20Brothers.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id1" type="video/quicktime" width="511" height="399" data="Media/The%203%20Brothers.mov" style="height: 399px; left: 165px; position: absolute; top: 17px; width: 511px; z-index: 1; "><param name="src" value="Media/The%203%20Brothers.mov"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('4_Sisters_Recall_3_Brothers_files/4_Sisters_Recall_3_BrothersMoz.css')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixAllIEPNGs('Media/transparent.gif');Widget.onload();performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
