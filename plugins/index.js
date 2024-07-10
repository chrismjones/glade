import { default as addIntercomMessenger }  from './addIntercomMessenger';
import { default as addRibbon            }  from './addRibbon';
import { default as addTiktokSocialIcon  }  from './addTiktokSocialIcon'
import { default as addUMSLAttribution   }  from './addUMSLAttribution'
import { default as animateLogos         }  from './animateLogos'
import { default as applyThemeByTag      }  from './applyThemeByTag'
import { default as identifyCurrentPage  }  from './identifyCurrentPage'
import { default as formatTranscripts    }  from './formatTranscripts'
import { default as googleCustomSearch   }  from './googleCustomSearch'
import { default as loadDonateAsk        }  from './loadDonateAsk'
import { default as loadDonatePopUp      }  from './loadDonatePopUp'
import { default as Placeholder          }  from './components.Placeholder'
import { default as replaceNewsletter    }  from './replaceNewsletter'


const LGBTTheme = `
.stlpr-logo .logo-bar {
  stroke-width: 0.5px;
  stroke: currentColor;
}

.stlpr-logo .logo-bar-1 { color: #d62021; fill: #d62021 !important; }
.stlpr-logo .logo-bar-2 { color: #faa21b; fill: #faa21b !important; }
.stlpr-logo .logo-bar-3 { color: #006b71; fill: #006b71 !important; }
.stlpr-logo .logo-bar-4 { color: #234093; fill: #234093 !important; }
`


// Plugin
// fn:      plugin function.
// enabled: whether or not plugin should run
// args [optional]: arguments to pass into plugin
// A plugin can be used multiple times with different arguments

const plugins = [
  { fn: addIntercomMessenger, enabled: true  },
  { fn: addRibbon,            enabled: true  },
  { fn: addTiktokSocialIcon,  enabled: true  },
  { fn: addUMSLAttribution,   enabled: false },
  { fn: animateLogos,         enabled: false },
  { fn: identifyCurrentPage,  enabled: true  },
  { fn: formatTranscripts,    enabled: true  },
  { fn: googleCustomSearch,   enabled: false },
  { fn: loadDonateAsk,        enabled: false },
  { fn: loadDonatePopUp,      enabled: false },
  { fn: Placeholder,          enabled: true },
  { fn: applyThemeByTag,       enabled: false,
    args: [['LGBT', 'LGBTQ'], LGBTTheme],
  },
  { fn: replaceNewsletter,  enabled: false,
    args: ['STL Welcome Kit',
      'https://app.e2ma.net/app2/audience/signup/1931618/1784312/', // The Gateway
      'https://app.e2ma.net/app2/audience/signup/1992160/1784312/', // STL Welcome Kit
    ],
  },
]


export default plugins
