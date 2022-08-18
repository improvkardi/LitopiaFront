const { src, dest } = require("gulp");
const sharpResponsive = require("gulp-sharp-responsive");

const compress = () =>
  src("src/assets/images/*.{png,jpg}")
    .pipe(
      sharpResponsive({
        formats: [
          // jpeg
          { width: 256, format: "jpeg", rename: { suffix: "-256" } },
          { width: 512, format: "jpeg", rename: { suffix: "-512" } },
          { width: 1024, format: "jpeg", rename: { suffix: "-1024" } },
          { width: 1920, format: "jpeg", rename: { suffix: "-1920" } },
          { width: 2048, format: "jpeg", rename: { suffix: "-2048" } },
          // webp
          { width: 256, format: "webp", rename: { suffix: "-256" } },
          { width: 512, format: "webp", rename: { suffix: "-512" } },
          { width: 1024, format: "webp", rename: { suffix: "-1024" } },
          { width: 1920, format: "webp", rename: { suffix: "-1920" } },
          { width: 2048, format: "webp", rename: { suffix: "-2048" } },
          // avif
          { width: 256, format: "avif", rename: { suffix: "-256" } },
          { width: 512, format: "avif", rename: { suffix: "-512" } },
          { width: 1024, format: "avif", rename: { suffix: "-1024" } },
          { width: 1920, format: "avif", rename: { suffix: "-1920" } },
          { width: 2048, format: "avif", rename: { suffix: "-2048" } }
        ],
      })
    )
    .pipe(dest("src/assets/images/compressed"));

module.exports = {
  compress,
};
