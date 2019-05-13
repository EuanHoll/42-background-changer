var profiles = document.getElementsByClassName("profile-banner")[0];
if (profiles != null)
{
	chrome.storage.local.get("OnOff", (sValue) => {
		if (sValue.OnOff)
		{
			profiles.className = profiles.className.replace(/\profile-banner\b/g, "");
			profiles.className = profiles.className + " profile-banner-custom ";
			chrome.storage.local.get("thelink", (vValue) =>{
				document.querySelector('body > div.page > div.page-content.page-content-fluid > div > div.align-top > div > div.container-item.profile-item.full-width > div').style.backgroundImage = url(vValue.thelink);
			});
		}
	});
}