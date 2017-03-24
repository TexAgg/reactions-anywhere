import '../main.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Reaction} from "./reaction";

let reactionItems = document.getElementsByClassName("reaction-item");

// Add click-listener to each item.
for (let i = 0; i < reactionItems.length; i++)
{
	reactionItems[i].addEventListener("click", function(){
		let reaction = reactionItems[i].getElementsByTagName("img")[0].getAttribute("reaction");
		Reaction.getReaction(Reaction.reactionStrings[reaction]);
	});
}