---
project: OpenCC
stars: 8543
description: Conversion between Traditional and Simplified Chinese
---

Open Chinese Convert 開放中文轉換
===========================

Introduction 介紹
---------------

Open Chinese Convert (OpenCC, 開放中文轉換) is an opensource project for conversions between Traditional Chinese, Simplified Chinese and Japanese Kanji (Shinjitai). It supports character-level and phrase-level conversion, character variant conversion and regional idioms among Mainland China, Taiwan and Hong Kong. This is not translation tool between Mandarin and Cantonese, etc.

中文簡繁轉換開源項目，支持詞彙級別的轉換、異體字轉換和地區習慣用詞轉換（中國大陸、臺灣、香港、日本新字體）。不提供普通話與粵語的轉換。

Discussion (Telegram): https://t.me/open\_chinese\_convert

### Features 特點

-   嚴格區分「一簡對多繁」和「一簡對多異」。
-   完全兼容異體字，可以實現動態替換。
-   嚴格審校一簡對多繁詞條，原則爲「能分則不合」。
-   支持中國大陸、臺灣、香港異體字和地區習慣用詞轉換，如「裏」「裡」、「鼠標」「滑鼠」。
-   詞庫和函數庫完全分離，可以自由修改、導入、擴展。

Installation 安裝
---------------

### Package Managers 包管理器

-   Debian
-   Ubuntu
-   Fedora
-   Arch Linux
-   Mac
-   Bazel
-   Node.js
-   Python

### Prebuilt 預編譯

-   Windows (x86\_64): Latest build
-   Windows (x86): Latest build

Usage 使用
--------

### Online demo 線上轉換展示

Warning: **This is NOT an API.** You will be banned if you make calls programmatically.

https://opencc.byvoid.com/

### Node.js

npm `npm install opencc`

#### JavaScript

const OpenCC \= require('opencc');
const converter \= new OpenCC('s2t.json');
converter.convertPromise("汉字").then(converted \=> {
  console.log(converted);  // 漢字
});

#### TypeScript

import { OpenCC } from 'opencc';
async function main() {
  const converter: OpenCC \= new OpenCC('s2t.json');
  const result: string \= await converter.convertPromise('汉字');
  console.log(result);
}

See demo.js and ts-demo.ts.

### Python

`pip install opencc` (Windows, Linux, Mac)

import opencc
converter \= opencc.OpenCC('s2t.json')
converter.convert('汉字')  \# 漢字

### C++

#include "opencc.h"

int main() {
  const opencc::SimpleConverter converter("s2t.json");
  converter.Convert("汉字");  // 漢字
  return 0;
}

Full example with Bazel

### C

#include "opencc.h"

int main() {
  opencc\_t opencc \= opencc\_open("s2t.json");
  const char\* input \= "汉字";
  char\* converted \= opencc\_convert\_utf8(opencc, input, strlen(input));  // 漢字
  opencc\_convert\_utf8\_free(converted);
  opencc\_close(opencc);
  return 0;
}

Document 文檔: https://byvoid.github.io/OpenCC/

### Command Line

-   `opencc --help`
-   `opencc_dict --help`
-   `opencc_phrase_extract --help`

### Others (Unofficial)

-   Swift (iOS): SwiftyOpenCC
-   iOSOpenCC (pod): iOSOpenCC
-   Java: opencc4j
-   Android: android-opencc
-   PHP: opencc4php
-   Pure JavaScript: opencc-js
-   WebAssembly: wasm-opencc
-   Browser Extension: opencc-extension
-   Go (Pure): OpenCC for Go
-   Dart (native-assets): opencc-dart

### Configurations 配置文件

#### 預設配置文件

-   `s2t.json` Simplified Chinese to Traditional Chinese 簡體到繁體
-   `t2s.json` Traditional Chinese to Simplified Chinese 繁體到簡體
-   `s2tw.json` Simplified Chinese to Traditional Chinese (Taiwan Standard) 簡體到臺灣正體
-   `tw2s.json` Traditional Chinese (Taiwan Standard) to Simplified Chinese 臺灣正體到簡體
-   `s2hk.json` Simplified Chinese to Traditional Chinese (Hong Kong variant) 簡體到香港繁體
-   `hk2s.json` Traditional Chinese (Hong Kong variant) to Simplified Chinese 香港繁體到簡體
-   `s2twp.json` Simplified Chinese to Traditional Chinese (Taiwan Standard) with Taiwanese idiom 簡體到繁體（臺灣正體標準）並轉換爲臺灣常用詞彙
-   `tw2sp.json` Traditional Chinese (Taiwan Standard) to Simplified Chinese with Mainland Chinese idiom 繁體（臺灣正體標準）到簡體並轉換爲中國大陸常用詞彙
-   `t2tw.json` Traditional Chinese (OpenCC Standard) to Taiwan Standard 繁體（OpenCC 標準）到臺灣正體
-   `hk2t.json` Traditional Chinese (Hong Kong variant) to Traditional Chinese 香港繁體到繁體（OpenCC 標準）
-   `t2hk.json` Traditional Chinese (OpenCC Standard) to Hong Kong variant 繁體（OpenCC 標準）到香港繁體
-   `t2jp.json` Traditional Chinese Characters (Kyūjitai) to New Japanese Kanji (Shinjitai) 繁體（OpenCC 標準，舊字體）到日文新字體
-   `jp2t.json` New Japanese Kanji (Shinjitai) to Traditional Chinese Characters (Kyūjitai) 日文新字體到繁體（OpenCC 標準，舊字體）
-   `tw2t.json` Traditional Chinese (Taiwan standard) to Traditional Chinese 臺灣正體到繁體（OpenCC 標準）

