# Hotwire.js

Quick and dirty event wire-ups for JavaScript.

JavaScript port of [Fran Lukesh's Hotwire][hotwire] originally created for AS3.

## Sample Usage

    $(function() {
        var delegate = {
            handleClick: function(e) {},
            handleItemSelected: function(e) {},
            handleItemDeselected: function(e) {},
        };

        $("ul#tabs")
        .hotwire("click", "item_selected", "item_deselected", delegate);
    }


[hotwire]: http://github.com/lukesh/hotwire
