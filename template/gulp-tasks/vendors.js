"use strict";
var gulp = require("gulp");
var concat = require("gulp-concat");
var merge = require("merge-stream");
const del = require("del");

gulp.task("clean:vendors", function () {
  return del(["./assets/vendors/**/*"]);
});

/*Building vendor scripts needed for basic template rendering*/
gulp.task("buildBaseVendorScripts", function () {
  return gulp
    .src([
      "./node_modules/jquery/dist/jquery.min.js",
      "./node_modules/popper.js/dist/umd/popper.min.js",
      "./node_modules/bootstrap/dist/js/bootstrap.min.js",
      "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.min.js",
    ])
    .pipe(concat("vendor.bundle.base.js"))
    .pipe(gulp.dest("./assets/vendors/js"));
});

/*Building vendor styles needed for basic template rendering*/
gulp.task("buildBaseVendorStyles", function () {
  return gulp
    .src(["./node_modules/perfect-scrollbar/css/perfect-scrollbar.css"])
    .pipe(concat("vendor.bundle.base.css"))
    .pipe(gulp.dest("./assets/vendors/css"));
});

/*Scripts for addons*/
gulp.task("buildOptionalVendorScripts", function () {
  var aScript1 = gulp
    .src(["node_modules/chart.js/dist/Chart.min.js"])
    .pipe(gulp.dest("./assets/vendors/chart.js"));

  var aScript2 = gulp
    .src(["node_modules/jquery-bar-rating/dist/jquery.barrating.min.js"])
    .pipe(gulp.dest("./assets/vendors/jquery-bar-rating"));
  var aScript5 = gulp
    .src(["node_modules/moment/moment.js"])
    .pipe(gulp.dest("./assets/vendors/moment"));
  var aScript10 = gulp
    .src(["node_modules/flot/jquery.flot.js"])
    .pipe(gulp.dest("./assets/vendors/flot"));
  var aScript11 = gulp
    .src(["node_modules/flot/jquery.flot.resize.js"])
    .pipe(gulp.dest("./assets/vendors/flot"));
  var aScript12 = gulp
    .src(["node_modules/flot/jquery.flot.categories.js"])
    .pipe(gulp.dest("./assets/vendors/flot"));
  var aScript13 = gulp
    .src(["node_modules/flot/jquery.flot.fillbetween.js"])
    .pipe(gulp.dest("./assets/vendors/flot"));
  var aScript14 = gulp
    .src(["node_modules/flot/jquery.flot.stack.js"])
    .pipe(gulp.dest("./assets/vendors/flot"));
  var aScript15 = gulp
    .src(["node_modules/flot/jquery.flot.pie.js"])
    .pipe(gulp.dest("./assets/vendors/flot"));
  var aScript23 = gulp
    .src(["node_modules/pwstabs/assets/jquery.pwstabs.min.js"])
    .pipe(gulp.dest("./assets/vendors/pwstabs"));
  var aScript29 = gulp
    .src(["node_modules/jquery-file-upload/js/jquery.uploadfile.min.js"])
    .pipe(gulp.dest("./assets/vendors/jquery-file-upload"));
  var aScript30 = gulp
    .src(["node_modules/jquery-asColor/dist/jquery-asColor.min.js"])
    .pipe(gulp.dest("./assets/vendors/jquery-asColor"));
  var aScript31 = gulp
    .src(["node_modules/jquery-asGradient/dist/jquery-asGradient.min.js"])
    .pipe(gulp.dest("./assets/vendors/jquery-asGradient"));
  var aScript32 = gulp
    .src(["node_modules/jquery-asColorPicker/dist/jquery-asColorPicker.min.js"])
    .pipe(gulp.dest("./assets/vendors/jquery-asColorPicker"));
  var aScript34 = gulp
    .src(["node_modules/moment/min/moment.min.js"])
    .pipe(gulp.dest("./assets/vendors/moment"));
  var aScript38 = gulp
    .src(["node_modules/typeahead.js/dist/typeahead.bundle.min.js"])
    .pipe(gulp.dest("./assets/vendors/typeahead.js"));
  var aScript39 = gulp
    .src(["node_modules/select2/dist/js/select2.min.js"])
    .pipe(gulp.dest("./assets/vendors/select2"));
  var aScript40 = gulp
    .src(["node_modules/codemirror/lib/codemirror.js"])
    .pipe(gulp.dest("./assets/vendors/codemirror"));
  var aScript41 = gulp
    .src(["node_modules/codemirror/mode/javascript/javascript.js"])
    .pipe(gulp.dest("./assets/vendors/codemirror"));
  var aScript42 = gulp
    .src(["node_modules/codemirror/mode/shell/shell.js"])
    .pipe(gulp.dest("./assets/vendors/codemirror"));
  var aScript46 = gulp
    .src(["node_modules/bootstrap-maxlength/bootstrap-maxlength.min.js"])
    .pipe(gulp.dest("./assets/vendors/bootstrap-maxlength"));
  var aScript65 = gulp
    .src(["node_modules/twbs-pagination/jquery.twbsPagination.min.js"])
    .pipe(gulp.dest("./assets/vendors/twbs-pagination"));
  var ascript71 = gulp
    .src(["./node_modules/jquery.easing/jquery.easing.min.js"])
    .pipe(gulp.dest(["./assets/vendors/jquery.easing"]));
  return merge(
    aScript1,
    aScript2,
    aScript5,
    aScript10,
    aScript11,
    aScript12,
    aScript13,
    aScript14,
    aScript15,
    aScript23,
    aScript29,
    aScript30,
    aScript31,
    aScript32,
    aScript34,
    aScript38,
    aScript39,
    aScript40,
    aScript41,
    aScript42,
    aScript46,
    aScript65,
    ascript71
  );
});

