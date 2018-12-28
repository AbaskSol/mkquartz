(function() {
    "use strict";
    angular.module("app.utils", [])
})(),
function() {
    "use strict";
    angular.module("ngGeolocation", []).factory("$geolocation", ["$rootScope", "$window", "$q", function(n, t, i) {
        function u() {
            return "geolocation" in t.navigator
        }
        var r = {
            getCurrentPosition: function(f) {
                var e = i.defer();
                return u() ? t.navigator.geolocation.getCurrentPosition(function(t) {
                    n.$apply(function() {
                        r.position.coords = t.coords;
                        r.position.timestamp = t.timestamp;
                        e.resolve(t)
                    })
                }, function(t) {
                    n.$apply(function() {
                        e.reject({
                            error: t
                        })
                    })
                }, f) : e.reject({
                    error: {
                        code: 2,
                        message: "This web browser does not support HTML5 Geolocation"
                    }
                }), e.promise
            },
            watchPosition: function(i) {
                u() ? this.watchId || (this.watchId = t.navigator.geolocation.watchPosition(function(t) {
                    n.$apply(function() {
                        r.position.coords = t.coords;
                        r.position.timestamp = t.timestamp;
                        delete r.position.error;
                        n.$broadcast("$geolocation.position.changed", t)
                    })
                }, function(t) {
                    n.$apply(function() {
                        r.position.error = t;
                        delete r.position.coords;
                        delete r.position.timestamp;
                        n.$broadcast("$geolocation.position.error", t)
                    })
                }, i)) : r.position = {
                    error: {
                        code: 2,
                        message: "This web browser does not support HTML5 Geolocation"
                    }
                }
            },
            clearWatch: function() {
                this.watchId && (t.navigator.geolocation.clearWatch(this.watchId), delete this.watchId)
            },
            position: {}
        };
        return r
    }])
}(),
function() {
    "use strict";

    function n(n, t) {
        function h() {
            return o("", !0).replace(/\/$/, "")
        }

        function c() {
            return n.location.pathname.replace(/\/$/, "")
        }

        function e() {
            return u ? u : u = $("html").data("language")
        }

        function l(n, t) {
            function u() {
                return f ? f : f = $("html").data("secure-root")
            }
            var i = u(),
                r;
            return t && (r = e(), i += r + "/"), i + n
        }

        function o(n, t) {
            function f() {
                return i ? i : i = $("html").data("root")
            }
            var r = f(),
                u;
            return t && (u = e(), r += u + "/"), r + n
        }

        function s() {
            return r ? r : r = $("html").data("content-root")
        }

        function a(n, i) {
            return t("orderBy")(n, i)
        }

        function v(n) {
            var t = s();
            return t + "images/" + n
        }
        var i = null,
            r = null,
            u = null,
            f = null;
        return {
            getUrl: o,
            getSecureUrl: l,
            getContentPath: s,
            getImagePath: v,
            getBaseUrl: h,
            getCurrentUrl: c,
            getSortedArray: a
        }
    }
    angular.module("app.utils").factory("appSettings", ["$window", "$filter", n])
}(),
function() {
    "use strict";

    function n() {
        function n() {
            NProgress.start()
        }

        function t(n) {
            NProgress.inc(n)
        }

        function i() {
            NProgress.done()
        }
        return {
            startLoad: n,
            progress: t,
            endLoad: i
        }
    }
    angular.module("app.utils").factory("spinner", n)
}(),
function() {
    "use strict";
    var n = angular.module("app", ["ngCookies", "ngMessages", "ngTouch", "ngDialog", "ngAnimate", "app.utils", "ngSanitize", "app.storelocator", "angular-flexslider", "720kb.socialshare", "ngGeolocation", "ui.carousel", "hmTouchEvents","ngRoute"]).constant("myModuleConst", {
        partialUserTagsPath: "scripts/app/tags/UserTagsModalDialog.html",
        searchBoxTemplatePath: "scripts/app/common/directives/oepSearch.html",
        tearsheetTemplatePath: "scripts/app/product/directives/oepTearsheet.html",
        oepSignUpEmailTemplatePath: "scripts/app/signup/oepSignUpEmailTemplate.html",
        subscribeModalTemplatePath: "scripts/app/signup/SubscribeModalTemplate.html",
        oepTagTemplatePath: "scripts/app/tags/oepTagTemplate.html",
        shareButtonsPath: "scripts/app/common/directives/shareButtons.html",
        avatarTemplate: "scripts/app/account/directives/avatar.html",
        customerUsersListTemplate: "scripts/app/customer-users/templates/index.html",
        customerUserEditTemplate: "scripts/app/customer-users/templates/edit.html",
        salesRoleName: "Sales"
    }).value("baseUrl", 'en/product/list/porcelain/').value("productListModel", {"products":[{"ProductId":0,"StyleName":"Yosemite Tile","UrlFriendlyStyleName":"yosemite-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Yosemite","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V3","SeriesColor":"Silver","MaterialType":"Porcelain","MaterialFinish":"Matte","Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":null,"StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"TCRYOS36S","Name":"Yosemite 12\" x 24\" Floor & Wall Tile in Silver","ImageName":"TCRYOS36S"},{"ProductId":0,"StyleName":"Enchante Tile","UrlFriendlyStyleName":"enchante-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Enchante","CountryOfOrigin":"Italy","PriceGroup":null,"ShadeVariation":"V2","SeriesColor":"Charm","MaterialType":"Porcelain","MaterialFinish":null,"Size":"8\" x 8\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Square","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls","Showers Floors","Pools"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"FIOENCCHA88DECO","Name":"Enchante 8\" x 8\" Floor & Wall Tile in Charm","ImageName":"FIOENCCHA88DECO"},{"ProductId":0,"StyleName":"Forest Tile","UrlFriendlyStyleName":"forest-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Forest","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V3","SeriesColor":"Ocra","MaterialType":"Porcelain","MaterialFinish":"Matte","Size":"8\" x 36\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":15,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"TCRWF29O","Name":"Forest 8\" x 36\" Floor & Wall Tile in Ocra","ImageName":"TCRWF29O"},{"ProductId":0,"StyleName":"Classic 2.0 Tile","UrlFriendlyStyleName":"classic-2-0-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Classic 2.0","CountryOfOrigin":"United States","PriceGroup":null,"ShadeVariation":"V2","SeriesColor":"Calacatta Oro","MaterialType":"Porcelain","MaterialFinish":"Matte","Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls","Showers Floors","Pools"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"STPCL2CAO1224","Name":"Classic 2.0 12\" x 24\" Floor & Wall Tile in Calacatta Oro","ImageName":"STPCL2CAO1224"},{"ProductId":0,"StyleName":"Metro Plus Tile","UrlFriendlyStyleName":"metro-plus-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Metro Plus","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V2","SeriesColor":"Stealth Jet","MaterialType":"Porcelain","MaterialFinish":"Matte","Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls","Showers Floors"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"TCRMTP36SJ-9","Name":"Metro Plus 12\" x 24\" Floor & Wall Tile in Stealth Jet","ImageName":"TCRMTP36SJ-9"},{"ProductId":0,"StyleName":"Classic 2.0 Tile","UrlFriendlyStyleName":"classic-2-0-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Classic 2.0","CountryOfOrigin":"United States","PriceGroup":null,"ShadeVariation":"V2","SeriesColor":"Calacatta Oro","MaterialType":"Porcelain","MaterialFinish":"Polished","Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"STPCL2CAO1224P","Name":"Classic 2.0 12\" x 24\" Floor & Wall Tile in Calacatta Oro","ImageName":"STPCL2CAO1224P"},{"ProductId":0,"StyleName":"Metro Plus Tile","UrlFriendlyStyleName":"metro-plus-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Metro Plus","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V2","SeriesColor":"Long Island Sky","MaterialType":"Porcelain","MaterialFinish":"Matte","Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls","Showers Floors"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],
    "SampleItem":null,"ProductCode":"TCRMTP36LS-9","Name":"Metro Plus 12\" x 24\" Floor & Wall Tile in Long Island Sky","ImageName":"TCRMTP36LS-9"},{"ProductId":0,"StyleName":"Classic 2.0 Tile","UrlFriendlyStyleName":"classic-2-0-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Classic 2.0","CountryOfOrigin":"United States","PriceGroup":null,"ShadeVariation":"V2","SeriesColor":"Bianco Carrara","MaterialType":"Porcelain","MaterialFinish":"Matte","Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls","Showers Floors","Pools"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"STPCL2BIC1224","Name":"Classic 2.0 12\" x 24\" Floor & Wall Tile in Bianco Carrara","ImageName":"STPCL2BIC1224"},{"ProductId":0,"StyleName":"Metro Plus Tile","UrlFriendlyStyleName":"metro-plus-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Metro Plus","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V2","SeriesColor":"Manhattan Mist","MaterialType":"Porcelain","MaterialFinish":"Matte","Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls","Showers Floors"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"TCRMTP36MM-9","Name":"Metro Plus 12\" x 24\" Floor & Wall Tile in Manhattan Mist","ImageName":"TCRMTP36MM-9"},{"ProductId":0,"StyleName":"Classic 2.0 Tile","UrlFriendlyStyleName":"classic-2-0-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Classic 2.0","CountryOfOrigin":"United States","PriceGroup":null,"ShadeVariation":"V2","SeriesColor":"Bianco Carrara","MaterialType":"Porcelain","MaterialFinish":"Polished","Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"STPCL2BIC1224P","Name":"Classic 2.0 12\" x 24\" Floor & Wall Tile in Bianco Carrara","ImageName":"STPCL2BIC1224P"},{"ProductId":0,"StyleName":"Yosemite Tile","UrlFriendlyStyleName":"yosemite-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Yosemite","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V3","SeriesColor":"Silver","MaterialType":"Porcelain","MaterialFinish":"Polished","Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":null,"StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"TCRYOS36SP","Name":"Yosemite 12\" x 24\" Floor & Wall Tile in Silver","ImageName":"TCRYOS36SP"},{"ProductId":0,"StyleName":"Toscano Tile","UrlFriendlyStyleName":"toscano-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Toscano","CountryOfOrigin":"United States","PriceGroup":null,"ShadeVariation":"V3","SeriesColor":"Classico","MaterialType":"Porcelain","MaterialFinish":null,"Size":"12\" x 24\"","Thickness":"5/16\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls","Showers Floors","Pools"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"DOLTOSCL1224","Name":"Toscano 12\" x 24\" Floor & Wall Tile in Classico","ImageName":"DOLTOSCL1224"},{"ProductId":0,"StyleName":"Simply Modern Tile","UrlFriendlyStyleName":"simply-modern-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Simply Modern","CountryOfOrigin":"United States","PriceGroup":null,"ShadeVariation":"V2","SeriesColor":"Grey","MaterialType":"Porcelain","MaterialFinish":null,"Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls","Showers Floors","Pools"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"STPSIMGR1224","Name":"Simply Modern 12\" x 24\" Floor & Wall Tile in Grey","ImageName":"STPSIMGR1224"},{"ProductId":0,"StyleName":"Classic Tile","UrlFriendlyStyleName":"classic-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Classic","CountryOfOrigin":"United States","PriceGroup":null,"ShadeVariation":"V2","SeriesColor":"Statuarietto","MaterialType":"Porcelain","MaterialFinish":null,"Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls","Showers Floors","Pools"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"STPCLAST1224M","Name":"Classic 12\" x 24\" Floor & Wall Tile in Statuarietto","ImageName":"STPCLAST1224M"},{"ProductId":0,"StyleName":"Matrix Tile","UrlFriendlyStyleName":"matrix-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Matrix","CountryOfOrigin":"United States","PriceGroup":null,"ShadeVariation":"V2","SeriesColor":"Bright","MaterialType":"Porcelain","MaterialFinish":null,"Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls","Showers Floors","Pools"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"DOLMATBR1224","Name":"Matrix 12\" x 24\" Floor & Wall Tile in Bright","ImageName":"DOLMATBR1224"},{"ProductId":0,"StyleName":"Stone Mountain Tile","UrlFriendlyStyleName":"stone-mountain-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Stone Mountain","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V2","SeriesColor":"Alabaster","MaterialType":"Porcelain","MaterialFinish":"Polished","Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,
    "Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"TCRSM36AP","Name":"Stone Mountain 12\" x 24\" Floor & Wall Tile in Alabaster","ImageName":"TCRSM36AP"},{"ProductId":0,"StyleName":"Islands Tile","UrlFriendlyStyleName":"islands-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Islands","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V3","SeriesColor":"Silver","MaterialType":"Porcelain","MaterialFinish":null,"Size":"12\" x 24\"","Thickness":"7/16\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"TCRYOS36SP","Name":"Yosemite 12\" x 24\" Floor & Wall Tile in Silver","ImageName":"TCRYOS36SP"},{"ProductId":0,"StyleName":"Toscano Tile","UrlFriendlyStyleName":"toscano-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Toscano","CountryOfOrigin":"United States","PriceGroup":null,"ShadeVariation":"V3","SeriesColor":"Classico","MaterialType":"Porcelain","MaterialFinish":null,"Size":"12\" x 24\"","Thickness":"5/16\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls","Showers Floors","Pools"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"DOLTOSCL1224","Name":"Toscano 12\" x 24\" Floor & Wall Tile in Classico","ImageName":"DOLTOSCL1224"},{"ProductId":0,"StyleName":"Simply Modern Tile","UrlFriendlyStyleName":"simply-modern-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Simply Modern","CountryOfOrigin":"United States","PriceGroup":null,"ShadeVariation":"V2","SeriesColor":"Grey","MaterialType":"Porcelain","MaterialFinish":null,"Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls","Showers Floors","Pools"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"STPSIMGR1224","Name":"Simply Modern 12\" x 24\" Floor & Wall Tile in Grey","ImageName":"STPSIMGR1224"},{"ProductId":0,"StyleName":"Classic Tile","UrlFriendlyStyleName":"classic-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Classic","CountryOfOrigin":"United States","PriceGroup":null,"ShadeVariation":"V2","SeriesColor":"Statuarietto","MaterialType":"Porcelain","MaterialFinish":null,"Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls","Showers Floors","Pools"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"STPCLAST1224M","Name":"Classic 12\" x 24\" Floor & Wall Tile in Statuarietto","ImageName":"STPCLAST1224M"},{"ProductId":0,"StyleName":"Matrix Tile","UrlFriendlyStyleName":"matrix-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Matrix","CountryOfOrigin":"United States","PriceGroup":null,"ShadeVariation":"V2","SeriesColor":"Bright","MaterialType":"Porcelain","MaterialFinish":null,"Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls","Showers Floors","Pools"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"DOLMATBR1224","Name":"Matrix 12\" x 24\" Floor & Wall Tile in Bright","ImageName":"DOLMATBR1224"},{"ProductId":0,"StyleName":"Stone Mountain Tile","UrlFriendlyStyleName":"stone-mountain-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Stone Mountain","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V2","SeriesColor":"Alabaster","MaterialType":"Porcelain","MaterialFinish":"Polished","Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"TCRSM36AP","Name":"Stone Mountain 12\" x 24\" Floor & Wall Tile in Alabaster","ImageName":"TCRSM36AP"},{"ProductId":0,"StyleName":"Islands Tile","UrlFriendlyStyleName":"islands-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Islands","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V3","SeriesColor":"Silver","MaterialType":"Porcelain","MaterialFinish":null,"Size":"12\" x 24\"","Thickness":"7/16\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"TCRISL36S","Name":"Islands 12\" x 24\" Floor & Wall Tile in Silver","ImageName":"TCRISL36S"},{"ProductId":0,"StyleName":"Titus Tile","UrlFriendlyStyleName":"titus-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Titus","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V2","SeriesColor":"Gray","MaterialType":"Porcelain","MaterialFinish":"Matte","Size":"8\" x 36\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":20,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"TCRWT29G","Name":"Titus 8\" x 36\" Floor & Wall Tile in Gray","ImageName":"TCRWT29G"},{"ProductId":0,"StyleName":"Yosemite Tile","UrlFriendlyStyleName":"yosemite-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Yosemite","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V3","SeriesColor":"Almond","MaterialType":"Porcelain","MaterialFinish":"Matte","Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},
    "HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":null,"StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"TCRYOS36A","Name":"Yosemite 12\" x 24\" Floor & Wall Tile in Almond","ImageName":"TCRYOS36A"},{"ProductId":0,"StyleName":"River Wood Tile","UrlFriendlyStyleName":"river-wood-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"River Wood","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V3","SeriesColor":"Taupe","MaterialType":"Porcelain","MaterialFinish":"Matte","Size":"8\" x 36\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"TCRWR29T","Name":"River Wood 8\" x 36\" Floor & Wall Tile in Taupe","ImageName":"TCRWR29T"},{"ProductId":0,"StyleName":"Stone Mountain Tile","UrlFriendlyStyleName":"stone-mountain-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Stone Mountain","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V2","SeriesColor":"Alabaster","MaterialType":"Porcelain","MaterialFinish":"Matte","Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls","Showers Floors"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"TCRSM36A","Name":"Stone Mountain 12\" x 24\" Floor & Wall Tile in Alabaster","ImageName":"TCRSM36A"},{"ProductId":0,"StyleName":"City Scene Tile","UrlFriendlyStyleName":"city-scene-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"City Scene","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V3","SeriesColor":"White","MaterialType":"Porcelain","MaterialFinish":"Matte","Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"TCRCIT36W","Name":"City Scene 12\" x 24\" Floor & Wall Tile in White","ImageName":"TCRCIT36W"},{"ProductId":0,"StyleName":"Toscano Tile","UrlFriendlyStyleName":"toscano-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Toscano","CountryOfOrigin":"United States","PriceGroup":null,"ShadeVariation":"V3","SeriesColor":"Silver","MaterialType":"Porcelain","MaterialFinish":null,"Size":"12\" x 24\"","Thickness":"5/16\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls","Showers Floors","Pools"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"DOLTOSSI1224","Name":"Toscano 12\" x 24\" Floor & Wall Tile in Silver","ImageName":"DOLTOSSI1224"},{"ProductId":0,"StyleName":"Islands Tile","UrlFriendlyStyleName":"islands-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Islands","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V3","SeriesColor":"White","MaterialType":"Porcelain","MaterialFinish":"Matte","Size":"12\" x 24\"","Thickness":"7/16\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"TCRISL36W","Name":"Islands 12\" x 24\" Floor & Wall Tile in White","ImageName":"TCRISL36W"},{"ProductId":0,"StyleName":"Strands Tile","UrlFriendlyStyleName":"strands-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Strands","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V3","SeriesColor":"White","MaterialType":"Porcelain","MaterialFinish":"Matte","Size":"12\" x 24\"","Thickness":"7/16\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"TCRSTR36W","Name":"Strands 12\" x 24\" Floor & Wall Tile in White","ImageName":"TCRSTR36W"},{"ProductId":0,"StyleName":"Enchante Tile","UrlFriendlyStyleName":"enchante-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Enchante","CountryOfOrigin":"Italy","PriceGroup":null,"ShadeVariation":"V2","SeriesColor":"Moderno","MaterialType":"Porcelain","MaterialFinish":null,"Size":"8\" x 8\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Square","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls","Showers Floors","Pools"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"FIOENCMOD88DECO","Name":"Enchante 8\" x 8\" Floor & Wall Tile in Moderno","ImageName":"FIOENCMOD88DECO"},{"ProductId":0,"StyleName":"Stone Mountain Tile","UrlFriendlyStyleName":"stone-mountain-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Stone Mountain","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V2","SeriesColor":"Silver","MaterialType":"Porcelain","MaterialFinish":"Polished","Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"TCRSM36SP","Name":"Stone Mountain 12\" x 24\" Floor & Wall Tile in Silver","ImageName":"TCRSM36SP"},{"ProductId":0,"StyleName":"Strands Tile","UrlFriendlyStyleName":"strands-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Strands","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V3","SeriesColor":"Silver","MaterialType":"Porcelain","MaterialFinish":"Matte","Size":"12\" x 24\"","Thickness":"7/16\"","MaterialCategory":"Tile",
    "SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"TCRSTR36S","Name":"Strands 12\" x 24\" Floor & Wall Tile in Silver","ImageName":"TCRSTR36S"},{"ProductId":0,"StyleName":"Studio Tile","UrlFriendlyStyleName":"studio-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Studio","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V3","SeriesColor":"Brown Sugar","MaterialType":"Porcelain","MaterialFinish":"Matte","Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"TCRSTO36B","Name":"Studio 12\" x 24\" Floor & Wall Tile in Brown Sugar","ImageName":"TCRSTO36B"},{"ProductId":0,"StyleName":"Titus Tile","UrlFriendlyStyleName":"titus-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Titus","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V2","SeriesColor":"Beige","MaterialType":"Porcelain","MaterialFinish":"Matte","Size":"8\" x 36\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":19,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"TCRWT29B","Name":"Titus 8\" x 36\" Floor & Wall Tile in Beige","ImageName":"TCRWT29B"},{"ProductId":0,"StyleName":"Forest Tile","UrlFriendlyStyleName":"forest-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Forest","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V3","SeriesColor":"Walnut","MaterialType":"Porcelain","MaterialFinish":"Matte","Size":"8\" x 36\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":16,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"TCRWF29W","Name":"Forest 8\" x 36\" Floor & Wall Tile in Walnut","ImageName":"TCRWF29W"},{"ProductId":0,"StyleName":"Simply Modern Tile","UrlFriendlyStyleName":"simply-modern-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Simply Modern","CountryOfOrigin":"United States","PriceGroup":null,"ShadeVariation":"V2","SeriesColor":"Creme","MaterialType":"Porcelain","MaterialFinish":null,"Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls","Showers Floors","Pools"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"STPSIMCR1224","Name":"Simply Modern 12\" x 24\" Floor & Wall Tile in Creme","ImageName":"STPSIMCR1224"},{"ProductId":0,"StyleName":"Toscano Tile","UrlFriendlyStyleName":"toscano-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Toscano","CountryOfOrigin":"United States","PriceGroup":null,"ShadeVariation":"V3","SeriesColor":"Grigio","MaterialType":"Porcelain","MaterialFinish":null,"Size":"12\" x 24\"","Thickness":"5/16\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls","Showers Floors","Pools"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"DOLTOSGR1224","Name":"Toscano 12\" x 24\" Floor & Wall Tile in Grigio","ImageName":"DOLTOSGR1224"},{"ProductId":0,"StyleName":"Stone Mountain Tile","UrlFriendlyStyleName":"stone-mountain-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Stone Mountain","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V2","SeriesColor":"Silver","MaterialType":"Porcelain","MaterialFinish":"Matte","Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"TCRSM36S","Name":"Stone Mountain 12\" x 24\" Floor & Wall Tile in Silver","ImageName":"TCRSM36S"},{"ProductId":0,"StyleName":"Palazzo Deco","UrlFriendlyStyleName":"palazzo-deco","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Palazzo","CountryOfOrigin":"United States","PriceGroup":null,"ShadeVariation":"V2","SeriesColor":"Vintage Grey Florentina","MaterialType":"Porcelain","MaterialFinish":null,"Size":"12\" x 12\"","Thickness":"3/8\"","MaterialCategory":"Deco","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":null,"StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls","Showers Floors","Pools"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"STPPALVG1212FLDECO","Name":"Palazzo 12\" x 12\" Decorative Tile in Vintage Grey Florentina","ImageName":"STPPALVG1212FLDECO"},{"ProductId":0,"StyleName":"Simply Modern Tile","UrlFriendlyStyleName":"simply-modern-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Simply Modern","CountryOfOrigin":"United States","PriceGroup":null,"ShadeVariation":"V2","SeriesColor":"Black","MaterialType":"Porcelain","MaterialFinish":null,"Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls","Showers Floors","Pools"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null, 
    "SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"STPSIMBL1224","Name":"Simply Modern 12\" x 24\" Floor & Wall Tile in Black","ImageName":"STPSIMBL1224"},{"ProductId":0,"StyleName":"Yosemite Tile","UrlFriendlyStyleName":"yosemite-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Yosemite","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V3","SeriesColor":"Almond","MaterialType":"Porcelain","MaterialFinish":"Polished","Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":null,"StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":[],"SampleItem":null,"ProductCode":"TCRYOS36AP","Name":"Yosemite 12\" x 24\" Floor & Wall Tile in Almond","ImageName":"TCRYOS36AP"},{"ProductId":0,"StyleName":"Stone Mountain Tile","UrlFriendlyStyleName":"stone-mountain-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Stone Mountain","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V2","SeriesColor":"Gris","MaterialType":"Porcelain","MaterialFinish":"Matte","Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls","Showers Floors"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":[],"SampleItem":null,"ProductCode":"TCRSM36G","Name":"Stone Mountain 12\" x 24\" Floor & Wall Tile in Gris","ImageName":"TCRSM36G"},{"ProductId":0,"StyleName":"River Wood Tile","UrlFriendlyStyleName":"river-wood-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"River Wood","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V3","SeriesColor":"Oak","MaterialType":"Porcelain","MaterialFinish":"Matte","Size":"8\" x 36\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"TCRWR29O","Name":"River Wood 8\" x 36\" Floor & Wall Tile in Oak","ImageName":"TCRWR29O"},{"ProductId":0,"StyleName":"Titus Tile","UrlFriendlyStyleName":"titus-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Titus","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V2","SeriesColor":"Camel","MaterialType":"Porcelain","MaterialFinish":"Matte","Size":"8\" x 36\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":21,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"TCRWT29C","Name":"Titus 8\" x 36\" Floor & Wall Tile in Camel","ImageName":"TCRWT29C"},{"ProductId":0,"StyleName":"Tahoe Tile","UrlFriendlyStyleName":"tahoe-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Tahoe","CountryOfOrigin":"Italy","PriceGroup":null,"ShadeVariation":"V4","SeriesColor":"Glacier","MaterialType":"Porcelain","MaterialFinish":null,"Size":"8\" x 40\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls","Showers Floors","Pools"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":[],"SampleItem":null,"ProductCode":"CRDTAHGL840","Name":"Tahoe 8\" x 40\" Floor & Wall Tile in Glacier","ImageName":"CRDTAHGL840"},{"ProductId":0,"StyleName":"Purestone Tile","UrlFriendlyStyleName":"purestone-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Purestone","CountryOfOrigin":"Italy","PriceGroup":null,"ShadeVariation":"V3","SeriesColor":"Bianco","MaterialType":"Porcelain","MaterialFinish":null,"Size":"12\" x 24\"","Thickness":"5/16\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls","Showers Floors","Pools"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":[],"SampleItem":null,"ProductCode":"PIEPURBI1224","Name":"Purestone 12\" x 24\" Floor & Wall Tile in Bianco","ImageName":"PIEPURBI1224"},{"ProductId":0,"StyleName":"Chateau Tile","UrlFriendlyStyleName":"chateau-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Chateau","CountryOfOrigin":"United States","PriceGroup":null,"ShadeVariation":"V3","SeriesColor":"Canvas","MaterialType":"Porcelain","MaterialFinish":"Honed","Size":"12\" x 24\"","Thickness":"1/4\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls","Showers Floors","Pools"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":[],"SampleItem":null,"ProductCode":"DOLCHACAN1224","Name":"Chateau 12\" x 24\" Floor & Wall Tile in Canvas","ImageName":"DOLCHACAN1224"},{"ProductId":0,"StyleName":"Calacatta Tile","UrlFriendlyStyleName":"calacatta-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Calacatta","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V3","SeriesColor":"Calacatta","MaterialType":"Porcelain","MaterialFinish":"Polished","Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls"], "ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":[],"SampleItem":null,"ProductCode":"TCRCAL36CP","Name":"Calacatta 12\" x 24\" Floor & Wall Tile","ImageName":"TCRCAL36CP"},{"ProductId":0,"StyleName":"Forest Tile","UrlFriendlyStyleName":"forest-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Forest","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V3","SeriesColor":"Straw","MaterialType":"Porcelain","MaterialFinish":"Matte","Size":"8\" x 36\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":14,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,
    "Tags":[],"SampleItem":null,"ProductCode":"TCRWF29S","Name":"Forest 8\" x 36\" Floor & Wall Tile in Straw","ImageName":"TCRWF29S"},{"ProductId":0,"StyleName":"Studio Tile","UrlFriendlyStyleName":"studio-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Studio","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V3","SeriesColor":"Sky","MaterialType":"Porcelain","MaterialFinish":"Matte","Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":[],"SampleItem":null,"ProductCode":"TCRSTO36S","Name":"Studio 12\" x 24\" Floor & Wall Tile in Sky","ImageName":"TCRSTO36S"},{"ProductId":0,"StyleName":"Titus Tile","UrlFriendlyStyleName":"titus-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Titus","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V2","SeriesColor":"Noce","MaterialType":"Porcelain","MaterialFinish":"Matte","Size":"8\" x 36\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":22,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":[],"SampleItem":null,"ProductCode":"TCRWT29N","Name":"Titus 8\" x 36\" Floor & Wall Tile in Noce","ImageName":"TCRWT29N"},{"ProductId":0,"StyleName":"Chateau Deco","UrlFriendlyStyleName":"chateau-deco","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Chateau","CountryOfOrigin":"United States","PriceGroup":null,"ShadeVariation":"V3","SeriesColor":"Canvas Smoke","MaterialType":"Porcelain","MaterialFinish":"Honed","Size":"12\" x 12\"","Thickness":"1/4\"","MaterialCategory":"Deco","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Square","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls","Showers Floors","Pools"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":["Best Seller"],"SampleItem":null,"ProductCode":"DOLCHAFIO1212CASM","Name":"Chateau 12\" x 12\" Decorative Tile in Canvas Smoke","ImageName":"DOLCHAFIO1212CASM"},{"ProductId":0,"StyleName":"Distressed Tile","UrlFriendlyStyleName":"distressed-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Distressed","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V3","SeriesColor":"Betulla","MaterialType":"Porcelain","MaterialFinish":"Matte","Size":"8\" x 36\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls","Showers Floors"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":[],"SampleItem":null,"ProductCode":"TCRWD29B","Name":"Distressed 8\" x 36\" Floor & Wall Tile in Betulla","ImageName":"TCRWD29B"},{"ProductId":0,"StyleName":"Studio Tile","UrlFriendlyStyleName":"studio-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Studio","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V3","SeriesColor":"Ice","MaterialType":"Porcelain","MaterialFinish":"Matte","Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":[],"SampleItem":null,"ProductCode":"TCRSTO36I","Name":"Studio 12\" x 24\" Floor & Wall Tile in Ice","ImageName":"TCRSTO36I"},{"ProductId":0,"StyleName":"Phoenix Tile","UrlFriendlyStyleName":"phoenix-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Phoenix","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V2","SeriesColor":"Silver","MaterialType":"Porcelain","MaterialFinish":"Matte","Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":[],"SampleItem":null,"ProductCode":"TCRPHN36S","Name":"Phoenix 12\" x 24\" Floor & Wall Tile in Silver","ImageName":"TCRPHN36S"},{"ProductId":0,"StyleName":"Titus Tile","UrlFriendlyStyleName":"titus-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Titus","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V2","SeriesColor":"White","MaterialType":"Porcelain","MaterialFinish":"Matte","Size":"8\" x 36\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":18,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":[],"SampleItem":null,"ProductCode":"TCRWT29W","Name":"Titus 8\" x 36\" Floor & Wall Tile in White","ImageName":"TCRWT29W"},{"ProductId":0,"StyleName":"Amazon Tile","UrlFriendlyStyleName":"amazon-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Amazon","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V3","SeriesColor":"Novona","MaterialType":"Porcelain","MaterialFinish":"Polished","Size":"16\" x 32\"","Thickness":"7/16\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":[],"SampleItem":null,"ProductCode":"TCRAMA48NP","Name":"Amazon 16\" x 32\" Floor & Wall Tile in Novona","ImageName":"TCRAMA48NP"},{"ProductId":0,"StyleName":"Tahoe Tile","UrlFriendlyStyleName":"tahoe-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Tahoe","CountryOfOrigin":"Italy","PriceGroup":null,"ShadeVariation":"V4","SeriesColor":"Trail","MaterialType":"Porcelain","MaterialFinish":null,"Size":"8\" x 40\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls","Showers Floors","Pools"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":[],"SampleItem":null,"ProductCode":"CRDTAHTR840","Name":"Tahoe 8\" x 40\" Floor & Wall Tile in Trail","ImageName":"CRDTAHTR840"},{"ProductId":0,"StyleName":"Phoenix Tile",
    "UrlFriendlyStyleName":"phoenix-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Phoenix","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V2","SeriesColor":"Novona","MaterialType":"Porcelain","MaterialFinish":"Matte","Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":[],"SampleItem":null,"ProductCode":"TCRPHN36N","Name":"Phoenix 12\" x 24\" Floor & Wall Tile in Novona","ImageName":"TCRPHN36N"},{"ProductId":0,"StyleName":"Purestone Tile","UrlFriendlyStyleName":"purestone-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Purestone","CountryOfOrigin":"Italy","PriceGroup":null,"ShadeVariation":"V3","SeriesColor":"Grigio","MaterialType":"Porcelain","MaterialFinish":null,"Size":"12\" x 24\"","Thickness":"5/16\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls","Showers Floors","Pools"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":[],"SampleItem":null,"ProductCode":"PIEPURGR1224","Name":"Purestone 12\" x 24\" Floor & Wall Tile in Grigio","ImageName":"PIEPURGR1224"},{"ProductId":0,"StyleName":"Runway Tile","UrlFriendlyStyleName":"runway-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Runway","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V3","SeriesColor":"Alabaster","MaterialType":"Porcelain","MaterialFinish":"Matte","Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":[],"SampleItem":null,"ProductCode":"TCRRUN36A-9","Name":"Runway 12\" x 24\" Floor & Wall Tile in Alabaster","ImageName":"TCRRUN36A-9"},{"ProductId":0,"StyleName":"Stone Mountain Tile","UrlFriendlyStyleName":"stone-mountain-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Stone Mountain","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V2","SeriesColor":"Walnut","MaterialType":"Porcelain","MaterialFinish":"Matte","Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":[],"SampleItem":null,"ProductCode":"TCRSM36W","Name":"Stone Mountain 12\" x 24\" Floor & Wall Tile in Walnut","ImageName":"TCRSM36W"},{"ProductId":0,"StyleName":"Zebrino Tile","UrlFriendlyStyleName":"zebrino-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Zebrino","CountryOfOrigin":"United States","PriceGroup":null,"ShadeVariation":"V3","SeriesColor":"Michelangelo","MaterialType":"Porcelain","MaterialFinish":null,"Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls","Showers Floors","Pools"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":[],"SampleItem":null,"ProductCode":"STPZEBMIC1224","Name":"Zebrino 12\" x 24\" Floor & Wall Tile in Michelangelo","ImageName":"STPZEBMIC1224"},{"ProductId":0,"StyleName":"Stone Mountain Tile","UrlFriendlyStyleName":"stone-mountain-tile","ProductCodeDoubleEncoded":null,"BundleNo":null,"Description":null,"OnSale":"N","IsNewArrival":"False","ImageSource":null,"ProductSeries":"Stone Mountain","CountryOfOrigin":"China","PriceGroup":null,"ShadeVariation":"V2","SeriesColor":"Gris","MaterialType":"Porcelain","MaterialFinish":"Polished","Size":"12\" x 24\"","Thickness":"3/8\"","MaterialCategory":"Tile","SellingUom":{"Id":"SF","Name":"Sq. Ft.","IsFractional":false},"HandlingUom":null,"HandlingUomRate":0.0,"MosaicSize":null,"Shape":"Rectangle","StyleSort":0,"IsOrphan":"False","IsClearance":"False","IsSellableOnline":true,"Usages":["Residential","Light Commercial","Commercial"],"Applications":["Floors","Walls","Countertops","Shower Walls"],"ActualSize":null,"DisclaimerKey":null,"StatusString":"Active","DiscontinuedToDisplay":null,"MSRPToDisplay":null,"OnHandToDisplay":null,"SellingAvailabilityToDisplay":null,"Tags":[],"SampleItem":null,"ProductCode":"TCRSM36GP","Name":"Stone Mountain 12\" x 24\" Floor & Wall Tile in Gris","ImageName":"TCRSM36GP"}],"foundCount":2081,"refinements":[{"title":"Product Type","key":"MaterialCategory","options":[{"text":"Tile","value":"Tile","count":"986","selected":false},{"text":"Trim","value":"Trim","count":"623","selected":false},{"text":"Mosaic","value":"Mosaic","count":"367","selected":false},{"text":"Deco","value":"Deco","count":"60","selected":false},{"text":"Slab","value":"Slab","count":"28","selected":false},{"text":"Listello","value":"Listello","count":"17","selected":false}]},{"title":"Material","key":"MaterialType","options":[{"text":"Porcelain","value":"Porcelain","count":"2056","selected":false},{"text":"Resin/Metal","value":"Resin/Metal","count":"18","selected":false},{"text":"Decorative","value":"Decorative","count":"6","selected":false},{"text":"Ceramic","value":"Ceramic","count":"1","selected":false}]},{"title":"Color Family ","key":"ColorGroup","options":[{"text":"Grey","value":"Grey","count":"534","selected":false},{"text":"Beige","value":"Beige","count":"396","selected":false},{"text":"Brown","value":"Brown","count":"361","selected":false},{"text":"Tan","value":"Tan","count":"257","selected":false},{"text":"White","value":"White","count":"172","selected":false},{"text":"Black","value":"Black","count":"108","selected":false},{"text":"Blue","value":"Blue","count":"20","selected":false},{"text":"Yellow","value":"Yellow","count":"19","selected":false},{"text":"Metallic","value":"Metallic","count":"13","selected":false},{"text":"Red","value":"Red","count":"12","selected":false},{"text":"Multi","value":"Multi","count":"10","selected":false},{"text":"Green","value":"Green","count":"7","selected":false}]},{"title":"Finish","key":"MaterialFinish","options":[{"text":"Matte","value":"Matte","count":"648","selected":false},{"text":"Polished","value":"Polished","count":"195","selected":false},{"text":"Honed","value":"Honed","count":"93","selected":false},{"text":"Polished & Honed","value":"Polished & Honed","count":"22","selected":false},{"text":"Gloss","value":"Gloss","count":"19","selected":false},{"text":"Satin","value":"Satin","count":"6","selected":false}]},{"title":"Size","key":"Size","options":[{"text":"0.5\" x 12\"","value":"0.5\" x 12\"","count":"14","selected":false},{"text":"0.75\" x 12\"","value":"0.75\" x 12\"","count":"2","selected":false},{"text":"1\" x 1\"","value":"1\" x 1\"","count":"33","selected":false},{"text":"1\" x 2\"","value":"1\" x 2\"","count":"3","selected":false},{"text":"1\" x 6\"","value":"1\" x 6\"","count":"59","selected":false},{"text":"1\" x 6.5\"","value":"1\" x 6.5\"","count":"3","selected":false},{"text":"1\" x 12\"","value":"1\" x 12\"","count":"41","selected":false},{"text":"1.5\" x 2\"","value":"1.5\" x 2\"","count":"1","selected":false},{"text":"1.5\" x 10\"","value":"1.5\" x 10\"","count":"4","selected":false},{"text":"2\" x 2\"","value":"2\" x 2\"","count":"18","selected":false},{"text":"2\" x 2.25\"","value":"2\" x 2.25\"","count":"3","selected":false},{"text":"2\" x 6\"","value":"2\" x 6\"","count":"5","selected":false},{"text":"2\" x 6.5\"","value":"2\" x 6.5\"","count":"5","selected":false},{"text":"2\" x 12\"","value":"2\" x 12\"","count":"6","selected":false},{"text":"2\" x 24\"","value":"2\" x 24\"","count":"9","selected":false},{"text":"2\" x 40\"","value":"2\" x 40\"","count":"3","selected":false},{"text":"2.25\" x 2.25\"","value":"2.25\" x 2.25\"","count":"3",
    "selected":false},{"text":"2.25\" x 12\"","value":"2.25\" x 12\"","count":"3","selected":false},{"text":"3\" x 3\"","value":"3\" x 3\"","count":"3","selected":false},{"text":"3\" x 12\"","value":"3\" x 12\"","count":"67","selected":false},{"text":"3\" x 13\"","value":"3\" x 13\"","count":"8","selected":false},{"text":"3\" x 14\"","value":"3\" x 14\"","count":"3","selected":false},{"text":"3\" x 18\"","value":"3\" x 18\"","count":"3","selected":false},{"text":"3\" x 20\"","value":"3\" x 20\"","count":"50","selected":false},{"text":"3\" x 24\"","value":"3\" x 24\"","count":"157","selected":false},{"text":"3.5\" x 24\"","value":"3.5\" x 24\"","count":"1","selected":false},{"text":"4\" x 12\"","value":"4\" x 12\"","count":"7","selected":false},{"text":"4\" x 14\"","value":"4\" x 14\"","count":"6","selected":false},{"text":"4\" x 24\"","value":"4\" x 24\"","count":"55","selected":false},{"text":"4\" x 36\"","value":"4\" x 36\"","count":"6","selected":false},{"text":"4\" x 40\"","value":"4\" x 40\"","count":"19","selected":false},{"text":"6\" x 6\"","value":"6\" x 6\"","count":"35","selected":false},{"text":"6\" x 8\"","value":"6\" x 8\"","count":"2","selected":false},{"text":"6\" x 10\"","value":"6\" x 10\"","count":"1","selected":false},{"text":"6\" x 12\"","value":"6\" x 12\"","count":"72","selected":false},{"text":"6\" x 16\"","value":"6\" x 16\"","count":"11","selected":false},{"text":"6\" x 24\"","value":"6\" x 24\"","count":"41","selected":false},{"text":"6.13\" x 35.69\"","value":"6.13\" x 35.69\"","count":"5","selected":false},{"text":"6.5\" x 6.5\"","value":"6.5\" x 6.5\"","count":"4","selected":false},{"text":"6.5\" x 24\"","value":"6.5\" x 24\"","count":"1","selected":false},{"text":"8\" x 8\"","value":"8\" x 8\"","count":"13","selected":false},{"text":"8\" x 24\"","value":"8\" x 24\"","count":"48","selected":false},{"text":"8\" x 36\"","value":"8\" x 36\"","count":"59","selected":false},{"text":"8\" x 40\"","value":"8\" x 40\"","count":"19","selected":false},{"text":"8\" x 48\"","value":"8\" x 48\"","count":"55","selected":false},{"text":"9\" x 15\"","value":"9\" x 15\"","count":"12","selected":false},{"text":"9\" x 36\"","value":"9\" x 36\"","count":"6","selected":false},{"text":"9.5\" x 11.75\"","value":"9.5\" x 11.75\"","count":"27","selected":false},{"text":"9.75\" x 11.5\"","value":"9.75\" x 11.5\"","count":"3","selected":false},{"text":"10\" x 12\"","value":"10\" x 12\"","count":"24","selected":false},{"text":"11\" x 11\"","value":"11\" x 11\"","count":"2","selected":false},{"text":"11\" x 12.25\"","value":"11\" x 12.25\"","count":"6","selected":false},{"text":"12\" x 12\"","value":"12\" x 12\"","count":"357","selected":false},{"text":"12\" x 15\"","value":"12\" x 15\"","count":"1","selected":false},{"text":"12\" x 24\"","value":"12\" x 24\"","count":"282","selected":false},{"text":"12\" x 36\"","value":"12\" x 36\"","count":"6","selected":false},{"text":"12\" x 48\"","value":"12\" x 48\"","count":"7","selected":false},{"text":"13\" x 13\"","value":"13\" x 13\"","count":"14","selected":false},{"text":"13\" x 20\"","value":"13\" x 20\"","count":"7","selected":false},{"text":"13.5\" x 13.5\"","value":"13.5\" x 13.5\"","count":"4","selected":false},{"text":"14\" x 14\"","value":"14\" x 14\"","count":"6","selected":false},{"text":"15\" x 30\"","value":"15\" x 30\"","count":"24","selected":false},{"text":"16\" x 32\"","value":"16\" x 32\"","count":"5","selected":false},{"text":"18\" x 18\"","value":"18\" x 18\"","count":"16","selected":false},{"text":"18\" x 36\"","value":"18\" x 36\"","count":"26","selected":false},{"text":"20\" x 20\"","value":"20\" x 20\"","count":"45","selected":false},{"text":"23.5\" x 0.25\"","value":"23.5\" x 0.25\"","count":"3","selected":false},{"text":"23.5\" x 0.5\"","value":"23.5\" x 0.5\"","count":"2","selected":false},{"text":"24\" x 24\"","value":"24\" x 24\"","count":"87","selected":false},{"text":"24\" x 48\"","value":"24\" x 48\"","count":"20","selected":false},{"text":"30\" x 30\"","value":"30\" x 30\"","count":"36","selected":false},{"text":"30\" x 60\"","value":"30\" x 60\"","count":"25","selected":false},{"text":"32\" x 32\"","value":"32\" x 32\"","count":"5","selected":false},{"text":"60\" x 60\"","value":"60\" x 60\"","count":"25","selected":false},{"text":"60\" x 120\"","value":"60\" x 120\"","count":"12","selected":false},{"text":"60\" x 126\"","value":"60\" x 126\"","count":"17","selected":false}]},{"title":"Thickness","key":"Thickness","options":[{"text":"3/8\"","value":"3/8\"","count":"1582","selected":false},{"text":"5/16\"","value":"5/16\"","count":"186","selected":false},{"text":"1/4\"","value":"1/4\"","count":"157","selected":false},{"text":"0\"","value":"0\"","count":"67","selected":false},{"text":"7/16\"","value":"7/16\"","count":"44","selected":false},{"text":"1/2\"","value":"1/2\"","count":"22","selected":false},{"text":"5/8\"","value":"5/8\"","count":"15","selected":false},{"text":"3/16\"","value":"3/16\"","count":"7","selected":false},{"text":"10 cm","value":"10 cm","count":"1","selected":false}]},{"title":"Usage","key":"Usage","options":[{"text":"Commercial","value":"Commercial","count":"2071","selected":false},{"text":"Light Commercial","value":"Light Commercial","count":"2071","selected":false},{"text":"Residential","value":"Residential","count":"2071","selected":false}]},{"title":"Application","key":"Application","options":[{"text":"Walls","value":"Walls","count":"2052","selected":false},{"text":"Shower Walls","value":"Shower Walls","count":"1953","selected":false},{"text":"Countertops","value":"Countertops","count":"1860","selected":false},{"text":"Floors","value":"Floors","count":"1841","selected":false},{"text":"Showers Floors","value":"Showers Floors","count":"985","selected":false},{"text":"Pools","value":"Pools","count":"900","selected":false}]},{"title":"Collection","key":"ProductSeries","options":[{"text":"90","value":"90","count":"6","selected":false},{"text":"Allways","value":"Allways","count":"7","selected":false},{"text":"Amazon","value":"Amazon","count":"11","selected":false},{"text":"Antique","value":"Antique","count":"6","selected":false},{"text":"Area 3D","value":"Area 3D","count":"10","selected":false},{"text":"Armenia","value":"Armenia","count":"2","selected":false},{"text":"Arrowhead","value":"Arrowhead","count":"5","selected":false},{"text":"Athena","value":"Athena","count":"11","selected":false},{"text":"Barrel","value":"Barrel","count":"6","selected":false},{"text":"Barrique","value":"Barrique","count":"67","selected":false},{"text":"Bayou Country","value":"Bayou Country","count":"10","selected":false},{"text":"Blende","value":"Blende","count":"32","selected":false},{"text":"Calacatta","value":"Calacatta","count":"5","selected":false},{"text":"Cemento","value":"Cemento","count":"31","selected":false},{"text":"Cesare Magnus","value":"Cesare Magnus","count":"4","selected":false},{"text":"Chateau","value":"Chateau","count":"24","selected":false},{"text":"Chesapeake","value":"Chesapeake","count":"7","selected":false},{"text":"City 2.0","value":"City 2.0","count":"15","selected":false},{"text":"City Scene","value":"City Scene","count":"16","selected":false},{"text":"Classic","value":"Classic","count":"21","selected":false},{"text":"Classic 2.0","value":"Classic 2.0","count":"67","selected":false},{"text":"Cotto Nature","value":"Cotto Nature","count":"18","selected":false},{"text":"Crate","value":"Crate","count":"21","selected":false},{"text":"Cristallo","value":"Cristallo","count":"2","selected":false},{"text":"Dagny","value":"Dagny","count":"20","selected":false},{"text":"Dimensions","value":"Dimensions","count":"3","selected":false},{"text":"Distressed","value":"Distressed","count":"11","selected":false},{"text":"Durango","value":"Durango","count":"3","selected":false},{"text":"Eddie","value":"Eddie","count":"6","selected":false},{"text":"Elements","value":"Elements","count":"77","selected":false},{"text":"Enchante","value":"Enchante","count":"3","selected":false},{"text":"Epic","value":"Epic","count":"10","selected":false},{"text":"European","value":"European","count":"10","selected":false},{"text":"Fantasia","value":"Fantasia","count":"12","selected":false},{"text":"Forest","value":"Forest","count":"15","selected":false},{"text":"Forge","value":"Forge","count":"26","selected":false},{"text":"Fossil","value":"Fossil","count":"1","selected":false},{"text":"Heathland Collection","value":"Heathland Collection","count":"5","selected":false},{"text":"Highland","value":"Highland","count":"54","selected":false},{"text":"Indiana Stone","value":"Indiana Stone","count":"44","selected":false},{"text":"Infinity","value":"Infinity","count":"22","selected":false},{"text":"Islands","value":"Islands","count":"13","selected":false},{"text":"Kensington","value":"Kensington","count":"10","selected":false},{"text":"Land","value":"Land","count":"1","selected":false},{"text":"Legacy","value":"Legacy","count":"12","selected":false},{"text":"Lido","value":"Lido","count":"28","selected":false},{"text":"Linen","value":"Linen","count":"24","selected":false},{"text":"Magnifica","value":"Magnifica","count":"47","selected":false},{"text":"Marfil","value":"Marfil","count":"75","selected":false},{"text":"Marmi Di Napoli","value":"Marmi Di Napoli","count":"31","selected":false},{"text":"Materia 3D","value":"Materia 3D","count":"34","selected":false},{"text":"Matrix","value":"Matrix","count":"20","selected":false},{"text":"Metro Plus","value":"Metro Plus","count":"56","selected":false},{"text":"Moonstone","value":"Moonstone","count":"10","selected":false},{"text":"Napa","value":"Napa","count":"5","selected":false},{"text":"National Parks","value":"National Parks","count":"3","selected":false},{"text":"Native","value":"Native","count":"12","selected":false},{"text":"Officine","value":"Officine","count":"16","selected":false},{"text":"Onyx","value":"Onyx","count":"17","selected":false},
    {"text":"Othello","value":"Othello","count":"6","selected":false},{"text":"Palazzo","value":"Palazzo","count":"39","selected":false},{"text":"Parkland","value":"Parkland","count":"77","selected":false},{"text":"Parquet","value":"Parquet","count":"6","selected":false},{"text":"Petrified","value":"Petrified","count":"4","selected":false},{"text":"Phoenix","value":"Phoenix","count":"12","selected":false},{"text":"Plane","value":"Plane","count":"92","selected":false},{"text":"Polished Porcelain","value":"Polished Porcelain","count":"2","selected":false},{"text":"Pool Tile","value":"Pool Tile","count":"21","selected":false},{"text":"Prestige Collection","value":"Prestige Collection","count":"5","selected":false},{"text":"Pulpis","value":"Pulpis","count":"15","selected":false},{"text":"Purestone","value":"Purestone","count":"12","selected":false},{"text":"Quartzite","value":"Quartzite","count":"48","selected":false},{"text":"Raja Slate","value":"Raja Slate","count":"29","selected":false},{"text":"Real","value":"Real","count":"5","selected":false},{"text":"River Wood","value":"River Wood","count":"12","selected":false},{"text":"Rok","value":"Rok","count":"19","selected":false},{"text":"Roma","value":"Roma","count":"44","selected":false},{"text":"Rome","value":"Rome","count":"7","selected":false},{"text":"Rose Wood","value":"Rose Wood","count":"32","selected":false},{"text":"Runway","value":"Runway","count":"35","selected":false},{"text":"Serenity","value":"Serenity","count":"12","selected":false},{"text":"Simply Modern","value":"Simply Modern","count":"27","selected":false},{"text":"Sky","value":"Sky","count":"49","selected":false},{"text":"Stix","value":"Stix","count":"40","selected":false},{"text":"Stone Mountain","value":"Stone Mountain","count":"39","selected":false},{"text":"Stonefire","value":"Stonefire","count":"25","selected":false},{"text":"Strands","value":"Strands","count":"15","selected":false},{"text":"Studio","value":"Studio","count":"15","selected":false},{"text":"Super White","value":"Super White","count":"1","selected":false},{"text":"Tahoe","value":"Tahoe","count":"12","selected":false},{"text":"Tailor Art","value":"Tailor Art","count":"21","selected":false},{"text":"Titus","value":"Titus","count":"14","selected":false},{"text":"Toscano","value":"Toscano","count":"6","selected":false},{"text":"Tribal","value":"Tribal","count":"26","selected":false},{"text":"Urban","value":"Urban","count":"11","selected":false},{"text":"Verona","value":"Verona","count":"17","selected":false},{"text":"Vinezia","value":"Vinezia","count":"2","selected":false},{"text":"Vintage","value":"Vintage","count":"10","selected":false},{"text":"Wave","value":"Wave","count":"3","selected":false},{"text":"Woodmark","value":"Woodmark","count":"5","selected":false},{"text":"Yosemite","value":"Yosemite","count":"26","selected":false},{"text":"Zebrino","value":"Zebrino","count":"43","selected":false}]},{"title":"Tile shape","key":"TileShape","options":[{"text":"Rectangle","value":"Rectangle","count":"614","selected":false},{"text":"Square","value":"Square","count":"307","selected":false},{"text":"Hexagon","value":"Hexagon","count":"4","selected":false},{"text":"Versailles","value":"Versailles","count":"3","selected":false}]},{"title":"Mosaic shape","key":"MosaicShape","options":[{"text":"Square","value":"Square","count":"162","selected":false},{"text":"Rectangle","value":"Rectangle","count":"45","selected":false},{"text":"Chevron","value":"Chevron","count":"39","selected":false},{"text":"Hexagon","value":"Hexagon","count":"24","selected":false},{"text":"Herringbone","value":"Herringbone","count":"17","selected":false},{"text":"Linear","value":"Linear","count":"14","selected":false},{"text":"Mini-Brick","value":"Mini-Brick","count":"12","selected":false},{"text":"Basketweave","value":"Basketweave","count":"8","selected":false}]}],"categories":[{"urlName":"large-format","name":"Large Format ","pageType":0,"selected":false,"count":"885","categories":[]},{"urlName":"marble-look","name":"Marble Look","pageType":0,"selected":false,"count":"465","categories":[]},{"urlName":"wood-look","name":"Wood Look ","pageType":0,"selected":false,"count":"313","categories":[]},{"urlName":"solid-look","name":"Solid Look","pageType":0,"selected":false,"count":"286","categories":[]},{"urlName":"concrete-look","name":"Concrete Look","pageType":0,"selected":false,"count":"255","categories":[]},{"urlName":"travertine-look","name":"Travertine Look","pageType":0,"selected":false,"count":"239","categories":[]},{"urlName":"linen-fabric-look","name":"Linen/Fabric Look","pageType":0,"selected":false,"count":"191","categories":[]},{"urlName":"quartzite-look","name":"Quartzite Look","pageType":0,"selected":false,"count":"84","categories":[]},{"urlName":"terracotta-look","name":"Terracotta Look","pageType":0,"selected":false,"count":"69","categories":[]},{"urlName":"limestone-look","name":"Limestone Look","pageType":0,"selected":false,"count":"57","categories":[]},{"urlName":"metallic-look","name":"Metallic Look","pageType":0,"selected":false,"count":"43","categories":[]},{"urlName":"encaustic-pattern-look","name":"Encaustic Pattern Look","pageType":0,"selected":false,"count":"31","categories":[]},{"urlName":"slate-look","name":"Slate Look","pageType":0,"selected":false,"count":"30","categories":[]},{"urlName":"onyx-look","name":"Onyx Look","pageType":0,"selected":false,"count":"29","categories":[]},{"urlName":"versailles-pattern","name":"Versailles Pattern ","pageType":0,"selected":false,"count":"3","categories":[]}]})
    .config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : '../main/home.html',
			})
			// route for the about page
			.when('/gallery', {
				templateUrl : '../main/gallery/index.html'
            })
            .when('/blog', {
				templateUrl : '../main/blog/index.html'
            })
            .when('/pros', {
				templateUrl : '../main/pros/index.html'
            })
            .when('/fall-2018', {
				templateUrl : '../main/featured/new-arrivals/fall-2018/index.html'
            })
            .when('/costa-allegra', {
				templateUrl : '../main/featured/costa-allegra/index.html'
            })
            .when('/provincetown', {
				templateUrl : '../main/featured/provincetown/index.html'
            })
            .when('/remy', {
				templateUrl : '../main/featured/remy/index.html'
            })
            .when('/magnifica', {
				templateUrl : '../main/featured/magnifica/index.html'
            })
            .when('/paseo', {
				templateUrl : '../main/featured/paseo/index.html'
            })
            .when('/sequel-quartz', {
				templateUrl : '../main/featured/sequel-quartz/index.html'
            })
            .when('/slab', {
				templateUrl : '../main/featured/slab/index.html'
            })
            .when('/slab-buying-guide', {
				templateUrl : '../main/featured/slab-buying-guide/index.html'
            })
            .when('/backsplashes', {
				templateUrl : '../main/product/list/backsplashes/page.html'
            })
            .when('/floor-tile', {
				templateUrl : '../main/product/list/floor-tile/page.html'
            })
            .when('/shower-tile', {
				templateUrl : '../main/product/list/shower-tile/page.html'
            })
            .when('/decorative', {
				templateUrl : '../main/product/list/decorative/index.html'
            })
            .when('/ceramic', {
				templateUrl : '../main/product/list/ceramic/index.html'
            })
            .when('/porcelain', {
				templateUrl : '../main/product/list/porcelain/index.html'
            })
            .when('/stone', {
				templateUrl : '../main/product/list/stone/index.html'
            })
            .when('/f_commercial', {
				templateUrl : '../main/product/list/f_commercial=Y.html'
            })
            .when('/slabs', {
				templateUrl : '../main/product/list/slabs/index.html'
            })
            .when('/by-look', {
				templateUrl : '../main/product/list/by-look/index.html'
            })
            .when('/f_exterior', {
				templateUrl : '../main/product/list/f_exterior=Y.html'
            })
            .when('/products/:category',{
                templateUrl : '../main/product/list/product.html',
                controller: 'ProductListController'
            })
            .when('/about', {
				templateUrl : '../main/about/index.html'
            })
            .when('/contact', {
				templateUrl : '../main/contact/index.html'
            })
            .when('/terms-of-sale', {
				templateUrl : '../main/terms-of-sale/index.html'
            })
            .when('/architects-designers', {
				templateUrl : '../main/architects-designers/index.html'
            })
            .when('/contractors', {
				templateUrl : '../main/contractors/index.html'
            })
            .when('/wholesale', {
				templateUrl : '../main/wholesale/index.html'
            })
            .when('/dashboard' , {
                templateUrl : '../main/account/dashboard/dashboard.html',
                resolve: {
                    "check":function($rootScope,$location){
                        if(localStorage.getItem("isValidURL") == 'true'){
                            $location.path('/dashboard');
                        }
                        else {
                            $location.path('/login');
                            alert("You dont have access");
                        }
                    }
                } 
            })
            .when('/login', {
                templateUrl : '../main/account/login/login.html'
            })
	});
}(),
function() {
    "use strict";

    function n(n, t, i, r, u, f, e) {
        function o(i) {
            t.post(r.getSecureUrl("AddressBook/Shipping/Business", !0), {
                customerBranchId: i
            }).then(function(t) {
                n.addresses = t.data.addresses;
                n.model.isBusy = !1
            }, function(t) {
                n.model.isBusy = !1;
                console.log(t)
            })
        }

        function s() {
            o(n.model.selectedCustomerBranch)
        }

        function h(i) {
            t.post(r.getSecureUrl("AddressBook/Shipping/BusinessAddressSetDefault", !0), {
                shipToAddressId: i.shipToAddressId,
                customerBranchId: i.customerId
            }).then(function(t) {
                t.data.success ? (n.data.errors = null, n.data.confirm = !0) : n.data.errors = t.data.errors;
                n.model.isBusy = !1;
                n.load(n.model.selectedCustomerBranch)
            }, function(t) {
                n.model.isBusy = !1;
                console.log(t)
            })
        }

        function c(t) {
            n.model.isBusy = !0;
            i.location.href = r.getSecureUrl("AddressBook/Shipping/BusinessAddressEdit/", !0) + "?customerBranchId=" + encodeURIComponent(t)
        }

        function l(t) {
            n.model.isBusy = !0;
            i.location.href = r.getSecureUrl("AddressBook/Shipping/BusinessAddressEdit/", !0) + "" + encodeURIComponent(t.shipToAddressId) + "?customerBranchId=" + encodeURIComponent(t.customerId)
        }

        function a(i) {
            confirm("Are you sure that you want to remove this entry?") && t.post(r.getSecureUrl("AddressBook/Shipping/BusinessAddressDelete", !0), {
                shipToAddressId: i.shipToAddressId,
                customerBranchId: i.customerId
            }).then(function() {
                n.model.isBusy = !1
            }, function(t) {
                n.model.isBusy = !1;
                console.log(t)
            })
        }
        n.model = {
            isBusy: !1,
            selectedCustomerBranch: ""
        };
        n.states = e;
        n.addresses = f;
        n.branches = u;
        n.errors = [];
        n.data = {};
        n.setDetault = h;
        n.addAddress = c;
        n.editAddress = l;
        n.deleteAddress = a;
        n.load = o;
        n.setCustomerBranch = s
    }
    angular.module("app").controller("BusinessAddressCtrl", ["$scope", "$http", "$window", "appSettings", "branches", "addresses", "states", n])
}(),
function() {
    "use strict";

    function n(n, t, i, r, u, f) {
        function e() {
            n.model.hasServerError = !0;
            r.endLoad();
            n.busy = !1
        }
        n.model = {
            address: {},
            billingAddress: {},
            date: new Date,
            hasServerError: !1
        };
        n.states = f;
        n.customerTypes = [{
            name: "Dealer"
        }, {
            name: "Distributor"
        }, {
            name: "Designer"
        }, {
            name: "Design Center"
        }, {
            name: "Fabricator"
        }, {
            name: "Pool Contractor"
        }, {
            name: "Other"
        }, {
            name: "General Contractor"
        }, {
            name: "Home/Box Store"
        }, {
            name: "Landscape"
        }, {
            name: "Online Retailer"
        }, {
            name: "Tile Specialty"
        }, {
            name: "Property Manager"
        }];
        n.model.customerType = n.customerTypes[0].name;
        n.oafDefaultTypes = [{
            name: "Box"
        }, {
            name: "Commercial"
        }, {
            name: "Dist"
        }, {
            name: "Retail"
        }, {
            name: "Tract"
        }];
        n.model.oafType = n.oafDefaultTypes[0].name;
        n.sendForm = function() {
            if (!n.business.$invalid) {
                r.startLoad();
                n.busy = !0;
                n.model.billingArrdessSameAsPhysical = !1;
                var f = JSON.stringify(n.model),
                    o = u.getUrl("account/CustomerRequest", !0);
                t.post(o, {
                    request: f
                }).then(function(n) {
                    n.data.success ? i.location.href = u.getUrl("account/complete/customerrequested", !0) : e()
                }, function() {
                    e()
                })
            }
        }
    }
    var t = angular.module("app").controller("BusinessFormCtrl", ["$scope", "$http", "$window", "spinner", "appSettings", "states", n])
}(),
function() {
    "use strict";

    function n(n, t, i) {
        n.balance = {
            customerNo: "",
            availableCredit: "",
            balance: "",
            paymentTerm: ""
        };
        n.showBalance = !1;
        n.loadingCustomerBalance = !0;
        i.getBalance().then(function(t) {
            n.balance = t;
            n.showBalance = !0
        }, function(n) {
            console.log(n)
        }).finally(function() {
            n.loadingCustomerBalance = !1
        })
    }
    angular.module("app").controller("CustomerBalanceController", ["$scope", "$http", "CustomerBalanceService", n])
}(),
function() {
    "use strict";

    function n(n, t, i) {
        function r() {
            var r = i.defer();
            return t({
                url: n.getUrl("Account/GetCustomerBalance", !0),
                method: "POST",
                timeout: 5e3,
                dataType: "json"
            }).success(function(n) {
                n ? r.resolve(n) : r.reject("Failed to get invoices!")
            }).error(function() {
                r.reject("An error occurred while sending your enquiry. Please try again or contact an administrator.")
            }), r.promise
        }
        return {
            getBalance: r
        }
    }
    angular.module("app").service("CustomerBalanceService", ["appSettings", "$http", "$q", n])
}(),
function() {
    "use strict";

    function n(n, t) {
        return {
            require: "ngModel",
            link: function(i, r, u, f) {
                var e = function() {
                    var t = r.val().replace(/[^0-9]/g, "");
                    r.val(n("tel")(t, !1))
                };
                f.$parsers.push(function(n) {
                    return n.replace(/[^0-9]/g, "").slice(0, 10)
                });
                f.$render = function() {
                    r.val(n("tel")(f.$viewValue, !1))
                };
                r.bind("change", e);
                r.bind("keydown", function(n) {
                    var i = n.keyCode;
                    i == 91 || 15 < i && i < 19 || 37 <= i && i <= 40 || t.defer(e)
                });
                r.bind("paste cut", function() {
                    t.defer(e)
                })
            }
        }
    }
    angular.module("app").directive("phoneInput", ["$filter", "$browser", n])
}(),
function() {
    "use strict";

    function n(n, t, i) {
        n.model = {
            password: "",
            confirmPassword: ""
        };
        var r = i[0].getElementById("confirmPassword");
        n.showPasswordsNotMatchToolTip = angular.element(r).text() != "" && angular.element(r).text().length > 0 && n.model.password == n.model.confirmPassword;
        n.isFocus = function() {
            n.showPasswordsNotMatchToolTip = !0
        };
        n.isBlur = function() {
            n.showPasswordsNotMatchToolTip = !1
        }
    }
    angular.module("app").controller("SignUpFormCtrl", ["$scope", "$http", "$document", "$window", n])
}(),
function() {
    function n() {
        return function(n) {
            var i, r, t;
            if (!n) return "";
            if (i = n.toString().trim().replace(/^\+/, ""), i.match(/[^0-9]/)) return n;
            switch (i.length) {
                case 1:
                case 2:
                case 3:
                    r = i;
                    break;
                default:
                    r = i.slice(0, 3);
                    t = i.slice(3)
            }
            return t ? (t = t.length > 3 ? t.slice(0, 3) + "-" + t.slice(3, 7) : t, ("(" + r + ") " + t).trim()) : "(" + r
        }
    }
    angular.module("app").filter("tel", [n])
}(),
function() {
    "use strict";

    function n(n, t, i, r, u, f) {
        f.open({
            template: "/welcome-dialog.html",
            className: "ngdialog-theme-plain welcome-dialog",
            controller: this,
            scope: n
        })
    }
    angular.module("app").controller("WelcomeDialogCtrl", n);
    n.$inject = ["$scope", "$http", "$window", "appSettings", "spinner", "ngDialog"]
}(),
function() {
    "use strict";
    angular.module("app").directive("avatar", ["appSettings", "myModuleConst", "spinner", function(n, t, i) {
        return {
            restrict: "E",
            templateUrl: n.getUrl(t.avatarTemplate, !1),
            scope: {
                avatarUrl: "=avatarUrl",
                userName: "=userName"
            },
            link: function(t, r) {
                t.changeAvatarUrl = n.getUrl("en/account/changeAvatar");
                $(r).find("#avatarImg").click(function() {
                    $(r).find("#avatarFile").click()
                });
                $(r).find("#avatarFile").change(function() {
                    i.startLoad();
                    this.form.submit()
                })
            }
        }
    }])
}(),
function() {
    "use strict";

    function n(n, t, i, r, u) {
        function f() {
            var i = r.getUrl("shoppingbag/checkoutitems/", !0),
                f;
            u && (i += "?ShoppingBagQuoteId=" + u);
            f = {
                method: "GET",
                url: i,
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                }
            };
            t(f).then(function(t) {
                n.data.model = t.data
            }, function(n) {
                console.error(n)
            })
        }
        n.data = {};
        n.refreshCheckoutItems = f;
        n.busy = !1;
        f()
    }
    angular.module("app").controller("CheckoutCtrl", ["$scope", "$http", "spinner", "appSettings", "shoppingBagId", n])
}(),
function() {
    "use strict";
    angular.module("app").controller("branchLocatorController", ["$scope", "$rootScope", "$window", "$http", "spinner", "$geolocation", "appSettings", "$cookies", "branchLocatorService", "ngDialog", function(n, t, i, r, u, f, e, o, s, h) {
        n.init = function(t, i, u) {
            var o, h, c;
            n.branchState = t;
            n.branchCity = i;
            n.branchCode = u;
            o = s.GetlocationWasGeoLocated();
            o || (h = e.getUrl("shipping/ChangeLocationToClosest/", !0), f.getCurrentPosition({
                timeout: 6e4
            }).then(function(t) {
                r({
                    method: "POST",
                    url: h,
                    data: {
                        lat: t.coords.latitude,
                        lon: t.coords.longitude
                    }
                }).then(function(t) {
                    n.setBranch(t.data.context);
                    s.SetLocationWasGeoLocated()
                })
            }));
            c = s.GetStateNameLocated();
            c ? n.currentStateName = s.GetStateNameLocated() : r.get(e.getUrl("home/GetAllStates", !0)).then(function(t) {
                n.statesList = t.data.states;
                n.currentStateName = n.statesList.filter(function(t) {
                    return t.Abbreviation == n.branchState
                })[0].Name
            })
        };
        n.$on("branchChanged", function(t, i) {
            n.branchState = i.branchState;
            n.branchCity = i.branchCity;
            n.branchCode = i.branchCode
        });
        n.selectIt = function() {
            n.data = {
                busy: !0,
                ourLocationsUrl: e.getUrl("our-locations/", !0)
            };
            n.selectLocationDialog = h.open({
                template: e.getUrl("scripts/app/common/directives/selectLocation.dialog.html"),
                className: "",
                showClose: !1,
                scope: n,
                controller: ["$scope", "$http", function(n, t) {
                    t.get(e.getUrl("our-locations/", !0)).then(function(t) {
                        n.data.locations = t.data;
                        n.data.busy = !1
                    })
                }]
            })
        };
        n.chooseIt = function(t) {
            s.ChooseBranchByCode(t, function(t) {
                n.selectLocationDialog.close(!0);
                n.setBranch(t.data.context)
            })
        };
        n.setBranch = function(n) {
            var i = {
                branchState: n.BranchState,
                branchCity: n.BranchCity,
                branchCode: n.BranchCode
            };
            t.$broadcast("branchChanged", i)
        };
        n.selectState = function() {
            n.data = {
                states: [],
                busy: !1,
                ourStatesUrl: e.getUrl("home/GetAllStates/", !0)
            };
            n.selectStateDialog = h.open({
                template: e.getUrl("scripts/app/common/directives/selectState.dialog.html"),
                className: "",
                showClose: !1,
                scope: n,
                controller: ["$scope", "$http", function(n, t) {
                    n.data.busy = !0;
                    t.get(e.getUrl("home/GetAllStates", !0)).then(function(t) {
                        n.data.states = t.data.states;
                        n.data.busy = !1
                    }, function() {
                        n.data.busy = !1
                    })
                }]
            })
        };
        n.chooseState = function(t) {
            n.busy || (n.selectStateDialog.close(!0), n.busy = !0, u.startLoad(), s.ChooseStateByAbbreviation(t).then(function() {
                window.location.reload()
            }))
        }
    }])
}(),
function() {
    "use strict";
    //########## POSTING login details ##########
    angular.module("app").controller("loginCtrl",["$scope","$http",function($scope,$http){
        document.getElementById("js-site-header").style.display = "none";
        document.getElementById("mkFooter").style.display = "none";
        $scope.login = function() {
            var postJSON = JSON.stringify({
              userid: $scope.loginuserid,
              password: $scope.loginpassword
            });
            console.log(postJSON);
            $http({
              method: 'POST',
              url: '/loginuser',
              data: postJSON
            }).then(function mySuccess(response){
              console.log(response.status);
               if(response.data.status == "Y"){
                localStorage.setItem("isValidURL", true);
                document.getElementById("loginBody").style.display = "none";
                document.getElementById("loginBodyCon").style.display = "none";
                document.getElementById("js-site-header").style.display = "block";
                document.getElementById("mkFooter").style.display = "block";
                location.href ="#/dashboard";
                
              }
              console.log('Data passed for verification..');
            }, function myError(response){
              console.log('Error posting the data..');
            })
          }
    }]);

    //########### Home Controller #########
    angular.module("app").controller("homeCtrl",function(){
        document.getElementById("js-site-header").style.display = "block";
        document.getElementById("mkFooter").style.display = "block";
    });

    angular.module("app").controller("dashboardMainCtrl",["$scope",function($scope){
        $scope.launchProductEditor = function(){
            $scope.dashboardTemp = "Product";
        }
        $scope.launchUserEditor = function(){
            $scope.dashboardTemp = "User";
        }
    }]);
    //########### Menu Controller ##########
    angular.module("app").controller("MenuCtrl", ["$scope", "$window", "$http", "appSettings","$rootScope", function(n, t, i, r,rsc) {
        localStorage.setItem("isValidURL", false);

        n.menu = t.menu;
        n.menub = t.menub;
        n.transient = {
            showProdForm : false,
        }
        // document.getElementById("js-site-header").style.display = "block";
        // document.getElementById("mkFooter").style.display = "block";
        // n.toggleMenu = function(){
        //     debugger;
        //     var elem = document.getElementById("menu-1");
        //     if(elem.style.display == "none" || !elem.style.display){
        //         document.getElementById("menu-1") = "block"
        //     }else{
        //         document.getElementById("menu-1") = "none"
        //     }
        // }
        // n.toggleMenu = function() {
        //     var elem = document.getElementById("menu-1");
        //     if (elem.style.display === "none") {
        //         elem.style.display = "block";
        //     } else {
        //         elem.style.display = "none";
        //     }
        //   }
        n.initShoppingBag = function() {
            var t = r.getUrl("home/AccountInformation");
            i({
                method: "GET",
                url: t
            }).then(function(t) {
                n.showShoppingBagItemIcon = t.data.itemsCount > 0 ? !0 : !1;
                n.itemsCount = t.data.itemsCount
            })
        };
        n.selected = null;
        n.showDetail = function(t) {
            n.selected = t
        };
        n.hideDetail = function() {
            n.selected = null
        };
        n.hasChildren = function() {
            return n.selected && n.selected.children && n.selected.children.length > 0
        };
        n.loginEventClick = function(){
            location.href = "#/login";
        }
        n.toggleHamburgerMenu = function() {
            n.isShowingHamburgerMenu ? (n.isShowingHamburgerMenu = !1, document.body.style.overflow = "visible") : (n.isShowingHamburgerMenu = !0, document.body.style.overflow = "hidden")
        };
        n.$on("shoppingBagItemsChanged", function(t, i) {
            n.showShoppingBagItemIcon = i > 0 ? !0 : !1;
            n.itemsCount = i
        })
        n.productList = [{productId:"", productName:"", categories:"", imagePath:"", color:"", price:""}];
        n.catList = [];
        n.menuList = [
            {title: "Featured", url:"#/featured/", children:[
                {title:"New Arrivals", url:"#/fall-2018"},
                {title:"Costa Allegra", url:"#/costa-allegra"}]},
            {title:"Products", url:"#/products/", children:[]},
            {title:"Gallery", url:"#/gallery", children:[]},
            {title:"Blog", url:"#/blog", children:[]},
            {title:"Professionals", url:"#/pros", children:[]},
            // {title:"signup", url:"#/account", children:[]}
        ]
        var productReq = {
            method: 'GET',
            url:'/api/v1/getProductList',
        }
         i(productReq).then(function(data){
            if(Array.isArray(data.data) && data.data.length > 0){
                n.productList = data.data;
                for(var a in n.productList){
                    if(n.catList.indexOf(n.productList[a].category) == -1){
                        n.catList.push(n.productList[a].category)
                        n.menuList[1].children.push({title: n.productList[a].category, url:"#/products/"+n.productList[a].category})
                    }
                }
                // n.menuList[1].children = n.catList;
            }else{
                n.productList = [{productId:"", productName:"", categories:"", imagePath:"", color:"", price:""}];
            }
        },
        function(err){
                n.productList = [{productId:"", productName:"", categories:"", imagePath:"", color:"", price:""}];          
        });
        
        n.addRow = function(index, data){
            if(data.productId){
                n.productList.splice(index+1, 0, {});
            }
        }

        n.removeRow = function(index){
            n.productList.splice(index, 1);
        }


        n.createProduct = function(productData){
            if(productData){
                var obj = { 
                    method: 'POST',
                    url: '/api/v1/createProduct',
                    headers: {
                        'Content-Type':'application/json',
                    },
                    data: productData
                }
                i(obj)
                .success(function(data){
                    console.log(data);
                    if(data.status == "Y"){
                        alert("Product is created");
                    }
                })
                .error(function(error){

                });
            }else{
                
            }
        }

        n.deleteProduct = function(productId, index){
        if(window.confirm("Do you want to delete this record?")){
            var req = {
                method: 'DELETE',
                url:  "/api/v1/deleteProduct/"+productId,
            }
            i(req).then(function(response){
                if(response.data.status == "Y"){
                    n.productList.splice(index, 1);
                    alert("Deleted");
                }
            }, function(response){
                alert("Fail to process");
            });
        }
    }

    }])
}(),
function(n) {
    "use strict";
    var t = "socialshare",
        i = ["facebook", "twitter", "linkedin", "google+", "pinterest", "tumblr", "reddit", "stumbleupon", "buffer", "digg", "delicious", "vk", "pocket", "wordpress", "flipboard", "xing", "hackernews", "evernote"],
        r = function() {
            var t = [{
                provider: "facebook",
                conf: {
                    url: "",
                    text: "",
                    media: "",
                    type: "",
                    via: "",
                    to: "",
                    from: "",
                    ref: "",
                    display: "",
                    source: "",
                    caption: "",
                    redirectUri: "",
                    trigger: "click",
                    popupHeight: 300,
                    popupWidth: 400
                }
            }, {
                provider: "twitter",
                conf: {
                    url: "",
                    text: "",
                    via: "",
                    hashtags: "",
                    trigger: "click",
                    popupHeight: 300,
                    popupWidth: 400
                }
            }, {
                provider: "linkedin",
                conf: {
                    url: "",
                    text: "",
                    description: "",
                    source: "",
                    trigger: "click",
                    popupHeight: 300,
                    popupWidth: 400
                }
            }, {
                provider: "reddit",
                conf: {
                    url: "",
                    text: "",
                    subreddit: "",
                    trigger: "click",
                    popupHeight: 300,
                    popupWidth: 400
                }
            }, {
                provider: "vk",
                conf: {
                    url: "",
                    text: "",
                    media: "",
                    trigger: "click",
                    popupHeight: 300,
                    popupWidth: 400
                }
            }, {
                provider: "digg",
                conf: {
                    url: "",
                    text: "",
                    media: "",
                    trigger: "click",
                    popupHeight: 300,
                    popupWidth: 400
                }
            }, {
                provider: "delicious",
                conf: {
                    url: "",
                    text: "",
                    media: "",
                    trigger: "click",
                    popupHeight: 300,
                    popupWidth: 400
                }
            }, {
                provider: "stumbleupon",
                conf: {
                    url: "",
                    text: "",
                    media: "",
                    trigger: "click",
                    popupHeight: 300,
                    popupWidth: 400
                }
            }, {
                provider: "pinterest",
                conf: {
                    url: "",
                    text: "",
                    media: "",
                    trigger: "click",
                    popupHeight: 300,
                    popupWidth: 400
                }
            }, {
                provider: "google+",
                conf: {
                    url: "",
                    text: "",
                    media: "",
                    trigger: "click",
                    popupHeight: 300,
                    popupWidth: 400
                }
            }, {
                provider: "tumblr",
                conf: {
                    url: "",
                    text: "",
                    media: "",
                    trigger: "click",
                    popupHeight: 300,
                    popupWidth: 400
                }
            }, {
                provider: "buffer",
                conf: {
                    url: "",
                    text: "",
                    via: "",
                    trigger: "click",
                    popupHeight: 300,
                    popupWidth: 400
                }
            }, {
                provider: "pocket",
                conf: {
                    url: "",
                    text: "",
                    trigger: "click",
                    popupHeight: 300,
                    popupWidth: 400
                }
            }, {
                provider: "flipboard",
                conf: {
                    url: "",
                    text: "",
                    trigger: "click",
                    popupHeight: 300,
                    popupWidth: 400
                }
            }, {
                provider: "hackernews",
                conf: {
                    url: "",
                    text: "",
                    trigger: "click",
                    popupHeight: 300,
                    popupWidth: 400
                }
            }, {
                provider: "wordpress",
                conf: {
                    url: "",
                    text: "",
                    media: "",
                    trigger: "click",
                    popupHeight: 300,
                    popupWidth: 400
                }
            }, {
                provider: "xing",
                conf: {
                    url: "",
                    text: "",
                    media: "",
                    follow: "",
                    trigger: "click",
                    popupHeight: 300,
                    popupWidth: 400
                }
            }, {
                provider: "evernote",
                conf: {
                    url: "",
                    text: "",
                    trigger: "click",
                    popupHeight: 300,
                    popupWidth: 400
                }
            }];
            return {
                configure: function(r) {
                    var u = 0,
                        s, o, e, f, h = 0,
                        c = n.injector(["ng"]).get("$log");
                    if (r && r.length > 0)
                        for (; u < r.length; u += 1)
                            if (r[u].provider && i.indexOf(r[u].provider) > -1) {
                                for (; h < t.length; h += 1)
                                    if (f = t[h], f && f.provider && r[u].provider === f.provider)
                                        for (s = Object.keys(f.conf), o = 0; o < s.length; o += 1) e = s[o], e && r[u].conf[e] && (f.conf[e] = r[u].conf[e])
                            } else c.warn("Invalid provider at element " + u + " with name:" + r[u].provider)
                },
                $get: function() {
                    return t
                }
            }
        },
        u = ["$window", "$location", "socialshareConf", "$log", function(n, t, r, u) {
            var f = function(f, e, o) {
                for (var s, h = 0, c = function() {
                        switch (o.socialshareProvider) {
                            case "facebook":
                                it(n, t, o);
                                break;
                            case "google+":
                                ut(n, t, o);
                                break;
                            case "twitter":
                                rt(n, t, o);
                                break;
                            case "stumbleupon":
                                et(n, t, o);
                                break;
                            case "reddit":
                                ft(n, t, o);
                                break;
                            case "pinterest":
                                st(n, t, o);
                                break;
                            case "linkedin":
                                ot(n, t, o);
                                break;
                            case "digg":
                                ht(n, t, o);
                                break;
                            case "tumblr":
                                ct(n, t, o);
                                break;
                            case "delicious":
                                at(n, t, o);
                                break;
                            case "vk":
                                lt(n, t, o);
                                break;
                            case "buffer":
                                vt(n, t, o);
                                break;
                            case "pocket":
                                wt(n, t, o);
                                break;
                            case "wordpress":
                                bt(n, t, o);
                                break;
                            case "flipboard":
                                pt(n, t, o);
                                break;
                            case "hackernews":
                                yt(n, t, o);
                                break;
                            case "xing":
                                kt(n, t, o);
                                break;
                            case "evernote":
                                dt(n, t, o);
                                break;
                            default:
                                return !0
                        }
                    }; h < r.length; h += 1)
                    if (r[h].provider === o.socialshareProvider) {
                        s = r[h];
                        break
                    } i.indexOf(s.provider) === -1 && u.warn("Invalid Provider Name : " + o.socialshareProvider);
                o.socialshareUrl = o.socialshareUrl || s.conf.url;
                o.socialshareText = o.socialshareText || s.conf.text;
                o.socialshareMedia = o.socialshareMedia || s.conf.media;
                o.socialshareType = o.socialshareType || s.conf.type;
                o.socialshareVia = o.socialshareVia || s.conf.via;
                o.socialshareTo = o.socialshareTo || s.conf.to;
                o.socialshareFrom = o.socialshareFrom || s.conf.from;
                o.socialshareRef = o.socialshareRef || s.conf.ref;
                o.socialshareDislay = o.socialshareDislay || s.conf.display;
                o.socialshareSource = o.socialshareSource || s.conf.source;
                o.socialshareCaption = o.socialshareCaption || s.conf.caption;
                o.socialshareRedirectUri = o.socialshareRedirectUri || s.conf.redirectUri;
                o.socialshareTrigger = o.socialshareTrigger || s.conf.trigger;
                o.socialsharePopupHeight = o.socialsharePopupHeight || s.conf.popupHeight;
                o.socialsharePopupWidth = o.socialsharePopupWidth || s.conf.popupWidth;
                o.socialshareSubreddit = o.socialshareSubreddit || s.conf.subreddit;
                o.socialshareDescription = o.socialshareDescription || s.conf.description;
                o.socialshareFollow = o.socialshareFollow || s.conf.follow;
                o.socialshareHashtags = o.socialshareHashtags || s.conf.hashtags;
                e.bind(o.socialshareTrigger, c)
            };
            return {
                restrict: "A",
                link: f
            }
        }],
        f = function(n, t, i) {
            if (i.socialshareType && i.socialshareType === "feed") {
                var r = "https://www.facebook.com/dialog/feed?display=popup";
                i.socialshareVia && (r += "&app_id=" + encodeURIComponent(i.socialshareVia));
                i.socialshareRedirectUri && (r += "&redirect_uri=" + encodeURIComponent(i.socialshareRedirectUri));
                i.socialshareUrl && (r += "&link=" + encodeURIComponent(i.socialshareUrl));
                i.socialshareTo && (r += "&to=" + encodeURIComponent(i.socialshareTo));
                i.socialshareDisplay && (r += "&display=" + encodeURIComponent(i.socialshareDisplay));
                i.socialshareRef && (r += "&ref=" + encodeURIComponent(i.socialshareRef));
                i.socialshareFrom && (r += "&from=" + encodeURIComponent(i.socialshareFrom));
                i.socialshareDescription && (r += "&description=" + encodeURIComponent(i.socialshareDescription));
                i.socialshareText && (r += "&name=" + encodeURIComponent(i.socialshareText));
                i.socialshareCaption && (r += "&caption=" + encodeURIComponent(i.socialshareCaption));
                i.socialshareMedia && (r += "&picture=" + encodeURIComponent(i.socialshareMedia));
                i.socialshareSource && (r += "&source=" + encodeURIComponent(i.socialshareSource));
                n.open(r, "sharer", "toolbar=0,status=0,width=" + i.socialsharePopupWidth + ",height=" + i.socialsharePopupHeight + ",top=" + (n.innerHeight - i.socialsharePopupHeight) / 2 + ",left=" + (n.innerWidth - i.socialsharePopupWidth) / 2)
            } else n.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(i.socialshareUrl || t.absUrl()), "sharer", "toolbar=0,status=0,width=" + i.socialsharePopupWidth + ",height=" + i.socialsharePopupHeight + ",top=" + (n.innerHeight - i.socialsharePopupHeight) / 2 + ",left=" + (n.innerWidth - i.socialsharePopupWidth) / 2)
        },
        e = function(n, t, i) {
            var r = "https://www.twitter.com/intent/tweet?";
            i.socialshareText && (r += "text=" + encodeURIComponent(i.socialshareText));
            i.socialshareVia && (r += "&via=" + encodeURIComponent(i.socialshareVia));
            i.socialshareHashtags && (r += "&hashtags=" + encodeURIComponent(i.socialshareHashtags));
            r += "&url=" + encodeURIComponent(i.socialshareUrl || t.absUrl());
            n.open(r, "sharer", "toolbar=0,status=0,width=" + i.socialsharePopupWidth + ",height=" + i.socialsharePopupHeight + ",top=" + (n.innerHeight - i.socialsharePopupHeight) / 2 + ",left=" + (n.innerWidth - i.socialsharePopupWidth) / 2)
        },
        o = function(n, t, i) {
            n.open("https://plus.google.com/share?url=" + encodeURIComponent(i.socialshareUrl || t.absUrl()), "sharer", "toolbar=0,status=0,width=" + i.socialsharePopupWidth + ",height=" + i.socialsharePopupHeight + ",top=" + (n.innerHeight - i.socialsharePopupHeight) / 2 + ",left=" + (n.innerWidth - i.socialsharePopupWidth) / 2)
        },
        s = function(n, t, i) {
            var r = "https://www.reddit.com/";
            r += i.socialshareSubreddit ? "r/" + i.socialshareSubreddit + "/submit?url=" : "submit?url=";
            i.socialsharePopupWidth < 900 && (i.socialsharePopupWidth = 900);
            i.socialsharePopupHeight < 650 && (i.socialsharePopupHeight = 650);
            n.open(r + encodeURIComponent(i.socialshareUrl || t.absUrl()) + "&title=" + encodeURIComponent(i.socialshareText), "sharer", "toolbar=0,status=0,width=" + i.socialsharePopupWidth + ",height=" + i.socialsharePopupHeight + ",top=" + (n.innerHeight - i.socialsharePopupHeight) / 2 + ",left=" + (n.innerWidth - i.socialsharePopupWidth) / 2)
        },
        h = function(n, t, i) {
            n.open("https://www.stumbleupon.com/submit?url=" + encodeURIComponent(i.socialshareUrl || t.absUrl()) + "&title=" + encodeURIComponent(i.socialshareText), "sharer", "toolbar=0,status=0,width=" + i.socialsharePopupWidth + ",height=" + i.socialsharePopupHeight + ",top=" + (n.innerHeight - i.socialsharePopupHeight) / 2 + ",left=" + (n.innerWidth - i.socialsharePopupWidth) / 2)
        },
        c = function(n, t, i) {
            var r = "https://www.linkedin.com/shareArticle?mini=true";
            r += "&url=" + encodeURIComponent(i.socialshareUrl || t.absUrl());
            i.socialshareText && (r += "&title=" + encodeURIComponent(i.socialshareText));
            i.socialshareDescription && (r += "&summary=" + encodeURIComponent(i.socialshareDescription));
            i.socialshareSource && (r += "&source=" + encodeURIComponent(i.socialshareSource));
            n.open(r, "sharer", "toolbar=0,status=0,width=" + i.socialsharePopupWidth + ",height=" + i.socialsharePopupHeight + ",top=" + (n.innerHeight - i.socialsharePopupHeight) / 2 + ",left=" + (n.innerWidth - i.socialsharePopupWidth) / 2)
        },
        l = function(n, t, i) {
            n.open("https://www.pinterest.com/pin/create/button/?url=" + encodeURIComponent(i.socialshareUrl || t.absUrl()) + "&media=" + encodeURIComponent(i.socialshareMedia) + "&description=" + encodeURIComponent(i.socialshareText), "sharer", "toolbar=0,status=0,width=" + i.socialsharePopupWidth + ",height=" + i.socialsharePopupHeight + ",top=" + (n.innerHeight - i.socialsharePopupHeight) / 2 + ",left=" + (n.innerWidth - i.socialsharePopupWidth) / 2)
        },
        a = function(n, t, i) {
            n.open("https://www.digg.com/submit?url=" + encodeURIComponent(i.socialshareUrl || t.absUrl()) + "&title=" + encodeURIComponent(i.socialshareText), "sharer", "toolbar=0,status=0,width=" + i.socialsharePopupWidth + ",height=" + i.socialsharePopupHeight + ",top=" + (n.innerHeight - i.socialsharePopupHeight) / 2 + ",left=" + (n.innerWidth - i.socialsharePopupWidth) / 2)
        },
        v = function(n, t, i) {
            if (i.socialshareMedia) {
                var r = "https://www.tumblr.com/share/photo?source=" + encodeURIComponent(i.socialshareMedia);
                i.socialshareText && (r += "&caption=" + encodeURIComponent(i.socialshareText));
                n.open(r, "sharer", "toolbar=0,status=0,width=" + i.socialsharePopupWidth + ",height=" + i.socialsharePopupHeight + ",top=" + (n.innerHeight - i.socialsharePopupHeight) / 2 + ",left=" + (n.innerWidth - i.socialsharePopupWidth) / 2)
            } else n.open("https://www.tumblr.com/share/link?url=" + encodeURIComponent(i.socialshareUrl) + "&description=" + encodeURIComponent(i.socialshareText), "sharer", "toolbar=0,status=0,width=" + i.socialsharePopupWidth + ",height=" + i.socialsharePopupHeight + ",top=" + (n.innerHeight - i.socialsharePopupHeight) / 2 + ",left=" + (n.innerWidth - i.socialsharePopupWidth) / 2)
        },
        y = function(n, t, i) {
            n.open("https://www.vk.com/share.php?url=" + encodeURIComponent(i.socialshareUrl || t.absUrl()), "sharer", "toolbar=0,status=0,width=" + i.socialsharePopupWidth + ",height=" + i.socialsharePopupHeight + ",top=" + (n.innerHeight - i.socialsharePopupHeight) / 2 + ",left=" + (n.innerWidth - i.socialsharePopupWidth) / 2)
        },
        p = function(n, t, i) {
            n.open("https://www.delicious.com/save?v=5&noui&jump=close&url=" + encodeURIComponent(i.socialshareUrl || t.absUrl()) + "&title=" + encodeURIComponent(i.socialshareText), "sharer", "toolbar=0,status=0,width=" + i.socialsharePopupWidth + ",height=" + i.socialsharePopupHeight + ",top=" + (n.innerHeight - i.socialsharePopupHeight) / 2 + ",left=" + (n.innerWidth - i.socialsharePopupWidth) / 2)
        },
        w = function(n, t, i) {
            var r = "https://bufferapp.com/add?";
            i.socialshareText && (r += "text=" + encodeURIComponent(i.socialshareText));
            i.socialshareVia && (r += "&via=" + encodeURIComponent(i.socialshareVia));
            r += "&url=" + encodeURIComponent(i.socialshareUrl || t.absUrl());
            n.open(r, "sharer", "toolbar=0,status=0,width=" + i.socialsharePopupWidth + ",height=" + i.socialsharePopupHeight + ",top=" + (n.innerHeight - i.socialsharePopupHeight) / 2 + ",left=" + (n.innerWidth - i.socialsharePopupWidth) / 2)
        },
        b = function(n, t, i) {
            var r = "https://news.ycombinator.com/submitlink?";
            i.socialshareText && (r += "t=" + encodeURIComponent(i.socialshareText) + "&");
            r += "u=" + encodeURIComponent(i.socialshareUrl || t.absUrl());
            n.open(r, "sharer", "toolbar=0,status=0,width=" + i.socialsharePopupWidth + ",height=" + i.socialsharePopupHeight + ",top=" + (n.innerHeight - i.socialsharePopupHeight) / 2 + ",left=" + (n.innerWidth - i.socialsharePopupWidth) / 2)
        },
        k = function(n, t, i) {
            var r = "https://share.flipboard.com/bookmarklet/popout?v=2&";
            i.socialshareText && (r += "title=" + encodeURIComponent(i.socialshareText) + "&");
            r += "url=" + encodeURIComponent(i.socialshareUrl || t.absUrl());
            n.open(r, "sharer", "toolbar=0,status=0,width=" + i.socialsharePopupWidth + ",height=" + i.socialsharePopupHeight + ",top=" + (n.innerHeight - i.socialsharePopupHeight) / 2 + ",left=" + (n.innerWidth - i.socialsharePopupWidth) / 2)
        },
        d = function(n, t, i) {
            var r = "https://getpocket.com/save?";
            i.socialshareText && (r += "text=" + encodeURIComponent(i.socialshareText) + "&");
            r += "url=" + encodeURIComponent(i.socialshareUrl || t.absUrl());
            n.open(r, "sharer", "toolbar=0,status=0,width=" + i.socialsharePopupWidth + ",height=" + i.socialsharePopupHeight + ",top=" + (n.innerHeight - i.socialsharePopupHeight) / 2 + ",left=" + (n.innerWidth - i.socialsharePopupWidth) / 2)
        },
        g = function(n, t, i) {
            var r = "http://wordpress.com/press-this.php?";
            i.socialshareText && (r += "t=" + encodeURIComponent(i.socialshareText) + "&");
            i.socialshareMedia && (r += "i=" + encodeURIComponent(i.socialshareMedia) + "&");
            r += "u=" + encodeURIComponent(i.socialshareUrl || t.absUrl());
            n.open(r, "sharer", "toolbar=0,status=0,width=" + i.socialsharePopupWidth + ",height=" + i.socialsharePopupHeight + ",top=" + (n.innerHeight - i.socialsharePopupHeight) / 2 + ",left=" + (n.innerWidth - i.socialsharePopupWidth) / 2)
        },
        nt = function(n, t, i) {
            var r = "";
            i.socialshareFollow && (r = "&follow_url=" + encodeURIComponent(i.socialshareFollow));
            n.open("https://www.xing.com/spi/shares/new?url=" + encodeURIComponent(i.socialshareUrl || t.absUrl()) + r, "sharer", "toolbar=0,status=0,width=" + i.socialsharePopupWidth + ",height=" + i.socialsharePopupHeight + ",top=" + (n.innerHeight - i.socialsharePopupHeight) / 2 + ",left=" + (n.innerWidth - i.socialsharePopupWidth) / 2)
        },
        tt = function(n, t, i) {
            var r = "http://www.evernote.com/clip.action?url=" + encodeURIComponent(i.socialshareUrl || t.absUrl());
            i.socialshareText && (r += "&title=" + encodeURIComponent(i.socialshareText));
            n.open(r, "sharer", "toolbar=0,status=0,width=" + i.socialsharePopupWidth + ",height=" + i.socialsharePopupHeight + ",top=" + (n.innerHeight - i.socialsharePopupHeight) / 2 + ",left=" + (n.innerWidth - i.socialsharePopupWidth) / 2)
        },
        it = f,
        rt = e,
        ut = o,
        ft = s,
        et = h,
        ot = c,
        st = l,
        ht = a,
        ct = v,
        lt = y,
        at = p,
        vt = w,
        yt = b,
        pt = k,
        wt = d,
        bt = g,
        kt = nt,
        dt = tt;
    n.module("720kb.socialshare", []).provider(t + "Conf", r).directive(t, u)
}(angular),
function() {
    "use strict";
    angular.module("app").directive("calculateBaseUnit", function() {
        return {
            restrict: "E",
            replace: !0,
            scope: {
                productItem: "=",
                unitName: "@",
                overage: "@",
                mode: "@",
                totalUnits: "="
            },
            template: '<div ng-show="(baseUnitsCount || handlingUnitsCount)"> <span ng-if="unitName != productItem.SellingUom.Name" >{{baseUnitsCount ? baseUnitsCount: handlingUnitsCount}} {{unitName}}<\/span> Total: {{totalUnits}} {{productItem.Product.SellingUom.Id}}<\/div> ',
            link: function(n) {
                function e(n) {
                    return n.SellingUom && n.HandlingUom && n.SellingUom.Id !== n.HandlingUom.Id
                }

                function u(i, r) {
                    var u = t((i.Qty + i.Qty * (r / 100)) * i.HandlingUomRate, i.HandlingUom);
                    return n.handlingUnitsCount = u, u
                }

                function o() {
                    n.handlingUnitsCount = u(n.productItem, r)
                }

                function t(n, t) {
                    var i = Math.round(n * 100) / 100;
                    return t.IsFractional ? i : Math.ceil(i)
                }

                function s() {
                    n.productItem.Qty = t(parseFloat(n.productItem.Qty), n.productItem.SellingUom);
                    n.productItem.Qty || (n.baseUnitsCount = 0);
                    e(n.productItem) ? (n.baseUnitsCount = u(n.productItem, r), n.totalUnits = t(n.baseUnitsCount / n.productItem.HandlingUomRate, n.productItem.SellingUom)) : (n.baseUnitsCount = t(n.productItem.Qty + n.productItem.Qty * (r / 100), n.productItem.SellingUom), n.totalUnits = t(n.baseUnitsCount, n.productItem.SellingUom))
                }

                function f() {
                    n.mode === i.BaseUnit ? s() : n.mode === i.HandlingUnit && o()
                }
                var r = parseFloat(n.overage) || 0,
                    i;
                n.baseUnitsCount = null;
                n.handlingUnitsCount = null;
                i = {
                    BaseUnit: "base",
                    HandlingUnit: "handling"
                };
                n.mode = n.mode || i.BaseUnit;
                n.$watch("productItem.Qty", function(n, t) {
                    parseFloat(n) !== parseFloat(t) && f()
                }, !0);
                f()
            }
        }
    })
}(),
function() {
    "use strict";

    function n(n) {
        return {
            restrict: "A",
            link: function(t, i, r) {
                var u = r.outsideIfNot !== undefined ? r.outsideIfNot.replace(", ", ",").split(",") : [],
                    f;
                r.id !== undefined && u.push(r.id);
                f = function(n) {
                    var f, e;
                    if (!angular.element(i).hasClass("ng-hide") && (f = 0, n && n.target)) {
                        for (e = n.target; e; e = e.parentNode) {
                            var o = e.id,
                                s = e.className,
                                h = u.length;
                            for (f = 0; f < h; f++)
                                if (o !== undefined && o.indexOf(u[f]) > -1 || s && s.indexOf(u[f]) > -1) return
                        }
                        return t.$apply(function() {
                            return t.$eval(r.clickOutside)
                        })
                    }
                };
                n.on("click", f);
                t.$on("$destroy", function() {
                    n.off("click", f)
                })
            }
        }
    }
    angular.module("app").directive("clickOutside", ["$document", "$parse", n])
}(),
function() {
    "use strict";
    angular.module("app").directive("errSrc", function() {
        return {
            link: function(n, t, i) {
                t.bind("error", function() {
                    i.src != i.errSrc && i.$set("src", i.errSrc)
                })
            }
        }
    })
}(),
function() {
    "use strict";
    angular.module("app").directive("escKey", function() {
        return function(n, t, i) {
            t.bind("keydown keypress", function(t) {
                t.which === 27 && (n.$apply(function() {
                    n.$eval(i.escKey)
                }), t.preventDefault())
            })
        }
    })
}(),
function() {
    "use strict";
    angular.module("app").directive("keepOnscreen", [function() {
        return {
            link: function(n, t, i) {
                i.$observe("keepOnscreen", function(n) {
                    if (n === "true") {
                        var u = $(t).parents(i.keepOnscreenContainer),
                            r = $(t);
                        if (!r) return;
                        r.position().top < 0 ? u.scrollTop(u.scrollTop() + r.position().top) : u.height() < r.position().top + r.height() && u.scrollTop(u.scrollTop() + (r.position().top + r.height() - u.height()))
                    }
                })
            }
        }
    }])
}(),
function() {
    "use strict";
    angular.module("app").directive("ngEnter", ["$timeout", function(n) {
        return function(t, i, r) {
            i.bind("keydown keypress", function(i) {
                var u = i.which || i.keyCode;
                u === 13 && (t.$apply(function() {
                    n(function() {
                        t.$eval(r.ngEnter)
                    })
                }), i.preventDefault())
            })
        }
    }])
}(),
function() {
    "use strict";
    angular.module("app").directive("oepItemsCount", ["$http", "spinner", "appSettings", "myModuleConst", function(n, t, i) {
        var r = i.getUrl("home/accountinformation", !0);
        return {
            scope: {},
            template: '<a href="{{shoppingBagUrl}}"><span class="bag"><span class="item-count" ng-show="itemsCount > 0"><span class="items">{{itemsCount}}<\/span><\/span><\/span><\/a>',
            link: function(t) {
                t.shoppingBagUrl = i.getUrl("shoppingbag", !0);
                t.itemsCount = 0;
                n({
                    method: "GET",
                    url: r,
                    headers: {
                        "X-Requested-With": "XMLHttpRequest"
                    }
                }).then(function(n) {
                    t.itemsCount = n.data.itemsCount
                }, function(n) {
                    console.log(n)
                })
            }
        }
    }])
}(),
function() {
    "use strict";
    angular.module("app").directive("oepScroll", ["$window", function(n) {
        return function(t, i, r) {
            var u = 0;
            angular.element(n).bind("scroll", function() {
                var n = $(this).scrollTop(),
                    f = u - n,
                    i = n > 0 && f < 0 ? r.oepScrollDown : r.oepScrollUp;
                i && t.$apply(function() {
                    t.$eval(i)
                });
                u = $(this).scrollTop()
            })
        }
    }])
}(),
function() {
    "use strict";
    angular.module("app").directive("oepSearch", ["$q", "$http", "spinner", "appSettings", "myModuleConst", "$window", function(n, t, i, r, u, f) {
        return {
            scope: {},
            templateUrl: r.getUrl(u.searchBoxTemplatePath),
            link: function(u, e, o) {
                u.searchUrl = {};
                u.contentSearchUrl = {};
                u.model = {
                    url: null,
                    _criteria: "",
                    placeholder: o.placeholder,
                    clearSearchImg: "../images/mkquartz/small_x"
                };
                u.clearSearch = function() {
                    u.model._criteria = "";
                    u.data = null;
                    u.data = {
                        urls: [],
                        categories: [],
                        products: [],
                        foundCount: 0,
                        pageFoundCount: 0
                    }
                };
                u.getProductListUrl = function(n) {
                    return r.getUrl("product/list/" + n + "/?criteria=" + u.model._criteria, !0)
                };
                u.getProductDetailUrl = function(n) {
                    return r.getUrl("product/detail/" + n.UrlFriendlyStyleName + "/?itemNo=" + n.ProductCode, !0)
                };
                u.selectUrl = function(n) {
                    u.model.url = n
                };
                u.performSearch = function() {
                    f.location.href = u.model.url
                };
                u.handleKeyDown = function(n) {
                    var i, t;
                    if (u.data && u.data.urls && u.data.urls.length > 1) switch (n.keyCode) {
                        case 40:
                            u.model.url === u.searchUrl ? u.selectUrl(u.data.urls[0]) : (i = u.data.urls.indexOf(u.model.url), i++, i < u.data.urls.length ? u.selectUrl(u.data.urls[i]) : u.selectUrl(u.searchUrl));
                            break;
                        case 38:
                            u.model.url === u.searchUrl ? u.selectUrl(u.data.urls[u.data.urls.length - 1]) : (t = u.data.urls.indexOf(u.model.url), t--, t < 0 ? u.selectUrl(u.searchUrl) : t < u.data.urls.length && u.selectUrl(u.data.urls[t]))
                    }
                };
                u.canceler = n.defer();
                u.pop = function(f) {
                    var e, o, s;
                    u.data = {
                        urls: [],
                        categories: [],
                        products: [],
                        foundCount: 0,
                        pageFoundCount: 0
                    };
                    u.model.url = null;
                    u.canceler && u.canceler.resolve();
                    i.endLoad();
                    f && f.length >= 1 && (i.startLoad(), u.canceler = n.defer(), u.model.url = u.searchUrl = r.getUrl("product/list/?criteria=" + u.model._criteria, !0), e = {
                        method: "POST",
                        url: u.searchUrl,
                        headers: {
                            "X-Requested-With": "XMLHttpRequest"
                        },
                        timeout: u.canceler.promise
                    }, o = t(e).then(function(n) {
                        var t = {
                            urls: [],
                            categories: [],
                            products: [],
                            foundCount: 0
                        };
                        t.foundCount = n.data.foundCount;
                        n.data.categories.forEach(function(n) {
                            var i = {
                                url: u.getProductListUrl(n.urlName),
                                item: n
                            };
                            t.urls.push(i.url);
                            t.categories.push(i)
                        });
                        n.data.products.forEach(function(n, i) {
                            if (!(i >= 10)) {
                                var r = {
                                    url: u.getProductDetailUrl(n),
                                    item: n
                                };
                                t.urls.push(r.url);
                                t.products.push(r)
                            }
                        });
                        u.data.urls = t.urls;
                        u.data.categories = t.categories;
                        u.data.products = t.products;
                        u.data.foundCount = t.foundCount;
                        i.endLoad()
                    }, function(n) {
                        console.log(n)
                    }), u.contentSearchUrl = r.getUrl("search/content/?q=" + u.model._criteria, !0), s = t({
                        method: "GET",
                        url: u.contentSearchUrl,
                        headers: {
                            "X-Requested-With": "XMLHttpRequest"
                        },
                        timeout: u.canceler.promise
                    }).then(function(n) {
                        var t = {
                            pageItems: [],
                            pageFoundCount: 0
                        };
                        t.pageFoundCount = n.data.totalCount;
                        n.data.items.forEach(function(n) {
                            var i = {
                                url: n.url,
                                item: n.title
                            };
                            t.pageItems.push(i)
                        });
                        u.data.pageItems = t.pageItems;
                        u.data.pageFoundCount = t.pageFoundCount
                    }, function(n) {
                        console.log(n)
                    }), n.all([o, s]).then(function() {
                        u.data.foundCount == 0 && u.data.pageFoundCount > 0 && (u.model.url = u.contentSearchUrl)
                    }))
                }
            }
        }
    }])
}(),
function() {
    "use strict";

    function n(n, t, i, r, u) {
        return {
            restrict: "E",
            templateUrl: t.getUrl("scripts/app/common/directives/selectLocation.html"),
            scope: {},
            link: function(r, f, e) {
                r.$on("branchChanged", function() {
                    e.locationChanged && r.$parent.$eval(e.locationChanged)
                });
                r.data = {
                    locations: [],
                    busy: !1,
                    ourLocationsUrl: t.getUrl("our-locations/", !0)
                };
                r.chooseIt = function(t) {
                    r.data.busy = !0;
                    u.ChooseBranchByCode(t, function(t) {
                        if (t.data.success) {
                            r.selectLocationDialog.close(!0);
                            e.locationChanged && r.$parent.$eval(e.locationChanged);
                            r.data.busy = !1;
                            var i = {
                                branchState: t.data.context.BranchState,
                                branchCity: t.data.context.BranchCity,
                                branchCode: t.data.context.BranchCode
                            };
                            n.$broadcast("branchChanged", i)
                        } else r.data.busy = !1, alert(t.data.message)
                    })
                };
                r.selectIt = function() {
                    r.data.locations = [];
                    r.selectLocationDialog = i.open({
                        template: t.getUrl("scripts/app/common/directives/selectLocation.dialog.html"),
                        className: "",
                        scope: r,
                        showClose: !1,
                        controller: ["$scope", "$http", function(n, i) {
                            n.data.busy = !0;
                            i.get(t.getUrl("our-locations/", !0)).then(function(t) {
                                n.data.locations = t.data;
                                n.data.busy = !1
                            }, function() {
                                n.data.busy = !1
                            })
                        }]
                    })
                }
            }
        }
    }
    angular.module("app").directive("selectLocation", ["$rootScope", "appSettings", "ngDialog", "$http", "branchLocatorService", n])
}(),
function() {
    "use strict";

    function n(n, t, i) {
        return {
            restrict: "E",
            templateUrl: t.getUrl("scripts/app/common/directives/selectState.html"),
            scope: {},
            link: function(n) {
                n.data = {
                    states: [],
                    busy: !1,
                    ourStatesUrl: t.getUrl("home/GetAllStates/", !0)
                };
                n.selectState = function() {
                    n.data.states = [];
                    n.selectStateDialog = i.open({
                        template: t.getUrl("scripts/app/common/directives/selectState.dialog.html"),
                        className: "",
                        scope: n,
                        controller: ["$scope", "$http", function(n, i) {
                            n.data.busy = !0;
                            i.get(t.getUrl("home/GetAllStates", !0)).then(function(t) {
                                n.data.states = t.data;
                                n.data.busy = !1
                            }, function() {
                                n.data.busy = !1
                            })
                        }]
                    })
                }
            }
        }
    }
    angular.module("app").directive("selectState", ["$rootScope", "appSettings", "ngDialog", "$http", "branchLocatorService", n])
}(),
function() {
    "use strict";
    angular.module("app").directive("shareButtons", ["appSettings", "myModuleConst", function(n, t) {
        return {
            restrict: "E",
            scope: {
                providers: "=providers",
                shareUrl: "=shareUrl",
                shareTitle: "=shareTitle",
                shareMedia: "=shareMedia"
            },
            templateUrl: n.getUrl(t.shareButtonsPath, !1)
        }
    }])
}(),
function() {
    "use strict";

    function n(n) {
        function t(t, i) {
            var u = i.closest("body"),
                f = t.stickyClass || "sticky",
                e = "." + t.headerOffsetClass || "body",
                o = i.position().top,
                r = u.find(e).outerHeight(!0);
            i.css("width", i.parent().width());
            angular.element(n).bind("resize", function() {
                i.css("width", i.parent().width());
                o = i.parent().position().top;
                r = u.find(e).outerHeight(!0);
                t.$digest()
            });
            angular.element(n).bind("scroll", function() {
                $(this).scrollTop() > o - r ? (i.addClass(f).css("padding-top", r), i.parent().css("padding-top", i.height())) : (i.removeClass(f).css("padding-top", 0), i.parent().css("padding-top", 0));
                t.$digest()
            })
        }
        return {
            scope: {
                headerOffsetClass: "@",
                stickyClass: "@"
            },
            restrict: "A",
            link: t
        }
    }
    angular.module("app").directive("stickyHeader", ["$window", n])
}(),

