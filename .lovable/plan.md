# Recuperar o preview do EnergyFit

## Objetivo

Fazer o painel de preview voltar a exibir o site sem alterar o visual, conteúdo ou funcionalidades do EnergyFit.

## Diagnóstico confirmado

- A rota `/` responde com HTTP 200.
- O site renderiza normalmente em um navegador limpo, incluindo navbar, hero e imagem principal.
- Não há erros de JavaScript nem falhas recentes no servidor.
- O painel aberto não respondeu ao canal de comunicação do preview, indicando que a falha está na sessão do painel, e não no código do site.

## Etapas

1. Restabelecer a sessão de visualização do editor e recarregar a rota `/`.
2. Confirmar que o painel volta a mostrar o EnergyFit e responde aos controles do preview.
3. Se a sessão continuar travada, abrir o preview em uma nova aba como caminho alternativo e verificar a mesma página.
4. Não modificar arquivos do site, salvo se surgir um erro real após a reconexão.

## Critério de conclusão

O painel ou a visualização externa deve mostrar o site completo, mantendo exatamente a identidade amarela e preta existente.