/*Styles for addons*/
gulp.task("buildOptionalVendorStyles", function () {
  var aStyle1 = gulp
    .src(["./node_modules/@mdi/font/css/materialdesignicons.min.css"])
    .pipe(gulp.dest("./assets/vendors/mdi/css"));
  var aStyle2 = gulp
    .src(["./node_modules/@mdi/font/fonts/*"])
    .pipe(gulp.dest("./assets/vendors/mdi/fonts"));
  var aStyle3 = gulp
    .src(["./node_modules/font-awesome/css/font-awesome.min.css"])
    .pipe(gulp.dest("./assets/vendors/font-awesome/css"));
  var aStyle4 = gulp
    .src(["./node_modules/font-awesome/fonts/*"])
    .pipe(gulp.dest("./assets/vendors/font-awesome/fonts"));
  var aStyle5 = gulp
    .src(["./node_modules/flag-icon-css/css/flag-icon.min.css"])
    .pipe(gulp.dest("./assets/vendors/flag-icon-css/css"));
  var aStyle6 = gulp
    .src(["./node_modules/flag-icon-css/flags/**/*"])
    .pipe(gulp.dest("./assets/vendors/flag-icon-css/flags"));
  var aStyle16 = gulp
    .src(["node_modules/jquery-bar-rating/dist/themes/fontawesome-stars.css"])
    .pipe(gulp.dest("./assets/vendors/jquery-bar-rating"));
  var aStyle17 = gulp
    .src(["node_modules/jquery-bar-rating/dist/themes/bars-1to10.css"])
    .pipe(gulp.dest("./assets/vendors/jquery-bar-rating"));
  var aStyle18 = gulp
    .src(["node_modules/jquery-bar-rating/dist/themes/bars-horizontal.css"])
    .pipe(gulp.dest("./assets/vendors/jquery-bar-rating"));
  var aStyle19 = gulp
    .src(["node_modules/jquery-bar-rating/dist/themes/bars-movie.css"])
    .pipe(gulp.dest("./assets/vendors/jquery-bar-rating"));
  var aStyle20 = gulp
    .src(["node_modules/jquery-bar-rating/dist/themes/bars-pill.css"])
    .pipe(gulp.dest("./assets/vendors/jquery-bar-rating"));
  var aStyle21 = gulp
    .src(["node_modules/jquery-bar-rating/dist/themes/bars-reversed.css"])
    .pipe(gulp.dest("./assets/vendors/jquery-bar-rating"));
  var aStyle22 = gulp
    .src(["node_modules/jquery-bar-rating/dist/themes/bars-square.css"])
    .pipe(gulp.dest("./assets/vendors/jquery-bar-rating"));
  var aStyle23 = gulp
    .src(["node_modules/jquery-bar-rating/dist/themes/bootstrap-stars.css"])
    .pipe(gulp.dest("./assets/vendors/jquery-bar-rating"));
  var aStyle24 = gulp
    .src(["node_modules/jquery-bar-rating/dist/themes/css-stars.css"])
    .pipe(gulp.dest("./assets/vendors/jquery-bar-rating"));
  var aStyle25 = gulp
    .src(["node_modules/jquery-bar-rating/dist/themes/fontawesome-stars-o.css"])
    .pipe(gulp.dest("./assets/vendors/jquery-bar-rating"));
  var aStyle26 = gulp
    .src(["node_modules/jquery-bar-rating/examples/css/examples.css"])
    .pipe(gulp.dest("./assets/vendors/jquery-bar-rating"));
  var aStyle28 = gulp
    .src(["node_modules/jquery-file-upload/css/uploadfile.css"])
    .pipe(gulp.dest("./assets/vendors/jquery-file-upload"));
  var aStyle30 = gulp
    .src(["node_modules/jquery-asColorPicker/dist/css/asColorPicker.min.css"])
    .pipe(gulp.dest("./assets/vendors/jquery-asColorPicker/css"));
  var aStyle31 = gulp
    .src(["node_modules/jquery-asColorPicker/dist/images/*"])
    .pipe(gulp.dest("./assets/vendors/jquery-asColorPicker/images"));
  var aStyle34 = gulp
    .src(["node_modules/select2/dist/css/select2.min.css"])
    .pipe(gulp.dest("./assets/vendors/select2"));
  var aStyle35 = gulp
    .src([
      "node_modules/select2-bootstrap-theme/dist/select2-bootstrap.min.css",
    ])
    .pipe(gulp.dest("./assets/vendors/select2-bootstrap-theme"));
  var aStyle36 = gulp
    .src(["node_modules/codemirror/lib/codemirror.css"])
    .pipe(gulp.dest("./assets/vendors/codemirror"));
  var aStyle37 = gulp
    .src(["node_modules/codemirror/theme/ambiance.css"])
    .pipe(gulp.dest("./assets/vendors/codemirror"));
  var aStyle54 = gulp
    .src(["node_modules/pwstabs/assets/jquery.pwstabs.min.css"])
    .pipe(gulp.dest("./assets/vendors/pwstabs"));
  var aStyle56 = gulp
    .src(["node_modules/typicons.font/src/font/*"])
    .pipe(gulp.dest("./assets/vendors/typicons"));
  var aStyle58 = gulp
    .src(["./node_modules/puse-icons-feather/**/*"])
    .pipe(gulp.dest("./assets/vendors/puse-icons-feather"));
  return merge(
    aStyle1,
    aStyle2,
    aStyle3,
    aStyle4,
    aStyle5,
    aStyle6,
    aStyle16,
    aStyle17,
    aStyle18,
    aStyle19,
    aStyle20,
    aStyle21,
    aStyle22,
    aStyle23,
    aStyle24,
    aStyle25,
    aStyle26,
    aStyle28,
    aStyle30,
    aStyle31,
    aStyle34,
    aStyle35,
    aStyle36,
    aStyle37,
    aStyle54,
    aStyle56,
    aStyle58
  );
});

