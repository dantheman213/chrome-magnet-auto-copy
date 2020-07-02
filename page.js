document.addEventListener('click', callback, false);

function findLink(el) {
    if (el.tagName == 'A' && el.href) {
        return el.href;
    } else if (el.parentElement) {
        return findLink(el.parentElement);
    } else {
        return null;
    }
};

function callback(e) {
    const link = findLink(e.target);
    if (link == null) { return; }
    if (link.indexOf("magnet:") === 0) {
        e.preventDefault();

        navigator.clipboard.writeText(link)
            .then(() => {
                alert('copied magnet to clipboard');
            })
            .catch(err => {
                alert('error in copying magnet to clipboard: ' + err);
            });
    }
};
