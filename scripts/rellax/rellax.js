class Parallax {
    constructor(el) {
        this.el = el;
        this.rellax = this._initRellax();
    }

    _initRellax() {
        return new Rellax(this.el, {
            round: true,
            center: true
        });
    }
}