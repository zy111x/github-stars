---
project: blind_watermark
stars: 5982
description: Blind&Invisible Watermark ，图片盲水印，提取水印无须原图！
url: https://github.com/guofei9987/blind_watermark
---

blind-watermark
===============

Blind watermark based on DWT-DCT-SVD.

-   **Documentation:** https://BlindWatermark.github.io/blind\_watermark/#/en/
-   **文档：** https://BlindWatermark.github.io/blind\_watermark/#/zh/
-   **中文 readme** README\_cn.md
-   **Source code:** https://github.com/guofei9987/blind\_watermark

install
=======

pip install blind-watermark

For the current developer version:

```
git clone git@github.com:guofei9987/blind_watermark.git
cd blind_watermark
pip install .
```

How to use
==========

Use in bash
-----------

# embed watermark into image:
blind\_watermark --embed --pwd 1234 examples/pic/ori\_img.jpeg "watermark text" examples/output/embedded.png
# extract watermark from image:
blind\_watermark --extract --pwd 1234 --wm\_shape 111 examples/output/embedded.png

Use in Python
-------------

Original Image + Watermark = Watermarked Image

\+ '@guofei9987 开源万岁！' =

See the codes

Embed watermark:

from blind\_watermark import WaterMark

bwm1 \= WaterMark(password\_img\=1, password\_wm\=1)
bwm1.read\_img('pic/ori\_img.jpg')
wm \= '@guofei9987 开源万岁！'
bwm1.read\_wm(wm, mode\='str')
bwm1.embed('output/embedded.png')
len\_wm \= len(bwm1.wm\_bit)
print('Put down the length of wm\_bit {len\_wm}'.format(len\_wm\=len\_wm))

Extract watermark:

bwm1 \= WaterMark(password\_img\=1, password\_wm\=1)
wm\_extract \= bwm1.extract('output/embedded.png', wm\_shape\=len\_wm, mode\='str')
print(wm\_extract)

Output:

> @guofei9987 开源万岁！

### attacks on Watermarked Image

attack method

image after attack

extracted watermark

Rotate 45 Degrees

'@guofei9987 开源万岁！'

Random crop

'@guofei9987 开源万岁！'

Masks

'@guofei9987 开源万岁！'

Vertical cut

'@guofei9987 开源万岁！'

Horizontal cut

'@guofei9987 开源万岁！'

Resize

'@guofei9987 开源万岁！'

Pepper Noise

'@guofei9987 开源万岁！'

Brightness 10% Down

'@guofei9987 开源万岁！'

### embed images

embed watermark:

from blind\_watermark import WaterMark

bwm1 \= WaterMark(password\_wm\=1, password\_img\=1)
\# read original image
bwm1.read\_img('pic/ori\_img.jpg')
\# read watermark
bwm1.read\_wm('pic/watermark.png')
\# embed
bwm1.embed('output/embedded.png')

Extract watermark:

bwm1 \= WaterMark(password\_wm\=1, password\_img\=1)
\# notice that wm\_shape is necessary
bwm1.extract(filename\='output/embedded.png', wm\_shape\=(128, 128), out\_wm\_name\='output/extracted.png', )

attack method

image after attack

extracted watermark

Rotate 45 Degrees

Random crop

Mask

### embed array of bits

See it here

As demo, we embed 6 bytes data:

wm \= \[True, False, True, True, True, False\]

Embed:

from blind\_watermark import WaterMark

bwm1 \= WaterMark(password\_img\=1, password\_wm\=1)
bwm1.read\_ori\_img('pic/ori\_img.jpg')
bwm1.read\_wm(\[True, False, True, True, True, False\], mode\='bit')
bwm1.embed('output/embedded.png')

Extract:

bwm1 \= WaterMark(password\_img\=1, password\_wm\=1, wm\_shape\=6)
wm\_extract \= bwm1.extract('output/打上水印的图.png', mode\='bit')
print(wm\_extract)

Notice that `wm_shape` (shape of watermark) is necessary

The output `wm_extract` is an array of float. set a threshold such as 0.5.

Concurrency
===========

WaterMark(..., processes\=None)

-   `processes` number of processes, can be integer. Default `None`, which means using all processes.

Related Project
---------------

-   text\_blind\_watermark (Embed message into text): https://github.com/guofei9987/text\_blind\_watermark
-   HideInfo（hide as image, hide as sounds, hide as text）：https://github.com/guofei9987/HideInfo
