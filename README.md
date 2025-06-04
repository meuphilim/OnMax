<div align="center">

# 🚀 OnMax - Inovação Digital

[![Deploy Status](https://github.com/meuphilim/Projeto-OnMax/actions/workflows/deploy.yml/badge.svg)](https://github.com/meuphilim/Projeto-OnMax/actions/workflows/deploy.yml)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)]((https://meuphilim.github.io/OnMax/))
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-purple)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.10-blue)](https://tailwindcss.com/)

**Empresa de tecnologia especializada em desenvolvimento de software e soluções digitais inovadoras em Bonito, Mato Grosso do Sul.**

[🌐 Site ao Vivo](https://usuario.github.io/onmax) • [📱 Demo Mobile](https://usuario.github.io/onmax) • [📧 Contato](mailto:contato@onmax.com.br)

</div>

---

## 📋 Sobre o Projeto

A **OnMax** é uma empresa de tecnologia localizada em Bonito - MS, especializada em transformar ideias em código que revoluciona negócios. Este repositório contém o código-fonte do site institucional da empresa, desenvolvido com as mais modernas tecnologias web.

### ✨ Características Principais

- 🎨 **Design Moderno**: Interface clean e profissional com gradientes e animações sutis
- 📱 **Totalmente Responsivo**: Otimizado para desktop, tablet e mobile
- ⚡ **Performance Otimizada**: Carregamento rápido e experiência fluida
- 🔍 **SEO Otimizado**: Meta tags e estrutura otimizada para mecanismos de busca
- ♿ **Acessibilidade**: Desenvolvido seguindo as melhores práticas de acessibilidade
- 🌙 **Animações Modernas**: Transições suaves e micro-interações

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18.3.1** - Biblioteca JavaScript para interfaces de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Biblioteca de ícones modernas

### Desenvolvimento
- **ESLint** - Linter para qualidade de código
- **PostCSS** - Processador CSS
- **Autoprefixer** - Plugin PostCSS para compatibilidade de navegadores

### Deploy e CI/CD
- **GitHub Actions** - Automação de workflows
- **GitHub Pages** - Hospedagem estática gratuita
- **Workflow automático** - Deploy contínuo a cada push

## 📂 Estrutura do Projeto

```
onmax-website/
├── 📁 public/                 # Arquivos estáticos
├── 📁 src/
│   ├── 📁 components/         # Componentes React reutilizáveis
│   │   ├── Header.tsx         # Cabeçalho e navegação
│   │   ├── Hero.tsx           # Seção principal
│   │   ├── Services.tsx       # Seção de serviços
│   │   ├── Technologies.tsx   # Tecnologias utilizadas
│   │   ├── Portfolio.tsx      # Portfólio de projetos
│   │   ├── Testimonials.tsx   # Depoimentos de clientes
│   │   ├── Contact.tsx        # Formulário de contato
│   │   └── Footer.tsx         # Rodapé
│   ├── 📁 pages/             # Páginas da aplicação
│   ├── 📁 hooks/             # Hooks customizados
│   ├── 📁 lib/               # Utilitários e configurações
│   ├── main.tsx              # Ponto de entrada
│   └── index.css             # Estilos globais
├── 📁 .github/workflows/     # Configurações CI/CD
├── package.json              # Dependências e scripts
├── vite.config.ts           # Configuração do Vite
├── tailwind.config.ts       # Configuração do Tailwind
└── README.md                # Documentação do projeto
```

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn como gerenciador de pacotes

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/meuphilim/onmax.git
   cd onmax-website
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   
   ```

4. **Abra no navegador**
   ```
   http://localhost:8080
   ```

### Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build de produção
npm run lint         # Verificação de código com ESLint
```

## 🌐 Deploy

O site é automaticamente deployado no GitHub Pages através de GitHub Actions. A cada push na branch `main`, o workflow é executado:

1. ✅ Instala dependências
2. 🔨 Executa o build
3. 🚀 Faz deploy no GitHub Pages

### Configuração Manual do Deploy

Para configurar o deploy em sua própria conta:

1. Fork este repositório
2. Vá em Settings → Pages
3. Selecione "GitHub Actions" como source
4. O deploy será automático nos próximos commits

## 📊 Performance

- ⚡ **Lighthouse Score**: 95+ em todas as métricas
- 📦 **Bundle Size**: < 200KB (gzipped)
- 🚀 **First Contentful Paint**: < 1.5s
- 📱 **Mobile Friendly**: 100% responsivo

## 🎨 Design System

### Paleta de Cores
```css
/* Cores Primárias */
--primary: #2563eb          /* Azul principal */
--blue-light: #60a5fa       /* Azul claro */
--gray-950: #030712         /* Texto principal */
--gray-600: #4b5563         /* Texto secundário */

/* Cores de Suporte */
--white: #ffffff
--gray-50: #f9fafb
--gray-100: #f3f4f6
```

### Tipografia
- **Títulos**: Poppins (Google Fonts)
- **Corpo**: Open Sans (Google Fonts)
- **Código**: Monospace

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Diretrizes de Contribuição

- 📝 Mantenha o código limpo e bem documentado
- ✅ Teste suas alterações antes de submeter
- 🎨 Siga os padrões de design estabelecidos
- 📱 Garanta que seja responsivo em todos os dispositivos

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

**OnMax - Inovação Digital**

- 🌐 Website: [onmax.com.br](https://onmax.com.br)
- 📧 Email: contato@onmax.com.br
- 📱 Telefone: +55 (67) 99999-9999
- 📍 Endereço: Bonito - MS, Brasil

---

<div align="center">

**Transformamos ideias em código que revoluciona! 🚀**

[![GitHub stars](https://img.shields.io/github/stars/meuphilim/onmax?style=social)](https://github.com/meuphilim/onmax/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/meuphilim/onmax?style=social)](https://github.com/meuphilim/onmax/network)

</div>
