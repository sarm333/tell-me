var MerchantHandler = function(url, el) {

    this.getMerchantExtractor = function() {
        if(url.indexOf("riverisland") != -1) {
            return new RiverIslandExtractor(el);
        } else if(url.indexOf("thaidanceacademy") != -1) {
            return new TestSiteExtractor(el);
        }
    }
}