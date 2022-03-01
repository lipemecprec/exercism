// @ts-check

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (width, height) {
  this.width = width;
  this.height = height;
}

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
}

export function ProgramWindow() {
  this.screenSize = new Size(800, 600);
  this.size = new Size();
  this.position = new Position();
}

function checkNewSize(programWindow, newSize) {
  var minWidth = 1;
  var maxWidth = programWindow.screenSize.width - programWindow.position.x;
  var minHeight = 1;
  var maxHeight = programWindow.screenSize.height - programWindow.position.y;
  if (newSize.width < minWidth) newSize.width = minWidth;
  if (newSize.width > maxWidth) newSize.width = maxWidth;
  if (newSize.height < minHeight) newSize.height = minHeight;
  if (newSize.height > maxHeight) newSize.height = maxHeight;
  return newSize;
}

function checkNewPosition(programWindow, newPosition) {
  var minX = 0;
  var maxX = programWindow.screenSize.width - programWindow.size.width;
  var minY = 0;
  var maxY = programWindow.screenSize.height - programWindow.size.height;
  if (newPosition.x < minX) newPosition.x = minX;
  if (newPosition.x > maxX) newPosition.x = maxX;
  if (newPosition.y < minY) newPosition.y = minY;
  if (newPosition.y > maxY) newPosition.y = maxY;
  return newPosition;
}

ProgramWindow.prototype.resize = function (newSize) {
  newSize = checkNewSize(this, newSize);
  this.size = newSize;
}

ProgramWindow.prototype.move = function (newPosition) {
  newPosition = checkNewPosition(this, newPosition);
  this.position = newPosition;
}

export function changeWindow (programWindow) {
  const newSize = new Size(400, 300);
  programWindow.resize(newSize);
  const newPosition = new Position(100, 150);
  programWindow.move(newPosition);
  return programWindow;
}