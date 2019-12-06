export function formatPoint(y, x) {
    let _y = `${y}`.split('.');
    let _x = `${x}`.split('.');
    if(_y.length > 1) {
        _y = `${_y[0]}°${_y[1]}'`
    } else {
        _y = `${_y[0]}°`
    }
    if(_x.length > 1) {
        _x = `${_x[0]}°${_x[1]}'`
    } else {
        _x = `${_x[0]}°`
    }
    return [_y, _x]
}