function() {
    "use strict";
    angular.module("app").directive("zoomImage", function() {
        return {
            restrict: "A",
            link: function(n, t, i) {
                function r() {
                    if (i.zoomImage) {
                        var n = $(i.zoomImageTarget);
                        yepnope({
                            load: ["../js/jquery.zoom.min.js"],
                            complete: function() {
                                $(t).zoom({
                                    magnify: 1,
                                    url: i.zoomImage,
                                    target: n,
                                    onZoomIn: function() {
                                        n.show()
                                    },
                                    onZoomOut: function() {
                                        n.hide()
                                    }
                                })
                            }
                        })
                    }
                }
                i.$observe("zoomImage", function() {
                    r()
                });
                r()
            }
        }
    })
}(),
function() {
    "use strict";
    angular.module("app").service("branchLocatorService", ["$http", "appSettings", function(n, t) {
        this.GetlocationWasGeoLocated = function() {
            var n = localStorage.getItem("locationWasGeoLocated");
            return n === "true"
        };
        this.SetLocationWasGeoLocated = function() {
            localStorage.setItem("locationWasGeoLocated", "true")
        };
        this.ChooseBranchByCode = function(i, r) {
            var u = {
                method: "POST",
                url: t.getUrl("shipping/changeLocation/" + i, !0),
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                }
            };
            n(u).then(function(n) {
                r(n)
            })
        };
        this.ChooseStateByAbbreviation = function(i) {
            var r = t.getUrl("shipping/changestatelocation/" + i, !0);
            return n.post(r)
        };
        this.GetStateNameLocated = function() {
            return localStorage.getItem("statenameWasLocated")
        };
        this.SetStateNameLocated = function(n) {
            localStorage.setItem("statenameWasLocated", n)
        }
    }])
}(),
function() {
    "use strict";

    function n() {
        function n(n, t) {
            t || (t = window.location.href);
            n = n.replace(/[\[\]]/g, "\\$&");
            var r = new RegExp("[?&]" + n + "(=([^&#]*)|&|#|$)"),
                i = r.exec(t);
            return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null
        }

        function t(n) {
            n || (n = window.location.href);
            var t = document.createElement("a");
            return t.href = n, t
        }
        return {
            getParameterByName: n,
            parseUrl: t
        }
    }
    angular.module("app").service("CommonService", [n])
}(),
function() {
    "use strict";
    angular.module("app").service("googleTagManagerService", ["$window", function(n) {
        this.ItemAddedEvent = function(t, i, r, u, f) {
            var e = parseFloat(u).toFixed(2);
            n.dataLayer.push({
                itemNo: t,
                itemQty: i,
                itemQtyUom: r,
                itemAmount: e,
                itemAmountCurrency: f,
                event: "ItemAdded"
            })
        }
    }])
}(),
function() {
    "use strict";

    function n(n, t, i, r, u, f, e) {
        function o(t) {
            n.model.isBusy = !0;
            u.all([v(), y(t)]).then(function() {
                n.model.currentTemplate = n.templates.edit
            }, function(n) {
                alert(n)
            }).then(function() {
                n.model.isBusy = !1
            })
        }

        function h(t) {
            n.model.isBusy = !0;
            i.blockUser(t).then(function() {
                t.IsBlocked = !t.IsBlocked
            }, function() {}).then(function() {
                n.model.isBusy = !1
            })
        }

        function c(t) {
            r.openConfirm({
                template: '<div><h4>Warning.<\/h4><\/div><div class="ngdialog-message"> <p class="message">Do you want to permanently remove invitation for selected user? <\/p><\/div> <div class="buttons row"> <div class="col-xs-6"><a class="bd_button" href="#" ng-click="confirm(confirmValue)">Yes<\/a> <\/div><div class="col-xs-6"><a class="bd_button" href="#" ng-click="closeThisDialog()">No<\/a> <\/div><\/div><\/div>',
                className: "ngdialog-theme-plain warningMessage",
                showClose: !0,
                plain: "true"
            }).then(function() {
                n.model.isBusy = !0;
                i.cancelUserToken(t).then(function() {
                    var i = n.model.users.indexOf(t);
                    n.model.users.splice(i, 1);
                    n.model.isBusy = !1
                }, function() {
                    n.model.isBusy = !1
                });
                deferred.resolve(!0)
            }, function() {
                deferred.resolve(!1)
            })
        }

        function l(t) {
            n.model.isNewUser = !1;
            s(t);
            o(t)
        }

        function a() {
            n.model.isNewUser = !0;
            p().then(function() {
                s(n.model.userForInvite);
                o(n.model.userForInvite)
            }, function(n) {
                alert(n)
            })
        }

        function v() {
            return n.model.roles == null ? i.getRoles().then(function(t) {
                n.model.roles = t
            }) : u.defer().resolve(!0)
        }

        function y(t) {
            return t.Branches == null ? i.getBranches(t).then(function(i) {
                t.Branches = i;
                n.model.currentUser.Branches = i
            }) : (n.model.currentUser.Branches = t.Branches, u.defer().resolve(!0))
        }

        function p() {
            if (n.model.userForInvite == null) return i.getDataForUserInvitation().then(function(t) {
                n.model.userForInvite = t
            });
            var t = u.defer();
            return t.resolve(!0), t.promise
        }

        function s(t) {
            var i = n.model.users.indexOf(t);
            i == -1 && (i = n.model.users.length);
            n.model.currentUser = angular.copy(t);
            n.model.currentUser.idx = i
        }
        n.templates = {
            index: f.getUrl(e.customerUsersListTemplate, !1),
            edit: f.getUrl(e.customerUserEditTemplate, !1)
        };
        n.model = {
            users: t.Users,
            identityName: t.IdentityName,
            isBusy: !1,
            isNewUser: !0,
            currentTemplate: n.templates.index,
            currentUser: null,
            userForInvite: null,
            roles: null,
            readOnly: t.ReadOnly
        };
        n.salesRoleName = e.salesRoleName;
        n.openEditPage = o;
        n.blockUser = h;
        n.editUser = l;
        n.inviteUser = a;
        n.cancelUserToken = c
    }
    angular.module("app").controller("CustomerUsersCtrl", ["$scope", "customerUsersModel", "CustomerUsersService", "ngDialog", "$q", "appSettings", "myModuleConst", n]).filter("unsafe", function(n) {
        return function(t) {
            return n.trustAsHtml(t)
        }
    })
}(),
function() {
    "use strict";

    function n(n, t, i) {
        function u() {
            n.model.isBusy = !0;
            var t = n.model.currentUser.Id == 0 ? e : f;
            t().then(function() {
                n.model.isBusy = !1
            })
        }

        function f() {
            return i.updateUser(n.model.currentUser).then(function(t) {
                n.model.users.splice(n.model.currentUser.idx, 1, t);
                r(t);
                n.model.currentTemplate = n.templates.index
            }, function(n) {
                alert(n)
            })
        }

        function e() {
            return i.inviteUser(n.model.currentUser).then(function(t) {
                n.model.users.push(t);
                r(t);
                n.model.currentTemplate = n.templates.index
            }, function(n) {
                alert(n)
            })
        }

        function o() {
            n.model.currentTemplate = n.templates.index
        }

        function s() {
            var t = n.model.currentUser.Branches.filter(function(n) {
                return n.IsSelected
            });
            return t.length == 0
        }

        function r(n) {
            n.justEdited = !0;
            t(function() {
                n.justEdited = !1
            }, 2e3)
        }
        n.saveUser = u;
        n.cancelEdit = o;
        n.requireSelectBranch = s
    }
    angular.module("app").controller("CustomerUsersEditFormCtrl", ["$scope", "$timeout", "CustomerUsersService", n]).filter("unsafe", function(n) {
        return function(t) {
            return n.trustAsHtml(t)
        }
    })
}(),
function() {
    "use strict";

    function n(n, t, i, r, u) {
        function e() {
            var t = u.defer(),
                r = {
                    url: n.getUrl("CustomerUsers/GetRoles", !0),
                    method: "GET",
                    dataType: "json"
                };
            return i(r).success(function(n) {
                n.Success ? t.resolve(n.Value) : t.reject(n.Messages)
            }).error(function() {
                t.reject("An error occurred with Roles. Please try again or contact an administrator.")
            }), t.promise
        }

        function o(t) {
            var r = u.defer(),
                f = {
                    url: n.getUrl("CustomerUsers/GetBranches", !0),
                    method: "GET",
                    dataType: "json",
                    params: {
                        userId: t.Id
                    }
                };
            return i(f).success(function(n) {
                n.Success ? r.resolve(n.Value) : r.reject(n.Messages)
            }).error(function() {
                r.reject("An error occurred with Branches. Please try again or contact an administrator.")
            }), r.promise
        }

        function s() {
            var t = u.defer(),
                r = {
                    url: n.getUrl("CustomerUsers/GetDataForUserInvitation", !0),
                    method: "GET",
                    dataType: "json"
                };
            return i(r).success(function(n) {
                n.Success ? t.resolve(n.Value) : t.reject(n.Messages)
            }).error(function() {
                t.reject("An error occurred with User for invite. Please try again or contact an administrator.")
            }), t.promise
        }

        function h(r) {
            var o = f(r),
                s, e;
            return o.userId = r.Id, o.isBlocked = r.IsBlocked, s = {
                url: n.getUrl("CustomerUsers/SaveCustomerUser", !0),
                method: "POST",
                params: o,
                dataType: "json"
            }, e = u.defer(), i(s).success(function(n) {
                n.Success ? (r.Role != t.salesRoleName && r.Branches.forEach(function(n) {
                    n.IsSelected = !1
                }), e.resolve(r)) : e.reject(n.Messages)
            }).error(function() {
                e.reject("An error occurred with User updating. Please try again or contact an administrator.")
            }), e.promise
        }

        function c(t) {
            var e = f(t),
                o, r;
            return e.email = t.Email, o = {
                url: n.getUrl("CustomerUsers/InviteCustomerUser", !0),
                method: "POST",
                params: e,
                dataType: "json"
            }, r = u.defer(), i(o).success(function(n) {
                n.Success ? (t.Id = n.Value, t.IsApproved = !1, r.resolve(t)) : r.reject(n.Messages)
            }).error(function() {
                r.reject("An error occurred with User updating. Please try again or contact an administrator.")
            }), r.promise
        }

        function f(n) {
            var i = {
                    role: n.Role
                },
                r;
            return n.Role == t.salesRoleName && (r = n.Branches.filter(function(n) {
                return n.IsSelected
            }).map(function(n) {
                return n.Id
            }), i.branches = r), i
        }

        function l(t) {
            var f = {
                    url: n.getUrl("CustomerUsers/BlockUser", !0),
                    method: "POST",
                    dataType: "json",
                    params: {
                        userId: t.Id,
                        isBlocked: !t.IsBlocked
                    }
                },
                r = u.defer();
            return i(f).success(function(n) {
                n.Success ? r.resolve(n.Value) : r.reject(n.Messages)
            }).error(function() {
                r.reject("An error occurred with Blocking of user. Please try again or contact an administrator.")
            }), r.promise
        }

        function a(t) {
            var f = {
                    url: n.getUrl("CustomerUsers/CancelUserToken", !0),
                    method: "POST",
                    dataType: "json",
                    params: {
                        customerUserMappingId: t.Id
                    }
                },
                r = u.defer();
            return i(f).success(function(n) {
                n.Success ? r.resolve(n.Value) : r.reject(n.Messages)
            }).error(function() {
                r.reject("An error occurred with Blocking of user. Please try again or contact an administrator.")
            }), r.promise
        }
        return {
            getRoles: e,
            getBranches: o,
            inviteUser: c,
            updateUser: h,
            getDataForUserInvitation: s,
            blockUser: l,
            cancelUserToken: a
        }
    }
    angular.module("app").service("CustomerUsersService", ["appSettings", "myModuleConst", "$http", "$window", "$q", n])
}(),

