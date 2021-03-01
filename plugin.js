const shouldRemove = (comments) =>
  comments?.map((c) => c.value.trim()).join() === "removethis";
const shouldKeep = (comments) =>
  comments?.map((c) => c.value.trim()).join() === "keepthis";

module.exports = function (Babel) {
  return {
    visitor: {
      BlockStatement(path) {
        if (shouldRemove(path.node.leadingComments)) {
          Babel.types.removeComments(path.node);
          path.remove();
        } else if (shouldKeep(path.node.leadingComments)) {
          Babel.types.removeComments(path.node);
          path.replaceWithMultiple(path.node.body);
        }
      },
    },
  };
};
