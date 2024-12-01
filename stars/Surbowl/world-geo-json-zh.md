---
project: world-geo-json-zh
stars: 196
description: 🌏 简体中文 GeoJSON 世界地图，带有国家（地区）的 ISO 3166 代码、中文简称与全称。A simplified Chinese world map in GeoJSON format, including ISO 3166 codes, Chinese short names, and full names of countries (regions).
url: https://github.com/Surbowl/world-geo-json-zh
---

world-geo-json-zh
=================

简体中文 Geo JSON 世界地图，带有国家（地区）的 ISO 3166 代码、中文简称与全称。含中国南海海域十段线。

A simplified Chinese world map in GeoJSON format, including ISO 3166 codes, Chinese short names, and full names of countries (regions). Contains China's Ten-Dash Line.

🌏 Data

👀 Demo

安装
--

方式 1. js module

```
<script type="module">
    import worldGeoJsonZh from 'https://cdn.jsdelivr.net/npm/@surbowl/world-geo-json-zh/+esm'
</script>
```

方式 2. npm

```
npm i @surbowl/world-geo-json-zh
```

关于数据
----

**JSON 格式**

{
   "type": "FeatureCollection",
   "features": \[
      {
         "type": "Feature",
         "properties": {
            "name": "中国",
            "full\_name": "中华人民共和国",
            "iso\_a2": "CN",   // ISO 3166 Alpha-2 code
            "iso\_a3": "CHN",  // ISO 3166 Alpha-3 code
            "iso\_n3": "156"   // ISO 3166 Numeric code
         },
         "geometry": {
            "type": "MultiPolygon",
            "coordinates": \[ ...... \]
         }
      },
      {
         "type": "Feature",
         "properties": {
            "name": "智利",
            "full\_name": "智利共和国",
            "iso\_a2": "CL",
            "iso\_a3": "CHL",
            "iso\_n3": "152"
         },
         "geometry": {
            "type": "MultiPolygon",
            "coordinates": \[ ...... \]
         }
      },
      
      ......
      
   \]
}

**来源**

本项目基于 Natural Earth 1:50m Cultural Vectors Admin 0 – Countries 地图生成。为降低文件体积，使用 Mapshaper 以 Douglas-Peucker 算法进行简化处理（-simplify dp 10% keep-shapes），Polygon 坐标精确到小数点后 6 位。并参照下列地图对结果进行调整：

-   参照中华人民共和国自然资源部中国地图 1:740万 对开（审图号：GS(2023)2767 号）
    -   调整：台湾合并到中国
-   参照阿里云 DataV 高德地图（审图号：GS京(2022)1061 号）.
    -   增加：中国南海海域十段线与群岛地图
    -   增加：中国钓鱼岛与赤尾屿地图
    -   调整：中国黑瞎子岛界限
    -   调整：中国藏南地区界限
    -   调整：中国西藏阿里地区同印度喜马偕尔邦和北方邦接壤部分界限
-   参照中华人民共和国自然资源部世界地图 1:4100万 对开（审图号：GS(2021)5443 号）
    -   调整：科索沃合并到塞尔维亚
-   参照 Natural Earth 1:10m Cultural Vectors Admin 0 – Countries 地图
    -   增加：美国本土外小岛屿（iso\_a2: UM）地图

**注意事项**

-   如需区分中国内地、中国香港、中国澳门、中国台湾，请查看 Issue 《有没有内地和港澳台四个单独拿出来绘制的版本呢》 ，或参考带注释的 JSONC 文件
    
-   国际标准化组织尚未制定下列国家（地区）的 ISO 3166 代码，无法通过 ISO 3166 代码匹配到下列国家（地区），您可根据业务需要将 -99 替换为自定义值。
    
    name
    
    iso\_a2
    
    iso\_a3
    
    iso\_n3
    
    北塞浦路斯
    
    \-99
    
    \-99
    
    \-99
    
    索马里兰
    
    \-99
    
    \-99
    
    \-99
    
    锡亚琴冰川
    
    \-99
    
    \-99
    
    \-99
    

**引用**

-   \[1\] Natural Earth. 1:50m Cultural Vectors Admin 0 – Countries. （version 5.1.1）.
-   \[2\] Natural Earth. 1:10m Cultural Vectors Admin 0 – Countries. （version 5.1.1）.
-   \[3\] 阿里云 DataV. 高德地图. （审图号：GS京(2022)1061 号）.
-   \[4\] 中华人民共和国自然资源部. 中国地图 1:740万 对开. （审图号：GS(2023)2767 号）.
-   \[5\] 中华人民共和国自然资源部. 世界地图 1:4100万 对开. （审图号：GS(2021)5443 号）.
-   \[6\] 中华人民共和国外交部. 国家（地区）列表.
-   \[7\] 国际标准化组织. ISO 3166 Country Codes.
-   \[8\] 联合国. 会员国名单.
-   \[9\] 联合国. 非自治领土.
-   \[10\] 联合国. 前托管和非自治领土名单.

License
-------

The Unlicense

参与
--

欢迎大家在 Issues 中提供建议、反馈问题❤