function() {
    "use strict";

    function n(n, t, i) {
        function r(r) {
            var u = i.defer();
            return t({
                url: n.getUrl("Account/Invoices", !0),
                method: "GET",
                params: r,
                dataType: "json"
            }).success(function(n) {
                n ? u.resolve(n) : u.reject("Failed to get invoices!")
            }).error(function() {
                u.reject("An error occurred while sending your enquiry. Please try again or contact an administrator.")
            }), u.promise
        }
        return {
            getInvoices: r
        }
    }
    angular.module("app").service("InvoicesService", ["appSettings", "$http", "$q", n])
}(),
function() {
    "use strict";

    function n(n, t, i, r) {
        n.init = function(t) {
            n.retrieveOrders = t === "retail" ? r.GetRetailOrders : r.GetOrders
        };
        n.branchesList = i;
        n.branchName = i[0].Text;
        n.currentPage = 0;
        n.statusList = [{
            Code: "Open",
            Name: "Open"
        }, {
            Code: "Completed",
            Name: "Completed"
        }, {
            Code: "All",
            Name: "All"
        }];
        n.datesRangeList = [{
            Value: 14,
            Name: "14"
        }, {
            Value: 30,
            Name: "30"
        }, {
            Value: 60,
            Name: "60"
        }, {
            Value: 120,
            Name: "3 months"
        }, {
            Value: 240,
            Name: "6 months"
        }, {
            Value: 365,
            Name: "1 year"
        }];
        n.itemsPerPageList = [{
            Value: 20,
            Name: "20"
        }, {
            Value: 50,
            Name: "50"
        }, {
            Value: 100,
            Name: "100"
        }, {
            Value: 200,
            Name: "200"
        }];
        n.orders = t;
        n.model = {
            loadingOrders: !1,
            branch: {},
            search: "",
            status: "Open",
            datesRange: 14,
            itemsPerPage: 20
        };
        n.model.branch = $.grep(n.branchesList, function(n) {
            return n.IsActive === !0
        })[0];
        n.GetOrders = function() {
            var t = {
                branch: n.model.branch.Value || null,
                status: n.model.status || null,
                datesRange: n.model.datesRange,
                page: n.currentPage,
                itemsPerPage: n.model.itemsPerPage
            };
            n.orders = [];
            n.model.loadingOrders = !0;
            n.retrieveOrders(t).then(function(t) {
                n.orders = t;
                n.model.loadingOrders = !1;
                n.togglePage = !1;
                n.toggleStatus = !1;
                n.toggleDisplay = !1
            }, function(t) {
                console.log(t);
                n.model.loadingOrders = !1
            })
        };
        n.prevPage = function() {
            n.currentPage > 0 && n.currentPage--;
            n.GetOrders()
        };
        n.prevPageDisabled = function() {
            return n.currentPage === 0 ? "disabled" : ""
        };
        n.nextPage = function() {
            n.currentPage++;
            n.GetOrders()
        };
        n.nextPageDisabled = function() {
            return n.model.itemsPerPage > n.orders.length ? "disabled" : ""
        };
        n.applyFilter = function() {
            n.currentPage = 0;
            n.GetOrders()
        };
        n.setBranch = function() {
            n.currentPage = 0;
            n.GetOrders()
        }
    }
    angular.module("app").controller("OrdersCtrl", ["$scope", "ordersList", "branchesList", "OrdersService", "$filter", n]);
    angular.module("app").filter("offset", function() {
        return function(n, t) {
            return t = parseInt(t, 10), n.slice(t)
        }
    })
}(),
function() {
    "use strict";

    function n(n, t, i) {
        var r = function(r) {
                return function(u) {
                    var f = i.defer();
                    return t({
                        url: n.getUrl(r, !0),
                        method: "GET",
                        params: u,
                        dataType: "json"
                    }).success(function(n) {
                        n ? f.resolve(n.Orders) : f.reject("Failed to get orders!")
                    }).error(function() {
                        f.reject("An error occurred while sending your enquiry. Please try again or contact an administrator.")
                    }), f.promise
                }
            },
            u = r("Account/Orders"),
            f = r("Account/RetailOrders");
        return {
            GetOrders: u,
            GetRetailOrders: f
        }
    }
    angular.module("app").service("OrdersService", ["appSettings", "$http", "$q", n])
}(),
// function() {
//     "use strict";

