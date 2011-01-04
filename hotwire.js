(function($) {
  $.fn.extend({
    hotwire: function(delegate) {
      var target = this,
          args   = $.makeArray(arguments),
          events = args.slice(1, args.length);

      $(events).each(function(i, eventName) {
        var words     = $(eventName.split(/[_:.]/)),
            titleized = words.map(function(i, word) {
              if (i === 0) { return word; }

              var firstChar = word.charAt(0).toUpperCase(),
                  rest      = word.slice(1, word.length);

              return firstChar + rest;
            }).toArray().join(""),

            handler = delegate[titleized];

        target.bind(eventName, handler);
      });

      return this;
    }
  });
})(jQuery);
