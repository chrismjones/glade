/* eslint-disable max-len */
import onNavigate from '../lib/onNavigate'

const logo = `<img src="https://pages.whro.org/assets/imgs/icon_tiktok.png" style="height:15px" />`;

const socialHTML = `
<li class="SocialBar-items-item"> 
	<a class="SocialLink gtm_share" rel="noreferrer" href="https://www.tiktok.com/@whropublicmedia" target="_blank" data-social-service="tiktok" data-platform="tiktok" data-cms-ai="0">
		${logo}
		<span class="sr-only">tiktok</span>
	</a>
</li>`

const socialCSS = `
.SocialBar-items-item {
    margin-left: 0;
    margin-right: 0;
}
`


function addTiktokSocialIconToFooter () {
	var target = document.querySelector(".SocialBar-items"); 
	
	if (!target) {
		throw new Error('Could not find social icons for Tiktok logo.')
	}

	target.insertAdjacentHTML('beforeend', socialHTML)
}


export default () => {
  Glade.insertCSS(socialCSS, true) // true: CSS should persist on navigation

  addTiktokSocialIconToFooter()
  // Unlike the nav, which persists in Grove, the footer refreshes each page load
  onNavigate(() => addTiktokSocialIconToFooter())
}
