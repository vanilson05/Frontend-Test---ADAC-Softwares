# Frontend Test - ADAC Softwares


Landing page responsiva desenvolvida em React com Tailwind CSS, baseada no design do Figma fornecido.

🌐 **[Ver projeto ao vivo](https://adac-softwares.netlify.app)**



## 🚀 Tecnologias

- **React 18.2** - Biblioteca JavaScript para interfaces
- **Vite 5.0** - Build tool e dev server
- **Tailwind CSS 3.4** - Framework CSS utility-first
- **JavaScript (ES6+)** - Linguagem de programação



## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/Frontend-Test-ADAC-Softwares.git

# Entre na pasta do projeto
cd Frontend-Test-ADAC-Softwares

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```text

O projeto estará disponível em `http://localhost:5173`



## 🏗️ Estrutura do Projeto

```text


src/
├── assets/
│   └── images/          # Imagens e ícones SVG
├── components/          # Componentes React
│   ├── Header.jsx       # Navegação e menu hambúrguer
│   ├── Hero.jsx         # Banner principal com animações
│   ├── Features.jsx     # Cards de funcionalidades
│   ├── Contents.jsx     # Seção de conteúdo
│   ├── Gallery.jsx      # Galeria de imagens
│   ├── Partners.jsx     # Logos dos parceiros
│   ├── Testimonials.jsx # Depoimentos (typewriter effect)
│   ├── CTA.jsx          # Call to Action
│   └── Footer.jsx       # Rodapé com links
├── pages/
│   └── Home.jsx         # Página principal
├── App.jsx              # Componente raiz
└── main.jsx             # Entry point
```



## ✨ Funcionalidades

### Responsividade

- **Mobile First**: Layout otimizado para dispositivos móveis
- **Breakpoints**: Adaptação para mobile, tablet e desktop
- **Menu Hambúrguer**: Navegação mobile com animação

### Animações

- **Scroll Animations**: Elementos aparecem ao rolar a página (IntersectionObserver)
- **Typewriter Effect**: Nomes digitam automaticamente (Testimonials)
- **Hover Effects**: Transições suaves em botões e links
- **Sequential Delays**: Animações em cascata para melhor experiência



### Componentes Principais

-### Header

- Menu hambúrguer animado (mobile)
- Navegação fixa com efeito de scroll
- Logo e botão de login

-### Hero

- Título e subtítulo com animações de entrada
- Dois CTAs principais
- Imagem responsiva com gradiente

-### Features

- Cards com ícones e descrições
- Animações de fade-in ao scroll
- Layout em grid responsivo

-### Gallery

- Grid de imagens com tamanhos variados
- 7 imagens desktop (2 linhas)
- 4 imagens mobile (stack vertical)
- Border-radius e animações

-### Partners

- 6 logos de parceiros
- Animação sequencial de destaque
- Layout horizontal (desktop) e 2x3 (mobile)

-### Testimonials

- 4 depoimentos em grid 2x2
- Efeito de máquina de escrever nos nomes
- Cards com bordas arredondadas

-### CTA

- Banner com texto e imagem
- Botão de conversão
- Gradiente suave

-### Footer

- 4 colunas de links
- Informações de contato
- Ícones de redes sociais



## 🎨 Design System

### Cores

```css
--primary-blue: #5454D4
--dark-900: #000000
--dark-800: #1A1A1A
--dark-700: #2D2D2D
```

### Tipografia

- **Font Family**: Inter (fallback: system-ui)
- **Headings**: Bold, tamanhos responsivos
- **Body**: Regular, 16-18px

### Espaçamentos

- **Sections**: py-20 lg:py-32
- **Gaps**: 24px, 33px (conforme design)



## 🖼️ Observações sobre Imagens

As imagens utilizadas no projeto foram extraídas diretamente do design do Figma para garantir máxima fidelidade visual. Optei por manter as imagens originais do design para:

- ✅ Preservar a identidade visual proposta
- ✅ Garantir qualidade e resolução adequadas
- ✅ Manter consistência com o mockup original
- ✅ Evitar substituições que pudessem comprometer o design

Todas as imagens estão em formato SVG quando possível, garantindo escalabilidade e performance.



## 📱 Responsividade

### Mobile (< 768px)

- Menu hambúrguer
- Stack vertical
- Imagens adaptadas
- Padding reduzido

### Desktop (≥ 768px)

- Menu horizontal
- Grid layouts
- Imagens maiores
- Espaçamentos amplos



## 🔧 Scripts Disponíveis

```bash
npm run dev        # Inicia servidor de desenvolvimento
npm run build      # Gera build de produção
npm run preview    # Preview da build
npm run lint       # Executa linter
```

## 📂 Build

```bash
# Gerar build de produção
npm run build

# Os arquivos estarão em /dist
```

## 🌐 Deploy

O projeto está hospedado no Netlify:

🔗 **[https://adac-softwares.netlify.app](https://adac-softwares.netlify.app)**

### Como fazer deploy

**Netlify:**

```bash
npm run build
# Arraste a pasta dist para o Netlify
```

**Vercel:**

```bash
vercel --prod
```

**GitHub Pages:**

```bash
npm run build
# Configure gh-pages
```



## 🎯 Diferenciais Implementados

✅ Animações e transições suaves (scroll, hover, typewriter)  
✅ Tailwind CSS para estilização  
✅ Componentes modulares e reutilizáveis  
✅ IntersectionObserver para performance  
✅ Menu hambúrguer animado  
✅ Layout pixel-perfect conforme Figma  
✅ **Deploy em produção (Netlify)**  

## 📖 Documentação Adicional

### Estrutura de Componentes

Todos os componentes seguem o padrão:

1. Imports
2. Estados (useState)
3. Efeitos (useEffect)
4. Render (JSX)

### Boas Práticas

- Código limpo e comentado
- Nomes descritivos de variáveis
- Componentes pequenos e focados
- Separação de responsabilidades

## 👤 Autor

Desenvolvido como teste técnico para ADAC Softwares

## 📄 Licença

Este projeto foi desenvolvido para fins de avaliação técnica.
