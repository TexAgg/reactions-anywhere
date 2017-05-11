import {BrowserUtils} from "./browserUtils";

export namespace Reaction
{

	/**
	 * Facebook reaction.
	 * 
	 * @export
	 * @enum {number}
	 */
	export enum ReactionType 
	{
		Like,
		Love,
		Thankful,
		Wow,
		Sad,
		Angry,
		Haha
	}

	// http://stackoverflow.com/a/13631733/5415895
	/*
	let files: {} = {
		Like : "img/like.png",
		Love: "img/love.png",
		Wow: "img/wow.png",
		Sad: "img/sad.png",
		Angry: "img/angry.png",
		Haha: "img/haha.png"
	}
	*/

	/**
	 * Map a string to a ReactionType.
	 */
	export let reactionStrings: {[type: string]: ReactionType} = {
		"like": ReactionType.Like,
		"love": ReactionType.Love,
		"thankful": ReactionType.Thankful,
		"wow": ReactionType.Wow,
		"sad": ReactionType.Sad,
		"angry": ReactionType.Angry,
		"haha": ReactionType.Haha
	};

	/**
	 * Downloads a reaction image based on the given ReactionType.
	 * 
	 * @export
	 * @param {ReactionType} type 
	* */
	export function getReaction(type: ReactionType): void
	{
		// Do thing with reaction.
		let img = new Image();

		switch (type)
		{
			case ReactionType.Like:
				img.src = "img/like.png";
				break;
			case ReactionType.Love:
				img.src = "img/love.png";
				break;
			case ReactionType.Thankful:
				img.src = "img/thankful.png";
				break;
			case ReactionType.Wow:
				img.src = "img/wow.png";
				break;
			case ReactionType.Sad:
				img.src = "img/sad.png";
				break;
			case ReactionType.Angry:
				img.src = "img/angry.png";
				break;
			case ReactionType.Haha:
				img.src = "img/haha.png";
				break;
		}
		
		/*
		The browser API is only available for addons and extensions.
		Ignore any warnings from editors and transpilers complaining that
		they don't know what it is.
		*/
		if (BrowserUtils.isBrowserDefined())
			browser.downloads.download({url: img.src});
		else 
			chrome.downloads.download({url: img.src}, function() {
				console.log("Downloaded via Google Chrome.");
		});
	}

}