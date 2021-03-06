
class CanvasUtil {
    public static reziseImageCanvas(canvas: HTMLCanvasElement, img: HTMLImageElement, width: number, height: number) {
        var ctx = canvas.getContext("2d");
        var oc = document.createElement('canvas'),
            octx = oc.getContext('2d');

        oc.width = width;
        oc.height = height;
        ctx.clearRect(0, 0 , width, height);
        octx.drawImage(img, 0, 0, oc.width, oc.height);

        octx.drawImage(oc, 0, 0, width, height);

        ctx.drawImage(oc, 0, 0, width, height, 0, 0, canvas.width, canvas.height);
    }

    public static applyImageDataToCanvas(imageData: ImageData, canvas: HTMLCanvasElement, oldWidth: number, oldHeight: number) {
        var oc = document.createElement('canvas'),
            octx = oc.getContext('2d');
        var img = new Image();

        oc.width = oldWidth;
        oc.height = oldHeight;
        octx.putImageData(imageData, 0, 0);
        img.src = oc.toDataURL();

        CanvasUtil.reziseImageCanvas(canvas, img, canvas.width, canvas.height)
    }

    public static createCustomCanvas(width: number, height: number, img?: HTMLImageElement, id?: string, className?: string): HTMLCanvasElement {
        var canvas = <HTMLCanvasElement>document.createElement('canvas');
        canvas.id = id;
        canvas.className = className;
        canvas.width = width;
        canvas.height = height;

        if (img !== undefined) {
            CanvasUtil.reziseImageCanvas(canvas, img, canvas.width, canvas.height);
        }

        return canvas;
    }
}