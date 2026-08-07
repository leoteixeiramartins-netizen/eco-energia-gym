# Navbar em cápsula — visual premium

Redesenho apenas do menu de navegação do topo, seguindo a imagem de referência: uma barra flutuante em formato de cápsula, fundo vinho escuro com vidro fosco, links à esquerda e botão branco de destaque à direita.

## O que muda

- Navbar flutuante centralizada, com largura máxima de 1200px e cantos totalmente arredondados (pill).
- Fundo vinho escuro `#2A0F12` com transparência e desfoque (glassmorphism), borda sutil clara e sombra suave `0 8px 30px rgba(0,0,0,0.25)`.
- Altura de aproximadamente 52px, todos os itens alinhados verticalmente ao centro.
- Espaçamento de 24–32px entre os links, tipografia moderna (Inter, já carregada no projeto).
- Item ativo em cápsula com fundo levemente mais escuro, texto branco e peso 500; demais links em cinza-claro com transição suave para branco no hover.
- Botão à direita: "Reservar Assento ↗", fundo branco, texto escuro, padding ~14px 24px, cantos totalmente arredondados e leve escala no hover.
- Versão mobile: os links colapsam em um menu acionado por botão, mantendo a cápsula compacta.

## Links do menu

Uso os rótulos que você listou (Home, Missões, Destinos, Tecnologia, Reservar Voo) apontando para as seções existentes da página. Observação: esses rótulos são de uma marca aeroespacial e não correspondem ao conteúdo atual do EnergyFit (Tecnologia, Como funciona, Dashboard, Impacto). Se preferir, faço o mesmo visual mantendo os rótulos atuais do site — é só dizer.

## Escopo visual

A mudança de paleta (vinho escuro + branco) fica restrita à navbar; o restante do site permanece amarelo e preto. Se quiser realinhar o site inteiro para a nova paleta, isso vira um passo separado.

## Detalhes técnicos

- Novos tokens em `src/styles.css`: `--nav-surface` (#2A0F12 com alpha), `--nav-border`, `--nav-active`, `--nav-muted`, e um utilitário `@utility nav-glass` com `background`, `backdrop-filter: blur(...)`, borda e `box-shadow` (sem prefixos `-webkit-` escritos à mão).
- O componente `Navbar` em `src/routes/index.tsx` é reescrito: container `fixed` com `inset-x-0 top-4`, wrapper `mx-auto max-w-[1200px] px-4`, e a cápsula em `flex h-[52px] items-center justify-between rounded-full`.
- Links renderizados a partir de um array `{ href, label }`; item ativo recebe classe de cápsula ativa.
- Botão CTA usa `rounded-full bg-white text-[#1a0a0c] px-6 py-3.5 transition-transform hover:scale-[1.03]` mapeado por tokens semânticos, com ícone `ArrowUpRight` do lucide-react.
- Menu mobile com estado local `useState` e painel em cápsula abaixo da barra.
- Sem alterações em lógica de negócio ou backend.
