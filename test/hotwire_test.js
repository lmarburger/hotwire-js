module("hotwire", {
  teardown: function() {
    // Cleanup attached handlers.
    $("ul#tabs").unbind();
  }
});

var delegate = {
  click: function(e) {
    ok(true, "click handler fired");
  },

  itemSelected: function(e) {
    ok(true, "item_selected handler fired");
  },

  custom: function(e) {
    ok(true, "custom handler fired");
  }
};

test("Single event", function() {
  expect(1);

  $("ul#tabs")
    .hotwire(delegate, "click")
    .trigger("click");
});

test("Event name with underscores", function() {
  expect(1);

  $("ul#tabs")
    .hotwire(delegate, "item_selected")
    .children("#item1")
      .trigger("item_selected");
});

test("Event name with colon", function() {
  expect(1);

  $("ul#tabs")
    .hotwire(delegate, "item:selected")
    .children("#item1")
      .trigger("item:selected");
});

test("Multiple events", function() {
  expect(3);

  $("ul#tabs")
    .hotwire(delegate, "click", "custom", "item_selected")
    .trigger("click")
    .trigger("custom")
    .children("#item1")
      .trigger("item_selected");
});
