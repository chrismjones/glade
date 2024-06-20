import onNavigate from '../lib/onNavigate'

const ribbonCSS = `
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

    let ribbonNow = ribbonDateTime.now();
    // const ribbonDateRange = ribbonInterval.fromDateTimes(ribbonDateTime.local(2024, 6, 17, 6, 0), ribbonDateTime.local(2024, 6, 28, 23, 59));
    const ribbonDateRange1 = ribbonInterval.fromDateTimes(ribbonDateTime.local(2024, 6, 17, 6, 0), ribbonDateTime.local(2024, 6, 28, 23, 59));
    const ribbonDateRange2 = ribbonInterval.fromDateTimes(ribbonDateTime.local(2024, 6, 29, 0, 0), ribbonDateTime.local(2024, 6, 29, 23, 59));
    const ribbonDateRange3= ribbonInterval.fromDateTimes(ribbonDateTime.local(2024, 6, 30, 0, 0), ribbonDateTime.local(2024, 6, 30, 23, 59));
    var htm = "";
    var commonImgs = "https://pages.whro.org/assets/imgs/pledge/";
    var pledgeImgs = "https://pages.whro.org/assets/imgs/pledge/202406/";
    var EOFY = "https://pages.whro.org/assets/imgs/pledge/eofy/";
    const today = new Date();
    const day = today.getDate().toString().padStart(2, "0");
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const year = today.getFullYear().toString().slice(-2);
    const formattedDate = `${month}${day}${year}`; //Output example: 052424

    /* TV Membership Drive */    
    
    // if(ribbonDateRange.contains(ribbonNow)) {

    //     htm += '<style>';
    //     htm += '.pledgeBanner{ background:url("'+commonImgs+'swyl_bkg_corpBlue.jpg") repeat-x transparent 0 0; height:90px; }';
    //     htm += '.pledgeBanner{ background-color:#0b4f71; height:90px; }';
    //     htm += '.pledgeBanner .siteBannerInner{ height:90px; justify-content:space-between; }';
    //     htm += '    @media (max-width:750px){ .pledgeBanner .siteBannerInner { justify-content:space-around; } }';
    //     htm += '.pledgeBanner .mdAmounts a{ width:216px; height:90px; background:url("'+commonImgs+'btn_donateNow_Off.png") no-repeat transparent 0 0; display:inline-block; text-indent:-9000px; }';
    //     htm += '.pledgeBanner .mdAmounts a:hover{ background:url("'+commonImgs+'btn_donateNow_On.png") no-repeat transparent 0 0; }';
    //     htm += '@media(max-width: 853px) {.pledgeBanner .smAmounts a{ width:103px; height:90px; background:url("'+commonImgs+'btn_donateNow_sq_Off.png") no-repeat transparent 0 0; display:inline-block; text-indent:-9000px; }}';
    //     htm += '.pledgeBanner .smAmounts a:hover{ background:url("'+commonImgs+'btn_donateNow_sq_On.png") no-repeat transparent 0 0; }';
    //     htm += '    .pledgeBanner .mdAmounts{ line-height:1.5em; padding: 25px 0; }';
    //     htm += '</style>';
    //     htm += '<div class="siteBanner pledgeBanner">';
    //     htm +=      '<div class="container siteBannerInner d-flex">';
    //     htm +=          '<img class="bannerLogo d-none d-md-block" src="'+commonImgs+'swylHeart_l.png" alt="" />';
    //     htm +=          '<img class="bannerLogo d-md-none" src="'+commonImgs+'swylHeart_s.png" alt="" />';
    //     htm +=          '<img id="img_599" class="d-none" src="'+pledgeImgs+formattedDate+'_599.png" alt="" />';
    //     htm +=          '<img id="img_250" class="d-none" src="'+pledgeImgs+formattedDate+'_250.png" alt="" />';
    //     htm +=          '<div class="amounts d-none d-md-block mdAmounts">';
    //     htm +=              '<a href="https://members.whro.org/?technique=OnlineMainBanner" target="_blank" rel="noopener">Support Now</a>';
    //     htm +=          '</div>';
    //     htm +=          '<div class="amounts d-md-none smAmounts">';
    //     htm +=              '<a href="https://members.whro.org/?technique=OnlineMainBanner" target="_blank" rel="noopener">Support Now</a>';
    //     htm +=          '</div>';
    //     htm +=      '</div>';
    //     htm += '</div>';
    //     document.querySelector(".Page-above").insertAdjacentHTML('beforebegin',htm)
    // }
    
    /* End TV Membership Drive */
    /* End of Fiscal Year */
    
    if(ribbonDateRange1.contains(ribbonNow)) {
            htm += '<style>';
            htm += '.pledgeBanner{ background:url("'+EOFY+'EOFY_ribbon_bkg.jpg") repeat-x transparent 0 0; height:90px;  };';
            htm += '.pledgeBanner .siteBannerInner { height:90px; justify-content:space-around; }';
            htm += '.pledgeBanner a{ width:140px; height:59px; background:url("'+EOFY+'EOFY_ribbon_btnOff.png") no-repeat transparent 0 0; display:inline-block; text-indent:-9000px;margin-top: 15px; }';
            htm += '.pledgeBanner a:hover{ background:url("'+EOFY+'EOFY_ribbon_btnOn.png") no-repeat transparent 0 0; }';
            htm += '@media (min-width:768px){ .pledgeBanner a { width:128px; margin-top: 25px; background:url("'+EOFY+'EOFY_ribbon_btnOff_s.png") no-repeat transparent 0 0;} }';
            htm += '@media (min-width:768px){ .pledgeBanner a:hover{ background:url("'+EOFY+'EOFY_ribbon_btnOn_s.png") no-repeat transparent 0 0; }  }';
            htm += '</style>';
            htm += '<div class="siteBanner pledgeBanner">';
            htm +=      '<div class="container siteBannerInner d-flex" style="justify-content: space-around; height:90px;">';
            htm +=          '<img class="d-none d-md-none d-lg-block" src="'+EOFY+'EOFY_ribbon_tag.png" alt="" />';
            htm +=          '<img class="d-none d-md-block d-lg-none" src="'+EOFY+'EOFY_ribbon_tag_m.png" alt="" />';
            htm +=          '<img class="d-md-none" src="'+EOFY+'EOFY_ribbon_tag_s.png" alt="" />';
            htm +=          '<div class="amounts">';
            htm +=              '<a class="promo" href="https://secure.whro.org/site/Donation2?1400.donation=form1&df_id=1400&set.custom.Package=EOFY" target="_blank" rel="noopener"></a>';
            htm +=          '</div>';
            htm +=      '</div>';
            htm += '</div>';
        document.querySelector(".Page-above").insertAdjacentHTML('beforebegin',htm) 
        //Insert your markup into the page
        }
    
    
    if(ribbonDateRange2.contains(ribbonNow)) {
            htm += '<style>';
            htm += '.pledgeBanner{ background:url("'+EOFY+'EOFY_ribbon_bkg.jpg") repeat-x transparent 0 0; height:90px;  };';
            htm += '.pledgeBanner .siteBannerInner { height:90px; justify-content:space-around; }';
            htm += '.pledgeBanner a{ width:250px; height:59px; background:url("'+EOFY+'EOFY_ribbon_heartBtnOff.png") no-repeat transparent 0 0; display:inline-block; text-indent:-9000px;margin-top: 15px; }';
            htm += '.pledgeBanner a:hover{ background:url("'+EOFY+'EOFY_ribbon_heartBtnOn.png") no-repeat transparent 0 0; }';
            htm += '@media (max-width:468px){ #ribbon_sm { display: none } }';
            htm += '@media (min-width:768px){ .pledgeBanner a { width:128px; margin-top: 25px; background:url("'+EOFY+'EOFY_ribbon_btnOff_s.png") no-repeat transparent 0 0;} }';
            htm += '@media (min-width:768px){ .pledgeBanner a:hover{ background:url("'+EOFY+'EOFY_ribbon_btnOn_s.png") no-repeat transparent 0 0; }  }';
            htm += '</style>';
            htm += '<div class="siteBanner pledgeBanner">';
            htm +=      '<div class="container siteBannerInner d-flex" style="justify-content: space-around; height:90px;">';
            htm +=          '<img class="d-none d-md-none d-lg-block" src="'+EOFY+'EOFY2ndToLastDay_ribbon_tag.png" alt="" />';
            htm +=          '<img class="d-none d-md-block d-lg-none" src="'+EOFY+'EOFY2ndToLastDay_ribbon_tag_m.png" alt="" />';
            htm +=          '<img id="ribbon_sm" class="d-md-none" src="'+EOFY+'EOFY2ndToLastDay_ribbon_tag_s.png" alt="" />';
            htm +=          '<div class="amounts">';
            htm +=              '<a class="promo" href="https://secure.whro.org/site/Donation2?1400.donation=form1&df_id=1400&set.custom.Package=EOFY" target="_blank" rel="noopener"></a>';
            htm +=          '</div>';
            htm +=      '</div>';
            htm += '</div>';
        document.querySelector(".Page-above").insertAdjacentHTML('beforebegin',htm) 
        //Insert your markup into the page
        }
    
    
    
    if(ribbonDateRange3.contains(ribbonNow)) {
            htm += '<style>';
            htm += '.pledgeBanner{ background:url("'+EOFY+'EOFY_ribbon_bkg.jpg") repeat-x transparent 0 0; height:90px;  };';
            htm += '.pledgeBanner .siteBannerInner { height:90px; justify-content:space-around; }';
            htm += '.pledgeBanner a{ width:250px; height:59px; background:url("'+EOFY+'EOFY_ribbon_heartBtnOff.png") no-repeat transparent 0 0; display:inline-block; text-indent:-9000px;margin-top: 15px; }';
            htm += '.pledgeBanner a:hover{ background:url("'+EOFY+'EOFY_ribbon_heartBtnOn.png") no-repeat transparent 0 0; }';
            htm += '@media (max-width:468px){ #ribbon_sm { display: none } }';
            htm += '@media (min-width:768px){ .pledgeBanner a { width:128px; margin-top: 25px; background:url("'+EOFY+'EOFY_ribbon_btnOff_s.png") no-repeat transparent 0 0;} }';
            htm += '@media (min-width:768px){ .pledgeBanner a:hover{ background:url("'+EOFY+'EOFY_ribbon_btnOn_s.png") no-repeat transparent 0 0; }  }';
            htm += '</style>';
            htm += '<div class="siteBanner pledgeBanner">';
            htm +=      '<div class="container siteBannerInner d-flex" style="justify-content: space-around; height:90px;">';
            htm +=          '<img class="d-none d-md-none d-lg-block" src="'+EOFY+'EOFYLastDay_ribbon_tag.png" alt="" />';
            htm +=          '<img class="d-none d-md-block d-lg-none" src="'+EOFY+'EOFYLastDay_ribbon_tag_m.png" alt="" />';
            htm +=          '<img  id="ribbon_sm" class="d-md-none" src="'+EOFY+'EOFYLastDay_ribbon_tag_s.png" alt="" />';
            htm +=          '<div class="amounts">';
            htm +=              '<a class="promo" href="https://secure.whro.org/site/Donation2?1400.donation=form1&df_id=1400&set.custom.Package=EOFY" target="_blank" rel="noopener"></a>';
            htm +=          '</div>';
            htm +=      '</div>';
            htm += '</div>';
        document.querySelector(".Page-above").insertAdjacentHTML('beforebegin',htm) 
        //Insert your markup into the page
    }
    /* End: End of Fiscal Year */
}

    export default () => {
        Glade.insertCSS(ribbonCSS, true) // true: CSS should persist on navigation
        addRibbon()
        // Unlike the nav, which persists in Grove, the footer refreshes each page load
        onNavigate(() => addRibbon())
      }
      