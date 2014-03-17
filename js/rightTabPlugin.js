// Plugin Name: Tab Container Plugin
// Create By: Jose Nino N. Garcia
// Description: Description: The purpose of the plugin is to slide to right the content based on the link or index that was chosen by the developer.
//Version Type: Version 1


$(document).ready(function(){
	$.fn.rightTabLinks = function(){
		
			//Get the variables for all of the selected element.
			var contWrap = this.children("ul");
			var getSpans = contWrap.find("li span");
			var spanLen = getSpans.length;
			var spanWidthNUM = getSpans.width();
			
			var lnkBTN = $("#tabData").children("ul").find("li");
			var theLINKS = $("#tabData").children("ul").find("li a");
			
			//Event handler for the links
			lnkBTN.click(function(){
				var getIndex = lnkBTN.index(this);
				var widthLen = getIndex * spanWidthNUM;
				
				animateContent(contWrap, widthLen);
				addCurrentCls(getIndex + 1);
			});
			
			//Animate to the left the container
			function animateContent(container, num)
			{
				container.animate({
					"margin-left":"-" + num + ""	
				});
			}
			
			//This will add a current class for your link
			function addCurrentCls(indexNUM)
			{
				for(var i = 0; i < spanLen; i++)
				{
					$("#tab" + (i+1)).removeClass("current");
				}
				$("#tab" + indexNUM).addClass("current");
			}
	}
});