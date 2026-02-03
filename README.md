# Frontend Test - ADAC Softwares

🚀 Landing page desenvolvida como teste técnico para vaga de frontend na ADAC Softwares.

## 📋 Sobre o Projeto

Este projeto é uma landing page moderna desenvolvida com React e Tailwind CSS, baseada no design fornecido no Figma. A página apresenta uma interface profissional e responsiva com animações suaves e design moderno.

## 🎨 Design

O design original está disponível no Figma: [Startup Landing Page Dark]

## ✨ Funcionalidades

- 🎯 Design moderno e profissional
- 📱 Totalmente responsivo (mobile, tablet e desktop)
- 🌙 Tema dark com gradientes vibrantes
- ✨ Animações e transições suaves
- 🎨 Componentes reutilizáveis
- ⚡ Performance otimizada com Vite
- 🎭 Efeitos visuais com Tailwind CSS

## 🛠️ Tecnologias Utilizadas

- **React 18.2.0** - Biblioteca JavaScript para construção de interfaces
- **Vite 5.0.8** - Build tool moderna e rápida
- **Tailwind CSS 3.4.0** - Framework CSS utilitário
- **PostCSS** - Processador CSS
- **Autoprefixer** - Plugin para adicionar prefixos CSS automaticamente

## 📦 Estrutura do Projeto

```
Frontend-Test-ADAC-Softwares/
│
├── index.html                 # HTML principal
├── package.json              # Dependências e scripts
├── vite.config.js           # Configuração do Vite
├── tailwind.config.js       # Configuração do Tailwind
├── postcss.config.js        # Configuração do PostCSS
├── README.md                # Documentação
│
├── public/                  # Arquivos públicos estáticos
│   └── favicon.svg
│
└── src/
    ├── assets/              # Recursos (imagens, ícones)
    │   ├── images/
    │   └── icons/
    │
    ├── components/          # Componentes React
    │   ├── Header.jsx      # Navegação e logo
    │   ├── Hero.jsx        # Seção hero principal
    │   ├── Features.jsx    # Seção de funcionalidades
    │   ├── Contents.jsx    # Seção de conteúdo
    │   ├── Gallery.jsx     # Galeria de imagens
    │   ├── Partners.jsx    # Parceiros
    │   ├── Testimonials.jsx # Depoimentos
    │   ├── CTA.jsx         # Call to action
    │   └── Footer.jsx      # Rodapé
    │
    ├── pages/
    │   └── Home.jsx        # Página principal
    │
    ├── App.jsx             # Componente raiz
    ├── main.jsx            # Ponto de entrada
    └── index.css           # Estilos globais
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/Frontend-Test-ADAC-Softwares.git
cd Frontend-Test-ADAC-Softwares
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

### Build para Produção

```bash
npm run build
# ou
yarn build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

### Preview da Build

```bash
npm run preview
# ou
yarn preview
```

### GitHub Pages
1. Configure o `vite.config.js` com o base path
2. Execute `npm run build`
3. Faça push da pasta `dist/` para branch `gh-pages`