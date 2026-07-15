// VS Code Extension URLs za Pejic Language Support

const vscodeExtensionUrls = {
  version: '1.0.0',
  repository: 'https://github.com/Pejicc/PwjicX',
  description: 'VS Code Extension URLs za Pejic jeziku - Support i Provider',
  
  extensionUrls: {
    url_1: {
      name: 'Pejic Language Support Extension',
      type: 'language_support',
      url: 'vscode:extension/Pejicc.pejic-language-support',
      installUrl: 'https://marketplace.visualstudio.com/items?itemName=Pejicc.pejic-language-support',
      description: 'Instalacija Pejic Language Support ekstenzije u VS Code',
      features: [
        'Syntax highlighting',
        'Language server',
        'IntelliSense',
        'Code completion',
        'Error detection'
      ],
      supportedFiles: ['.pej', '.nxs', '.nxc']
    },
    
    url_2: {
      name: 'Pejic Provider System Extension',
      type: 'provider_system',
      url: 'vscode:extension/Pejicc.pejic-provider-system',
      installUrl: 'https://marketplace.visualstudio.com/items?itemName=Pejicc.pejic-provider-system',
      description: 'Instalacija Pejic Provider System ekstenzije u VS Code',
      features: [
        'Syntax Provider',
        'Language Provider',
        'Compiler Provider',
        'Config Provider',
        'Reaction Provider',
        'Theme Provider',
        'Security Provider'
      ],
      supportedFiles: ['.pej', '.nxs', '.nxc']
    },
    
    url_3: {
      name: 'Pejic Complete Development Kit',
      type: 'complete_kit',
      url: 'vscode:extension/Pejicc.pejic-dev-kit',
      installUrl: 'https://marketplace.visualstudio.com/items?itemName=Pejicc.pejic-dev-kit',
      description: 'Kompletan Pejic Development Kit - Support + Provider + Tools',
      features: [
        'Language Support',
        'All Providers',
        'Instant Reactions',
        'Theme Manager',
        'Security Scanner',
        'Compiler Integration',
        'Debugging Tools',
        'Project Templates'
      ],
      supportedFiles: ['.pej', '.nxs', '.nxc', '.nxr', '.nxp']
    }
  },
  
  installationMethods: {
    method_1: {
      name: 'Direktna instalacija iz VS Code',
      steps: [
        'Otvori VS Code',
        'Idi na Extensions (Ctrl+Shift+X)',
        'Pretraži "Pejic"',
        'Klikni "Install"'
      ]
    },
    
    method_2: {
      name: 'Instalacija preko URL-a',
      steps: [
        'Kopiraj URL iz extensionUrls',
        'Otvori u pregledniku ili direktno u VS Code',
        'Klikni "Install" ili "Open in VS Code"'
      ]
    },
    
    method_3: {
      name: 'Instalacija iz Marketplace',
      steps: [
        'Posjeti marketplace.visualstudio.com',
        'Pretraži "Pejicc Pejic"',
        'Klikni na ekstenziju',
        'Klikni "Install"'
      ]
    }
  },
  
  systemRequirements: {
    vsCodeVersion: '>=1.60.0',
    nodeVersion: '>=14.0.0',
    platform: ['Windows', 'macOS', 'Linux']
  }
};

module.exports = vscodeExtensionUrls;
