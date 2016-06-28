app.factory('stringService', function () {
    return {
        transformString: function (input) {
            if (input != '') {
                var output = '';
                for (var i = 0; i < input.length; i++) {
                    if (i > 0 && input[i] == input[i].toUpperCase()) {
                        output += " ";
                    }
                    output += input[i];
                }
                return output;
            }
        },
        toLower: function (input) {
            if (!input)
                return 'No data';
            else
                return input.toLowerCase();
        }

    }
});