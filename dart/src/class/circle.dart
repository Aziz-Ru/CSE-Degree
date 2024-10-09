abstract class Shape {
  double area();
}

class Circle implements Shape {
  double _radius = 0;
  double _pi = 3.14;
  Circle(this._radius);

  @override
  double area() => _pi * _radius * _radius;
}

class Square implements Shape {
  double _side = 0;
  Square(this._side);

  @override
  double area() => _side * _side;
}
