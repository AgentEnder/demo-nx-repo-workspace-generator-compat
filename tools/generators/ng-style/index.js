"use strict";
exports.__esModule = true;
exports.copyFileSchematic = void 0;
function copyFileSchematic(options) {
    return function (tree, _context) {
        var content = tree.read(options.from);
        tree.create(options.to, content);
        return tree;
    };
}
exports.copyFileSchematic = copyFileSchematic;
