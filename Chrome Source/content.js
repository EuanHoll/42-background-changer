var profiles = document.getElementsByClassName("profile-banner")[0];
if (profiles != null)
{
	chrome.storage.local.get("OnOff", (sValue) => {
		if (sValue.OnOff)
		{
			profiles.className = profiles.className.replace(/\profile-banner\b/g, "");
			profiles.className = profiles.className + " profile-banner-custom ";
			chrome.storage.local.get("thelink", (vValue) => {
				var sl = $("body > div.page > div.page-content.page-content-fluid > div > div.align-top > div > div.container-item.profile-item.full-width > div");
				sl.css("background-image", "url(" + vValue.thelink + ")");
			});
			chrome.storage.local.get("colourP", (vValue) => {
				var proBar = $("body > div.page > div.page-content.page-content-fluid > div > div.align-top > div > div.container-item.profile-item.full-width > div > div.user-column.flex.flex-direction-column > div._ > div.profile-left-box > div > div > div.user-progress > div > a:nth-child(1) > div > div.progress-bar");
				proBar.css("background", vValue.colourP);
			});
		}
	});
}