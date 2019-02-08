// Created by iWeb 2.0.4 local-build-19691231

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id1" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="511" height="399" style="height: 399px; left: 165px; position: absolute; top: 17px; width: 511px; z-index: 1; "><param name="src" value="Media/Pearl%20Pincus-0.mov" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id1" type="video/quicktime" width="511" height="399" style="height: 399px; left: 165px; position: absolute; top: 17px; width: 511px; z-index: 1; "><param name="src" value="I_was_born_in_Cuba_files/Pearl%20Pincus-0.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/Pearl%20Pincus-0.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id1" type="video/quicktime" width="511" height="399" data="Media/Pearl%20Pincus-0.mov" style="height: 399px; left: 165px; position: absolute; top: 17px; width: 511px; z-index: 1; "><param name="src" value="Media/Pearl%20Pincus-0.mov"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('I_was_born_in_Cuba_files/I_was_born_in_CubaMoz.css')
fixAllIEPNGs('Media/transparent.gif');Widget.onload();performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
