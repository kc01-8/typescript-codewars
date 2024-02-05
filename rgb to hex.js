function rgb(r, g, b) {
    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));
  
    var result = [r, g, b].map(function (x) {
        let hex = Math.round(x).toString(16);
        return (hex.length === 1) ? "0" + hex : hex;
    });

    while (result.join("").length < 6) {
        result.unshift("0");
    }

    return result.join("").toUpperCase();
}
