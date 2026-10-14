// Temporary opt-in diagnostics. Keep this script compatible with older browsers:
// it must run even when an application bundle cannot be parsed or loaded.
export const browserDiagnostics = `
(function () {
  if (!/(?:^|[?&])debug=1(?:&|$)/.test(window.location.search)) return;
  var messages = ['Diagnostico v1: JavaScript inicial executou.', navigator.userAgent];
  var panel;
  function render() {
    if (!document.body) return;
    if (!panel) {
      panel = document.createElement('pre');
      panel.setAttribute('data-ignore', '');
      panel.setAttribute('role', 'status');
      panel.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:2147483647;max-height:32vh;overflow:auto;margin:0;padding:12px;background:#111;color:#fff;font:12px/1.4 monospace;white-space:pre-wrap;overflow-wrap:break-word;';
      document.body.appendChild(panel);
    }
    panel.textContent = messages.join('\\n');
  }
  function log(message) {
    messages.push(String(message).slice(0, 1500));
    if (messages.length > 30) messages.splice(2, 1);
    render();
  }
  window.addEventListener('error', function (event) {
    var target = event.target;
    if (target && target !== window) {
      log('Falha ao carregar recurso: ' + (target.src || target.href || target.tagName));
    } else {
      log('Erro JS: ' + event.message + ' | ' + event.filename + ':' + event.lineno + ':' + event.colno);
    }
  }, true);
  window.addEventListener('unhandledrejection', function (event) {
    var reason = event.reason;
    log('Promise rejeitada: ' + (reason && (reason.stack || reason.message) || reason));
  });
  window.addEventListener('cann:react-ready', function () { log('React montou o botao.'); });
  window.addEventListener('cann:download-click', function () { log('Handler React recebeu o clique.'); });
  document.addEventListener('click', function (event) {
    var target = event.target;
    log('Clique nativo em: ' + (target && target.tagName));
  }, true);
  document.addEventListener('DOMContentLoaded', function () { log('HTML carregado.'); });
  window.setTimeout(function () { log('Pagina ativa apos 10 segundos.'); }, 10000);
  render();
})();
`;
