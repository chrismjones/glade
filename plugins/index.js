import { default as addThemeByTag       } from './addThemeByTag'
import { default as addUMSLAttribution  } from './addUMSLAttribution'
import { default as animateLogos        } from './animateLogos'
import { default as identifyCurrentPage } from './identifyCurrentPage'
import { default as IEBannerMessage     } from './IEBannerMessage'
import { default as formatTranscripts   } from './formatTranscripts'
import { default as googleCustomSearch  } from './googleCustomSearch'
import { default as makePlaceholder     } from './makePlaceholder'


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
  { fn: addUMSLAttribution,  enabled: false },
  { fn: animateLogos,        enabled: false },
  { fn: identifyCurrentPage, enabled: true  },
  { fn: formatTranscripts,   enabled: true  },
  { fn: googleCustomSearch,  enabled: false },
  { fn: makePlaceholder,     enabled: true  },

  { fn: addThemeByTag,       enabled: false,
    args: [['LGBT', 'LGBTQ'], LGBTTheme],
  },

  { fn: IEBannerMessage,     enabled: false,
    args: ['Not all features may be supported in Internet Explorer'],
  },
]


export default plugins
