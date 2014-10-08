var args = arguments[0] || {};

var extraStyles='';

// configure webview based on arguments
$.webv.height 	= args.height 	|| Ti.UI.FILL;
$.webv.width 	= args.width 	|| Ti.UI.FILL;
$.webv.top 		= args.top 		|| null;
$.webv.left 	= args.left 	|| null;
$.webv.right 	= args.right 	|| null;
$.webv.bottom 	= args.bottom 	|| null;

function loadFile(filePath){
	var f = Ti.Filesystem.getFile(filePath);
	var contents = f.read();
	return contents.toString();	
}

function fileExists(filePath){
	return Ti.Filesystem.getFile(filePath).exists();
}

function setMarkDown(m){
	// read files
	var htmlTemplate 	= loadFile(Ti.Filesystem.resourcesDirectory + WPATH('html_template.htm'));
	var showdown 		= loadFile(Ti.Filesystem.resourcesDirectory + WPATH('showdown.min.txt'));
	var stylesheet 		= loadFile(Ti.Filesystem.resourcesDirectory + WPATH('bootstrap.min.css'));

	// inject content, styling and script
	var md 				= htmlTemplate.replace('##INSERT_MARKDOWN##',m);
	md 					= md.replace('##STYLESHEET##',stylesheet);
	md 					= md.replace('##SHOWDOWN##',showdown);
	md 					= md.replace('##EXTRASTYLES##',extraStyles);

	// set to webview
	$.webv.html 		= md;
}


// PUBLIC METHODS

function setExtraStyles(style){
	extraStyles = style;
}

function setPageFromText(md){
	setMarkDown(md);
}

function setPageFromFilePath(path){
	var md=loadFile(path);
	setMarkDown(md);
}

function setPageFromURL(url){
	 var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	         setMarkDown(this.responseText);
	     },
	     onerror : function(e) {
	         Ti.API.debug(e.error);
	         alert('error');
	     },
	     timeout : 5000
	 });
	 client.open("GET", url);
	 client.send();
}

//
exports.setExtraStyles 		= setExtraStyles;
exports.setPageFromText 	= setPageFromText;
exports.setPageFromFilePath = setPageFromFilePath;
exports.setPageFromURL 		= setPageFromURL;