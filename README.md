# Hotwire.js

Quick and dirty event wire-ups for JavaScript.

JavaScript port of [Fran Lukesh's Hotwire][hotwire] originally created for AS3.

## Sample Usage

    var delegate = {
        handleClick: function(e) {},
        handleItemSelected: function(e) {},
        handleItemDeselected: function(e) {},
    };

    // Native jQuery
    $("ul#tabs")
        .bind("click", delegate.handleClick)
        .bind("item_selected", delegate.handleItemSelected)
        .bind("item_deselected", delegate.handleItemDeselected);

    // Using Hotwire
    $("ul#tabs").hotwire("click", "item_selected", "item_deselected", delegate);

Hotwire uses convention to wire up event handlers. You simply give it a bunch of
events and a delegate where the handlers live, and it'll wire things up.

Wiring up a click event, Hotwire will look on the delegate supplied for a method
named "handleClick". Simple. It's not rocket science, but it might save you a few keystrokes.

## Note on Patches/Pull Requests

* Fork the project.
* Make your feature addition or bug fix.
* Add tests for it. This is important so I don't break it in a future version
  unintentionally.
* Commit.
* Send me a pull request. Bonus points for topic branches.

## Copyright

Copyright (c) 2010 Larry Marburger. See [LICENSE][] for details.


[hotwire]: http://github.com/lukesh/hotwire
[LICENSE]: http://github.com/lmarburger/hotwire-js/blob/master/LICENSE
