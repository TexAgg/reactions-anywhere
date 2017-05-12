import 'bootstrap/dist/css/bootstrap.css';
import '../main.css';
import {Reaction} from "./reaction";
import {BrowserUtils} from "./browserUtils";

let reactionItems = document.getElementsByClassName("reaction-item");
// Add click-listener to each item.
for (let i = 0; i < reactionItems.length; i++)
{
	let item = <HTMLElement>reactionItems[i];
	item.addEventListener("click", function()
	{
		let reaction = reactionItems[i].getElementsByTagName("img")[0].getAttribute("reaction");
		Reaction.getReaction(Reaction.reactionStrings[reaction]);
	});
}

/*
	If this is Chrome, then add a hover-text telling the user they can
	copy-paste the image.
*/
if (BrowserUtils.isChromeDefined())
{
	let reactionImgs = document.getElementsByClassName("reaction-image");
	for (let i = 0; i < reactionImgs.length; i++)
	{
		reactionImgs[i].setAttribute("title", "Right-click and copy the image to paste it in another window!");
	}
}

let getting = browser.storage.local.get('thankful');
getting.then(onGot);

function onGot(item)
{
	if (!item.thankful)
	{
		document.getElementById("thankful").style.display = "none";
	}
}