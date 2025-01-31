---
title: "Adding HTML Image on Web page"
slug: "html/0_basic/4_images"
stack: "HTML"
---

> In today’s modern digital world, images are everything.

- The `<img>` tag has everything you need to display images on your site. Much like the `<a>` anchor element, `<img>` also contains an attribute.

The attribute features information for your computer regarding the source, height, width and alt text of the image.

The <img> tag normally is written as follows:

<img src="yourimage.jpg" alt="Describe the image" height="X" width="X">

## Support image formats

The image file formats that are most commonly used on the web are:

- [APNG (Animated Portable Network Graphics)](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#apng_animated_portable_network_graphics) — Good choice for lossless animation sequences (GIF is less performant)
- [AVIF (AV1 Image File Format)](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#avif_image) — Good choice for both images and animated images due to high performance.
- [GIF (Graphics Interchange Format)](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#gif_graphics_interchange_format) — Good choice for simple images and animations.
- [JPEG (Joint Photographic Expert Group image)](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Good choice for lossy compression of still images (currently the most popular).
- [PNG (Portable Network Graphics)](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#png_portable_network_graphics) — Good choice for lossless compression of still images (slightly better quality than JPEG).
- [SVG (Scalable Vector Graphics)](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics) — Vector image format. Use for images that must be drawn accurately at different sizes.
- [WebP (Web Picture format)](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#webp_image) — Excellent choice for both images and animated images

✏️: Formats like `WebP` and `AVIF` are recommended as they perform much better than PNG, JPEG, GIF for both still and animated images.

## Image loading errors

-If an error occurs while loading or rendering an image, and an onerror event handler has been set for the error event, that event handler will get called. This can happen in several situations, including:

- The `src` attribute is empty `""` or `null`.
- The `src` [URL](https://developer.mozilla.org/en-US/docs/Glossary/URL) is the same as the URL of the page the user is currently on.
- The image is corrupted in some way that prevents it from being loaded.
- The image's metadata is corrupted in such a way that it's impossible to retrieve its dimensions, and no dimensions were specified in the `<img>` element's attributes.
- The image is in a format not supported by the [user agent](https://developer.mozilla.org/en-US/docs/Glossary/User_agent).

## `<img>` tag [attribues](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes)

This element's attributes include the [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes).

### `src`

- The image [URL](https://developer.mozilla.org/en-US/docs/Glossary/URL). Mandatory for the `<img>` element.
- On browsers supporting `srcset`, `src` is treated like a candidate image with a pixel density descriptor `1x`, unless an image with this pixel density descriptor is already defined in `srcset`, or unless `srcset` contains `w` descriptors.

### `alt`

- Defines text that can replace the image in the page.
- Setting this attribute to an empty string (`alt=""`) indicates that this image is not a key part of the content (it's decoration or a tracking pixel)

### `width`

The intrinsic width of the image in pixels. Must be an integer without a unit.

### `height`

The intrinsic height of the image, in pixels. Must be an integer without a unit.

### `loading`

#### `eager`

Loads the image immediately, regardless of whether or not the image is currently within the visible viewport (this is the default value).

#### `lazy`

Defers loading the image until it reaches a calculated distance from the viewport, as defined by the browser. The intent is to avoid the network and storage bandwidth needed to handle the image until it's reasonably certain that it will be needed. This generally improves the performance of the content in most typical use cases.

✏️: Images with `loading` set to `lazy` will never be loaded if they do not intersect a visible part of an element, even if loading them would change that as unloaded images have a `width` and `height` of 0. Putting `width` and `height` on lazy-loaded images fixes this issue and is a best practice, recommended by the specification. Doing so also helps prevent layout shifts.
