let Shapes;
(function(Shapes) {
    let Rectangle = (function() {
        function Rectangle(height, width) {
            this.height = height;
            this.width = width;
        }
        return Rectangle;
    }());
    Shapes.Rectangle = Rectangle;
    let Square = (function() {
        function Square(side) {
            this.side = side;
        }
        return Square;
    }());
    Shapes.Square = Square;
})(Shapes || (Shapes = {}));