//     function n(n, t, i, r, u, f, e, o, s, h, c, l, a) {
//         function y(n, t) {
//             return n.Size === t.Size && n.Shape === t.Shape
//         }

//         function p(n) {
//             return n.Size + (n.Shape ? " (" + n.Shape + ")" : "") + (n.MosaicSize ? " | MOSAIC SIZE: " + n.MosaicSize : "")
//         }

//         function d() {
//             var n = i.Product,
//                 t;
//             n != null && (t = {
//                 ProductCode: n.ProductCode,
//                 ImageName: n.ImageName,
//                 SeriesColor: n.SeriesColor,
//                 Series: n.ProductSeries,
//                 Size: n.Size,
//                 ItemUrl: window.location.href,
//                 Updated: (new Date).toUTCString()
//             }, r.AddOrUpdateRecent(t))
//         }

//         function g() {
//             var t = n.optionsConfig[i.Product.MaterialCategory];
//             return t || (t = n.optionsConfig.Default), t
//         }

//         function nt(t, i) {
//             var u = n.currentOptions,
//                 f, r, e;
//             for (f in u)
//                 if (r = u[f], r.key !== i) {
//                     if (e = r.customMatcher ? r.customMatcher(t, n.productDetailModel.Product) : t[r.key] == n.productDetailModel.Product[r.key], !e) return !1
//                 } else return !0;
//             return !1
//         }

