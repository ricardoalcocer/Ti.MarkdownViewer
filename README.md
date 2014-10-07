# Ti.MarkdownViewer - Markdown Viewer Alloy Widget

This Alloy widget allows you to display Markdown documents in your Appcelerator Apps.  I wrote it because I'm thinking of writing a mobile Markdown editor for iPad and Android tablets, and needed a proof of concept for the viewer.  

![](http://drops.ricardoalcocer.com/drops/timdviewer-IX3C80wU6c.png)

Documents can be provided in one of three ways:

* Providing the actual Markdown text
* Providing the NativePath to a Markdown document in the local FileSystem
* Providing a URL to a Markdown document

## How it works

This widget uses Showdown.js to render the Markdown into HTML.  For styling it's using Bootstrap CSS.    Only internal links are available. If your Markdown document has external links, they are disabled to prevent the user from navigating to other pages.

## Usage

*In your XML View*

````xml
<Alloy>
	<Window class="container" layout="vertical">
		<Widget src="com.alcoapps.viewmarkdown" id="markdownviewer"/>
	</Window>
</Alloy>
````

*In your controller*
````javascript
// METHOD 1 : FROM MARKDOWN TEXT STRING

// load markdown file to view
var f = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,'md.md');
var md = f.read().toString();
$.markdownviewer.setPageFromText(md);

// METHOD 2 : FROM FILE PATH

// load markdown file to view
var f = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,'md.md').nativePath;
$.markdownviewer.setPageFromFilePath(f);

// METHOD 3 : FROM URL

if (Ti.Network.online){
	$.markdownviewer.setPageFromURL('http://daringfireball.net/projects/markdown/syntax.text');
}else{
	alert('Network is offline');
}

$.index.open();

````

# Who's using it?

Nobody so far.  Let me know if you use it!

# License

MIT - [http://alco.mit-license.org](http://alco.mit-license.org)