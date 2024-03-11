function blurImage(link) {
    return new Promise((resolve, reject) => {
        var img = new Image();
        img.crossOrigin = "Anonymous"; // To avoid CORS issues
        img.src = link[0];

        img.onload = function() {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.filter = 'blur(5px)'; // Adjust blur intensity as needed
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            resolve(canvas.toDataURL());
        };

        img.onerror = function() {
            reject(new Error('Failed to load image'));
        };
    });
}
LenoirExtensions.registerModifier("blur", blurImage)