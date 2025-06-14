# Barbearia VK - Landing Page

## Tema e Estrutura da Página

A landing page da Barbearia VK foi desenvolvida para transmitir modernidade, confiança e profissionalismo, focando em uma experiência mobile first, responsiva e acessível. O layout é dividido em seções claras: Banner (Hero), Serviços, Agendamento, Sobre, Contato e Footer.

## Justificativa do Design

### Cores

- **Azul escuro (#1a237e):** transmite confiança, seriedade e modernidade.
- **Azul claro (#2196f3):** usado para destaques e botões, trazendo energia e contraste.
- **Branco e tons de cinza:** garantem leveza e excelente contraste para leitura.

### Tipografia

- **Fonte:** Roboto, moderna, legível e amigável para todos os dispositivos.
- **Tamanhos e pesos:** Hierarquia visual clara, títulos grandes e textos de apoio equilibrados.

### Grid e Responsividade

- **Grid flexível:** Uso de CSS Grid e Flexbox para adaptação perfeita em qualquer tela.
- **Mobile First:** Layout e navegação otimizados para smartphones, com transições suaves e menus acessíveis.

## Funcionalidades em JavaScript

- **Menu Mobile:** Abre/fecha o menu de navegação em telas pequenas.
- **Alternância de Tema:** Botão fixo no canto inferior direito permite alternar entre modo claro e escuro, com persistência da escolha.
- **Notificações:** Mensagens de boas-vindas e feedback de formulários exibidas como notificações animadas, sem alertas intrusivos.
- **Validação de Formulário:** Checagem dos campos do agendamento, exibindo erros de forma amigável.
- **Animações no Scroll:** Elementos principais aparecem suavemente conforme o usuário rola a página.

### Exemplo de Código Comentado

```js
// Alternância de tema claro/escuro
const themeToggle = document.querySelector(".theme-toggle");
themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme); // Salva preferência
});
```

## Boas Práticas Aplicadas

- **HTML semântico:** Uso correto de tags para acessibilidade e SEO.
- **Responsividade total:** Layout adaptável a qualquer dispositivo.
- **Acessibilidade:** Contraste, navegação por teclado, ARIA labels e suporte a preferências de movimento reduzido.
- **Código limpo e comentado:** Separação clara entre estrutura, estilo e comportamento.
- **Performance:** Animações otimizadas e carregamento eficiente.

## Etapas de Desenvolvimento

1. **Planejamento e mockup:** Definição da estrutura e identidade visual.
2. **Criação do HTML semântico:** Estruturação das seções principais.
3. **Estilização com CSS:** Definição da paleta, tipografia, grid e responsividade.
4. **Implementação do JavaScript:** Funcionalidades interativas e animações.
5. **Aprimoramento de acessibilidade:** Ajustes para navegação e contraste.
6. **Testes em diferentes dispositivos:** Garantia de responsividade e usabilidade.
7. **Documentação:** Elaboração deste README e comentários no código.

---

> Projeto desenvolvido para fins de estudo e demonstração de boas práticas em desenvolvimento web moderno. Sinta-se à vontade para customizar e evoluir a landing page da Barbearia VK!

## 🎯 Características

- Design responsivo com abordagem Mobile First
- Progressive Enhancement (funcional sem JavaScript)
- Tema claro/escuro
- Sistema de agendamento interativo
- Validação de formulários
- Acessibilidade (ARIA labels, navegação por teclado)
- Animações suaves
- Mensagens dinâmicas baseadas no horário

## 🛠️ Tecnologias Utilizadas

- HTML5 Semântico
- CSS3 (Grid, Flexbox, Variáveis CSS)
- JavaScript Vanilla
- Font Awesome (ícones)
- Google Fonts (Roboto)

## 🎨 Design

### Cores

- Primária: #2c3e50 (azul escuro)
- Secundária: #e74c3c (vermelho)
- Fundo: #ffffff (branco) / #1a1a1a (escuro)
- Texto: #333333 (cinza escuro) / #ffffff (branco)
- Destaque: #3498db (azul)

### Tipografia

- Fonte principal: Roboto
- Tamanhos responsivos
- Hierarquia clara de títulos

## 📱 Responsividade

- Breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

## ⚡ Funcionalidades JavaScript

1. **Mensagem de Boas-vindas**

   - Exibe "Bom dia", "Boa tarde" ou "Boa noite" baseado no horário

2. **Tema Claro/Escuro**

   - Alterna entre temas
   - Persiste preferência no localStorage

3. **Menu Mobile**

   - Toggle do menu em telas pequenas
   - Animações suaves

4. **Formulário de Agendamento**

   - Validação em tempo real
   - Formatação automática de telefone
   - Feedback visual de erros
   - Simulação de envio

5. **Detalhes Adicionais**
   - Toggle de conteúdo extra
   - Animações de transição

## ♿ Acessibilidade

- Tags semânticas HTML5
- ARIA labels
- Navegação por teclado
- Contraste adequado
- Mensagens de erro claras
- Suporte a leitores de tela

## 🚀 Como Usar

1. Clone o repositório
2. Abra o arquivo `index.html` em seu navegador
3. Para desenvolvimento:
   - Edite os arquivos em `css/` para estilos
   - Modifique `js/script.js` para funcionalidades
   - Atualize `index.html` para estrutura

## 📝 Boas Práticas Implementadas

1. **Separação de Camadas**

   - HTML: Estrutura
   - CSS: Apresentação
   - JS: Comportamento

2. **Performance**

   - CSS otimizado
   - JavaScript modular
   - Carregamento assíncrono

3. **Manutenibilidade**

   - Código comentado
   - Funções reutilizáveis
   - Variáveis CSS

4. **Progressive Enhancement**
   - Funcional sem JavaScript
   - Mensagem de aviso quando JS desabilitado
   - Fallbacks apropriados

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
