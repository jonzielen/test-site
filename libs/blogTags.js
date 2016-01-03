module.exports = {
    blogify: function(arr, url) {
        return arr.map(function(elem) {
            return '<a href="'+url+elem+'">'+elem+'</a>';
        }).join(' ');
    }
};
