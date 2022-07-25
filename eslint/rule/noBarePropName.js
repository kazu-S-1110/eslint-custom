"use strict";

// ルール定義。
module.exports = function (context) {
  return {
    TypeAliasDeclaration: (node) => {
      console.log(node);
    },
  };
};

// ルールのオプション定義。今回は使わない。
module.exports.schema = [];