//         function tt(t) {
//             var i = [],
//                 f, r, u;
//             for (f in n.productDetailModel.Variants) r = n.productDetailModel.Variants[f], u = n.getOptionTitle(t, r), nt(r, t.key) && (i[u] == undefined && (i[u] = []), i[u].push(r));
//             return i
//         }

//         function it(t, i) {
//             var r = t,
//                 f = r[0],
//                 s, e, u, o;
//             for (s in n.currentOptions)
//                 if (e = n.currentOptions[s], e != i) {
//                     u = [];
//                     for (o in r) w(e, r[o]) && u.push(r[o]);
//                     if (u.length == 0) return f;
//                     r = u;
//                     f = r[0]
//                 } return f
//         }

//         function w(t, i) {
//             return t.customMatcher ? t.customMatcher(i, n.productDetailModel.Product) : i[t.key] == n.productDetailModel.Product[t.key]
//         }

//         function b(t, i) {
//             return t === 0 ? 0 : Math.ceil((t + t * (i / 100)) * n.productDetailModel.Product.HandlingUomRate)
//         }

//         function v(t, i) {
//             if (t === 0) return 0;
//             var r;
//             return (r = n.hasHandlingUnit() ? b(t, i) / n.productDetailModel.Product.HandlingUomRate : t + t * (i / 100), !n.productDetailModel.Product.SellingUom.IsFractional) ? Math.ceil(r) : Math.round(r * 100) / 100
//         }

//         function k(n) {
//             var t = [e.getUrl("content/blueimp-gallery.min.css"), e.getUrl("scripts/blueimp-gallery.min.js")];
//             yepnope({
//                 test: !!window.blueimp,
//                 nope: t,
//                 complete: n
//             })
//         }

//         function rt() {
//             if (n.data.availability = null, n.data.fulfillment = null, n.data.unit > 0) {
//                 var t = v(n.data.unit, n.data.overage);
//                 u.get(e.getUrl("product/availability/?itemNo=" + n.productDetailModel.Product.ProductCode + "&unit=" + t)).then(function(t) {
//                     if (t.data.success) {
//                         var i = t.data.value;
//                         i.availableToOrder = i.price && i.options.filter(function(n) {
//                             return n.leadTime >= 0
//                         }).length > 0;
//                         n.data.availability = i;
//                         n.data.availability.availableToOrder && n.data.availability.options.length == 1 && (n.data.fulfillment = i.options[0].type)
//                     }
//                 })
//             }
//         }

//         function ut() {
//             n.sampleAvailability = {};
//             var t = n.productDetailModel.Product.SampleItem;
//             t && u.get(e.getUrl("product/availability/?itemNo=" + t.ProductCode + "&unit=1")).then(function(i) {
//                 if (i.data.success) {
//                     var r = i.data.value;
//                     r.itemNo = t.ProductCode;
//                     r.availableToOrder = r.price && r.options.filter(function(n) {
//                         return n.leadTime >= 0
//                     }).length > 0;
//                     n.sampleAvailability = r
//                 }
//             })
//         }

