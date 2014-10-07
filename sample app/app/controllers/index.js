// FROM MARKDOWN TEXT STRING
//
// load markdown file to view
//var f = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,'md.md');
//var md = f.read().toString();
//$.markdownviewer.setPageFromText(md);

// FROM FILE PATH
//
// load markdown file to view
//var f = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,'md.md').nativePath;
//$.markdownviewer.setPageFromFilePath(f);

// FROM URL
//
if (Ti.Network.online){
	$.markdownviewer.setPageFromURL('http://daringfireball.net/projects/markdown/syntax.text');
}else{
	alert('Network is offline');
}

$.index.open();
