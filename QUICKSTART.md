# ⚡ Quick Start Guide

Guia rápido para começar a usar o projeto em 5 minutos!

## 🚀 Início Rápido

### 1️⃣ Clone o Repositório

```bash
git clone https://github.com/seu-usuario/Frontend-Test-ADAC-Softwares.git
cd Frontend-Test-ADAC-Softwares
```

### 2️⃣ Instale as Dependências

```bash
npm install
```

⏱️ Isso levará cerca de 1-2 minutos.

### 3️⃣ Execute o Projeto

```bash
npm run dev
```

🌐 Abra seu navegador em: `http://localhost:5173`

## 🎯 Comandos Principais

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Cria build de produção |
| `npm run preview` | Preview da build de produção |

## 📂 Estrutura Simplificada

```
src/
├── components/     # Todos os componentes da página
├── pages/          # Página Home
├── assets/         # Imagens e ícones
└── index.css       # Estilos globais
```

## 🎨 Modificar Cores

Edite `tailwind.config.js`:

```javascript
colors: {
  primary: {
    blue: '#5454D4',    // Cor azul principal
    pink: '#FF64AE',    // Cor rosa
    yellow: '#FFD700',  // Cor amarela
  }
}
```

## 📝 Adicionar Nova Seção

1. Crie componente em `src/components/MinhaSecao.jsx`
2. Importe em `src/pages/Home.jsx`
3. Adicione no render: `<MinhaSecao />`

## 🐛 Problemas Comuns

### Porta 5173 ocupada
```bash
# Use outra porta
npm run dev -- --port 3000
```

### Dependências não instalam
```bash
# Limpe o cache
rm -rf node_modules package-lock.json
npm install
```

### Build falha
```bash
# Verifique Node.js versão
node --version  # Deve ser ≥ 16

# Reinstale dependências
npm install
```

## 💡 Dicas

- Use `Ctrl + C` para parar o servidor
- Mudanças são aplicadas automaticamente (Hot Reload)
- Veja erros no console do navegador (F12)
- Use extensão React DevTools para debug

## 📚 Próximos Passos

1. Leia o [README.md](README.md) completo
2. Explore os [componentes](src/components/)
3. Veja o [guia de deploy](DEPLOY.md)
4. Customize as cores e conteúdo

## 🆘 Precisa de Ajuda?

- Documentação React: [react.dev](https://react.dev)
- Documentação Tailwind: [tailwindcss.com](https://tailwindcss.com)
- Documentação Vite: [vitejs.dev](https://vitejs.dev)

---

✅ **Pronto para começar!** Execute `npm run dev` e comece a desenvolver!
