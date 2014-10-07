In this section we'll go through the basics of building a very simple app.  In the process, you'll learn about how Appcelerator apps are structured, how Views, Stylesheets and Controllers work together and how to test your app on the iOS Simulator and Android emulator.

[Google](http://google.com)

## Creating a new project

![](http://drops.ricardoalcocer.com/appcdevdocs/newprj1.png)
![](http://drops.ricardoalcocer.com/appcdevdocs/newprj2.png)
![](http://drops.ricardoalcocer.com/appcdevdocs/newprj3.png)
![](http://drops.ricardoalcocer.com/appcdevdocs/newprj4.png)
![](http://drops.ricardoalcocer.com/appcdevdocs/newprj5.png)

Index.xml

    <Alloy>
		<Window class="container">
			<Label id="label" onClick="doClick">Hello, World</Label>
		</Window>
    </Alloy>


Index.tss

	".container": {
		backgroundColor:"white"
	},
	"Label": {
		width: Ti.UI.SIZE,
		height: Ti.UI.SIZE,
		color: "#000"
	}

	"#label": {
		font: {
			fontSize: 12
		}
	}

Index.js

	function doClick(e) {
    		alert($.label.text);
	}

	$.index.open();


![](http://drops.ricardoalcocer.com/appcdevdocs/xml_js_relationship.png)

sdf


![](http://drops.ricardoalcocer.com/appcdevdocs/xml_tss_relationship.png)

sdfsdf

![](http://drops.ricardoalcocer.com/appcdevdocs/newprj6.png)

![](http://drops.ricardoalcocer.com/appcdevdocs/newprj7.png)

![](http://drops.ricardoalcocer.com/appcdevdocs/onewin.png)

![](http://drops.ricardoalcocer.com/appcdevdocs/alert.png)

