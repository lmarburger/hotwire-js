module("hotwire", {
  teardown: function() {
    // Cleanup attached handlers.
    $("ul#tabs").unbind();
  }
});

var delegate = {
  handleClick: function(e) {
    ok(true, "click handler fired");
  },

  handleItemSelected: function(e) {
    ok(true, "item_selected handler fired");
  },

  handleCustom: function(e) {
    ok(true, "custom handler fired");
  }
};

test("Single event", function() {
  expect(1);

  $("ul#tabs")
    .hotwire("click", delegate)
    .trigger("click");
});

test("Event name with underscores", function() {
  expect(1);

  $("ul#tabs")
    .hotwire("item_selected", delegate)
    .children("#item1")
      .trigger("item_selected");
});

test("Event name with colon", function() {
  expect(1);

  $("ul#tabs")
    .hotwire("item:selected", delegate)
    .children("#item1")
      .trigger("item:selected");
});

test("Multiple events", function() {
  expect(3);

  $("ul#tabs")
    .hotwire("click", "custom", "item_selected", delegate)
    .trigger("click")
    .trigger("custom")
    .children("#item1")
      .trigger("item_selected");
});
