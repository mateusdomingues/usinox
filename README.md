# Usinox Usinagem

Site institucional multipágina para uma empresa de usinagem, criado para apresentar serviços técnicos, aplicações e canais de contato com uma linguagem visual direcionada ao setor industrial.

[Ver projeto em produção](https://usinox.vercel.app)

## Objetivo

Transformar informações técnicas da empresa em uma navegação clara para clientes que procuram peças, engrenagens e soluções usinadas sob medida.

## Funcionalidades

- Página inicial institucional
- Páginas de empresa, serviços, projetos e contato
- Navegação responsiva
- Chamada direta para WhatsApp
- Conteúdo empresarial centralizado
- Sitemap e robots
- Imagens otimizadas pelo Next.js
- Transições entre páginas

## Tecnologias

- Next.js
- React
- TypeScript
- Tailwind CSS
- Vercel

## Arquitetura

Informações como nome, contatos, área de atendimento e descrição ficam em `data/company.ts`. Os elementos visuais reutilizáveis são concentrados em `components/site.tsx`, enquanto cada rota mantém apenas a composição e o conteúdo específicos da página.

## Decisões técnicas

- Separar dados institucionais da interface
- Usar rotas reais em vez de concentrar todo o conteúdo em uma única página
- Gerar recursos de indexação dentro do App Router
- Criar componentes editoriais reaproveitáveis
- Priorizar contato comercial com links diretos e textos objetivos

## Executar localmente

```bash
git clone https://github.com/mateusdomingues/usinox.git
cd usinox
npm install
npm run dev
```

Para validar a versão de produção:

```bash
npm run build
```
