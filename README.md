# Task Timer
Projeto construído a partir do curso Formação React da Rocketseat<br /><br />
O projeto é um temporizador de tarefas, onde o usuário da um nome para a tarefa e coloca um tempo estimado para o término da mesma.<br />
O usuário poderá ver o histórico de tarefas acessando a aba de **Histórico**.<br />
O histórico é salvo no **localStorage**.

<img src="https://github.com/iammatheus/task-timer/blob/master/src/assets/home.png" alt="" width="600" />
<img src="https://github.com/iammatheus/task-timer/blob/master/src/assets/countdown.png" alt="" width="200" />

Ao finalizar a tarefa é gerado uma lista com: 
- nome da tarefa
- duração
- data de início
- status
  - Em andamento
  - Concluído
  - Interrompido

<img src="https://github.com/iammatheus/task-timer/blob/master/src/assets/history.png" alt="" width="600" />

Melhorias feitas:
- Inclusão de notificações ao finalizar tarefa
   - Mensagem
   - Som
- Alteração de logo e nome
- Alteração do tema, mudando as cores para azuis
- Ao terminar o tempo da tarefa o nome do projeto volta a ser apresentado na aba

### Tecnologias utilizadas
- react
- typescript
- vite      
- zod
- hookform
- react-router
- reducer, immer
- styled-components
- eslint para padronização de código
