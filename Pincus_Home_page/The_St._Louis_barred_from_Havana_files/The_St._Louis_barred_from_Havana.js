// Created by iWeb 2.0.4 local-build-19691231

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id1" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="511" height="399" style="height: 399px; left: 165px; position: absolute; top: 17px; width: 511px; z-index: 1; "><param name="src" value="Media/Pearl%20Pincus-2.mov" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id1" type="video/quicktime" width="511" height="399" style="height: 399px; left: 165px; position: absolute; top: 17px; width: 511px; z-index: 1; "><param name="src" value="The_St._Louis_barred_from_Havana_files/Pearl%20Pincus.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/Pearl%20Pincus-2.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
 {document.write('<video controls="controls" width="511" height="399" src="Media/Pearl%20Pincus-2.mov" style="height: 399px; left: 165px; position: absolute; top: 17px; width: 511px; z-index: 1; ">Your browser does not support the video tag.</video>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('The_St._Louis_barred_from_Havana_files/The_St._Louis_barred_from_HavanaMoz.css')
fixAllIEPNGs('Media/transparent.gif');Widget.onload();performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
