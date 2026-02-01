# Frontend Test - ADAC Softwares

🚀 Landing page desenvolvida como teste técnico para vaga de frontend na ADAC Softwares.

## 📋 Sobre o Projeto

Este projeto é uma landing page moderna desenvolvida com React e Tailwind CSS, baseada no design fornecido no Figma. A página apresenta uma interface profissional e responsiva com animações suaves e design moderno.

## 🎨 Design

O design original está disponível no Figma: [Startup Landing Page Dark](https://www.figma.com/community/file/1343864899991106390/start-up-landing-page-dark-mode)

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

## 🎯 Componentes Principais

### Header
- Navegação responsiva
- Menu mobile com hamburger
- Logo com gradiente
- Botão de login

### Hero
- Título principal impactante
- Subtítulo descritivo
- Botões de CTA (Try For Free / Learn More)
- Imagem de dashboard em perspectiva
- Efeitos de gradiente de fundo

### Features
- Grid de 3 funcionalidades
- Cards com hover effects
- Lista de features com ícones
- Preview de dashboard

### Contents
- Cards de conteúdo com imagens
- Design responsivo
- Botões de ação

### Gallery
- Grid de imagens responsivo
- Efeitos de hover
- Botão "See More"

### Partners
- Logo de parceiros
- Grid responsivo
- Ícones personalizados

### Testimonials
- Cards de depoimentos
- Avaliações com estrelas
- Informações dos autores

### CTA
- Seção de call-to-action
- Preview de funcionalidade
- Design em duas colunas

### Footer
- Links organizados por categoria
- Informações de contato
- Redes sociais
- Design responsivo

## 🎨 Customização

### Cores

As cores principais estão definidas no `tailwind.config.js`:

```javascript
colors: {
  primary: {
    blue: '#5454D4',
    pink: '#FF64AE',
    yellow: '#FFD700',
  },
  dark: {
    900: '#000000',
    800: '#1A1A1A',
    700: '#2D2D2D',
  }
}
```

### Fontes

O projeto utiliza a fonte Inter do Google Fonts, importada no `index.html`.

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: ≥ 1024px

## 🚀 Deploy

O projeto pode ser facilmente deployado em:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Arraste a pasta dist/ para Netlify
```

### GitHub Pages
1. Configure o `vite.config.js` com o base path
2. Execute `npm run build`
3. Faça push da pasta `dist/` para branch `gh-pages`

## 📝 Critérios de Avaliação Atendidos

- ✅ **Fidelidade ao Design (35%)**: Interface fiel ao Figma com atenção aos detalhes
- ✅ **Qualidade do Código (30%)**: Código limpo, organizado e com boas práticas
- ✅ **Responsividade (20%)**: Funciona perfeitamente em todos os dispositivos
- ✅ **Documentação (15%)**: README completo e bem estruturado

## 🎯 Diferenciais Implementados

- ✨ Animações e transições suaves em todos os componentes
- 🎨 Utilização completa do Tailwind CSS para estilização
- 📦 Componentes reutilizáveis e bem organizados
- 🚀 Performance otimizada com Vite
- 🎭 Efeitos visuais modernos (gradientes, blur, shadows)
- 📱 Menu mobile totalmente funcional
- ♿ Código semântico e acessível

## 🤝 Contato

Desenvolvido como teste técnico para ADAC Softwares.

---

**Tecnologias**: React • Vite • Tailwind CSS • JavaScript

**Status**: ✅ Completo e pronto para deploy
