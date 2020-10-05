function sendd() {
    var options = {
        body: 'Hello!'
    }
    var n = new window.Notification('My First notification', options);
    n.onshow = function(helo) {
        alert("sent");
    }
}
