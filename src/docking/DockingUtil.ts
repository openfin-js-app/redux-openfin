import {
    IRectangle,
    SnapDirection
} from './DockingType';


export function getAppId(fin) {
    if (fin){
        return fin.Application.getCurrentSync().uuid;
    }else{
        return null;
    }
}

function handleMonitorInfo(openfinMonitorInfo):IRectangle[] {
    const allMonitors = [ openfinMonitorInfo.primaryMonitor, ...openfinMonitorInfo.nonPrimaryMonitors ];
    return allMonitors.map((monitorInfo)=>{
        const { left, right, top, bottom } = monitorInfo.availableRect;
        return {
            x: left,
            y: top,
            width: right - left,
            height: bottom - top
        };
    });
}

export async function requestMonitorInfo(fin):Promise<IRectangle[]> {
    const monitorData = await fin.System.getMonitorInfo();
    return handleMonitorInfo(monitorData);
}

export function parsePositiveInt(option:number, defaultOption:number):number {
    return option >= 0? option : defaultOption;
}

export function parseOpacity(opacityOption:number, defaultOption:number):number {
    return (opacityOption >= 0
        && opacityOption <= 1)?opacityOption:defaultOption;
}

export function intersect(rectangle:IRectangle, targetRectangle:IRectangle) {
    // check right edge position of first window is to the left of left edge of second window, and so on ..
    // comparison is <= as (xpos + width) is one pixel to the right of the window
    return !(
        rectangle.x + rectangle.width <= targetRectangle.x ||
        targetRectangle.x + targetRectangle.width <= rectangle.x ||
        rectangle.y + rectangle.height <= targetRectangle.y ||
        targetRectangle.y + targetRectangle.height <= rectangle.y
    );
}

export function isInView(rectangle:IRectangle, monitors:IRectangle[]) {
    return monitors.some((monitor:IRectangle) => intersect(rectangle, monitor) && rectangle.y >= monitor.y);
}

export function isGroupInView(rectangles:IRectangle[], monitors:IRectangle[]) {
    return rectangles.some((rectangle:IRectangle) => isInView(rectangle, monitors));
}

function isPointInVerticalZone(startY:number, endY:number, y:number, height:number) {
    const bottomEdgePosition = y + height;
    return y >= startY && y <= endY || bottomEdgePosition >= startY && bottomEdgePosition <= endY;
}

function isPointInHorizontalZone(startX:number, endX:number, x:number, width:number) {
    const rightEdgePosition = x + width;
    return x >= startX && x <= endX || rightEdgePosition >= startX && rightEdgePosition <= endX;
}

export function getSnapDirection(currentWindow:IRectangle&{currentRange:number}, window:IRectangle&{currentRange:number}) {
    const isInVerticalZone = isPointInVerticalZone(window.y, window.y + window.height, currentWindow.y, currentWindow.height);

    if (isInVerticalZone && Math.abs(currentWindow.x - window.x - window.width) <  currentWindow.currentRange) {
        return SnapDirection.RIGHT;
    }

    if (isInVerticalZone && Math.abs(window.x - currentWindow.x - currentWindow.width) < currentWindow.currentRange) {
        return SnapDirection.LEFT;
    }

    const isInHorizontalZone = isPointInHorizontalZone(window.x, window.x + window.width, currentWindow.x, currentWindow.width);

    if (isInHorizontalZone && Math.abs(currentWindow.y - window.y - window.height) <  currentWindow.currentRange) {
        return SnapDirection.BOTTOM;
    }

    if (isInHorizontalZone && Math.abs(currentWindow.y + currentWindow.height - window.y ) < currentWindow.currentRange) {
        return SnapDirection.TOP;
    }

    return null;
}

export function reverseSnapDirection(direction:SnapDirection) {
    switch (direction) {
        case SnapDirection.RIGHT:
            return SnapDirection.LEFT;
        case SnapDirection.LEFT:
            return SnapDirection.RIGHT;
        case SnapDirection.TOP:
            return SnapDirection.BOTTOM;
        case SnapDirection.BOTTOM:
            return SnapDirection.TOP;
        default:
            return null;
    }
}

function getVerticalEdgeSnapping(window:IRectangle, currentWindow:IRectangle, range:number) {
    if (Math.abs(currentWindow.y - window.y ) <= range) {
        return window.y;
    }
    if (Math.abs(currentWindow.y + currentWindow.height - window.y - window.height) <= range) {
        return window.y + window.height - currentWindow.height;
    }
    return null;
}

function getHorizontalEdgeSnapping(window:IRectangle, currentWindow:IRectangle, range:number) {
    if (Math.abs(currentWindow.x - window.x) <= range) {
        return window.x;
    }
    if (Math.abs(currentWindow.x + currentWindow.width - window.x - window.width)<= range) {
        return window.x + window.width - currentWindow.width;
    }
    return null;
}

export function getSnappedCoordinates(
    newBounds:IRectangle, currentWindow:IRectangle, window:IRectangle,
    direction:SnapDirection, range:number, spacing:number
) {
    switch (direction) {
        case SnapDirection.RIGHT:
            return {
                x: window.x + window.width + spacing,
                y: getVerticalEdgeSnapping(window, newBounds, range)
            };
        case SnapDirection.LEFT:
            return {
                x: window.x - currentWindow.width - spacing,
                y: getVerticalEdgeSnapping(window, newBounds, range)
            };
        case SnapDirection.TOP:
            return {
                x: getHorizontalEdgeSnapping(window, newBounds, range),
                y: window.y - currentWindow.height - spacing
            };
        case SnapDirection.BOTTOM:
            return {
                x: getHorizontalEdgeSnapping(window, newBounds, range),
                y: window.y + window.height + spacing
            };
        default:
            return null;
    }
}