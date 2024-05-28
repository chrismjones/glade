import onNavigate from '../lib/onNavigate'

const tvPledgeRibbonCSS = `
    .d-none{display:none !important}
    .d-flex{display:flex !important}
    @media(min-width: 768px){
        .d-md-none{display:none !important}
        .d-md-block{display:block !important}
    }
    @media(min-width: 992px){
        .d-lg-none{display:none !important}
        .d-lg-inline{display:inline !important}
        .d-lg-inline-block{display:inline-block !important}
        .d-lg-block{display:block !important}
    }

    .container{
        position:relative;
        margin-left:auto;
        margin-right:auto;
        padding-right:15px;
        padding-left:15px
    }
    @media (min-width:576px){
        .container{
            padding-right:15px;
            padding-left:15px
        }
    }
    @media (min-width:768px){
        .container{
            padding-right:15px;
            padding-left:15px
        }
    }
    @media (min-width:992px){
        .container{
            padding-right:15px;
            padding-left:15px
        }
    }
    @media (min-width:1200px){
        .container{
            padding-right:15px;
            padding-left:15px
        }
    }
    @media (min-width:576px){
        .container{
            width:540px;
            max-width:100%
        }
    }
    @media (min-width:768px){
        .container{
            width:720px;
            max-width:100%
        }
    }
    @media (min-width:992px){
        .container{
            width:960px;
            max-width:100%
        }
    }
    @media (min-width:1200px){
        .container{
            width:1140px;
            max-width:100%
        }
    }
    @media (min-width: 853px) {
        #img_250 {
        	display: block !important;
        }
        #img_599 {
        	display: none !important;
        }
    }
    @media (min-width: 1200px) {

        #img_250 {
        	display: none !important;
        }
        #img_599 {
        	display: block !important;
        }
    }` 

function addRibbon() {
    	const ribbonDateTime = luxon.DateTime;
		const ribbonInterval = luxon.Interval;

        const ribbonDateRange = ribbonInterval.fromDateTimes(ribbonDateTime.local(2024, 6, 1, 6, 0), ribbonDateTime.local(2024, 6, 9, 23, 59));
        let ribbonNow = ribbonDateTime.now();
    
    	if(ribbonDateRange.contains(ribbonNow)) {
            var htm = "";
            var commonImgs = "https://pages.whro.org/assets/imgs/";
            var pledgeImgs = "https://pages.whro.org/assets/imgs/";

            const today = new Date();
            const day = today.getDate().toString().padStart(2, "0");
            const month = (today.getMonth() + 1).toString().padStart(2, "0");
            const year = today.getFullYear().toString().slice(-2);
            const formattedDate = `${month}${day}${year}`; //Output example: 052424

	   		htm += '<style>';
	    	htm += '.pledgeBanner{ background:url("'+commonImgs+'swyl_bkg_corpBlue.jpg") repeat-x transparent 0 0; height:90px; }';
			htm += '.pledgeBanner{ background-color:#0b4f71; height:90px; }';
			htm += '.pledgeBanner .siteBannerInner{ height:90px; justify-content:space-between; }';
			htm += '	@media (max-width:750px){ .pledgeBanner .siteBannerInner { justify-content:space-around; } }';
			htm += '.pledgeBanner .mdAmounts a{ width:216px; height:90px; background:url("'+commonImgs+'btn_donateNow_Off.png") no-repeat transparent 0 0; display:inline-block; text-indent:-9000px; }';
			htm += '.pledgeBanner .mdAmounts a:hover{ background:url("'+commonImgs+'btn_donateNow_On.png") no-repeat transparent 0 0; }';
			htm += '@media(max-width: 853px) {.pledgeBanner .smAmounts a{ width:103px; height:90px; background:url("'+commonImgs+'btn_donateNow_sq_Off.png") no-repeat transparent 0 0; display:inline-block; text-indent:-9000px; }}';
			htm += '.pledgeBanner .smAmounts a:hover{ background:url("'+commonImgs+'btn_donateNow_sq_On.png") no-repeat transparent 0 0; }';
			htm += '	.pledgeBanner .mdAmounts{ line-height:1.5em; padding: 25px 0; }';
			htm += '</style>';
	        htm += '<div class="siteBanner pledgeBanner">';
			htm += 		'<div class="container siteBannerInner d-flex">';
			htm += 			'<img class="bannerLogo d-none d-md-block" src="'+commonImgs+'swylHeart_l.png" alt="" />';
			htm += 			'<img class="bannerLogo d-md-none" src="'+commonImgs+'swylHeart_s.png" alt="" />';
			htm += 			'<img id="img_599" class="d-none" src="'+pledgeImgs+formattedDate+'_599.png" alt="" />';
			htm += 			'<img id="img_250" class="d-none" src="'+pledgeImgs+formattedDate+'_250.png" alt="" />';
			htm += 			'<div class="amounts d-none d-md-block mdAmounts">';
			htm += 				'<a href="https://members.whro.org/?technique=OnlineMainBanner" target="_blank" rel="noopener">Support Now</a>';
			htm += 			'</div>';
			htm += 			'<div class="amounts d-md-none smAmounts">';
			htm += 				'<a href="https://members.whro.org/?technique=OnlineMainBanner" target="_blank" rel="noopener">Support Now</a>';
			htm += 			'</div>';
			htm += 		'</div>';
			htm += '</div>';
            document.querySelector(".Page-above").insertAdjacentHTML('beforebegin',htm)
        }
    }

    export default () => {
        Glade.insertCSS(tvPledgeRibbonCSS, true) // true: CSS should persist on navigation
        addRibbon()
        // Unlike the nav, which persists in Grove, the footer refreshes each page load
        onNavigate(() => addRibbon())
      }
      