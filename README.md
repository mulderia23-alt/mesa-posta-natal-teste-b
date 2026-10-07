# Mesa Posta de Natal — Teste B

Página de vendas natalina independente, criada a partir da referência https://mesapostanatal.vercel.app/, com checkout ativado conforme aprovação do proprietário em 07/10/2026. Os botões de apresentação levam à oferta; o botão de compra abre o checkout.

Este repositório contém somente o teste B. O site original permanece em `mulderia23-alt/atelie-clarice-maciel` e não deve ser alterado como parte deste projeto.

## Uso local

Execute `npm run check` para validar os arquivos e `npm run dev` para abrir a prévia em http://127.0.0.1:4174/.

## Vercel

Importe este repositório como um projeto novo, usando a raiz do repositório. A configuração incluída publica a pasta `dist`. Não conectar este repositório ao projeto Vercel do site original.

Os arquivos do site estão em `dist/index.html`, `dist/style.css`, `dist/app.js` e `dist/img/`. A página está marcada como `noindex, nofollow` enquanto estiver em teste.

## Oferta e rastreamento

- Kit completo: **R$27,90**, pagamento único.
- Checkout: https://pay.wiapy.com/mXwAt-yOyxfN. Parâmetros de campanha e rastreamento da UTMify são preservados.
- Os dois scripts fornecidos pelo proprietário estão no `<head>`, com o pixel UTMify **6abeca713d660345970bf7e3** instalado uma vez. A UTMify direciona `localhost` e `127.0.0.1` a um servidor de desenvolvimento; o pixel fica desativado nesses endereços e em `[::1]`. Domínios publicados usam a API de produção. O script de UTMs também funciona na prévia local.
- Garantia de 7 dias preservada. Outros projetos permanecem separados.
- A fila padrão `fbq` e o SDK Meta são preparados antes da UTMify para evitar erro de inicialização em rolagens precoces. Não são disparados eventos ou inicializados IDs manualmente: a UTMify continua responsável por isso, sem segundo PageView da página.

## Avisos de compras confirmadas

O componente permanece oculto até configurar `data-feed` no elemento `#purchase-toast` com um endpoint público HTTPS do backend, com CORS habilitado. Não incluir tokens nem credenciais na URL. O backend deve retornar apenas dados autorizados para exibição, sem e-mail, telefone ou número de pedido.

Resposta: lista JSON com `id` (identificador público anonimizado), `firstName` (primeiro nome), `lastInitial` (inicial opcional), `status` (`paid`), `paidAt` (data ISO com fuso) e `audience` (`women`). Este último campo deve representar a seleção de clientes mulheres feita pela fonte, sem inferência pelo nome. Exibir somente pagamentos efetivamente confirmados para esta oferta.

Somente compras dos últimos 10 minutos são mostradas, uma vez por sessão e no máximo um aviso a cada 30 segundos. Dados antigos, futuros, pendentes, reembolsados, inválidos ou fora dessa seleção são descartados. Sem fonte configurada, não há avisos nem requisições. Não há vendas fictícias ou nomes de exemplo na página publicada.
