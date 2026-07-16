// Complete Configuration for Pejic Language System
const pejicSystemConfig = {
  version: '1.0.0',
  name: 'Pejic Language System - Complete Configuration',
  repository: 'https://github.com/Pejicc/PwjicX',
  author: 'Pejicc',
  
  system: {
    language: 'Pejic',
    fileExtensions: ['.pej', '.nxs', '.nxc', '.nxr', '.nxp'],
    theme: 'dark',
    coding: 'UTF-8'
  },
  
  components: {
    pejicLanguage: {
      file: 'pejic.pej',
      type: 'theme',
      status: 'active',
      description: 'Dark theme with 20 foreground colors',
      colors: 20
    },
    
    forbiddenWords: {
      file: 'forbidden.pej',
      type: 'security',
      status: 'active',
      description: 'List of forbidden words'
    },
    
    nexusLanguageSupport: {
      file: 'nexuslang.nxs',
      type: 'language_support',
      extension: '.nxs',
      status: 'active',
      description: 'Nexus Language Support for Pejic and Nexus Config',
      features: ['syntax_highlighting', 'code_completion', 'auto_detection']
    },
    
    nexusConfig: {
      file: 'nexusconfig.nxc',
      type: 'configuration',
      extension: '.nxc',
      status: 'active',
      description: 'Nexus Config for Pejic and Nexus Lang',
      format: 'js',
      minify: false,
      sourceMap: true
    },
    
    instantReactionSystem: {
      file: 'instantReaction.nxr',
      type: 'reaction_system',
      extension: '.nxr',
      status: 'active',
      description: 'Instant Reaction System on edits',
      reactionTime: 'instant',
      reactions: 6
    },
    
    providerSystem: {
      file: 'provider.nxp',
      type: 'provider_system',
      extension: '.nxp',
      status: 'active',
      description: 'Complete Provider System',
      providers: 7
    },
    
    vscodeExtensions: {
      file: 'vscodeExtensionUrls.json',
      type: 'vs_code_integration',
      status: 'active',
      description: '3 VS Code Extension URLs',
      extensions: 3
    }
  },
  
  compiler: {
    strict: true,
    verbal: true,
    warnings: true,
    optimizations: true,
    sourceMap: true,
    minify: false
  },
  
  security: {
    enabled: true,
    checkForbiddenWords: true,
    validateTypes: true,
    scanVulnerabilities: true
  },
  
  performance: {
    caching: true,
    optimization: 'advanced',
    parallelProcessing: true
  }
};

module.exports = pejicSystemConfig;
