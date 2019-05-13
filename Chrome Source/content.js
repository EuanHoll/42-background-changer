var profiles = document.getElementsByClassName("profile-banner")[0];
if (profiles != null)
{
	alert(localStorage.getItem("OnOff"));
	profiles.className = profiles.className.replace(/\profile-banner\b/g, "");
	profiles.className = profiles.className + " profile-banner-custom ";
}