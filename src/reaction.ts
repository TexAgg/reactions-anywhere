export namespace Reaction
{

	export enum ReactionType 
	{
		Like,
		Love,
		Wow,
		Sad,
		Angry,
		Haha
	}

	export enum Action
	{
		Copy,
		Download
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

	export let reactionStrings: {[type: string]: ReactionType} = {
		"like": ReactionType.Like,
		"love": ReactionType.Love,
		"wow": ReactionType.Wow,
		"sad": ReactionType.Sad,
		"angry": ReactionType.Angry,
		"haha": ReactionType.Haha
	};

	export function getReaction(type: ReactionType, action: Action)
	{
		// Do thing with reaction.
		let img = new Image();
		let file;

		switch (type)
		{
			case ReactionType.Like:
				img.src = "img/like.png";
				break;
			case ReactionType.Love:
				img.src = "img/love.png";
				break;
			case ReactionType.Wow:
				img.src = "img/love.png";
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

		// This sucks.
		if (action == Action.Copy)
		{
			document.body.appendChild(img);
			let range = document.createRange();
			range.setStartBefore(img);
			range.setEndAfter(img);
			range.selectNode(img);
			window.getSelection().addRange(range);
			var successful = document.execCommand('copy');
			window.getSelection().removeAllRanges();
			document.body.removeChild(img);
		}
		else
		{
			browser.downloads.download({url: img.src});
			console.log("Downloading");
		}


		console.log("downloading " + img.src);
	}

}