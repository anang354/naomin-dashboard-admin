(function ($) {
  "use strict";

  var dlabVectorMap = (function () {
    var screenWidth = $(window).width();

    var handleUsaMap = function (trigger = "load") {
      var vmapSelector = $("#indonesia-map");
      if (trigger == "resize") {
        vmapSelector.empty();
        vmapSelector.removeAttr("style");
      }

      vmapSelector
        .delay(500)
        .unbind()
        .vectorMap({
          map: "indonesia_id",
          backgroundColor: "transparent",
          borderColor: "rgb(239, 242, 244)",
          borderOpacity: 0.25,
          borderWidth: 1,
          color: "#cbd5e1",
          colors: {
            path24: "#94a3b8",
            path08: "#475569",
            path07: "#475569",
          },
          series: {
            regions: [
              {
                attribute: "fill",
              },
            ],
          },
          enableZoom: false,
          hoverColor: "#2563eb",
          hoverOpacity: null,
          onLabelShow: function (event, label, code) {
            var countryName = label[0].innerHTML;
            var html = ["<div>", countryName, "&nbsp;", code, "</div>"].join(
              ""
            );
            label[0].innerHTML = html;
          },
          normalizeFunction: "linear",
          scaleColors: ["#b6d6ff", "#005ace"],
          selectedColor: "rgba(239, 242, 244 0.9)",
          selectedRegions: null,
          showTooltip: true,
          showOcean: true,

          onRegionClick: function (element, code, region) {
            var message =
              'You clicked "' +
              region +
              '" which has the code: ' +
              code.toUpperCase();

            alert(message);
          },
        });
    };

    return {
      init: function () {},

      load: function () {
        handleUsaMap();
      },

      resize: function () {
        handleUsaMap("resize");
      },
    };
  })();

  jQuery(document).ready(function () {});

  jQuery(window).on("load", function () {
    setTimeout(function () {
      dlabVectorMap.load();
    }, 1000);
  });

  jQuery(window).on("resize", function () {
    setTimeout(function () {
      dlabVectorMap.resize();
    }, 1000);
  });
})(jQuery);