//         function ft() {
//             var t = n.data.availability;
//             return t && t.price && t.options.filter(function(n) {
//                 return n.leadTime >= 0
//             }).length > 0
//         }

//         function et() {
//             if (n.sampleAvailability && n.sampleAvailability.availableToOrder) {
//                 n.data.busy = !0;
//                 var i = e.getUrl("shoppingbag/jsonaddtobag/", !0),
//                     r = {
//                         itemNo: n.sampleAvailability.itemNo,
//                         qty: 1
//                     };
//                 u.post(i, r).then(function(i) {
//                     var u, r;
//                     i.data.success ? (u = i.data.value, t.$broadcast("shoppingBagItemsChanged", u), r = n.productDetailModel.Product.SampleItem, n.dataModal = {
//                         imageUrl: "../images/mkquartz/image/upload/c_fill,w_240,h_240/v1/cdn-mkquartz/assets/products/hiresimages/" + r.ImageName + ".jpg",
//                         title: r.Name,
//                         totalAmount: n.sampleAvailability.price.currentPrice
//                     }, c.open({
//                         template: "/pdp-item-added.html",
//                         className: "",
//                         scope: n,
//                         showClose: !1
//                     })) : alert("Unable to add item to shopping bag")
//                 }, function() {
//                     alert("Unable to add item to shopping bag")
//                 }).catch(function() {
//                     alert("Unable to add item to shopping bag")
//                 }).finally(function() {
//                     n.data.busy = !1
//                 })
//             }
//         }

