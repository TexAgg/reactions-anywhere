export namespace BrowserUtils
{
	/**
	 * Sneaky hack to determine if the 'browser' namespace is defined.
	 * 
	 * @export
	 * @returns {boolean} 
	 */
	export function isBrowserDefined(): boolean
	{
		return typeof browser != "undefined";
	}

	/**
	 * Determines if the "chrome" namespace is defined.
	 * 
	 * @export
	 * @returns {boolean} 
	 */
	export function isChromeDefined(): boolean
	{
		return typeof chrome != "undefined";
	}
}