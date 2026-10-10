// const toolbar = document.createElement('div');
// toolbar.className = 'pwa-toolbar';
// toolbar.innerHTML = '<span role="status" id="pwa-status">Підготовка офлайн…</span><button hidden id="pwa-install">Встановити</button>';
// document.body.prepend(toolbar);
// const status = document.getElementById('pwa-status');
// const install = document.getElementById('pwa-install');
// let prompt;
// window.addEventListener('beforeinstallprompt', event => {
//     event.preventDefault(); prompt = event; install.hidden = false;
// });
// install.addEventListener('click', async () => {
//     if (!prompt) return;
//     await prompt.prompt(); await prompt.userChoice; prompt = null; install.hidden = true;
// });
window.addEventListener('appinstalled', () => { install.hidden = true; });
if ('serviceWorker' in navigator && window.isSecureContext) {
    navigator.serviceWorker.register('./sw.js').then(async () => {
        await navigator.serviceWorker.ready;
    }).catch(() => { status.textContent = 'Не вдалося підготувати офлайн. Перезавантажте з інтернетом.'; });
} else {
    status.textContent = 'Для офлайн-встановлення відкрийте додаток через HTTPS.';
}
