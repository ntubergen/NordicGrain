const form = document.getElementById('briefForm');
const result = document.getElementById('briefResult');
const briefText = document.getElementById('briefText');
const emailBrief = document.getElementById('emailBrief');
const status = document.getElementById('status');
const EMAIL = 'austinwest814@gmail.com';

function value(id, fallback = 'Not specified') {
  const el = document.getElementById(id);
  return el.value.trim() || fallback;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  briefText.textContent = [
    'NORDIC GRAIN WOODWORKING LLC: CUSTOM, HANDMADE, BUILT TO ORDER BRIEF',
    '',
    'Project type: ' + value('projectType'),
    'Room / setting: ' + value('room'),
    'Approximate dimensions: ' + value('dimensions'),
    'Material direction: ' + value('wood'),
    'Ideal timing: ' + value('timeline'),
    '',
    'Project needs:',
    value('details')
  ].join('\n');
  emailBrief.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('Built to order woodworking quote request') + '&body=' + encodeURIComponent(briefText.textContent);
  result.classList.add('visible');
  status.textContent = 'Brief created. Copy, download, or email it when you’re ready.';
  result.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'nearest' });
});

document.getElementById('copyBrief').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(briefText.textContent);
    status.textContent = 'Copied to your clipboard.';
  } catch (_) {
    status.textContent = 'Copy isn’t available here. Select the text above or download the file.';
  }
});

document.getElementById('downloadBrief').addEventListener('click', () => {
  const blob = new Blob([briefText.textContent], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'nordic-grain-project-brief.txt';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  status.textContent = 'Brief downloaded.';
});