//         function ot() {
//             var r = n.data.availability.options.filter(function(t) {
//                     return t.type == n.data.fulfillment
//                 }),
//                 f, o, i;
//             if (r.length == 0) {
//                 alert("Please select Delivery or Pickup");
//                 return
//             }
//             f = r[0];
//             n.data.busy = !0;
//             o = e.getUrl("shoppingbag/jsonaddtobag/", !0);
//             i = {
//                 itemno: n.productDetailModel.Product.ProductCode,
//                 qty: v(n.data.unit, n.data.overage),
//                 storeCode: f.branchNo
//             };
//             u.post(o, i).then(function(r) {
//                 var f;
//                 if (r.data.success) {
//                     var e = n.productDetailModel.Product.SellingUom.Id,
//                         u = (i.qty * n.data.availability.price.currentPrice).toFixed(2),
//                         o = n.productDetailModel.Price.Currency;
//                     a.ItemAddedEvent(i.itemno, i.qty, e, u, o);
//                     f = r.data.value;
//                     t.$broadcast("shoppingBagItemsChanged", f);
//                     n.dataModal = {
//                         imageUrl: n.images[0].thumbUrl,
//                         title: n.productDetailModel.Product.Name,
//                         totalAmount: u
//                     };
//                     c.open({
//                         template: "/pdp-item-added.html",
//                         className: "",
//                         scope: n,
//                         showClose: !1
//                     })
//                 } else alert("Unable to add item to shopping bag")
//             }, function() {
//                 alert("Unable to add item to shopping bag")
//             }).catch(function() {
//                 alert("Unable to add item to shopping bag")
//             }).finally(function() {
//                 n.data.busy = !1;
//                 n.data.unit = "";
//                 n.data.overage = "0";
//                 n.data.availability = !1
//             })
//         }
//         n.imagePagerSelector = 0;
//         n.appSettings = e;
//         n.data = {
//             unit: 0,
//             overage: 10,
//             availability: null,
//             fulfillment: null
//         };
//         n.sampleAvailability = {};
//         n.dataModal = {};
//         n.optionsConfig = {
//             Mosaic: [{
//                 key: "SeriesColor",
//                 title: "Color",
//                 mode: "image"
//             }, {
//                 key: "Size",
//                 customMatcher: y,
//                 customTitle: p,
//                 title: "Sheet size",
//                 mode: "shapeandsize"
//             }, {
//                 key: "MaterialFinish",
//                 title: "Finish",
//                 mode: "text"
//             }],
//             Tile: [{
//                 key: "SeriesColor",
//                 title: "Color",
//                 mode: "image"
//             }, {
//                 key: "Size",
//                 customMatcher: y,
//                 customTitle: p,
//                 title: "Size",
//                 mode: "shapeandsize"
//             }, {
//                 key: "MaterialFinish",
//                 title: "Finish",
//                 mode: "text"
//             }],
//             Slab: [{
//                 key: "SeriesColor",
//                 title: "Color",
//                 mode: "image"
//             }, {
//                 key: "MaterialFinish",
//                 title: "Finish",
//                 mode: "text"
//             }, {
//                 key: "Thickness",
//                 title: "Thickness",
//                 mode: "text"
//             }],
//             Default: [{
//                 key: "SeriesColor",
//                 title: "Color",
//                 mode: "image"
//             }, {
//                 key: "Size",
//                 title: "Size",
//                 mode: "text"
//             }, {
//                 key: "Thickness",
//                 title: "Thickness",
//                 mode: "text"
//             }, {
//                 key: "MaterialFinish",
//                 title: "Finish",
//                 mode: "text"
//             }]
//         };
//         n.recentlyItemsOptions = {
//             dots: !0,
//             infinite: !1,
//             slidesToShow: 6,
//             slidesToScroll: 1,
//             centerMode: !1,
//             variableWidth: !1,
//             draggable: !1,
//             swipe: !1,
//             touchMove: !0,
//             responsive: [{
//                 breakpoint: 1350,
//                 settings: {
//                     slidesToShow: 5
//                 }
//             }, {
//                 breakpoint: 1120,
//                 settings: {
//                     slidesToShow: 4
//                 }
//             }, {
//                 breakpoint: 920,
//                 settings: {
//                     slidesToShow: 3
//                 }
//             }, {
//                 breakpoint: 620,
//                 settings: {
//                     slidesToShow: 2
//                 }
//             }, {
//                 breakpoint: 420,
//                 settings: {
//                     slidesToShow: 1
//                 }
//             }]
//         };
//         n.galleryOptions = {
//             dots: !0,
//             infinite: !1,
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             centerMode: !1,
//             variableWidth: !1,
//             draggable: !1,
//             swipe: !1,
//             touchMove: !0,
//             responsive: [{
//                 breakpoint: 1200,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1
//                 }
//             }, {
//                 breakpoint: 800,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }]
//         };
//         n.flickityProductsOptions = {
//             draggable: !1,
//             pageDots: !1,
//             prevNextButtons: !1,
//             on: {
//                 staticClick: function(t) {
//                     var i = $(t.target).attr("zoom");
//                     n.showImageFullScreen(i)
//                 }
//             }
//         };
//         n.flickityThumbnailOptions = {
//             asNavFor: ".product-images",
//             cellAlign: "left",
//             contain: !0,
//             groupCells: !0,
//             pageDots: !0
//         };
//         n.flickityBillboardOptions = {
//             cellAlign: "left",
//             pageDots: !1,
//             prevNextButtons: !1,
//             contain: !0
//         };
//         n.imagePagerSelect = function(t) {
//             n.imagePagerSelector = t
//         };
//         n.recent = r.GetRecentItemsByKey();
//         d();
//         n.currentOptions = g();
//         n.refreshOptionValues = function() {
//             var i = {},
//                 r, t;
//             for (r in n.currentOptions) t = n.currentOptions[r], i[t.key] = n.getOptionValues(t);
//             n.optionValues = i
//         };
//         n.getOptionValues = function(t) {
//             var r = [],
//                 u = tt(t),
//                 f, i;
//             for (f in u) i = it(u[f], t), r.push({
//                 title: n.getOptionTitle(t, i),
//                 selected: w(t, i),
//                 variant: i
//             });
//             return r
//         };
//         n.hasOptions = function(t) {
//             var i = n.optionValues[t];
//             return !(i.length === 1 && !i[0].title)
//         };
//         n.getOptionTitle = function(n, t) {
//             return n.customTitle ? n.customTitle(t) : t[n.key]
//         };
//         n.Math = window.Math;
//         n.getPackagingNames = function() {
//             var t = [];
//             for (var i in n.productDetailModel.Packaging) t.push(i);
//             return t
//         };
//         n.applications = [{
//             code: "F",
//             name: "Floors"
//         }, {
//             code: "W",
//             name: "Walls"
//         }, {
//             code: "C",
//             name: "Countertops"
//         }, {
//             code: "SW",
//             name: "Shower Walls"
//         }, {
//             code: "SP",
//             name: "Showers Floors"
//         }, {
//             code: "P",
//             name: "Pools"
//         }];
//         n.hasExterior = function(n, t) {
//             return (t == "F" || t == "SP") ? !1 : n.indexOf("X" + t) != -1
//         };
//         n.hasCrossSymbol = function(n, t) {
//             return t == "F" || t == "SP" ? n.indexOf("X" + t) != -1 : !1
//         };
//         n.hasApplication = function(n, t) {
//             return ("," + n + ",").indexOf("," + t + ",") != -1
//         };
//         n.hasHandlingUnit = function() {
//             return n.productDetailModel.Product.SellingUom && n.productDetailModel.Product.HandlingUom && n.productDetailModel.Product.SellingUom.Id != n.productDetailModel.Product.HandlingUom.Id
//         };
//         n.hasBaseUnit = function() {
//             return !isNaN(n.productDetailModel.Packaging["Box Pieces"])
//         };
//         n.getTotalBaseUnitPerBox = function() {
//             return Math.round(n.productDetailModel.Packaging["Box SF"] * 100) / 100
//         };
//         n.calculateTotalHandling = b;
//         n.calculateBasePerHandling = function() {
//             var t = 1 / n.productDetailModel.Product.HandlingUomRate;
//             return n.productDetailModel.Product.SellingUom.IsFractional ? Math.round(t * 100) / 100 : Math.ceil(t)
//         };
//         n.calculateTotalBaseUnit = v;
//         n.setVariant = function(t) {
//             if (n.productDetailModel.Product = t, n.availability = null, n.sampleAvailability = null, n.refreshProductInfo(), n.refreshOptionValues(), n.refreshImages(), t != null) {
//                 var i = window.location.origin + n.getCurrentProductUrl();
//                 n.refreshRecent(t, i);
//                 window.history.pushState("", "", i)
//             }
//         };
//         n.gotoTop = function() {
//             angular.element("#productDetails")[0].scrollTop = 0;
//             s.scrollTo(0, angular.element("#productDetails").offsetTop)
//         };
//         n.tileUrl = "";
//         n.selectTile = function(n) {
//             var t = "//" + s.location.host + n;
//             s.location.href = t
//         };
//         n.refreshAssociatedImages = function() {
//             var t = n.productDetailModel.Product.ProductCode,
//                 i = n.productDetailModel.Product.ProductSeries,
//                 r = e.getUrl("ProductAssociator/GetAssociatedImagesByProduct/?productNo=" + t, !0),
//                 f = e.getUrl("ProductAssociator/GetCollectionImages/?collection=" + i, !0);
//             u.get(r).then(function(t) {
//                 var u = angular.fromJson(t.data),
//                     i, r;
//                 if (u instanceof Array)
//                     for (i = 0; i < u.length; i++) r = u[i], n.images.push({
//                         imageUrl: r.replace("/upload/", "/upload/t_product_detail,f_auto/"),
//                         zoomUrl: r.replace("/upload/", "/upload/t_zoom,f_auto/"),
//                         thumbUrl: r.replace("/upload/", "/upload/t_product_150,f_auto/")
//                     })
//             });
//             n.galleryImages = [];
//             u.get(f).then(function(t) {
//                 var u = angular.fromJson(t.data),
//                     i, r;
//                 if (u instanceof Array)
//                     for (i = 0; i < u.length; i++) r = u[i], n.galleryImages.push({
//                         imageUrl: r.replace("/upload/", "/upload/t_product_detail,f_auto/"),
//                         zoomUrl: r.replace("/upload/", "/upload/t_zoom,f_auto/"),
//                         thumbUrl: r.replace("/upload/", "/upload/t_product_150,f_auto/")
//                     })
//             })
//         };
//         n.showImageFullScreen = function(n) {
//             setTimeout(function() {
//                 k(function() {
//                     blueimp.Gallery([n])
//                 })
//             }, 0)
//         };
//         n.showGallery = function(t) {
//             for (var u, r = [], i = 0; i < n.galleryImages.length; i++) u = {
//                 href: n.galleryImages[i].zoomUrl,
//                 thumbnail: n.galleryImages[i].thumbUrl
//             }, r.push(u);
//             setTimeout(function() {
//                 k(function() {
//                     blueimp.Gallery(r, {
//                         index: t
//                     })
//                 })
//             }, 0)
//         };
//         n.refreshImages = function() {
//             var t = [];
//             n.currentLot && t.push({
//                 zoomUrl: "../images/mkquartz/image/upload/c_fill,w_240,h_240/v1/cdn-mkquartz/assets/products/hiresimages" + n.currentLot.ImageName + ".JPG",
//                 imageUrl: "../images/mkquartz/image/upload/c_fill,w_240,h_240/v1/cdn-mkquartz/assets/products/hiresimages" + n.currentLot.ImageName + ".JPG",
//                 thumbUrl: "../images/mkquartz/image/upload/c_fill,w_240,h_240/v1/cdn-mkquartz/assets/products/hiresimages" + n.currentLot.ImageName + ".JPG"
//             });
//             t.push({
//                 zoomUrl: "../images/mkquartz/image/upload/c_fill,w_240,h_240/v1/cdn-mkquartz/assets/products/hiresimages" + n.productDetailModel.Product.ImageName + ".jpg",
//                 imageUrl: "../images/mkquartz/image/upload/c_fill,w_240,h_240/v1/cdn-mkquartz/assets/products/hiresimages" + n.productDetailModel.Product.ImageName + ".jpg",
//                 thumbUrl: "../images/mkquartz/image/upload/c_fill,w_240,h_240/v1/cdn-mkquartz/assets/products/hiresimages" + n.productDetailModel.Product.ImageName + ".jpg"
//             });
//             n.refreshAssociatedImages();
//             n.images = t;
//             n.currentImage = n.images[0]
//         };
//         n.setImage = function(t) {
//             n.currentImage = t
//         };
//         n.refreshLots = function() {
//             n.currentLot = null;
//             n.lots = null;
//             n.lotDetails = null;
//             n.productDetailModel.ShowLots && n.productDetailModel.SelectedBranch && (n.data.loadingLotDetails = !0, u.get(e.getUrl("slabs/store/" + n.productDetailModel.SelectedBranch.locationcode + "/?f_ProductCode=" + encodeURIComponent(n.productDetailModel.Product.ProductCode), !0)).then(function(t) {
//                 n.lots = t.data.products;
//                 n.data.loadingLotDetails = !1
//             }, function() {
//                 n.data.loadingLotDetails = !1
//             }))
//         };
//         n.setLot = function(t) {
//             n.currentLot = t;
//             n.loadLotDetails(t);
//             n.refreshImages()
//         };
//         n.loadLotDetails = function(t) {
//             n.lotDetails = null;
//             n.data.loadingLotDetails = !0;
//             var i = e.getUrl("slabs/detail/?businessUnitCode=" + n.productDetailModel.SelectedBranch.locationcode + "&bundleNo=" + encodeURIComponent(t.BundleNo), !0);
//             u.get(i).then(function(t) {
//                 var i = t.data;
//                 i.totalSqFt = 0;
//                 i.totalSlabs = 0;
//                 i.Slabs.forEach(function(n) {
//                     i.totalSqFt += n.AvailableSqFt;
//                     i.totalSlabs += 1
//                 });
//                 n.lotDetails = i;
//                 n.data.loadingLotDetails = !1
//             }, function() {
//                 n.data.loadingLotDetails = !1
//             })
//         };
//         n.composeProductUrl = function(n, t) {
//             return e.getUrl("product/detail/" + n + "/?itemNo=" + t, !0)
//         };
//         n.getCurrentProductUrl = function() {
//             return n.composeProductUrl(n.productDetailModel.Product.UrlFriendlyStyleName, n.productDetailModel.Product.ProductCode)
//         };
//         n.getCurrentSecureProductUrl = function() {
//             return e.getSecureUrl(n.getCurrentProductUrl().substring(1), !1)
//         };
//         n.refreshProductInfo = function() {
//             n.currentLot = null;
//             n.lotDetails = null;
//             f.startLoad();
//             u.get(n.getCurrentProductUrl()).then(function(t) {
//                 f.endLoad();
//                 n.productDetailModel = t.data;
//                 n.refreshIcons();
//                 n.refreshLots();
//                 n.updateAvailability();
//                 n.refreshSampleAvailability()
//             }, function() {})
//         };
//         n.updateAvailability = rt;
//         n.canAddToBag = ft;
//         n.addToBag = ot;
//         n.refreshSampleAvailability = ut;
//         n.addSampleToBag = et;
//         n.overageTooltip = function() {
//             c.open({
//                 template: "/overage-dialog.html",
//                 className: "ngdialog-theme-plain overage-dialog",
//                 scope: n
//             })
//         };
//         n.totalTooltip = function() {
//             c.open({
//                 template: "/total-dialog.html",
//                 className: "ngdialog-theme-plain total-dialog",
//                 scope: n
//             })
//         };
//         n.refreshIcons = function() {
//             var r = [],
//                 t = i.Properties.Icons;
//             t && (t[0] == "Y" && r.push("icons_Made_in_Italy"), t[1] == "Y" && r.push("icons_Exterior_Product"), t[2] == "Y" && r.push("icons_Made_in_USA"), t[3] == "Y" && r.push("icons_Specs_ADA_Accesability"), (t[4] == "Y" || t[10] == "Y") && r.push("icons_Specs_Unglazed-Thr_Body_Porcelain"), t[5] == "Y" && r.push("icons_Specs_Ink_Jet"), (t[6] == "Y" || t[11] == "Y" || t[12] == "Y") && r.push("icons_Specs_Post_Recycle"), t[7] == "Y" && r.push("icons_Specs_Glazed-Color_Body_Porcelain"), t[8] == "Y" && r.push("icons_Specs_Glaed_Porcelain"), t[9] == "Y" && r.push("icons_Specs_Rectified_Edge"), t[13] == "Y" && r.push("icons_Made_in_China"), t[14] == "Y" && r.push("icons_Made_in_Turkey"), t[15] == "Y" && r.push("icons_Made_in_Mexico"), t[16] == "Y" && r.push("icons_Specs_Coefficient_of_Friction"), t[17] == "Y" && r.push("icons_Specs_Chiseled_Edge"));
//             n.icons = r
//         };
//         n.productDetailModel = i || {};
//         n.styles = [{
//             urlStyle: n.productDetailModel.Product.UrlFriendlyStyleName,
//             name: n.productDetailModel.Product.MaterialCategory,
//             url: n.getCurrentProductUrl()
//         }];
//         n.refreshIcons();
//         n.refreshOptionValues();
//         n.refreshLots();
//         n.refreshImages();
//         n.refreshSampleAvailability();
//         f.startLoad();
//         n.gotoAnchor = function() {
//             o.hash() !== "anchor" ? o.hash("anchor") : h()
//         };
//         u.get(e.getUrl("product/list/?page=99&f_ProductSeries=" + encodeURIComponent(n.productDetailModel.Product.ProductSeries), !0)).then(function(t) {
//             var r, u, i;
//             f.endLoad();
//             n.collection = t.data.products;
//             r = [];
//             for (u in n.collection) i = n.collection[u], r.find(function(n) {
//                 return n.urlStyle == i.UrlFriendlyStyleName
//             }) || r.push({
//                 image: i.ImageName,
//                 urlStyle: i.UrlFriendlyStyleName,
//                 name: i.MaterialCategory,
//                 url: n.composeProductUrl(i.UrlFriendlyStyleName, i.ProductCode)
//             });
//             n.styles = r
//         }, function() {});
//         n.refreshRecent = function(t, i) {
//             if (n.recent = r.GetRecentItemsByKey(), t != null) {
//                 var u = window.location.href,
//                     f = {
//                         ProductCode: t.ProductCode,
//                         ImageName: t.ImageName,
//                         SeriesColor: t.SeriesColor,
//                         StyleName: t.StyleName,
//                         Size: t.Size,
//                         ItemUrl: i || u,
//                         Updated: (new Date).toUTCString()
//                     };
//                 r.AddOrUpdateRecent(f)
//             }
//         };
//         n.refreshRecent(n.productDetailModel.Product);
//         n.emailToOrder = function(n, t) {
//             return "mailto:onlineorders@mkquartz.com?subject=Order:%20" + n.Product.ProductCode + "&body=" + encodeURIComponent("I am interested in the following product:\n\nItem Code:") + n.Product.ProductCode + encodeURIComponent("\nCustomer Type ") + "%28Homeowner%2C%20Architect%2FDesigner%2C%20Dealer%2C%20Contractor%2FFabricator%2C%20Builder%2FProperty%20Manager%29%3A" + encodeURIComponent("\nJob Name:\nQuantity: ") + t + "%20" + n.Product.SellingUom.Id + encodeURIComponent("\n\t") + "%28Enter%20%27Sample%27%20to%20order%20a%20sample%29" + encodeURIComponent("\nStore Location: " + n.SelectedBranch.locationcode + "-" + n.SelectedBranch.city + "," + n.SelectedBranch.state) + encodeURIComponent("\nShip to/Pick-Up Address: ") + encodeURIComponent("\nCustomer Name: ")
//         }
//     }
//     angular.module("app").controller("ProductDetailCtrl", ["$scope", "$rootScope", "productDetailModel", "recentProductsService", "$http", "spinner", "appSettings", "$location", "$window", "$anchorScroll", "ngDialog", "$timeout", "googleTagManagerService", n]).config(["$locationProvider", function(n) {
//         n.html5Mode({
//             enabled: !0,
//             requireBase: !1,
//             rewriteLinks: !1
//         })
//     }])
// }(),
function() {
    "use strict";
    function n(n, t, i, r, u, f, e, d, rp) {
        n.criteria = {
            mosaic:false, 
            deco:false,
            tile:false,
            slab:false,
            color:[],
            size:[],
            selectedColor:[],
            colorFlag: false
        }
        n.customProdList = [];
        
        var productReq = {
            method: 'GET',
            url:'/api/v1/getProductList',
        }
         t(productReq).then(function(data){
            if(Array.isArray(data.data) && data.data.length > 0){
                n.customProdList = [];
                angular.forEach(data.data, function(value, key)
                {
                    value.mosaic = value.mosaic == 1?true:false;
                    value.deco = value.deco == 1?true:false;
                    value.tile = value.tile == 1?true:false;
                    value.slab = value.slab == 1?true:false;
                    if (value.color.indexOf(',') != -1) {
                        var segments = value.color.split(',');
                        angular.forEach(segments, function(v, k){
                            if(n.criteria.color.indexOf(v) == -1){
                                n.criteria.color.push(v)
                            }
                        })
                    }else if(value.color){
                        if(n.criteria.color.indexOf(value.color) == -1)
                        {
                            n.criteria.color.push(value.color)
                        }
                    }
                    if (value.size.indexOf(',') != -1) {
                        var sizesegment = value.size.split(',');
                        angular.forEach(sizesegment, function(m, h){
                            if(n.criteria.size.indexOf(m) == -1){
                                n.criteria.size.push(m)
                            }
                        })
                    }else if(value.size){
                        if(n.criteria.size.indexOf(value.size) == -1)
                        {
                            n.criteria.size.push(value.size)
                        }
                    }

                    n.customProdList.push(value);
                })
                n.filterCustomProduct();
            }else{
                n.customProdList = [];
            }
        })
        n.actualProduct = [];
        n.filterCustomProduct = function(sortType){
            
            n.actualProduct = [];
            n.selectedColorProduct = [];
            for (var key in n.criteria) {
                if (n.criteria[key] == true ) {
                    angular.forEach(n.customProdList, function(value, k){
                        if(value[key] && value.category == n.categoryName){
                            var availableProducts = n.actualProduct.filter(function(v){
                                return v.id == value.id;
                            })
                            availableProducts.length == 0 ? n.actualProduct.push(value):'';
                        }
                    })
                }else if(key == 'selectedColor'){
                    angular.forEach(n.actualProduct, function(value, k){
                        if(value[key] && value.category == n.categoryName){
                             var availableProducts = n.selectedColorProduct.filter(function(o){
                             return o.id == value.id;
                            })
                             availableProducts.length == 0 ? n.selectedColorProduct.push(value):'';
                        }
                    })
                } 
            }
             
            var isOneSelected = false;
            for (var key in n.criteria) {
                if (n.criteria[key] == true) {
                    isOneSelected = true;
                    break;
                }
            }
            if(!isOneSelected){
                n.actualProduct = n.customProdList;
            } 
        }
        n.setColor = function(c, flag){
            if(flag && n.criteria.selectedColor.indexOf(c) == -1){
                n.criteria.selectedColor.push(c)
            }else if(!flag){
                var index = n.criteria.selectedColor.indexOf(c);
                if(index >= 0){
                    n.criteria.selectedColor.splice(index, 1);
                }
            }
            n.filterCustomProduct('sortOnColor');
        }
        n.categoryName=rp.category
        n.productListModel = u;
        n.data = {
            filterDialogShow: !1,
            filterDialogBusy: !1
        };
        n.closeSortDropdown = function() {
            n.showSortDropdown = !1
        };
        n.closePageDropdown = function() {
            n.showPageDropdown = !1
        };
        n.showFilterDialog = function() {
            $("html").css({
                overflow: "hidden"
            });
            $("body").css({
                overflow: "hidden"
            });
            n.data.filterDialogShow = !0
        };
        n.closeFilterDialog = function() {
            $("html").css({
                overflow: "auto"
            });
            $("body").css({
                overflow: "auto"
            });
            n.data.filterDialogShow = !1
        };
        n.resetFilter = function() {
            var t = 0;
            n.productListModel.refinements.forEach(function(n) {
                n.options.forEach(function(n) {
                    n.preSelected = n.selected;
                    n.selected && t++
                })
            });
            n.data.filtersCount = t
        };
        n.applyFilter = function() {
            n.data.filterDialogBusy = !0;
            var t = [];
            n.productListModel.refinements.forEach(function(n) {
                var i = [];
                n.options.forEach(function(n) {
                    n.preSelected && i.push(n.value)
                });
                i.length > 0 && t.push("f_" + n.key + "=" + i.join(","))
            });
            e.location.href = f + "?" + t.join("&")
        };
        n.resetFilter()
    }
    angular.module("app").controller("ProductListController", ["$scope", "$http", "spinner", "appSettings", "productListModel", "baseUrl", "$window", "ngDialog", "$routeParams", n])
}(),
function() {
    "use strict";

    function n(n) {
        function r() {
            return angular.fromJson(n.get(t))
        }

        function u(r) {
            var u = this.GetRecentItemsByKey(t) || [],
                f = $.map(u, function(n) {
                    if (n.ProductCode === r.ProductCode) return n.Updated = (new Date).toUTCString()
                });
            f.length === 0 && u.push(r);
            u.length > 20 && (u = u.sort(i.OrderByDescDate), u.splice(u.length - 1, 1));
            n.put(t, angular.toJson(u), {
                path: "/"
            })
        }
        var i = this,
            t = "ProductDetail";
        return i.OrderByDescDate = function(n, t) {
            return n.Updated > t.Updated ? -1 : n.Updated < t.Updated ? 1 : 0
        }, {
            GetRecentItemsByKey: r,
            AddOrUpdateRecent: u
        }
    }
    angular.module("app").service("recentProductsService", ["$cookies", n])
}(),
function() {
    "use strict";
    angular.module("app").directive("addThis", function() {
        return function(n, t) {
            yepnope({
                load: "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-537c393450362103&domready=1&async=1",
                complete: function() {
                    addthis.init();
                    addthis.toolbox(t, {}, {
                        url: n.shareUrl
                    });
                    addthis.update("share", "title", n.shareTitle);
                    n.$watchGroup(["shareUrl", "shareTitle"], function(n, t, i) {
                        addthis && (addthis.update("share", "url", i.shareUrl), addthis.update("share", "title", i.shareTitle), addthis.update("share", "media", i.shareMedia))
                    })
                }
            })
        }
    })
}(),
function() {
    "use strict";
    angular.module("app").directive("flickity", ["$timeout", function(n) {
        return {
            restrict: "A",
            scope: {
                flickityOptions: "=flickityOptions",
                flickityImages: "=flickityImages"
            },
            link: function(t, i) {
                t.initialized = !1;
                t.$watchCollection("flickityImages", function() {
                    n(function() {
                        t.initialized && $(i).flickity("destroy");
                        $(i).removeClass("is-hidden");
                        $(i).flickity(t.flickityOptions);
                        t.initialized = !0
                    })
                })
            }
        }
    }])
}(),
function() {
    "use strict";
    angular.module("app").directive("oepTearsheet", ["appSettings", "myModuleConst", "$http", "$q", function(n, t, i, r) {
        return {
            restrict: "E",
            scope: {},
            templateUrl: n.getUrl(t.tearsheetTemplatePath, !1),
            link: function(t, u, f) {
                t.TearSheetLink = {};
                t.getTearSheet = function(t) {
                    var u = r.defer(),
                        f = n.getUrl("product/tearsheet", !0),
                        e = {
                            productSeries: t
                        };
                    return i.post(f, e).success(function(n) {
                        n && n.Success ? u.resolve(n.Value) : u.reject("Failed to receive tear sheet!")
                    }).error(function() {
                        u.reject("An error occurred while sending your enquiry. Please try again or contact an administrator.")
                    }), u.promise
                };
                t.getTearSheet(f.tearsheetProductseries).then(function(n) {
                    t.tearSheet = n
                }, function(n) {
                    console.log(n)
                })
            }
        }
    }])
}(),
function() {
    "use strict";
    angular.module("app").directive("slick", ["$timeout", function(n) {
        return {
            restrict: "A",
            scope: {
                slickOptions: "=slickOptions",
                slickImages: "=slickImages"
            },
            link: function(t, i) {
                t.initialized = !1;
                t.$watchCollection("slickImages", function() {
                    n(function() {
                        t.initialized && $(i).slick("unslick");
                        $(i).slick(t.slickOptions);
                        t.initialized = !0
                    })
                })
            }
        }
    }])
}(),
function() {
    "use strict";

    function n(n, t, i, r, u, f, e) {
        n.saveToShoppingBag = function() {
            i.open({
                template: "/save-shopping-bag-added.html",
                className: "ngdialog-theme-plain save-to-shoppingbag-dialog",
                scope: n
            })
        };
        n.addCurrentBagToWishList = function(n, t) {
            if (!n) {
                r.alert("Enter name for a New Shopping Bag.");
                return
            }
            u.startLoad();
            var i = {
                    name: n,
                    note: t
                },
                o = f.getUrl("WishList/AddCurrentBagToWishList", !0);
            e({
                method: "POST",
                url: o,
                data: i
            }).then(function(n) {
                n.data.errors ? (r.alert(n.data.errors.Messages[0]), u.endLoad()) : r.location.reload()
            }, function(n) {
                r.alert(n.statusText);
                u.endLoad()
            })
        };
        n.saveForLater = function(t) {
            n.data = t;
            i.open({
                template: "/save-for-later.html",
                className: "ngdialog-theme-plain save-for-later-dialog",
                scope: n
            })
        };
        n.proceedForCheckout = function(t) {
            n.data = t;
            i.open({
                template: "/proceed-to-checkout.html",
                className: "ngdialog-theme-plain proceed-to-checkout-dialog",
                scope: n
            })
        }
    }
    angular.module("app").controller("shoppingBagCtrl", ["$scope", "$filter", "ngDialog", "$window", "spinner", "appSettings", "$http", n])
}(),
function() {
    "use strict";

    function n(n, t, i, r) {
        return {
            restrict: "E",
            templateUrl: n.getUrl(t.oepSignUpEmailTemplatePath, !1),
            scope: {},
            link: function(u) {
                u.data = {};
                u._email = "";
                var f = "OepEmailSignup",
                    e = function() {
                        var e = n.getBaseUrl(),
                            o = n.getCurrentUrl(),
                            i, t;
                        e === o && (i = angular.fromJson(r.get(f)), i || (u.signUpDialog(), t = new Date, t.setFullYear(t.getFullYear() + 1), r.put(f, angular.toJson(t.toUTCString()), {
                            expires: t,
                            path: "/"
                        })))
                    };
                u.signUpDialog = function() {
                    u.data.busy || (u.data.busy = !0, i.open({
                        template: n.getUrl(t.subscribeModalTemplatePath, !1),
                        className: "ngdialog-theme-plain email-signup",
                        closeByEscape: !0,
                        closeByDocument: !0,
                        scope: u,
                        controller: "SubscribeModalCtrl"
                    }), u.data.busy = !1)
                };
                e()
            }
        }
    }
    angular.module("app").directive("oepSignUp", ["appSettings", "myModuleConst", "ngDialog", "$cookies", n])
}(),
function() {
    "use strict";

    function n(n, t, i, r) {
        n.appSettings = i;
        n.data = {
            isBusy: !1,
            confirm: !1,
            errors: null,
            subscriptions: null
        };
        n.subscribe = function(r, u, f, e, o) {
            var s, c, h;
            n.data.isBusy = !0;
            s = [];
            for (c in n.data.subscriptions) h = n.data.subscriptions[c], h.isSubscribed && s.push(h.id);
            t.post(i.getSecureUrl("subscription/subscribe/", !0), {
                firstName: r,
                lastName: u,
                email: f,
                confirmEmail: e,
                postalCode: o,
                subscriptionSourceId: s
            }).then(function(t) {
                t.data.success ? (n.data.errors = null, n.data.confirm = !0) : n.data.errors = t.data.errors;
                n.data.isBusy = !1
            }, function(n) {
                console.log(n)
            })
        };
        n.redirectToSubscribe = function(t) {
            n.data.isBusy = !0;
            r.location.href = i.getSecureUrl("subscription/subscribe/", !0) + "?email=" + encodeURIComponent(t)
        };
        n.getSubscriptions = function() {
            n.data.isBusy = !0;
            t.get(i.getUrl("subscription/subscribe/", !0)).then(function(t) {
                n.data.subscriptions = t.data.subscriptions;
                n.data.isBusy = !1
            }, function(n) {
                console.log(n)
            })
        };
        n.getSubscriptions()
    }
    angular.module("app").controller("SubscribeModalCtrl", ["$scope", "$http", "appSettings", "$window", n])
}(),
function() {
    "use strict";

    function n(n, t, i, r, u, f) {
        function o() {
            e()
        }

        function s(t) {
            n.model.pageSize = t;
            n.model.currentPage = 1;
            e()
        }

        function e() {
            u.startLoad();
            t({
                method: "GET",
                url: r.getUrl("search/content/?q=" + n.model.query + "&page=" + n.model.currentPage + "&pageSize=" + n.model.pageSize, !0),
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                }
            }).then(function(t) {
                var i = {
                    items: [],
                    pageFoundCount: 0
                };
                i.totalCount = t.data.totalCount;
                t.data.items.forEach(function(n) {
                    var t = {
                        url: n.url,
                        title: n.title,
                        description: n.description
                    };
                    i.items.push(t)
                });
                n.items = i.items;
                n.model.totalCount = i.totalCount;
                n.model.totalPages = Math.ceil(i.totalCount / n.model.pageSize)
            }, function(n) {
                console.log(n)
            }).finally(function() {
                u.endLoad()
            })
        }
        n.model = {
            pageSizes: [20, 50, 100, 200],
            pageSize: 20,
            currentPage: 1,
            totalPages: 1,
            query: f.query,
            totalCount: 0
        };
        n.items = [];
        n.getSearchResult = e;
        n.setPageSize = s;
        o();
        n.prevPage = function() {
            n.model.currentPage > 1 && n.model.currentPage--;
            n.getSearchResult()
        };
        n.prevPageDisabled = function() {
            return n.model.currentPage === 1 ? "disabled" : ""
        };
        n.nextPage = function() {
            n.model.currentPage++;
            n.getSearchResult()
        };
        n.nextPageDisabled = function() {
            return n.model.pageSize > n.items.length ? "disabled" : ""
        }
    }
    angular.module("app").controller("SiteSearchController", n);
    n.$inject = ["$scope", "$http", "$location", "appSettings", "spinner", "searchModel"]
}(),
function() {
    "use strict";

    function n(n, t, i) {
        function r() {
            var t = i.slabYard.baseUrl;
            t += "?ignoreProducts=true&ignoreSlabYard=true";
            $.get(t, function(t) {
                n.refinements = t.refinements;
                n.resetRefinements()
            })
        }
        n.initializeViewMode = function() {
            n.mode = t.slabsViewMode
        };
        n.setViewMode = function(i) {
            return n.mode = i, t.slabsViewMode = i
        };
        n.refreshApplyUrl = function() {
            var u = [],
                f, t, e, r;
            for (f in n.refinements) {
                t = n.refinements[f];
                for (e in t.options) r = t.options[e], r.selected && u.push("f_" + t.key + "=" + r.value)
            }
            n.applyUrl = i.slabYard.baseUrl + "?" + u.join("&")
        };
        n.resetRefinements = function() {
            var f, t, e, r, o, u;
            for (f in n.refinements) {
                t = n.refinements[f];
                for (e in t.options) {
                    r = t.options[e];
                    r.selected = !1;
                    for (o in i.slabYard.facets)
                        if (u = i.slabYard.facets[o], t.key == u.key && r.value == u.value) {
                            r.selected = !0;
                            break
                        }
                }
            }
        };
        r()
    }
    angular.module("app").controller("SlabYardCtrl", ["$scope", "$cookies", "$window", n])
}(),
function() {
    "use strict";

    function n(n, t, i) {
        function r() {
            i.startLoad();
            n.model.filterError = "";
            n.model.loadingStatements = !0;
            var r = {
                customerBranchId: n.selectedBranch.Id,
                year: n.selectedYear ? n.selectedYear.value : (new Date).getFullYear(),
                itemsPerPage: n.model.itemsPerPage,
                page: n.currentPage
            };
            n.statements = n.statementsCache = null;
            t.getStatements(r).then(function(t) {
                n.togglePage = !1;
                n.toggleStatus = !1;
                n.toggleDisplay = !1;
                n.statements = n.statementsCache = t.Statements;
                n.customerBranches = t.CustomerBranches;
                var i = (new Date).getFullYear();
                n.availableYears = t.AvailableYears.map(function(n) {
                    return {
                        name: n == i ? "Year to Date" : n,
                        value: n
                    }
                });
                n.selectedYear || (n.selectedYear = n.availableYears[0]);
                n.selectedBranch = $.grep(n.customerBranches, function(n) {
                    return n.Id === t.Customer.Id
                })[0];
                n.parentCustomer = {
                    CustomerName: t.Customer.ParentCustomerName
                }
            }, function(n) {
                console.log(n)
            }).finally(function() {
                i.endLoad();
                n.model.loadingStatements = !1
            })
        }

        function u() {
            r()
        }
        n.init = u;
        n.statements = [];
        n.statementsCache = [];
        n.parentCustomer = {};
        n.customerBranches = [];
        n.selectedBranch = {};
        n.getStatements = r;
        n.selectedYear = null;
        n.startDateIsActive = !1;
        n.dateRangeIsActive = !1;
        n.itemsPerPageList = [{
            Value: 20,
            Name: "20"
        }, {
            Value: 50,
            Name: "50"
        }, {
            Value: 100,
            Name: "100"
        }, {
            Value: 200,
            Name: "200"
        }];
        n.currentPage = 0;
        n.model = {
            loadingStatements: !1,
            filterError: "",
            itemsPerPage: 20
        };
        n.prevPage = function() {
            n.currentPage > 0 && n.currentPage--;
            n.getStatements()
        };
        n.prevPageDisabled = function() {
            return n.currentPage === 0 ? "disabled" : ""
        };
        n.nextPage = function() {
            n.currentPage++;
            n.getStatements()
        };
        n.nextPageDisabled = function() {
            return n.statements ? n.model.itemsPerPage > n.statements.length ? "disabled" : "" : "disabled"
        };
        n.customerBranchChanged = function() {
            n.selectedYear = n.availableYears[0];
            n.applyFilter()
        };
        n.applyFilter = function() {
            n.currentPage = 0;
            n.getStatements()
        };
        u()
    }
    angular.module("app").controller("StatementsCtrl", ["$scope", "StatementsService", "spinner", "$http", "ngDialog", "$q", "appSettings", "$window", n])
}(),
function() {
    "use strict";

    function n(n, t, i) {
        function r(r) {
            var u = i.defer();
            return t({
                url: n.getUrl("Account/Statements", !0),
                method: "GET",
                params: r,
                dataType: "json"
            }).success(function(n) {
                n ? u.resolve(n) : u.reject("Failed to get statements!")
            }).error(function() {
                u.reject("An error occurred while sending your enquiry. Please try again or contact an administrator.")
            }), u.promise
        }
        return {
            getStatements: r
        }
    }
    angular.module("app").service("StatementsService", ["appSettings", "$http", "$q", n])
}(),
function() {
    "use strict";
    angular.module("app.storelocator", ["uiGmapgoogle-maps", "app.utils"]).config(["uiGmapGoogleMapApiProvider", function(n) {
        n.configure({
            key: "AIzaSyDD91Ir0lQUEuZcLQ1sYz_1KxVxA7QxbRg",
            v: "3.17",
            libraries: "weather,geometry,visualization"
        })
    }])
}(),
function() {
    "use strict";

    function n(n, t, i, r, u, f) {
        function e(n) {
            return n * (Math.PI / 180)
        }

        function c(n, t, i, r) {
            var u = e(i - n),
                f = e(r - t),
                o = Math.sin(u / 2) * Math.sin(u / 2) + Math.cos(e(n)) * Math.cos(e(i)) * Math.sin(f / 2) * Math.sin(f / 2),
                s = 2 * Math.atan2(Math.sqrt(o), Math.sqrt(1 - o));
            return 3959 * s
        }

        function l() {
            n.map.zoom = n.map.zoom + 1
        }

        function a() {
            n.map.zoom > 3 && (n.map.zoom = n.map.zoom - 1)
        }

        function v(t) {
            u.progress();
            n.store = t;
            t ? (n.googleStoreDirections = "https://www.google.com/maps/dir/Current+Location/" + encodeURIComponent(t.street + ", " + t.city + ", " + t.state + " " + t.zip), n.map = {
                center: {
                    latitude: t.latitude,
                    longitude: t.longitude
                },
                zoom: 16
            }, t.icon = t.isexternalbrand ? {
                url: t.externalBrandDetails.Icon
            } : {
                url: "../css/images/location_icon.svg"
            }, t.streetViewImageUrl == null && (t.streetViewImageUrl = "//maps.googleapis.com/maps/api/streetview?size=350x250&location=" + t.latitude + "," + t.longitude + "&heading=227.32&pitch=-0.76"), n.markers.push(t)) : n.map = {
                center: {
                    latitude: 33.815556,
                    longitude: -117.889723
                },
                zoom: 8
            };
            u.progress()
        }
        var s, o, h;
        u.startLoad();
        n.isInitialized = !1;
        n.zoomIn = l;
        n.zoomOut = a;
        n.location = i;
        n.init = function(t) {
            t == i.id && (n.isMyLocation = !0)
        };
        s = localStorage.previousLocation;
        s && (o = JSON.parse(s), o.id !== i.id && (h = c(o.latitude, o.longitude, i.latitude, i.longitude), n.distancePrevious = Math.round(Math.abs(h)), n.locationPrevious = i.name));
        localStorage.previousLocation = JSON.stringify(i);
        n.store = null;
        n.markers = [];
        n.options = {
            scrollwheel: !1,
            disableDefaultUI: !0
        };
        n.markerOptions = {};
        n.changeLocation = function() {
            var r = f.getUrl("shipping/changeLocation/", !0);
            t.post(r, {
                id: i.locationcode
            }).success(function() {
                n.isMyLocation = !0
            })
        };
        n.getHours = function(n) {
            var t;
            return t = n ? n.replace("Monday", "M").replace("Tuesday", "Tu").replace("Wednesday", "W").replace("Thursday", "Th").replace("Friday", "F").replace("Saturday", "Sat").replace("Sunday", "Sun").replace("MO", "M").replace("TU", "Tu").replace("WE", "W").replace("TH", "Th").replace("FR", "F").replace("SA", "Sat").replace("SU", "Sun").replace("CLOSED", "Closed") : "-", t.split("\n")
        };
        v(i);
        r.initMarkers(n.markerOptions).then(function() {
            u.endLoad();
            n.isInitialized = !0
        });
        n.relativeWorkTime = ""
    }
    angular.module("app.storelocator").controller("LocationDetailCtrl", ["$scope", "$http", "location", "markerService", "spinner", "appSettings", n])
}(),
function() {
    "use strict";

    function n(n, t, i, r, u, f, e, o, s, h) {
        function l(n, t) {
            return n.name > t.name ? 1 : n.name < t.name ? -1 : 0
        }

        function p(n, t) {
            return n.distance > t.distance ? 1 : n.distance < t.distance ? -1 : 0
        }

        function w() {
            var r, t, h, o, c;
            for (e.startLoad(), n.locations = u.sort(l) || [], r = 0; r < n.locations.length; r++) try {
                if (t = n.locations[r], t.icon = t.externalBrandDetails && t.externalBrandDetails.Icon ? {
                        url: t.externalBrandDetails.Icon
                    } : {
                        url: "../css/images/location_icon.svg"
                    }, !t.schedule) {
                    t.openUntil = "";
                    continue
                }
                var p = t.timezone,
                    s = moment(moment.tz(moment(), p).format("YYYY-MM-DD HH:mm:ss")),
                    w = moment().format("dddd"),
                    i = t.schedule[w],
                    a = moment().format("YYYY-MM-DD"),
                    y = moment(a + " " + i.Begin, "YYYY-MM-DD HH:mm:ss"),
                    b = moment(a + " " + i.End, "YYYY-MM-DD HH:mm:ss"),
                    h = i.Begin.substring(0, i.Begin.length - 3);
                if (i.Begin && s > moment(y) && moment(s) < b) {
                    t.openUntil = "Open Until " + i.End.substring(0, i.Begin.length - 3);
                    continue
                } else if (s < moment(y)) {
                    h = i.Begin.substring(0, i.Begin.length - 3);
                    t.openUntil = "Closed, will be open today, {time}".replace("{time}", h);
                    continue
                } else
                    for (o = 1; o < 6; o++)
                        if (c = moment().add(o, "days").format("dddd"), t.schedule[c].Begin) {
                            t.openUntil = "Closed, will be open on {day}, {time}".replace("{day}", c).replace("{time}", h);
                            break
                        }
            } catch (it) {
                console.error(it)
            }
            n.filteredLocations = n.locations;
            n.nearestLocationsCount = 0;
            n.selectedLocation = null;
            n.userEnteredLocation = null;
            n.findLocation = tt;
            n.lastSearchResultQuery = "";
            n.clearSearch = nt;
            n.query = "";
            n.isInitialized = !1;
            n.map = {
                center: {
                    latitude: 40.1451,
                    longitude: -99.668
                },
                zoom: 4,
                bounds: {}
            };
            n.mapControl = {};
            n.options = {
                disableDefaultUI: !0,
                maxZoom: 8,
                minZoom: 3
            };
            n.markerOptions = {};
            n.windowOptions = {
                visible: !0,
                boxClass: "marker-info-window-outer"
            };
            n.zoomIn = k;
            n.zoomOut = d;
            n.markerClick = g;
            n.markerClose = function() {
                n.selectedLocation = null
            };
            n.showLocation = function(n) {
                v(n, !0)
            };
            e.progress();
            f.initMarkers(n.markerOptions).then(function() {
                n.isInitialized = !0;
                e.endLoad()
            })
        }

        function b(n) {
            return Math.round(14 - Math.log(n) / Math.LN2)
        }

        function v(t, i) {
            n.selectedLocation = t;
            var r = n.map.zoom < 10;
            r && (n.map.zoom = 10);
            (r || i) && (n.map.center = {
                latitude: t.latitude,
                longitude: t.longitude
            })
        }

        function k() {
            n.map.zoom = n.map.zoom + 1
        }

        function d() {
            n.map.zoom > 3 && (n.map.zoom = n.map.zoom - 1)
        }

        function c() {
            var t = new google.maps.LatLngBounds;
            $.map(n.filteredLocations, function(n) {
                var r = [],
                    u = new google.maps.LatLng(n.latitude, n.longitude),
                    i;
                for (r.push(u), i = 0; i < r.length; i++) t.extend(r[i])
            });
            n.gmap = n.mapControl.getGMap();
            n.gmap.fitBounds(t)
        }

        function g(n, t, r) {
            var u = i.outerWidth;
            u < 768 ? i.location.href = r.branchaddressurl : v(r)
        }

        function y(t) {
            var f, i, u, r;
            if (n.nearestLocationsCount = 0, n.gmap = n.mapControl.getGMap(), f = new google.maps.LatLng(t.lat(), t.lng()), i = [], $.map(n.filteredLocations, function(t) {
                    var r = new google.maps.LatLng(t.latitude, t.longitude);
                    t.distance = parseFloat((google.maps.geometry.spherical.computeDistanceBetween(f, r) * .000621371192).toFixed(2));
                    t.distance <= 100 && (n.nearestLocationsCount++, i.push(r))
                }), n.nearestLocationsCount > 0) {
                for (u = new google.maps.LatLngBounds, r = 0; r < i.length; r++) u.extend(i[r]);
                n.gmap.fitBounds(u);
                google.maps.event.addListenerOnce(n.gmap, "bounds_changed", function() {
                    n.gmap.getZoom() > a && n.gmap.setZoom(a)
                })
            } else c()
        }

        function nt() {
            n.userEnteredLocation = null;
            n.query = "";
            n.locations = u.sort(l) || [];
            c()
        }

        function tt(t) {
            if (t) {
                e.startLoad();
                var r = new google.maps.Geocoder;
                r.geocode({
                    address: t
                }, function(r, u) {
                    u === google.maps.GeocoderStatus.OK && r.length > 0 ? (n.$apply(function() {
                        n.userEnteredLocation = r[0].geometry.location;
                        console.log("Lo que hay en location: ", r[0].geometry.location);
                        e.progress();
                        y(n.userEnteredLocation);
                        n.locations = n.locations.sort(p)
                    }), n.lastSearchResultQuery = t, angular.element("#locations-container")[0].scrollTop = 0, i.scrollTo(0, angular.element("#locations-container").offsetTop), e.endLoad()) : (n.$apply(function() {
                        n.userEnteredLocation = null;
                        c()
                    }), e.endLoad())
                })
            }
        }
        n.selectBranch = function(n) {
            h.ChooseBranchByCode(n.locationcode, function(n) {
                var i = {
                    branchState: n.data.context.BranchState,
                    branchCity: n.data.context.BranchCity,
                    branchCode: n.data.context.BranchCode
                };
                t.$broadcast("branchChanged", i)
            })
        };
        n.initCtrl = function(t) {
            n.myLocationId = t
        };
        n.getCurrentPosition = function() {
            navigator.geolocation && navigator.geolocation.getCurrentPosition(function(n) {
                var t = new google.maps.LatLng(n.coords.latitude, n.coords.longitude);
                y(t)
            }, function() {})
        };
        var a = b(100);
        n.changeLocation = function(t) {
            var i = r.getUrl("shipping/changeLocation/", !0);
            s.post(i, {
                id: t.locationcode
            }).success(function() {
                n.myLocationId = t.id
            })
        };
        n.goto = function(n) {
            i.location.href = n
        };
        n.setFilter = function(t) {
            var r, i, u;
            for (n.filter = t, r = [], i = 0; i < n.locations.length; i++) {
                if (t === "") {
                    r.push(n.locations[i]);
                    continue
                }
                for (u = 0; u < n.locations[i].branchtype.length; u++)
                    if (n.locations[i].branchtype[u] === t) {
                        r.push(n.locations[i]);
                        continue
                    }
            }
            n.filteredLocations = r
        };
        w()
    }
    angular.module("app.storelocator").controller("LocationsCtrl", ["$scope", "$rootScope", "$window", "appSettings", "locations", "markerService", "spinner", "$timeout", "$http", "branchLocatorService", n])
}(),
function() {
    "use strict";

    function n(n, t) {
        function i(n) {
            return t.then(function(t) {
                n.animation = t.Animation.DROP
            })
        }
        return {
            initMarkers: i
        }
    }
    angular.module("app.storelocator").factory("markerService", n);
    n.$inject = ["appSettings", "uiGmapGoogleMapApi"]
}(),
function() {
    "use strict";

    function n(n, t, i, r) {
        return {
            restrict: "E",
            scope: {
                tagItem: "="
            },
            templateUrl: t.getUrl(r.oepTagTemplatePath, !1),
            link: function(u) {
                function f() {
                    u.userTagSection = !0
                }

                function e() {
                    u.model = {
                        userTags: [],
                        addTagName: "",
                        note: "",
                        alertMessage: "",
                        firstlyCheckedTags: []
                    }
                }

                function o() {
                    i.Close()
                }

                function s() {
                    u.hasAssignedTags = !1;
                    i.CheckAssignedTags({
                        itemNo: u.tagItem.ProductCode
                    }).then(function(n) {
                        u.hasAssignedTags = n
                    }, function(n) {
                        console.log(n)
                    })
                }

                function h() {
                    if (u.model.addTagName) {
                        u.model.alertMessage = "";
                        var n = $.grep(u.model.userTags, function(n) {
                            if (n.Name.trim().toUpperCase() === u.model.addTagName.trim().toUpperCase()) return !0
                        });
                        return n.length === 0 ? !0 : (u.model.alertMessage = "Project with same name already exists!", !1)
                    }
                    return !0
                }

                function c() {
                    e();
                    u.waiting = !0;
                    i.GetUserTagEntryMappings(u, u.templateId, {
                        itemNo: u.tagItem.ProductCode
                    }).then(function(n) {
                        u.model.userTags = n;
                        $.map(u.model.userTags, function(n) {
                            n.DateCreated = new Date(parseInt(n.DateCreated.substr(6)))
                        });
                        u.model.firstlyCheckedTags = $.map(u.model.userTags, function(n) {
                            if (n.Checked) return n.Id
                        });
                        u.waiting = !1
                    }, function(n) {
                        u.waiting = !1;
                        console.log(n)
                    })
                }

                function l() {
                    if (!h()) return !1;
                    u.waiting = !0;
                    var r = u.tagItem,
                        f = {
                            ProductCode: r.ProductCode,
                            ProductId: r.ProductId,
                            Description: r.Description,
                            ImageUrl: "../images/mkquartz/image/upload/c_fill,w_240,h_240/v1/cdn-mkquartz/assets/products/hiresimages/" + r.ImageName + ".jpg",
                            ProductSeries: r.ProductSeries,
                            SeriesColor: r.SeriesColor,
                            Size: r.Size,
                            Url: window.location.origin + t.getUrl("product/detail/" + r.UrlFriendlyStyleName + "?itemNo=" + r.ProductCode, !0),
                            Note: u.model.note
                        },
                        e = {
                            userTagEntries: u.model.userTags,
                            firstlyCheckedTags: u.model.firstlyCheckedTags,
                            productModel: f,
                            addTagName: u.model.addTagName
                        };
                    i.SetUserTagEntryMappings(e).then(function(n) {
                        n && (u.model.firstlyCheckedTags = $.map(u.model.userTags, function(n) {
                            if (n.Checked) return n.Id
                        }), u.hasAssignedTags = $.grep(u.model.userTags, function(n) {
                            return n.Checked ? !0 : !1
                        }).length > 0);
                        u.waiting = !1
                    }, function(t) {
                        u.waiting = !1;
                        n.alert(t);
                        console.log(t)
                    })
                }
                u.tagTemplateUrl = t.getUrl(r.partialUserTagsPath, !1);
                u.waiting = !1;
                u.title = "Add this product to an Ideabook";
                u.templateId = "UserTagsModalDialog.html";
                u.userTagSection = !1;
                u.note = "";
                u.GetUserTagEntryMappings = c;
                u.SetUserTagEntryMappings = l;
                u.Close = o;
                u.showUserTagSection = f;
                u.$watch("tagItem.ProductCode", function() {
                    s()
                })
            }
        }
    }
    angular.module("app").directive("oepTag", ["$window", "appSettings", "userTagsService", "myModuleConst", n])
}(),
function() {
    "use strict";

    function n(n, t, i, r, u) {
        n.newTagMode = !1;
        n.newTag = {};
        n.Init = function() {
            n.showInputText = !1;
            n.userProfileTags = i;
            $.map(n.userProfileTags, function(n) {
                n.DateCreated = new Date(n.DateCreated)
            });
            n.waiting = !1
        };
        n.AddNewTag = function() {
            n.newTagMode = !0;
            n.newTag = {
                Id: -1,
                Name: ""
            }
        };
        n.CancelNewTagName = function() {
            n.newTagMode = !1
        };
        n.EditTag = function(n) {
            $("#read-" + n.Id)[0].style.display = "none";
            $("#remove-" + n.Id)[0].style.display = "none";
            $("#edit-" + n.Id)[0].style.display = "none";
            $("#write-" + n.Id)[0].style.display = "initial";
            $("#save-" + n.Id)[0].style.display = "initial";
            $("#cancel-" + n.Id)[0].style.display = "initial";
            $("#write-" + n.Id)[0].alt = n.Name
        };
        n.ChangeTagName = function(t) {
            var i, f;
            t.Name && (n.waiting = !0, i = {}, t.Id > 0 ? (f = $.grep(n.userProfileTags, function(n) {
                return n.Id !== t.Id && n.Name.trim().toUpperCase() === t.Name.trim().toUpperCase() ? !0 : !1
            }), f.length === 0 ? (i = {
                model: t
            }, r.EditTag(i).then(function(t) {
                $("#read-" + t.Id)[0].style.display = "initial";
                $("#remove-" + t.Id)[0].style.display = "initial";
                $("#edit-" + t.Id)[0].style.display = "initial";
                $("#save-" + t.Id)[0].style.display = "none";
                $("#write-" + t.Id)[0].style.display = "none";
                $("#cancel-" + t.Id)[0].style.display = "none";
                n.waiting = !1
            }, function(t) {
                n.waiting = !1;
                console.log(t)
            })) : (n.waiting = !1, alert("Project with same name already exists!"))) : (i = {
                name: t.Name
            }, u.AddNewUserTag(i).then(function(t) {
                n.userProfileTags.push(t);
                n.newTagMode = !1;
                n.waiting = !1
            }, function(t) {
                n.waiting = !1;
                console.log(t)
            })))
        };
        n.CancelChangeTagName = function(n) {
            $("#read-" + n.Id)[0].style.display = "initial";
            $("#remove-" + n.Id)[0].style.display = "initial";
            $("#edit-" + n.Id)[0].style.display = "initial";
            $("#write-" + n.Id)[0].style.display = "none";
            $("#cancel-" + n.Id)[0].style.display = "none";
            $("#save-" + n.Id)[0].style.display = "none";
            n.Name = $("#write-" + n.Id)[0].alt
        };
        n.EditEntry = function(n, t) {
            var i = {
                entryId: n,
                model: t
            };
            r.EditEntry(i)
        };
        n.DeleteTagPopUp = function(i) {
            n.tags = i;
            t.open({
                template: "/delete-tag.html",
                className: "ngdialog-theme-plain delete-tag",
                scope: n
            })
        };
        n.DeleteTagEntryPopUp = function(i, r) {
            n.entries = i;
            n.tags = r;
            t.open({
                template: "/delete-tag-entry.html",
                className: "ngdialog-theme-plain delete-tag",
                scope: n
            })
        };
        n.DeleteTag = function(t, i) {
            if (i) {
                n.waiting = !0;
                var u = {
                    model: t
                };
                return r.DeleteTag(u).then(function(t) {
                    var i = $.grep(n.userProfileTags, function(n) {
                        return n.Id === t.Id
                    });
                    i[0] && n.userProfileTags.splice(n.userProfileTags.indexOf(i[0]), 1);
                    n.waiting = !1
                }, function(t) {
                    n.waiting = !1;
                    console.log(t)
                }), !0
            }
            return !1
        };
        n.DeleteTagEntry = function(t, i, u) {
            if (u) {
                n.waiting = !0;
                var f = {
                    entryId: t,
                    model: i
                };
                return r.DeleteTagEntry(f).then(function(i) {
                    $.grep(n.userProfileTags, function(n) {
                        n.Id === i.Id && $.grep(n.TagEntryModels, function(i, r) {
                            i.EntryId === t && (n.TagEntryModels.splice(r, 1), r--)
                        })
                    });
                    n.waiting = !1
                }, function(t) {
                    n.waiting = !1;
                    console.log(t)
                }), !0
            }
            return !1
        };
        n.Init()
    }
    angular.module("app").controller("UserProfileTagsCtrl", ["$scope", "ngDialog", "userProfileTags", "userProfileTagsService", "userTagsService", n]).filter("unsafe", function(n) {
        return function(t) {
            return n.trustAsHtml(t)
        }
    })
}(),
function() {
    "use strict";

    function n(n, t, i) {
        function r(r) {
            var u = i.defer();
            return t({
                url: n.getUrl("Tag/DeleteTag", !0),
                method: "POST",
                data: r,
                dataType: "json"
            }).success(function(n) {
                n ? u.resolve(n) : u.reject("Failed to remove tag!")
            }).error(function() {
                u.reject("Failed to remove tag!")
            }), u.promise
        }

        function u(r) {
            var u = i.defer();
            return t({
                url: n.getUrl("Tag/EditTag", !0),
                method: "POST",
                data: r,
                dataType: "json"
            }).success(function(n) {
                n ? u.resolve(n) : u.reject("Failed to edit tag name!")
            }).error(function() {
                u.reject("Failed to edit tag name!")
            }), u.promise
        }

        function f(r) {
            var u = i.defer();
            return t({
                url: n.getUrl("Tag/DeleteTagEntry", !0),
                method: "POST",
                data: r,
                dataType: "json"
            }).success(function(n) {
                n ? u.resolve(n) : u.reject("Failed to remove entry!")
            }).error(function() {
                u.reject("Failed to remove entry!")
            }), u.promise
        }

        function e(r) {
            var u = i.defer();
            return t({
                url: n.getUrl("Tag/EditEntry", !0),
                method: "POST",
                data: r,
                dataType: "json"
            }).success(function(n) {
                n ? u.resolve(n) : u.reject("Failed to edit entry description!")
            }).error(function() {
                u.reject("Failed to edit entry description!")
            }), u.promise
        }
        return {
            DeleteTag: r,
            EditTag: u,
            DeleteTagEntry: f,
            EditEntry: e
        }
    }
    angular.module("app").service("userProfileTagsService", ["appSettings", "$http", "$q", n])
}(),
function() {
    "use strict";

    function n(n, t, i, r) {
        function u(r) {
            var u = i.defer();
            return t({
                url: n.getUrl("Tag/CheckAssignedTags", !0),
                method: "POST",
                params: r,
                dataType: "json"
            }).success(function(n) {
                n ? u.resolve(JSON.parse(n)) : u.reject("Failed to check assigned tags for current item!")
            }).error(function() {
                u.reject("An error occurred while sending your enquiry. Please try again or contact an administrator.")
            }), u.promise
        }

        function f(u) {
            var f = i.defer();
            return t({
                url: n.getUrl("Tag/AddNewUserTag", !0),
                method: "POST",
                params: u,
                dataType: "json"
            }).success(function(n) {
                n ? f.resolve(n) : f.reject("Failed to add new tag!")
            }).error(function() {
                r.open({
                    template: '<div class="col-sm-12"><h4><strong>Warning<\/strong><\/h4><\/div><div class="ngdialog-message"> \t\t\t\t\t\t  An error occurred while sending your request for adding new tag. Please try again.<\/div>',
                    className: "ngdialog-theme-plain",
                    plain: "true"
                });
                f.reject("An error occurred while sending your enquiry. Please try again or contact an administrator.")
            }), f.promise
        }

        function e(u, f, e) {
            var o = i.defer();
            return r.open({
                template: f,
                className: "ngdialog-theme-plain ideabook-add-dialog",
                closeByEscape: !0,
                closeByDocument: !0,
                scope: u
            }), t({
                url: n.getUrl("Tag/GetUserTagEntryMappings", !0),
                method: "GET",
                dataType: "json",
                params: e
            }).success(function(n) {
                o.resolve(n)
            }).error(function() {
                r.open({
                    template: '<div class="col-sm-12"><h4><strong>Warning<\/strong><\/h4><\/div><div class="ngdialog-message"> \t\t\t\t\t\t  An error occurred while sending your request for getting tags. Please try again.<\/div>',
                    className: "ngdialog-theme-plain",
                    plain: "true"
                });
                o.reject("An error occurred while sending your enquiry. Please try again or contact an administrator.")
            }), o.promise
        }

        function o(u) {
            var f = i.defer();
            return t({
                url: n.getUrl("Tag/SetUserTagEntryMappings", !0),
                method: "POST",
                dataType: "json",
                data: u
            }).success(function(n) {
                r.close();
                f.resolve(n)
            }).error(function() {
                r.open({
                    template: '<div class="col-sm-12"><h4><strong>Warning<\/strong><\/h4><\/div><div class="ngdialog-message"> \t\t\t\t\t\t  An error occurred while sending your request for saving changes. Please try again.<\/div>',
                    className: "ngdialog-theme-plain",
                    plain: "true"
                });
                f.reject("An error occurred while sending your enquiry. Please try again or contact an administrator.")
            }), f.promise
        }

        function s() {
            r.close()
        }
        return {
            Close: s,
            AddNewUserTag: f,
            CheckAssignedTags: u,
            GetUserTagEntryMappings: e,
            SetUserTagEntryMappings: o
        }
    }
    angular.module("app").service("userTagsService", ["appSettings", "$http", "$q", "ngDialog", n])
}(),
function() {
    "use strict";

    function n(n, t, i, r, u, f, e) {
        function h(n) {
            return n.parentElement.parentElement.querySelector(".js-dropdown")
        }

        function l(n) {
            var i = h(n.target),
                t = $(n.target).position(),
                r = $(window).width() > 1300 ? t.left : t.left - 80;
            $(i).css("top", t.top).css("left", r).css("display", "inline-block").css("position", "absolute").css("width", "120px")
        }

        function a(n, t) {
            if (n.Sku.IsHidden) return null;
            var u = r.getUrl("product/detail/" + n.UrlFriendlyName + "/?itemNo=" + n.Sku.ProductCode, !0);
            if (t) i.open(u, "_blank");
            else return u
        }

        function v(n) {
            localStorage.removeItem(n)
        }

        function y(n) {
            localStorage.setItem(n, n)
        }

        function c() {
            Array.isArray(n.wishlist) && n.wishlist.length > 0 && $.map(n.wishlist, function(n) {
                localStorage.getItem(n.QuoteId) && (n.isVisible = !0)
            })
        }

        function o() {
            $.map(n.wishlist, function(n) {
                return n.hasUpdates = 0, $.map(n.Items, function(t) {
                    t.Item.Qty && t.Item.Qty > 0 && parseFloat(t.Item.Qty) !== t.Item.resetValue && n.hasUpdates++
                })
            })
        }

        function p(f) {
            if (!f.Item.Qty || f.Item.Qty > 99999) return i.alert("Incorrect item qty. Qty must be greater than zero and less than 100000."), !1;
            u.startLoad();
            n.busy = !0;
            var e = r.getUrl("en/WishList/UpdateItem"),
                s = parseFloat(f.Item.Qty),
                h = {
                    wishlistId: f.WishListId,
                    shoppingBagItemId: f.Item.Id,
                    qty: s
                };
            t({
                method: "POST",
                url: e,
                data: h
            }).then(function(n) {
                f.Item.Qty = f.Item.resetValue = n.data.Qty;
                f.Item.TotalAmount = n.data.TotalAmount;
                f.Item.SaveAmount = n.data.SaveAmount;
                f.Item.LeadTime = n.data.LeadTime;
                f.Item.Warning = n.data.Warning;
                o()
            }, function(n) {
                i.alert(n.statusText)
            }).finally(function() {
                n.busy = !1;
                u.endLoad()
            })
        }

        function w(f) {
            var c, l;
            if (n.busy = !0, u.startLoad(), c = $.grep(f.Items, function(n) {
                    return n.Item.Qty && parseFloat(n.Item.Qty) > 0
                }), c.length !== f.Items.length) return i.alert("Detected incorrect items. Please make sure all qty fields are filled and correct."), !1;
            var e = $.grep(f.Items, function(n) {
                    return parseFloat(n.Item.Qty) !== n.Item.resetValue
                }),
                s = "",
                h = {};
            e.length === 1 ? (s = r.getUrl("en/WishList/UpdateItem"), h = {
                wishlistId: e[0].WishListId,
                shoppingBagItemId: e[0].Item.Id,
                qty: parseFloat(e[0].Item.Qty)
            }, t({
                method: "POST",
                url: s,
                data: h
            }).then(function(n) {
                for (var t, i = 0; i < e.length; i++) t = e[i].Item, t.Qty = t.resetValue = n.data.Qty, t.TotalAmount = n.data.TotalAmount, t.SaveAmount = n.data.SaveAmount;
                o()
            }, function(n) {
                i.alert(n.statusText)
            }).finally(function() {
                localStorage.setItem(f.Items[0].WishListId, f.Items[0].WishListId);
                n.busy = !1;
                u.endLoad()
            })) : e.length > 1 && (s = r.getUrl("en/WishList/UpdateItems"), l = $.map(e, function(n) {
                return {
                    Key: n.Item.Id,
                    Value: parseFloat(n.Item.Qty)
                }
            }), h = {
                WishListId: f.Items[0].WishListId,
                ShoppingBagItems: l
            }, t({
                method: "POST",
                url: s,
                data: h
            }).then(function(n) {
                f.Items = n.data.Items;
                for (var t = 0; t < f.Items.length; t++) f.Items[t].Item.resetValue = f.Items[t].Item.Qty, $("#update-" + f.Items[t].Item.Id)[0].style.display = "none", $("#reset-" + f.Items[t].Item.Id)[0].style.display = "none";
                o()
            }, function(n) {
                i.alert(n.statusText)
            }).finally(function() {
                localStorage.setItem(f.Items[0].WishListId, f.Items[0].WishListId);
                n.busy = !1;
                u.endLoad()
            }))
        }

        function s() {
            i.location.reload()
        }

        function b(t) {
            var i = 0;
            return (t.Qty = parseFloat(t.Qty), !t.Qty) ? 0 : n.hasHandlingUnit(t) ? Math.round(n.calculateTotalHandling(t, i)) : Math.round((t.Qty + t.Qty * (i / 100)) * 100) / 100
        }

        function k(n) {
            return n ? "../images/mkquartz/image/upload/c_fill,w_240,h_240/v1/cdn-mkquartz/assets/products/hiresimages/" + n.Sku.Image + ".jpg" : ""
        }

        function d(n) {
            u.startLoad();
            var f = r.getUrl("en/WishList/RemoveItem"),
                e = {
                    wishlistId: n.WishListId,
                    shoppingBagItemId: n.Item.Id
                };
            t.post(f, e).then(function() {
                i.location.reload()
            }, function(n) {
                i.alert(n.statusText)
            }).finally(u.endLoad)
        }

        function g(f) {
            n.busy = !0;
            u.startLoad();
            var o = r.getUrl("en/WishList/AddItemToOrder"),
                h = {
                    wishlistId: f.WishListId,
                    shoppingBagItemId: f.Item.Id
                };
            t.post(o, h).then(function() {
                n.message = "This product has been succesfully added to your shopping cart";
                e.open({
                    template: "/shopping-bag-item-moved.html",
                    className: "ngdialog-theme-plain shopping-bag-item-moved-dialog",
                    showClose: !1,
                    scope: n,
                    preCloseCallback: function() {
                        n.busy = !1;
                        s()
                    }
                })
            }, function(n) {
                i.alert(n.statusText)
            }).finally(function() {
                localStorage.setItem(f.WishListId, f.WishListId);
                n.busy = !1;
                u.endLoad()
            })
        }

        function nt(t) {
            var i = $(t.target);
            n.currentWishListName = i.text();
            n.currentWishListId = i.data("wishlist")
        }

        function tt(f) {
            u.startLoad();
            n.busy = !0;
            var o = r.getUrl("en/WishList/AddAllItemsToOrder");
            t.post(o, {
                wishlistId: f
            }).then(function() {
                n.message = "All products have been successfully added to your shopping cart";
                e.open({
                    template: "/shopping-bag-item-moved.html",
                    className: "ngdialog-theme-plain shopping-bag-item-moved-dialog",
                    scope: n,
                    preCloseCallback: function() {
                        n.busy = !1;
                        s()
                    }
                })
            }, function(n) {
                i.alert(n.statusText)
            }).finally(function() {
                n.busy = !1;
                u.endLoad()
            })
        }

        function it(f) {
            e.openConfirm({
                template: "/confirm-remove-shopping-bag.html",
                className: "ngdialog-theme-plain shopping-bag-item-moved-dialog"
            }).then(function() {
                u.startLoad();
                n.busy = !0;
                var e = r.getUrl("en/WishList/remove");
                t.post(e, {
                    wishlistId: f
                }).then(function() {
                    i.location.reload()
                }, function(t) {
                    i.alert(t.statusText);
                    u.endLoad();
                    n.busy = !1
                })
            }, function() {})
        }

        function rt(f) {
            if (!f) return "Please provide wish list name";
            var e = r.getUrl("wishlist/rename", !0),
                o = {
                    wishlistId: n.currentWishListId,
                    newWishListName: f
                };
            return u.startLoad(), t.post(e, o).then(function() {
                location.reload(!0)
            }, function(n) {
                i.alert(n.statusText)
            }).finally(u.endLoad)
        }
        n.wishlist = f;
        n.currentWishListName = "";
        n.currentWishListId = null;
        n.updateName = nt;
        n.submitName = rt;
        n.moveAllToCart = tt;
        n.deteleWishlist = it;
        n.getProductImage = k;
        n.removeProduct = d;
        n.moveToCart = g;
        n.reloadPage = s;
        n.busy = !1;
        n.updateShoppingBag = w;
        n.updateQty = p;
        n.init = c;
        n.resetRecentOpenedBagId = v;
        n.setRecentOpenedBagId = y;
        n.hasUpdates = !1;
        n.navigateToItem = a;
        n.getShoppingBagItemMenu = h;
        n.openMoreMenu = l;
        n.hasHandlingUnit = function(n) {
            return n.SellingUom && n.HandlingUom && n.SellingUom.Id !== n.HandlingUom.Id
        };
        n.calculateTotalHandling = function(n, t) {
            return Math.ceil((n.Qty + n.Qty * (t / 100)) * n.HandlingUomRate)
        };
        n.calculateTotalBaseUnit = b;
        c()
    }
    angular.module("app").controller("WishListCtrl", ["$scope", "$http", "$window", "appSettings", "spinner", "wishlist", "ngDialog", n])
}(),
function() {
    "use strict";

    function n(n, t, i, r, u, f, e, o, s) {
        function a() {
            i.location.reload()
        }

        function v(t) {
            return $.grep(n.shoppingBagItems, function(n) {
                return n.Id === t
            })[0]
        }

        function y(n, t) {
            if (n.Sku.IsHidden) return null;
            var u = r.getUrl("product/detail/" + n.UrlFriendlyName + "/?itemNo=" + n.Sku.ProductCode, !0);
            if (t) i.open(u, "_blank");
            else return u
        }

        function p(f) {
            var e, o, s, h;
            if (!f.Qty || f.Qty > 99999) return f.Warning = "Please enter a number between 1 and 99,999", !1;
            u.startLoad();
            n.busy = !0;
            e = parseFloat(f.Qty);
            f.resetValue = e;
            o = [];
            s = {
                bagItemId: f.Id,
                skuId: f.Sku.Id,
                branchNo: f.Branch ? f.Branch.LocationCode : null,
                qty: e
            };
            o.push(s);
            h = r.getUrl("ShoppingBag/UpdateBagItems", !0);
            t({
                method: "POST",
                url: h,
                data: o
            }).then(function() {
                for (var i, t = 0; t < n.shoppingBagItems.length; t++) i = n.shoppingBagItems[t], i.resetValue = i.Qty;
                a()
            }, function(t) {
                i.alert(t.statusText);
                n.busy = !1;
                u.endLoad()
            })
        }

        function w() {
            return "../images/mkquartz/image/upload/c_fill,w_240,h_240/v1/cdn-mkquartz/assets/products/hiresimages/" + n.item.Sku.Image + ".jpg"
        }

        function b() {
            f.open({
                template: "addToWishListTemplate",
                className: "ngdialog-theme-plain whish-list-add-dialog",
                controller: this,
                scope: n
            })
        }

        function c() {
            f.close()
        }

        function k() {
            if (n.newWishListName) {
                var f = s("filter")(n.wishlists, {
                    Name: n.newWishListName
                });
                if (f.length > 0) return i.alert("Wishlist with such name already exists. Please choose another name."), !1;
                u.startLoad();
                t.post(r.getUrl("WishList/AddWishList", !0), {
                    name: n.newWishListName,
                    note: n.newWishListNote
                }).then(function(t) {
                    t.data.success ? (t.data.wishlist.selected = !0, n.wishlists.push(t.data.wishlist), h()) : (n.busy = !1, u.endLoad(), i.alert(t.data.errors.Messages[0]))
                }, function(t) {
                    n.busy = !1;
                    u.endLoad();
                    i.alert(t.statusText)
                })
            } else h()
        }

        function h() {
            for (var o, s, e = [], f = 0; f < n.wishlists.length; f++) n.wishlists[f].selected && e.push(n.wishlists[f].QuoteId);
            if (e.length > 0) n.busy = !0, o = r.getUrl("WishList/AddItemInMultipleWishlists", !0), s = {
                itemId: n.item.Sku.Id,
                qty: n.item.Qty,
                shoppingBagItemId: n.item.Id,
                wishListsIds: e,
                branchNo: n.item.Branch ? n.item.Branch.LocationCode : null
            }, t.post(o, s).then(function() {
                c();
                i.location.reload()
            }, function(t) {
                n.busy = !1;
                u.endLoad();
                i.alert(t.statusText);
                console.log("Error during adding to the wish list")
            });
            else {
                if (n.wishlists.length > 0) {
                    i.alert("Choose an existing Shopping Bag or save to a New Shopping Bag.");
                    return
                }
                if (!n.newWishListName) {
                    i.alert("Enter name for saving to a New Shopping Bag.");
                    return
                }
            }
        }

        function d(f, e, o) {
            u.startLoad();
            n.busy = !0;
            var s = r.getUrl("ShoppingBag/Remove", !0),
                h = {
                    shoppingBagItemId: f,
                    branchNo: o,
                    skuId: e
                };
            t.post(s, h).then(function() {
                i.location.reload()
            }, function(t) {
                n.busy = !1;
                i.alert(t.statusText);
                console.log("Error during removing shopping bag item")
            }).finally(u.endLoad)
        }

        function l(n) {
            return n.parentElement.parentElement.querySelector(".js-dropdown")
        }

        function g(n) {
            var i = l(n.target),
                t = $(n.target).position(),
                r = $(window).width() > 1300 ? t.left : t.left - 80;
            $(i).css("top", t.top).css("left", r).css("display", "inline-block").css("position", "absolute").css("width", "120px")
        }

        function nt(f, e) {
            u.startLoad();
            n.busy = !0;
            t.post(r.getUrl("ShoppingBag/ChangePickupStoreNumber/", !0), {
                id: f.Id,
                to: e.BranchNo
            }).then(function(n) {
                console.log(n)
            }).finally(function() {
                i.location.reload()
            })
        }
        n.addToWishList = h;
        n.addToWishListDialog = b;
        n.closeDialog = c;
        n.wishlists = e || [];
        n.saveWishList = k;
        n.getProductImage = w;
        n.selectedWishlists = [];
        n.updateQty = p;
        n.shoppingBagItems = o;
        n.navigateToItem = y;
        n.removeBagItem = d;
        n.init = v;
        n.getShoppingBagItemMenu = l;
        n.openMoreMenu = g;
        n.changeFulfillmentType = nt;
        n.model = {
            selectedWishList: null,
            newWishListName: null
        }
    }
    angular.module("app").controller("WishListDialogCtrl", n);
    n.$inject = ["$scope", "$http", "$window", "appSettings", "spinner", "ngDialog", "wishlists", "shoppingBagItems", "$filter"]
}()