"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    projectRoot: "./src",
    projectName: "blog",
    outDir: './dist/static',
    routes: {
        '/blog/:postId': {
            type: 'contentFolder',
            postId: {
                folder: "./blog"
            }
        }
    }
};
