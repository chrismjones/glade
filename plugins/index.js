import { default as addTiktokSocialIcon  }  from './addTiktokSocialIcon'
import { default as identifyCurrentPage  }  from './identifyCurrentPage'

// Plugin
// fn:      plugin function.
// enabled: whether or not plugin should run
// args [optional]: arguments to pass into plugin
// A plugin can be used multiple times with different arguments

const plugins = [
  { fn: addTiktokSocialIcon,  enabled: true  },
  { fn: identifyCurrentPage,  enabled: true  },
]


export default plugins
