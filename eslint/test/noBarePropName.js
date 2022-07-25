"use strict";

// テスターを読み込む
var RuleTester = require("eslint").RuleTester;

// テスターを作って実行する
// tester.run(ルール名, ルール定義, テストパターン);
var tester = new RuleTester();
tester.run("noBarePropName", require("../rule/noBarePropName"), {
  valid: [{ code: "hogeProps" }],
  invalid: [
    {
      code: "type Props",
      errors: "Should be Named",
    },
  ],
});
