window.addEventListener('DOMContentLoaded', () => {

    function version() {
        let id = ['chrome-version', 'electron-version', 'node-version']
        let nameProc = ['chrome', 'electron', 'node']

        for (let i = 0; i < id.length; i++) {
            let el = document.getElementById(id[i])
            el.innerText = process.versions[nameProc[i]]
        }
    }
    version();

})