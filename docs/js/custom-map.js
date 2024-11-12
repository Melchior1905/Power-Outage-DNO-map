document.addEventListener("DOMContentLoaded", function() {
    map.eachLayer(function(layer) {
        if (layer.feature) {
            // Bind popup with clickable link for each feature
            const popupContent = `<a href="${layer.feature.properties.URL}" target="_blank">${layer.feature.properties.CustomLabel}</a>`;
            layer.bindPopup(popupContent);

            // Add click event to open the URL directly
            layer.on('click', function() {
                window.open(layer.feature.properties.URL, '_blank');
            });
        }
    });
});
