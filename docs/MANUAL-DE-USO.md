# Manual de uso do ORIZON

## 1. Visão geral

O ORIZON centraliza planejamento, capacidade e execução: recursos, demandas, alocações, bloqueios, feriados, horas extras, atividades internas, apontamentos e indicadores gerenciais.

Acesso: <https://basilioath-collab.github.io/PRD-Orizon/>

Os dados ficam no navegador até serem exportados ou sincronizados. Para uso compartilhado, conecte a pasta `ORIZONData` e/ou o banco JSON em **Sincronização de BD**.

## 2. Primeiro acesso e recursos globais

1. Clique em **Definir agora**.
2. Selecione `ORIZONData`, quando utilizada pela equipe.
3. Escolha um usuário ou crie um novo; o ID automático identifica suas alterações.
4. Navegue pelos módulos na barra lateral.

- **Tema:** alterna claro/escuro e salva a preferência.
- **Busca:** lupa ou `/` foca a pesquisa da tela.
- **Notificações:** o sino reúne atividades atribuídas.
- **Perfil:** nome/avatar abre a configuração do usuário.
- **Pasta de eventos:** o rodapé lateral mostra e altera a conexão.
- **Offline:** o Service Worker mantém o app em cache; mudanças devem ser sincronizadas depois.

## 3. Funcionalidades por módulo

### Visão Geral

- Resume demandas por status e abre listas filtradas.
- Exibe ocupação por recurso/mês, capacidade e planejamento anual.
- Filtra demanda, recurso e período; gráficos, meses e dias têm detalhamento.
- Exporta demandas, recursos, bloqueios, feriados, HE, janelas, Orizon Pack de Análise e planilha geral `.xls`.

### Apontamentos

- Consolida planejado e realizado por projeto/demanda.
- Exibe saldo, andamento, situação e cartões por projeto.
- Sinaliza execução antecipada, fora do prazo e janela planejada excedida.
- Pesquisa, filtra período e abre detalhes/histórico dos apontamentos.

### Demandas

- Cadastra por **Identificação**, **Planejamento**, **Responsáveis e dedicação** e **Observações**.
- Define título, projeto, status, datas, vários responsáveis, período e horas diárias individuais.
- Pesquisa por título e filtra status, recurso e datas, com limpeza individual ou geral.
- Lista/pagina e permite abrir, editar, mudar status, reprogramar, transferir atuação/alocação e excluir.
- Registra apontamentos, etapas, observações e trilha de criação, mudanças, reprogramações, transferências e autores.

### Recursos

- Cadastra, pesquisa, pagina, detalha, edita e exclui recursos internos ou terceiros.
- Referência de capacidade: interno 9 h/dia (8 h na sexta); terceiro 8 h/dia.
- Mostra capacidade, alocações e períodos. Revise vínculos antes de excluir.

### Bloqueio de Janela

- Adiciona, lista, filtra, pagina e exclui bloqueios por recurso, período e tipo/motivo.
- Cadastra e exclui feriados por data/descrição.
- Bloqueios e feriados reduzem capacidade e janelas livres.

### Horas Extras (HE)

- Registra recurso, data, horas e motivo; no fluxo detalhado inclui atividade, prédio, focal, prioridade e observações.
- Lista e exclui HE e as considera na capacidade, inclusive em fins de semana quando aplicável.

### Janelas Livres

- Mostra heatmap mensal por recurso e alterna métrica, mês inicial e quantidade de meses.
- Navega entre meses e abre detalhes de dia/mês, capacidade, ocupação, demandas e indisponibilidades.
- Busca a próxima janela desde uma data e com duração mínima, compara recursos e abre o dia encontrado.

### Lançamentos

- Alterna **Apontamento de demanda** e **Atividade interna**.
- Registra demanda, data, etapa, horas e observação; cria e edita lançamentos.
- Cria, edita e exclui atividade interna com tipo, título, período, horas/dia e observações.
- **Meu dia** resume itens e horas; execuções diárias comparam meta e realizado por recurso.

### Execução diária

- Área restrita por credencial de manutenção.
- Seleciona data/Hoje e compara planejado e executado por recurso.
- Abre lançamentos, gráfico mensal e demandas mensais detalhadas.
- Evidencia ausência de apontamento, saldo diário e desvios.

### Sincronização de BD

- **Banco JSON:** seleciona/troca arquivo, salva, recarrega e liga/desliga autosync.
- Em concorrência, permite mesclar, recarregar a versão nova ou salvar cópia local.
- **Eventos por usuário:** conecta `ORIZONData`, envia outbox, lê/aplica eventos e consolida o snapshot.
- Exporta Snapshot JSON e Events JSONL.
- Importa Snapshot substituindo ou no modo **Adicionar/Mesclar**.
- Exibe auditoria/vínculo; manutenção habilita ações sensíveis e limpeza total dos dados locais.

## 4. Fluxo recomendado

1. Defina usuário e conecte `ORIZONData`.
2. Cadastre recursos, feriados e bloqueios.
3. Cadastre demandas, responsáveis, períodos e dedicação.
4. Consulte janelas antes de assumir/reprogramar trabalho.
5. Registre execução e HE.
6. Acompanhe Apontamentos, Execução diária e Visão Geral.
7. Envie pendências, confira a sincronização e gere backups/exportações.

## 5. Cuidados, formatos e diagnóstico

- Prefira Chrome/Edge atualizado para leitura/gravação de arquivos e pastas.
- Não limpe o navegador antes de gravar/exportar pendências; vínculos e usuário são locais ao navegador.
- Em conflito, use **Mesclar** para preservar os dois lados; recarregar descarta mudanças locais.
- Datas, horas e responsáveis alimentam capacidade, saldo, heatmap e janelas.
- Horas textuais aceitam `02:30` ou `2.5`, conforme indicação da tela.
- A busca ignora diferenças comuns de acentuação/caixa e usa índice em cache.
- Dados ausentes em outro computador: conecte o mesmo banco/pasta e aplique eventos.
- Falha ao salvar: conceda permissão e reconecte o arquivo/pasta.
- Indicador divergente: revise bloqueios, feriados, HE, períodos e dedicação.
- App desatualizado: recarregue; o Service Worker aplicará a versão nova.