//Copy essential map files
gulp.task("copyMapFiles", function () {
  var map1 = gulp
    .src("node_modules/bootstrap/dist/js/bootstrap.min.js.map")
    .pipe(gulp.dest("./assets/vendors/js"));
  var map2 = gulp
    .src("node_modules/@mdi/font/css/materialdesignicons.min.css.map")
    .pipe(gulp.dest("./assets/vendors/mdi/css"));
  var map5 = gulp
    .src(
      "node_modules/jquery-asColorPicker/dist/jquery-asColorPicker.min.js.map"
    )
    .pipe(gulp.dest("./assets/vendors/jquery-asColorPicker"));
  var map6 = gulp
    .src("node_modules/jquery-asColorPicker/dist/css/asColorPicker.min.css.map")
    .pipe(gulp.dest("./assets/vendors/jquery-asColorPicker/css"));
  var map7 = gulp
    .src("node_modules/jquery-asColor/dist/jquery-asColor.min.js.map")
    .pipe(gulp.dest("./assets/vendors/jquery-asColor"));

  var map8 = gulp
    .src("node_modules/jquery-bar-rating/dist/jquery.barrating.min.js.map")
    .pipe(gulp.dest("./assets/vendors/jquery-bar-rating"));
  var map9 = gulp
    .src("node_modules/jquery-asGradient/dist/jquery-asGradient.min.js.map")
    .pipe(gulp.dest("./assets/vendors/jquery-asGradient"));

  var map12 = gulp
    .src("node_modules/jquery-bar-rating/dist/jquery.barrating.min.js.map")
    .pipe(gulp.dest("./assets/vendors/jquery-bar-rating"));
  return merge(map1, map2, map5, map6, map7, map8, map9, map12);
});

/*sequence for building vendor scripts and styles*/
gulp.task(
  "bundleVendors",
  gulp.series(
    "clean:vendors",
    "buildBaseVendorStyles",
    "buildBaseVendorScripts",
    "buildOptionalVendorStyles",
    "buildOptionalVendorScripts",
    "copyMapFiles"
  )
);
