// https://mzl.la/2r5Jdxt
// http://stackoverflow.com/a/4471462/5415895

import {BrowserUtils} from "./browserUtils";

//let b = BrowserUtils.isChromeDefined() ? chrome : browser;

function saveOptions(e: Event): void
{
	e.preventDefault();
	
	let elem: HTMLInputElement = <HTMLInputElement>document.querySelector("#thankful");
	browser.storage.local.set(
	{
		thankful: elem.checked
	});

	console.log('boi');
}

function restoreOptions(): void
{
	function setCurrentChoice(result) 
	{
		let elem: HTMLInputElement = <HTMLInputElement>document.querySelector("#thankful");
		elem.checked = result.thankful || false;
	}

	function onError(error: Error)
	{
		console.log('Error: ${error}');
	}

	let getting = browser.storage.local.get('thankful');
	getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("thankful").addEventListener("change", saveOptions);