Build 編譯
--------

### Build with CMake

#### Linux & Mac OS X

g++ 4.6+ or clang 3.2+ is required.

make

#### Windows Visual Studio:

build.cmd

### Build with Bazel

bazel build //:opencc
bazel test --test\_output=all //src/... //data/... //test/...

### Test 測試

#### Linux & Mac OS X

```
make test
```

#### Windows Visual Studio:

test.cmd

### Benchmark 基準測試

```
make benchmark
```

Example results (from Github CI):

```
1: ------------------------------------------------------------------
1: Benchmark                        Time             CPU   Iterations
1: ------------------------------------------------------------------
1: BM_Initialization/hk2s        1.56 ms         1.56 ms          442
1: BM_Initialization/hk2t       0.144 ms        0.144 ms         4878
1: BM_Initialization/jp2t       0.260 ms        0.260 ms         2604
1: BM_Initialization/s2hk        23.8 ms         23.8 ms           29
1: BM_Initialization/s2t         25.6 ms         25.6 ms           28
1: BM_Initialization/s2tw        24.0 ms         23.9 ms           30
1: BM_Initialization/s2twp       24.6 ms         24.6 ms           28
1: BM_Initialization/t2hk       0.052 ms        0.052 ms        12897
1: BM_Initialization/t2jp       0.141 ms        0.141 ms         5012
1: BM_Initialization/t2s         1.30 ms         1.30 ms          540
1: BM_Initialization/tw2s        1.39 ms         1.39 ms          529
1: BM_Initialization/tw2sp       1.69 ms         1.69 ms          426
1: BM_Initialization/tw2t       0.089 ms        0.089 ms         7707
1: BM_Convert2M                   582 ms          582 ms            1
1: BM_Convert/100                1.07 ms         1.07 ms          636
1: BM_Convert/1000               11.0 ms         11.0 ms           67
1: BM_Convert/10000               113 ms          113 ms            6
1: BM_Convert/100000             1176 ms         1176 ms            1
```

Projects using OpenCC 使用 OpenCC 的項目
-----------------------------------

Please update if your project is using OpenCC.

-   ibus-pinyin
-   fcitx
-   rimeime
-   libgooglepinyin
-   ibus-libpinyin
-   alfred-chinese-converter
-   GoldenDict

License 許可協議
------------

Apache License 2.0

Third Party Library 第三方庫
------------------------

-   darts-clone BSD License
-   marisa-trie BSD License
-   tclap MIT License
-   rapidjson MIT License
-   Google Test BSD License

All these libraries are statically linked by default.

Change History 版本歷史
-------------------

-   NEWS

### Links 相關鏈接

-   Introduction 詳細介紹 https://github.com/BYVoid/OpenCC/wiki/%E7%B7%A3%E7%94%B1
-   現代漢語常用簡繁一對多字義辨析表 http://ytenx.org/byohlyuk/KienxPyan

Contributors 貢獻者
----------------

-   BYVoid
-   佛振
-   Peng Huang
-   LI Daobing
-   Kefu Chai
-   Kan-Ru Chen
-   Ma Xiaojun
-   Jiang Jiang
-   Ruey-Cheng Chen
-   Paul Meng
-   Lawrence Lau
-   瑾昀
-   內木一郎
-   Marguerite Su
-   Brian White
-   Qijiang Fan
-   LEOYoon-Tsaw
-   Steven Yao
-   Pellaeon Lin
-   stony
-   steelywing
-   吕旭东
-   Weng Xuetian
-   Ma Tao
-   Heinz Wiesinger
-   J.W
-   Amo Wu
-   Mark Tsai
-   Zhe Wang
-   sgqy
-   Qichuan (Sean) ZHANG
-   Flandre Scarlet
-   宋辰文
-   iwater
-   Xpol Wan
-   Weihang Lo
-   Cychih
-   kyleskimo
-   Ryuan Choi
-   Prcuvu
-   Tony Able
-   Xiao Liang

Please feel free to update this list if you have contributed OpenCC.
