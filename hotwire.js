(function($) {
  $.fn.extend({
    hotwire: function(delegate) {
      var
        target = this,
        args = $.makeArray(arguments),
        events = args.slice(1, args.length);

      $(events).each(function(i, eventName) {
        var
          titleized = $(eventName.split(/[_:]/)).map(function(i, word) {
            var firstChar = word[0].toUpperCase(),
                rest = word.slice(1, word.length);

            return firstChar + rest;
          }).toArray().join(""),

          handler = delegate["handle" + titleized];

        target.bind(eventName, handler);
      });

      return this;
    }
  });
})(jQuery);
