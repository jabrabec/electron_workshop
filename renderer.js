const { ipcRenderer } = require('electron');
const loader = require('monaco-loader');
const fs = require('fs');
const {dialog} = require('electron').remote;

loader().then(monaco => {
  let editor = monaco.editor.create(document.getElementById('container'), {
    language: 'javascript',
    theme: 'vs-dark',
    automaticLayout: true
  })

  document.getElementById('open-button').onclick = () => {
    dialog.showOpenDialog({}, (files) => {
        if (files && files.length > 0) {
            console.log(`Trying to read from ${files[0]}`);
            fs.readFile(files[0], 'utf8', (error, result) => {
                if (!error) {
                    console.log(result);

                    editor.setModel(monaco.editor.createModel(result, 'javascript'));
                }
            });
        }
    })
  }
})

// ipcRenderer.on('navigate', (e, url) => {
//     url = url.slice(7);
    
// })
