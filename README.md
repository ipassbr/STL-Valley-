# 🏕️ STL Valley Landing Page

> Landing page oficial do camping STL Valley - Festival STL 2026

[![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.9-38bdf8)](https://tailwindcss.com/)
[![Tests](https://img.shields.io/badge/Tests-35%2B%20passing-success)](./hooks/__tests__)

---

## 📋 Sobre o Projeto

Landing page moderna e responsiva para o camping oficial do Festival STL 2026 em São Tomé das Letras. Desenvolvida com Next.js 16, React 19 e TypeScript, oferecendo uma experiência completa de hospedagem com estrutura premium, shows exclusivos e comodidades de alto nível.

**Evento:** 03 a 10 de Junho de 2026  
**Localização:** São Tomé das Letras, MG

---

## ✨ Features

- 🎨 **Design Moderno** - Interface responsiva e acessível
- ⚡ **Performance Otimizada** - Imagens otimizadas, lazy loading, code splitting
- 🎯 **TypeScript** - Tipagem forte para maior segurança
- 🧪 **Testes** - 35+ testes unitários com Vitest
- 🎨 **Tailwind CSS v4** - Estilização moderna e customizável
- 📱 **Mobile First** - Totalmente responsivo
- ♿ **Acessível** - Seguindo boas práticas de acessibilidade
- 🔄 **CI/CD** - Pipeline automatizado com GitHub Actions

---

## 🚀 Início Rápido

### Pré-requisitos

- Node.js 20.x ou superior
- npm 9.x ou superior

### Instalação

```bash
# Clone o repositório
git clone <repository-url>
cd stl-valley-landing-page

# Instale as dependências
npm install --legacy-peer-deps

# Execute em desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 📁 Estrutura do Projeto

```
stl-valley-landing-page/
├── app/                    # Next.js App Router
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout raiz
│   └── page.tsx           # Página principal
├── components/
│   ├── layout/            # Componentes de layout
│   │   ├── header.tsx
│   │   └── footer.tsx
│   ├── sections/          # Seções da página
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── artists-section.tsx
│   │   ├── amenities-section.tsx
│   │   ├── pricing-section.tsx
│   │   ├── location-section.tsx
│   │   └── faq-section.tsx
│   └── ui/                # Componentes UI (shadcn/ui)
├── config/                # Configurações centralizadas
│   ├── site.ts            # Datas e configurações do evento
│   ├── accommodations.ts  # Planos de hospedagem
│   ├── artists.ts         # Lista de artistas
│   ├── faqs.ts            # Perguntas frequentes
│   ├── amenities.ts       # Comodidades
│   └── navigation.ts      # Navegação
├── hooks/                 # Hooks customizados
│   ├── use-countdown.ts
│   ├── use-scroll.ts
│   ├── use-mobile-menu.ts
│   └── use-active-category.ts
├── types/                 # Tipos TypeScript compartilhados
├── lib/                   # Utilitários
└── public/                # Assets estáticos
```

---

## 🛠️ Tecnologias

### Core
- **Next.js 16.0.3** - Framework React com App Router
- **React 19.2.0** - Biblioteca UI
- **TypeScript 5.x** - Tipagem estática
- **Tailwind CSS 4.1.9** - Framework CSS utility-first

### UI Components
- **shadcn/ui** - Componentes acessíveis e customizáveis
- **Radix UI** - Primitivos UI acessíveis
- **Lucide React** - Ícones

### Ferramentas de Desenvolvimento
- **ESLint** - Linter de código
- **Prettier** - Formatador de código
- **Vitest** - Framework de testes
- **Testing Library** - Utilitários de teste

### Outras
- **date-fns** - Manipulação de datas
- **@vercel/analytics** - Analytics

---

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Inicia servidor de desenvolvimento

# Build
npm run build            # Cria build de produção
npm start                 # Inicia servidor de produção

# Qualidade de Código
npm run lint             # Executa ESLint
npm run lint:fix         # Corrige problemas de lint automaticamente
npm run format           # Formata código com Prettier
npm run format:check     # Verifica formatação sem alterar

# Testes
npm test                 # Executa testes
npm run test:watch       # Executa testes em modo watch
npm run test:coverage    # Executa testes com cobertura
```

---

## ✅ Melhorias Implementadas

### Quick Wins (100% Completo) ✅

1. **✅ Correção de Data do Evento**
   - Data centralizada em `config/site.ts`
   - Hook `useCountdown` com suporte a timezone
   - Evento: 03 a 10 de Junho de 2026

2. **✅ Configuração ESLint e Prettier**
   - ESLint configurado (next/core-web-vitals)
   - Prettier funcionando perfeitamente
   - Scripts de formatação e lint

3. **✅ Otimização Next.js**
   - Todas as imagens usando `<Image>` do Next.js
   - Lazy loading implementado
   - Otimização de imagens habilitada

4. **✅ Extração de Dados Hardcoded**
   - Dados centralizados em `config/`
   - Separação de responsabilidades
   - Melhor manutenibilidade

5. **✅ Fixar Versões**
   - Versões fixadas (sem "latest")
   - Maior estabilidade

### Médio Prazo (100% Completo) ✅

6. **✅ Testes Básicos**
   - Vitest configurado
   - 35+ testes passando
   - Cobertura de hooks e configs

7. **✅ Reorganização de Estrutura**
   - `components/sections/` - Seções organizadas
   - `components/layout/` - Layout separado
   - `types/` - Tipos centralizados

8. **✅ Hooks Customizados**
   - `useCountdown` - Countdown timer
   - `useScroll` - Detecção de scroll
   - `useMobileMenu` - Menu mobile
   - `useActiveCategory` - Categoria ativa

9. **✅ CI/CD Básico**
   - GitHub Actions configurado
   - Pipeline: lint, test, build
   - Automatização completa

---

## 📊 Status do Projeto

**Progresso:** 9/13 itens (69.2%) ✅

- ✅ Quick Wins: 5/5 completos (100%)
- ✅ Médio Prazo: 4/4 completos (100%)
- ⏳ Longo Prazo: 0/4 pendentes

**Build Status:** ✅ Funcionando perfeitamente  
**Testes:** ✅ 35+ testes passando  
**TypeScript:** ✅ Sem erros  
**Lint:** ✅ Sem erros

---

## 🧪 Testes

O projeto possui 35+ testes unitários cobrindo:

- ✅ Hooks customizados (`useCountdown`, `useScroll`, `useMobileMenu`, `useActiveCategory`)
- ✅ Configurações (`site.ts`, `accommodations.ts`, `artists.ts`)

```bash
# Executar todos os testes
npm test

# Modo watch
npm run test:watch

# Com cobertura
npm run test:coverage
```

---

## 🔄 CI/CD

Pipeline automatizado com GitHub Actions (`.github/workflows/ci.yml`):

- ✅ Checkout do código
- ✅ Setup Node.js 20.x
- ✅ Instalação de dependências
- ✅ Execução do ESLint
- ✅ Verificação de formatação
- ✅ Execução de testes
- ✅ Build do projeto
- ✅ Verificação TypeScript

---

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Code Style

- Use Prettier para formatação: `npm run format`
- Siga as regras do ESLint: `npm run lint`
- Escreva testes para novas funcionalidades
- Mantenha a estrutura de pastas organizada

---

## 📄 Licença

Este projeto é privado e propriedade de **STL Clube de Camping e Entretenimento LTDA**.

---

## 📞 Contato

**Email:** contato@stlvalley.com.br  
**Website:** [stlvalley.com.br](https://stlvalley.com.br)

---

**Desenvolvido com ❤️ para o Festival STL 2026**

