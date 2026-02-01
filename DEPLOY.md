# 🚀 Guia de Deploy

Este documento fornece instruções detalhadas para fazer deploy da aplicação em diferentes plataformas.

## 📋 Pré-requisitos

Antes de fazer o deploy, certifique-se de:
- ✅ Ter testado a aplicação localmente
- ✅ Ter executado `npm run build` sem erros
- ✅ Ter uma conta na plataforma de deploy escolhida

## 🌐 Deploy na Vercel (Recomendado)

A Vercel oferece deploy gratuito e automático para projetos React.

### Método 1: Via Interface Web

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Import Project"
3. Conecte seu repositório GitHub
4. A Vercel detectará automaticamente as configurações
5. Clique em "Deploy"

### Método 2: Via CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Fazer login
vercel login

# Deploy
vercel

# Deploy para produção
vercel --prod
```

**Configuração automática**: A Vercel detecta automaticamente projetos Vite e aplica as configurações corretas.

## 🔷 Deploy na Netlify

### Método 1: Drag and Drop

1. Execute `npm run build`
2. Acesse [netlify.com](https://netlify.com)
3. Arraste a pasta `dist/` para a área de drop
4. Pronto! Sua aplicação está no ar

### Método 2: Via CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Fazer login
netlify login

# Build e deploy
npm run build
netlify deploy --prod --dir=dist
```

### Método 3: Deploy Contínuo via Git

1. Conecte seu repositório no Netlify
2. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Cada push no GitHub fará deploy automático

## 📄 Deploy no GitHub Pages

1. Instale o pacote gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Adicione ao `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://seu-usuario.github.io/Frontend-Test-ADAC-Softwares"
}
```

3. Atualize `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/Frontend-Test-ADAC-Softwares/'
})
```

4. Execute o deploy:
```bash
npm run deploy
```

## ☁️ Deploy na Render

1. Crie uma conta em [render.com](https://render.com)
2. Clique em "New Static Site"
3. Conecte seu repositório
4. Configure:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
5. Clique em "Create Static Site"

## 🔧 Variáveis de Ambiente

Se sua aplicação usar variáveis de ambiente:

1. Crie um arquivo `.env`:
```env
VITE_API_URL=https://api.example.com
```

2. No código, acesse com:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

3. Configure nas plataformas:
   - **Vercel**: Settings → Environment Variables
   - **Netlify**: Site settings → Environment Variables
   - **Render**: Environment → Add Environment Variable

## ✅ Checklist Pré-Deploy

- [ ] Build local executado com sucesso
- [ ] Testes realizados em diferentes navegadores
- [ ] Responsividade verificada
- [ ] Assets otimizados
- [ ] Links funcionando
- [ ] Performance verificada
- [ ] SEO básico implementado

## 🔍 Verificação Pós-Deploy

Após o deploy, verifique:

1. **Funcionalidade**
   - [ ] Todas as páginas carregam
   - [ ] Links funcionam
   - [ ] Imagens aparecem
   - [ ] Animações funcionam

2. **Performance**
   - [ ] Tempo de carregamento < 3s
   - [ ] Lighthouse score > 90

3. **Responsividade**
   - [ ] Mobile funciona
   - [ ] Tablet funciona
   - [ ] Desktop funciona

## 🐛 Troubleshooting

### Build falha

```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Página em branco após deploy

- Verifique o `base` no `vite.config.js`
- Confirme que os paths dos assets estão corretos
- Verifique o console do navegador para erros

### 404 em rotas

Se estiver usando React Router:
- **Netlify**: Adicione `_redirects` com `/* /index.html 200`
- **Vercel**: Adicione `vercel.json` com configuração de rewrites

## 📊 Monitoramento

Após o deploy, monitore:
- Uptime da aplicação
- Performance metrics
- Erros no console
- Feedback dos usuários

## 🆘 Suporte

Em caso de problemas:
1. Consulte a documentação da plataforma
2. Verifique os logs de build
3. Teste localmente primeiro
4. Entre em contato com o suporte da plataforma

---

**Última atualização**: Janeiro 2026
