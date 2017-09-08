webpackJsonp([1,4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mock_elements_mock_elements__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ElementService = ElementService_1 = (function () {
    function ElementService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.displayNoElements = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.elementToEditClick = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.cancelEdit = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    ElementService.getElements = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_2__mock_elements_mock_elements__["b" /* mainElements */]);
    };
    ElementService.getRangeData = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_2__mock_elements_mock_elements__["c" /* rangeData */]);
    };
    ElementService.prototype.getClickedElement = function () {
        return this.subject.asObservable();
    };
    ElementService.prototype.getElementToEditClick = function () {
        return this.elementToEditClick.asObservable();
    };
    ElementService.prototype.getElement = function (id) {
        return ElementService_1.getElements()
            .then(function (elements) { return elements.find(function (element) { return element.id === id; }); });
    };
    ElementService.prototype.cancelEditing = function () {
        this.cancelEdit.next();
    };
    ElementService.prototype.cancelEditingSubscription = function () {
        return this.cancelEdit.asObservable();
    };
    ElementService.prototype.elementClicked = function (element) {
        this.subject.next(element);
    };
    ElementService.prototype.elementToEditClicked = function (show) {
        this.elementToEditClick.next(show);
    };
    ElementService.prototype.displayNoMainEl = function (data) {
        this.displayNoElements.next(data);
    };
    ElementService.prototype.displayNoMainElSubscription = function () {
        return this.displayNoElements.asObservable();
    };
    return ElementService;
}());
ElementService = ElementService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ElementService);

var ElementService_1;
//# sourceMappingURL=element.service.js.map

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__text_input_beauty_data_selection_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllElementsPositionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClosestElement = (function () {
    function ClosestElement() {
    }
    return ClosestElement;
}());
var AllElementsPositionService = AllElementsPositionService_1 = (function () {
    function AllElementsPositionService(selectionService) {
        this.selectionService = selectionService;
        this.elementsPosition = [];
        this.selectedElements = [];
        this.inputFromKeyboardSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    AllElementsPositionService.prototype.getInputFromKeyboard = function () {
        return this.inputFromKeyboard;
    };
    AllElementsPositionService.prototype.getMouseStart = function () {
        return this.mouseStartPosition;
    };
    AllElementsPositionService.prototype.getElementPosition = function (element) {
        for (var i = 0; i < this.elementsPosition.length; i++) {
            if (element === this.elementsPosition[i].element) {
                return this.elementsPosition[i].position;
            }
        }
        return null;
    };
    AllElementsPositionService.prototype.getElementPositionByKeyboardInput = function (inputFromKeyboard) {
        for (var i = 0; i < this.elementsPosition.length; i++) {
            if (inputFromKeyboard.parent[inputFromKeyboard.index] === this.elementsPosition[i].element) {
                return this.elementsPosition[i].position;
            }
        }
        return null;
    };
    AllElementsPositionService.prototype.setInputFromKeyboard = function (parent, direction, index) {
        this.inputFromKeyboard = { parent: parent, direction: direction, index: index };
    };
    AllElementsPositionService.prototype.setInputFromKeyboardEverywhere = function (parent, direction, index) {
        this.inputFromKeyboard = { parent: parent, direction: direction, index: index };
        this.inputFromKeyboardSubject.next(this.inputFromKeyboard);
    };
    AllElementsPositionService.prototype.setInputFromKeyboardIndex = function (index) {
        this.inputFromKeyboard.index = index;
    };
    AllElementsPositionService.prototype.setMouseStart = function (mouseStart) {
        this.mouseStartPosition = mouseStart;
    };
    AllElementsPositionService.prototype.setMouseCurrPosition = function (mouseCurrPos, viewData) {
        this.clearSelectedElements();
        this.mouseCurrPosition = mouseCurrPos;
        var mouseStart = this.getMouseStart();
        if (mouseStart && mouseCurrPos) {
            this.fillSelectedElements(mouseStart, mouseCurrPos, viewData);
        }
    };
    AllElementsPositionService.prototype.findClosestElementToElementPos = function (positionX, positionY) {
        var currElementString = AllElementsPositionService_1.getCurrElementString(positionY, this.elementsPosition);
        return AllElementsPositionService_1.getClosestElementByX(positionX, currElementString);
    };
    AllElementsPositionService.prototype.findClosestElementUnderCaret = function (caretPosition) {
        var currElementString = AllElementsPositionService_1.getElementStringNearCaret(caretPosition, this.elementsPosition, 'under');
        if (currElementString === null) {
            return null;
        }
        return AllElementsPositionService_1.getClosestElementByX(caretPosition.left, currElementString);
    };
    AllElementsPositionService.prototype.findClosestElementAboveCaret = function (caretPosition) {
        var currElementString = AllElementsPositionService_1.getElementStringNearCaret(caretPosition, this.elementsPosition, 'above');
        if (currElementString === null) {
            return null;
        }
        return AllElementsPositionService_1.getClosestElementByX(caretPosition.left, currElementString);
    };
    AllElementsPositionService.prototype.findDirectParentOfElement = function (globalArray, element) {
        if (globalArray.indexOf(element) !== -1) {
            return globalArray;
        }
        if (AllElementsPositionService_1.checkIfArrayOfStrings(globalArray)) {
            return [];
        }
        for (var _i = 0, globalArray_1 = globalArray; _i < globalArray_1.length; _i++) {
            var possibleParent = globalArray_1[_i];
            if (typeof possibleParent === 'string') {
                continue;
            }
            var tmp = this.findDirectParentOfElement(possibleParent, element);
            if (tmp.length > 0) {
                return tmp;
            }
        }
        return [];
    };
    AllElementsPositionService.prototype.addElementToElementsPosition = function (element) {
        for (var _i = 0, _a = this.elementsPosition; _i < _a.length; _i++) {
            var elementPosition = _a[_i];
            if (elementPosition.element === element.element) {
                this.elementsPosition.splice(this.elementsPosition.indexOf(elementPosition), 1);
            }
        }
        this.elementsPosition.push(element);
    };
    AllElementsPositionService.prototype.addElementToSelectedElements = function (element) {
        this.selectedElements.push(element);
    };
    AllElementsPositionService.prototype.smartPushElementArrayToSelectedElements = function (elementArray) {
        var elementIndex;
        for (var i = 0; i < elementArray.length; i++) {
            elementIndex = this.selectedElements.indexOf(elementArray[i]);
            if (elementIndex === -1) {
                this.selectedElements.push(elementArray[i]);
            }
            else {
                this.selectedElements.splice(elementIndex, 1);
            }
        }
        if (this.selectedElements.length > 0) {
            this.selectionService.setStart(this.selectedElements[0]);
            this.selectionService.setEnd(this.selectedElements[this.selectedElements.length - 1]);
        }
        else {
            this.selectionService.resetAllVariables();
            this.selectionService.pushHighlightSelection([]);
        }
    };
    AllElementsPositionService.prototype.smartUnShiftElementArrayToSelectedElements = function (elementArray) {
        var elementIndex;
        for (var i = 0; i < elementArray.length; i++) {
            elementIndex = this.selectedElements.indexOf(elementArray[i]);
            if (elementIndex === -1) {
                this.selectedElements.unshift(elementArray[i]);
            }
            else {
                this.selectedElements.splice(elementIndex, 1);
            }
        }
        if (this.selectedElements.length > 0) {
            this.selectionService.setStart(this.selectedElements[0]);
            this.selectionService.setEnd(this.selectedElements[this.selectedElements.length - 1]);
        }
        else {
            this.selectionService.resetAllVariables();
            this.selectionService.pushHighlightSelection([]);
        }
    };
    AllElementsPositionService.prototype.removeSelection = function () {
        this.mouseStartPosition = null;
        this.mouseCurrPosition = null;
        this.selectedElements = [];
        this.selectionService.resetAllVariables();
        this.selectionService.pushHighlightSelection([]);
    };
    AllElementsPositionService.prototype.deleteElementFromElementsPosition = function (element) {
        var index = this.elementsPosition.indexOf(element);
        this.elementsPosition.splice(index, 1);
    };
    AllElementsPositionService.prototype.clearSelectedElements = function () {
        this.selectedElements.length = 0;
    };
    AllElementsPositionService.prototype.fillSelectedElements = function (start, end, viewData) {
        var allElArray = this.elementsPosition;
        var allElArrLength = allElArray.length;
        for (var i = 0; i < allElArrLength; i++) {
            var check = AllElementsPositionService_1.checkElementCoordinateInMouseSelection(allElArray[i].position, start, end);
            if (check && this.checkIfAllChildrenAddedToSelected(allElArray[i].element, 0)) {
                this.addElementToSelectedElements(allElArray[i].element);
            }
        }
        if (viewData) {
            this.selectionService.setViewData(viewData);
        }
        var elements = this.selectedElements;
        if (elements.length > 0) {
            this.selectionService.setStart(elements[0]);
            this.selectionService.setEnd(elements[elements.length - 1]);
        }
        else {
            this.selectionService.resetAllVariables();
            this.selectionService.pushHighlightSelection([]);
        }
    };
    AllElementsPositionService.prototype.checkIfAllChildrenAddedToSelected = function (element, iteration) {
        if (AllElementsPositionService_1.checkIfArrayOfStrings(element) && iteration === 0) {
            return true;
        }
        for (var _i = 0, element_1 = element; _i < element_1.length; _i++) {
            var child = element_1[_i];
            if (typeof child === 'string') {
                continue;
            }
            if (this.selectedElements.indexOf(child) !== -1) {
                continue;
            }
            if (typeof child[0] === 'string' && this.selectedElements.indexOf(child) === -1) {
                return false;
            }
            if (typeof child[0] !== 'string' && !this.checkIfAllChildrenAddedToSelected(child, ++iteration)) {
                return false;
            }
        }
        return true;
    };
    AllElementsPositionService.getCurrElementString = function (positionY, elements) {
        var minDistanceY = Number.MAX_SAFE_INTEGER;
        var TOLERANCE_PX = 5;
        var currElementString = [];
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var element = elements_1[_i];
            var elPosY = element.position.top + element.position.height / 2;
            var distanceY = Math.abs(elPosY - positionY);
            if (minDistanceY > distanceY + TOLERANCE_PX) {
                minDistanceY = distanceY;
                currElementString = [];
            }
            else if (minDistanceY + TOLERANCE_PX < distanceY) {
                break;
            }
            currElementString.push(element);
        }
        return currElementString;
    };
    AllElementsPositionService.getElementStringNearCaret = function (caretPosition, elements, direction) {
        var minDistanceY = Number.MAX_SAFE_INTEGER;
        var caretCenterY = caretPosition.top + caretPosition.height / 2;
        var TOLERANCE_PX = 5;
        var currElementString = [];
        for (var _i = 0, elements_2 = elements; _i < elements_2.length; _i++) {
            var element = elements_2[_i];
            var elPosY = element.position.top + element.position.height / 2;
            var distanceY = Math.abs(elPosY - caretCenterY);
            if (minDistanceY > distanceY + TOLERANCE_PX &&
                ((direction === 'above' && element.position.top + element.position.height < caretCenterY) ||
                    (direction === 'under' && element.position.top > caretCenterY))) {
                minDistanceY = distanceY;
            }
        }
        for (var _a = 0, elements_3 = elements; _a < elements_3.length; _a++) {
            var element = elements_3[_a];
            var elPosY = element.position.top + element.position.height / 2;
            var distanceY = Math.abs(elPosY - caretCenterY);
            if (minDistanceY + TOLERANCE_PX > distanceY &&
                ((direction === 'above' && element.position.top + element.position.height < caretCenterY) ||
                    (direction === 'under' && element.position.top > caretCenterY))) {
                currElementString.push(element);
            }
        }
        if (minDistanceY === Number.MAX_SAFE_INTEGER) {
            return null;
        }
        return currElementString;
    };
    AllElementsPositionService.getClosestElementByX = function (positionX, elements) {
        var closestElement = new ClosestElement();
        var closestElPosX = Number.MAX_SAFE_INTEGER;
        for (var _i = 0, elements_4 = elements; _i < elements_4.length; _i++) {
            var element = elements_4[_i];
            var elPosRight = element.position.left + element.position.width;
            var distanceFromLeft = Math.abs(element.position.left - positionX);
            var distanceFromRight = Math.abs(elPosRight - positionX);
            var minDistanceX = distanceFromLeft > distanceFromRight ? distanceFromRight : distanceFromLeft;
            if (minDistanceX < Math.abs(closestElPosX)) {
                closestElPosX = minDistanceX;
                closestElement.element = element.element;
                closestElement.direction = element.position.left + 0.7 * element.position.width > positionX ? 'left' : 'right';
            }
        }
        return closestElement;
    };
    AllElementsPositionService.checkElementCoordinateInMouseSelection = function (position, start, end) {
        return ((AllElementsPositionService_1.checkMouseFromBottomToTop(position, start, end) ||
            AllElementsPositionService_1.checkMouseFromTopToBottom(position, start, end)) && (AllElementsPositionService_1.checkMouseFromLeftToRight(position, start, end) ||
            AllElementsPositionService_1.checkMouseFromRightToLeft(position, start, end)));
    };
    AllElementsPositionService.checkMouseFromTopToBottom = function (position, start, end) {
        return (position.top + position.height >= start.top) && (position.top <= end.top);
    };
    AllElementsPositionService.checkMouseFromBottomToTop = function (position, start, end) {
        return (position.top <= start.top) && (position.top + position.height >= end.top);
    };
    AllElementsPositionService.checkMouseFromLeftToRight = function (position, start, end) {
        return (position.left + position.width - 4 <= end.left) && (position.left + 4 >= start.left);
    };
    AllElementsPositionService.checkMouseFromRightToLeft = function (position, start, end) {
        return (position.left >= end.left) && (position.left + position.width - 4 <= start.left);
    };
    AllElementsPositionService.checkIfArrayOfStrings = function (array) {
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var datum = array_1[_i];
            if (typeof datum !== 'string') {
                return false;
            }
        }
        return true;
    };
    return AllElementsPositionService;
}());
AllElementsPositionService = AllElementsPositionService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__text_input_beauty_data_selection_service__["a" /* SelectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__text_input_beauty_data_selection_service__["a" /* SelectionService */]) === "function" && _a || Object])
], AllElementsPositionService);

var AllElementsPositionService_1, _a;
//# sourceMappingURL=all-elements-position.service.js.map

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataArrayService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataArrayService = (function () {
    function DataArrayService() {
        this.data = [];
        this.dataSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.informTextInpComp = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    DataArrayService.prototype.setDataWithoutSubject = function (data) {
        this.data = data;
    };
    DataArrayService.prototype.setData = function (data) {
        this.data = data;
        this.dataSubject.next(data);
    };
    DataArrayService.prototype.subscribeOnDataChange = function () {
        return this.dataSubject.asObservable();
    };
    DataArrayService.prototype.getData = function () {
        return this.data;
    };
    DataArrayService.prototype.informTextInpCompToRecompileDataFromViewData = function (recompile) {
        this.informTextInpComp.next(recompile);
    };
    DataArrayService.prototype.subscribeForRecompileDataFromEdit = function () {
        return this.informTextInpComp.asObservable();
    };
    return DataArrayService;
}());
DataArrayService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], DataArrayService);

//# sourceMappingURL=dataArray.service.js.map

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrayService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ArrayService = ArrayService_1 = (function () {
    function ArrayService() {
    }
    ArrayService.removeNestedElementsFromArray = function (arr) {
        for (var i = arr.length - 1; i > 0; i--) {
            for (var j = i - 1; j >= 0; j--) {
                if (arr[j].indexOf(arr[i]) !== -1) {
                    arr.splice(i, 1);
                    break;
                }
            }
        }
        return arr;
    };
    ArrayService.createFullCopyOfArray = function (array) {
        var newArray = [];
        var length = array.length;
        for (var i = 0; i < length; i++) {
            if (typeof array[i] === 'object') {
                newArray.push(ArrayService_1.createFullCopyOfArray(array[i]));
            }
            else {
                newArray.push(array[i]);
            }
        }
        return newArray;
    };
    ArrayService.getPathToElement = function (array, element) {
        var path = [];
        var index = array.indexOf(element);
        if (index !== -1) {
            path.push(index);
        }
        else {
            for (var i = 0; i < array.length; i++) {
                if (array[i] instanceof Array) {
                    path = ArrayService_1.getPathToElement(array[i], element);
                }
                if (path.length > 0) {
                    path.push(i);
                    break;
                }
            }
        }
        return path;
    };
    ArrayService.getElementDepthInData = function (data, elementToFind) {
        var elementDepth = null;
        for (var i = 0; i < data.length && !elementDepth; i++) {
            if (data[i] === elementToFind) {
                return 1;
            }
            if (typeof (data[i]) === "object" && data[i][0] === "group") {
                elementDepth = ArrayService_1.getElementDepthInData(data[i], elementToFind);
            }
        }
        return elementDepth ? elementDepth + 1 : null;
    };
    ArrayService.arrayUnique = function (array) {
        var a = array.concat();
        for (var i = 0; i < a.length; ++i) {
            for (var j = i + 1; j < a.length; ++j) {
                if (a[i] === a[j])
                    a.splice(j--, 1);
            }
        }
        return a;
    };
    ArrayService.checkIfStringArray = function (array) {
        for (var i = 0; i < array.length; i++) {
            if (typeof array[i] !== 'string') {
                return false;
            }
        }
        return true;
    };
    ArrayService.putOneArrayInAnother = function (index, outerArr, innerArr) {
        var bigArray = outerArr.slice();
        var bigArrayLength = bigArray.length;
        for (var j = bigArrayLength - 1; j >= index; j--) {
            bigArray[j + innerArr.length] = bigArray[j];
        }
        for (var j = 0; j < innerArr.length; j++) {
            bigArray[j + index] = innerArr[j];
        }
        return bigArray;
    };
    return ArrayService;
}());
ArrayService = ArrayService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], ArrayService);

var ArrayService_1;
//# sourceMappingURL=array.service.js.map

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__range_data_categories__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range_data_top_left__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range_data_top_right__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__range_data_ascii__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_elements_default__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_elements_range__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_elements_group__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_elements_lookaround__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_elements_anchors__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__main_elements_or__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return rangeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mainElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return specialSymbols; });
// importing parts of range-data




// importing parts of main-elements






var rangeData = {
    categories: __WEBPACK_IMPORTED_MODULE_0__range_data_categories__["a" /* categories */],
    topLeft: __WEBPACK_IMPORTED_MODULE_1__range_data_top_left__["a" /* topLeft */],
    topRight: __WEBPACK_IMPORTED_MODULE_2__range_data_top_right__["a" /* topRight */],
    ASCII: __WEBPACK_IMPORTED_MODULE_3__range_data_ascii__["a" /* ascii */]
};
var mainElements = [
    __WEBPACK_IMPORTED_MODULE_4__main_elements_default__["a" /* defaultEl */],
    __WEBPACK_IMPORTED_MODULE_5__main_elements_range__["a" /* range */],
    __WEBPACK_IMPORTED_MODULE_6__main_elements_group__["a" /* group */],
    __WEBPACK_IMPORTED_MODULE_7__main_elements_lookaround__["a" /* lookaround */],
    __WEBPACK_IMPORTED_MODULE_8__main_elements_anchors__["a" /* anchors */],
    __WEBPACK_IMPORTED_MODULE_9__main_elements_or__["a" /* orEl */]
];
var specialSymbols = [
    '\\', '+', '{', '}', ',', '*', '?', '.', '|', '(', ')', '[', ']', '-', '^', '$', ':', '&', '=', '<', '!', '#'
];
//# sourceMappingURL=mock-elements.js.map

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_elements_mock_elements__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_array_service__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeautyDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeautyDataService = BeautyDataService_1 = (function () {
    function BeautyDataService() {
        this.lookaround = __WEBPACK_IMPORTED_MODULE_1__mock_elements_mock_elements__["b" /* mainElements */][3].data;
        this.anchors = __WEBPACK_IMPORTED_MODULE_1__mock_elements_mock_elements__["b" /* mainElements */][4].data;
        this.or = __WEBPACK_IMPORTED_MODULE_1__mock_elements_mock_elements__["b" /* mainElements */][5].data;
        this.presets = __WEBPACK_IMPORTED_MODULE_1__mock_elements_mock_elements__["c" /* rangeData */].topLeft;
    }
    BeautyDataService.prototype.compileDataFromViewData = function (viewData) {
        for (var i = 0; i < viewData.length; i++) {
            viewData = BeautyDataService_1.levelUpQuantifier(viewData, i);
            if (typeof viewData[i] === 'string') {
                viewData = this.convertViewDataStringToData(viewData, i);
                continue;
            }
            var tmp = this.compileDataFromViewData(viewData[i]).slice();
            viewData.splice(i, 1);
            viewData = __WEBPACK_IMPORTED_MODULE_2__services_array_service__["a" /* ArrayService */].putOneArrayInAnother(i, viewData, tmp);
        }
        if (__WEBPACK_IMPORTED_MODULE_2__services_array_service__["a" /* ArrayService */].checkIfStringArray(viewData)) {
            viewData = this.transformAnchorToData(viewData);
            viewData = this.transformAnchorOppositeToData(viewData);
            viewData = BeautyDataService_1.transformGroupToData(viewData);
            viewData = BeautyDataService_1.transformLookaroundToData(viewData);
            viewData = BeautyDataService_1.transformRangeToData(viewData);
            viewData = this.transformOrToData(viewData);
            viewData = BeautyDataService_1.transformQuantifierToData(viewData);
        }
        return viewData;
    };
    BeautyDataService.prototype.compileViewDataFromData = function (data) {
        for (var i = 0; i < data.length; i++) {
            switch (data[i]) {
                case '(': {
                    if (data[0] === 'range')
                        break;
                    this.transformComplexObjectToViewData(data, i, '(', ')', 'group');
                    break;
                }
                case '[': {
                    this.transformComplexObjectToViewData(data, i, '[', ']', 'range');
                    break;
                }
                case '{': {
                    if (data[0] === 'range')
                        break;
                    this.transformQuantifierToViewData(data, i, '{', '}', 'quantifier');
                    i--;
                    break;
                }
                case '?': {
                    if (data[0] === 'range')
                        break;
                    data[i - 1].push(['quantifier', '0', '-', '1']);
                    data.splice(i, 1);
                    i--;
                    break;
                }
                case '*': {
                    if (data[0] === 'range')
                        break;
                    data[i - 1].push(['quantifier', '0', '-', '∞']);
                    data.splice(i, 1);
                    i--;
                    break;
                }
                case '+': {
                    if (data[0] === 'range')
                        break;
                    data[i - 1].push(['quantifier', '1', '-', '∞']);
                    data.splice(i, 1);
                    i--;
                    break;
                }
                case this.or.regExp: {
                    if (data[0] === 'range')
                        break;
                    BeautyDataService_1.transformSimpleObjectToViewData(data, i, this.or.symbol, 'or');
                    break;
                }
            }
            if (data[0] === 'range') {
                continue;
            }
            var isAnchor = false;
            for (var j = 0; j < this.anchors.length; j++) {
                if (data[i] === this.anchors[j].regExp) {
                    BeautyDataService_1.transformSimpleObjectToViewData(data, i, this.anchors[j].symbol, this.anchors[j].className);
                    isAnchor = true;
                    break;
                }
            }
            if (isAnchor) {
                continue;
            }
            if (typeof data[i] === 'string' &&
                data[0] !== 'range' &&
                (data[i].length === 1 || (data[i].length === 2 && data[i][0] === '\\')) &&
                data[i - 1] !== 'quantifier') {
                data.splice(i, 1, [data[i]]);
            }
        }
        return data;
    };
    BeautyDataService.prototype.transformComplexObjectToViewData = function (data, startIndex, openSymbol, closeSymbol, elementClass) {
        var indexOfBeginningOfSpecialSymbol = startIndex;
        var indexOfEndingOfSpecialSymbol;
        var numberOfOpenedSpecialSymbols = 0;
        var numberOfClosedSpeciasSymbols = 0;
        numberOfOpenedSpecialSymbols++;
        for (var j = indexOfBeginningOfSpecialSymbol + 1; j < data.length; j++) {
            if (data[j] === openSymbol) {
                numberOfOpenedSpecialSymbols++;
            }
            if (data[j] === closeSymbol) {
                numberOfClosedSpeciasSymbols++;
            }
            if (numberOfOpenedSpecialSymbols === numberOfClosedSpeciasSymbols) {
                indexOfEndingOfSpecialSymbol = j;
                var currentSmallArray = data.slice(indexOfBeginningOfSpecialSymbol + 1, indexOfEndingOfSpecialSymbol);
                if (openSymbol === '(') {
                    var lookaround = this.checkForLookaround(data[indexOfBeginningOfSpecialSymbol + 1]);
                    if (lookaround) {
                        currentSmallArray.splice(0, 1, lookaround);
                    }
                }
                if (openSymbol === '[') {
                    if (data[indexOfBeginningOfSpecialSymbol + 1] === '^') {
                        currentSmallArray.splice(0, 1, ' negative');
                    }
                }
                currentSmallArray.unshift(elementClass);
                this.compileViewDataFromData(currentSmallArray);
                data.splice(indexOfBeginningOfSpecialSymbol, indexOfEndingOfSpecialSymbol -
                    indexOfBeginningOfSpecialSymbol + 1, currentSmallArray);
                break;
            }
        }
    };
    BeautyDataService.prototype.transformQuantifierToViewData = function (data, startIndex, openSymbol, closeSymbol, elementClass) {
        var indexOfBeginningOfSpecialSymbol = startIndex;
        var indexOfEndingOfSpecialSymbol;
        var numberOfOpenedSpecialSymbols = 0;
        var numberOfClosedSpeciasSymbols = 0;
        numberOfOpenedSpecialSymbols++;
        for (var j = indexOfBeginningOfSpecialSymbol + 1; j < data.length; j++) {
            if (data[j] === openSymbol) {
                numberOfOpenedSpecialSymbols++;
            }
            if (data[j] === closeSymbol) {
                numberOfClosedSpeciasSymbols++;
            }
            if (numberOfOpenedSpecialSymbols === numberOfClosedSpeciasSymbols) {
                var currentSmallArray = void 0;
                indexOfEndingOfSpecialSymbol = j;
                currentSmallArray = data.slice(indexOfBeginningOfSpecialSymbol + 1, indexOfEndingOfSpecialSymbol);
                if (currentSmallArray.length === 2 && currentSmallArray[1] === ',') {
                    currentSmallArray[1] = '-';
                    currentSmallArray.push('∞');
                }
                else if (currentSmallArray.length === 3) {
                    currentSmallArray[1] = '-';
                }
                currentSmallArray.unshift(elementClass);
                this.compileViewDataFromData(currentSmallArray);
                data.splice(indexOfBeginningOfSpecialSymbol, indexOfEndingOfSpecialSymbol -
                    indexOfBeginningOfSpecialSymbol + 1, currentSmallArray);
                data[startIndex - 1].push(data[startIndex]);
                data.splice(startIndex - 1, 2, data[startIndex - 1]);
                break;
            }
        }
    };
    BeautyDataService.transformSimpleObjectToViewData = function (data, index, symbol, elementClass) {
        if (elementClass === 'range') {
            data[index] = symbol;
        }
        else {
            if (elementClass === 'or') {
                data[index] = [[elementClass, symbol]];
            }
            else {
                data[index] = [elementClass, symbol];
            }
        }
    };
    BeautyDataService.prototype.checkForLookaround = function (element) {
        switch (element) {
            case this.lookaround[0].regExp + this.lookaround[2].regExp: {
                return ' lookAhead positive';
            }
            case this.lookaround[0].regExp + this.lookaround[3].regExp: {
                return ' lookAhead negative';
            }
            case this.lookaround[1].regExp + this.lookaround[2].regExp: {
                return ' lookBehind positive';
            }
            case this.lookaround[1].regExp + this.lookaround[3].regExp: {
                return ' lookBehind negative';
            }
            default: {
                return '';
            }
        }
    };
    BeautyDataService.prototype.checkPresetInVIewData = function (el) {
        var presets = this.presets;
        for (var i = 0; i < presets.length; i++) {
            if (presets[i].name === el) {
                return presets[i].regExp;
            }
        }
        return '';
    };
    BeautyDataService.levelUpQuantifier = function (viewData, index) {
        if (viewData[index][viewData[index].length - 1] && viewData[index][viewData[index].length - 1][0] === 'quantifier') {
            viewData.splice(index + 1, 0, viewData[index][viewData[index].length - 1]);
            viewData[index].pop();
        }
        return viewData;
    };
    BeautyDataService.prototype.convertViewDataStringToData = function (viewData, index) {
        var checkForPreset = this.checkPresetInVIewData(viewData[index]);
        if (checkForPreset) {
            viewData[index] = checkForPreset;
        }
        if (viewData[index] === 'group') {
            viewData.splice(index, 1, '(');
            viewData.push(')');
        }
        if (viewData[index] === ' negative') {
            viewData.splice(index, 1, '^');
        }
        for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_1__mock_elements_mock_elements__["c" /* rangeData */].topLeft.length; j++) {
            if (viewData[index] === __WEBPACK_IMPORTED_MODULE_1__mock_elements_mock_elements__["c" /* rangeData */].topLeft[j].name) {
                viewData.splice(index, 1, __WEBPACK_IMPORTED_MODULE_1__mock_elements_mock_elements__["c" /* rangeData */].topLeft[j].nameForRegExp);
            }
        }
        return viewData;
    };
    BeautyDataService.transformLookaroundToData = function (viewData) {
        var lookAheadPositiveIndex = viewData.indexOf(' lookAhead positive');
        var lookBehindPositiveIndex = viewData.indexOf(' lookBehind positive');
        var lookAheadNegativeIndex = viewData.indexOf(' lookAhead negative');
        var lookBehindNegativeIndex = viewData.indexOf(' lookBehind negative');
        if (lookAheadPositiveIndex !== -1) {
            viewData.splice(lookAheadPositiveIndex, 1, '?=');
        }
        else if (lookBehindPositiveIndex !== -1) {
            viewData.splice(lookBehindPositiveIndex, 1, '?<=');
        }
        else if (lookAheadNegativeIndex !== -1) {
            viewData.splice(lookAheadNegativeIndex, 1, '?!');
        }
        else if (lookBehindNegativeIndex !== -1) {
            viewData.splice(lookBehindNegativeIndex, 1, '?<!');
        }
        return viewData;
    };
    BeautyDataService.transformGroupToData = function (viewData) {
        var groupIndex = viewData.indexOf('group');
        if (groupIndex !== -1) {
            viewData.splice(groupIndex, 1);
            viewData.push(')');
            viewData.unshift('(');
        }
        return viewData;
    };
    BeautyDataService.transformRangeToData = function (viewData) {
        var rangeIndex = viewData.indexOf('range');
        var negativeIndex = viewData.indexOf('negative');
        if (rangeIndex !== -1) {
            if (negativeIndex !== -1) {
                viewData.splice(negativeIndex, 1, '^');
            }
            viewData.splice(rangeIndex, 1);
            viewData.push(']');
            viewData.unshift('[');
        }
        return viewData;
    };
    BeautyDataService.transformQuantifierToData = function (viewData) {
        var quantifierIndex = viewData.indexOf('quantifier');
        if (quantifierIndex !== -1) {
            viewData.splice(quantifierIndex, 1);
            var indexOfZero = viewData.indexOf('0');
            var indexOfOne = viewData.indexOf('1');
            var indexOfInfinity = viewData.indexOf('∞');
            var indexOfDash = viewData.indexOf('-');
            if (indexOfDash === -1) {
                viewData.push('}');
                viewData.unshift('{');
            }
            else {
                if (indexOfZero !== -1 && indexOfOne !== -1 && indexOfOne === indexOfZero + 2) {
                    viewData.length = 0;
                    viewData.push('?');
                }
                else {
                    if (indexOfZero !== -1 && indexOfInfinity !== -1 && indexOfInfinity === indexOfZero + 2) {
                        viewData.length = 0;
                        viewData.push('*');
                    }
                    else {
                        if (indexOfOne !== -1 && indexOfInfinity !== -1 && indexOfInfinity === indexOfOne + 2) {
                            viewData.length = 0;
                            viewData.push('+');
                        }
                        else {
                            if (indexOfInfinity !== -1) {
                                viewData.length = 1;
                                viewData.push(',');
                                viewData.push('}');
                                viewData.unshift('{');
                            }
                            else {
                                viewData.splice(indexOfDash, 1, ',');
                                viewData.push('}');
                                viewData.unshift('{');
                            }
                        }
                    }
                }
            }
        }
        return viewData;
    };
    BeautyDataService.prototype.transformAnchorToData = function (viewData) {
        var anchorIndex = viewData.indexOf('anchor');
        if (anchorIndex !== -1) {
            for (var i = 0; i < this.anchors.length; i++) {
                if (this.anchors[i].symbol === viewData[1]) {
                    viewData.length = 0;
                    viewData.push(this.anchors[i].regExp.slice());
                }
            }
        }
        return viewData;
    };
    BeautyDataService.prototype.transformAnchorOppositeToData = function (viewData) {
        var anchorOppositeIndex = viewData.indexOf('anchorOpposite');
        if (anchorOppositeIndex !== -1) {
            viewData.length = 0;
            viewData.push(this.anchors[1].regExp.slice());
        }
        return viewData;
    };
    BeautyDataService.prototype.transformOrToData = function (viewData) {
        var orIndex = viewData.indexOf('or');
        if (orIndex !== -1) {
            viewData = [this.or.regExp];
        }
        return viewData;
    };
    return BeautyDataService;
}());
BeautyDataService = BeautyDataService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], BeautyDataService);

var BeautyDataService_1;
//# sourceMappingURL=beauty-data.service.js.map

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__all_elements_position_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaretService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BLINKING_INTERVAL = 500;
var CARET_HEIGHT_PX = 16;
var CARET_WIDTH_ERROR_PX = 4;
var EMPTY_LOOKAROUND_LENGTH = 2;
var CaretService = (function () {
    function CaretService(allElPositionService) {
        this.allElPositionService = allElPositionService;
    }
    CaretService.prototype.getCaretPosition = function () {
        this.areaPosition = this.area.getBoundingClientRect();
        return {
            top: Number.parseFloat(this.caret.style.top) + this.areaPosition.top,
            left: Number.parseFloat(this.caret.style.left) + this.areaPosition.left,
            height: CARET_HEIGHT_PX
        };
    };
    CaretService.prototype.getCaretPositionWithOffset = function () {
        this.areaPosition = this.area.getBoundingClientRect();
        return {
            top: Number.parseFloat(this.caret.style.top) + this.areaPosition.top + window.pageYOffset,
            left: Number.parseFloat(this.caret.style.left) + this.areaPosition.left + window.pageXOffset,
            height: CARET_HEIGHT_PX
        };
    };
    CaretService.prototype.setAreaCoords = function () {
        this.area = document.getElementsByClassName('area')[0];
        this.area.focus();
        this.areaPosition = this.area.getBoundingClientRect();
        this.caret = document.getElementsByTagName('caret')[0];
        this.startBlinking();
    };
    CaretService.prototype.fixCaretPosition = function (inputFromKeyboard, withoutPause) {
        if (!withoutPause) {
            this.pauseBlinking();
        }
        if (this.fixCaretPositionForEmptyLookaround(inputFromKeyboard)) {
            return;
        }
        this.areaPosition = this.area.getBoundingClientRect();
        var position = this.allElPositionService.getElementPositionByKeyboardInput(inputFromKeyboard);
        if (!position) {
            this.setCaretInCenter();
        }
        else {
            this.setCaretInPosition(position, inputFromKeyboard);
        }
    };
    CaretService.prototype.startBlinking = function () {
        var _this = this;
        this.area.focus();
        this.caret.style.opacity = '';
        clearInterval(this.caretIntervalShow);
        clearInterval(this.caretIntervalHide);
        clearTimeout(this.caretTimeoutShow);
        this.caretIntervalHide = setInterval(function () {
            _this.caret.style.display = 'none';
        }, BLINKING_INTERVAL * 2);
        this.caretTimeoutShow = setTimeout(function () {
            _this.caretIntervalShow = setInterval(function () {
                _this.caret.style.display = 'block';
            }, BLINKING_INTERVAL * 2);
        }, BLINKING_INTERVAL);
    };
    CaretService.prototype.stopBlinking = function () {
        clearInterval(this.caretIntervalShow);
        clearInterval(this.caretIntervalHide);
        clearTimeout(this.caretTimeoutShow);
        this.caret.style.display = 'none';
    };
    CaretService.prototype.pauseBlinking = function () {
        clearInterval(this.caretIntervalShow);
        clearInterval(this.caretIntervalHide);
        clearTimeout(this.caretTimeoutShow);
        this.caret.style.display = 'block';
        this.startBlinking();
    };
    CaretService.prototype.setCaretInCenter = function () {
        this.caret.style.top = this.areaPosition.height / 2 - 8 + 'px';
        this.caret.style.left = this.areaPosition.width / 2 - 4 + 'px';
    };
    CaretService.prototype.setCaretInPosition = function (position, inputFromKeyboard) {
        this.caret.style.top = position.top - this.areaPosition.top - window.pageYOffset + (position.height - 16) / 2 - 1 + 'px';
        if (inputFromKeyboard.direction === 'left') {
            this.caret.style.left = position.left - this.areaPosition.left - window.pageXOffset - CARET_WIDTH_ERROR_PX + 'px';
        }
        else {
            this.caret.style.left = position.left - this.areaPosition.left - window.pageXOffset + position.width - CARET_WIDTH_ERROR_PX + 'px';
        }
    };
    CaretService.prototype.fixCaretPositionForEmptyLookaround = function (inputFromKeyboard) {
        if (inputFromKeyboard.parent.length === EMPTY_LOOKAROUND_LENGTH && inputFromKeyboard.parent[1].indexOf('look') !== -1) {
            this.pauseBlinking();
            this.areaPosition = this.area.getBoundingClientRect();
            var position = this.allElPositionService.getElementPosition(inputFromKeyboard.parent);
            this.setCaretInsideEmptyLookaround(position, inputFromKeyboard);
            return true;
        }
        else {
            return false;
        }
    };
    CaretService.prototype.setCaretInsideEmptyLookaround = function (position, inputFromKeyboard) {
        var relativePositionY = position.top - this.areaPosition.top - window.pageYOffset;
        var relativePositionX = position.left - this.areaPosition.left - window.pageXOffset - CARET_WIDTH_ERROR_PX;
        this.caret.style.top = relativePositionY + (position.height - 16) / 2 + 'px';
        this.caret.style.left = relativePositionX + position.width / 2 + (inputFromKeyboard.parent[1].indexOf('Ahead') !== -1 ? 2 : 0) + 'px';
    };
    return CaretService;
}());
CaretService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__all_elements_position_service__["a" /* AllElementsPositionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__all_elements_position_service__["a" /* AllElementsPositionService */]) === "function" && _a || Object])
], CaretService);

var _a;
//# sourceMappingURL=caret.service.js.map

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_array_service__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Parent = (function () {
    function Parent() {
    }
    return Parent;
}());
var SelectionService = (function () {
    function SelectionService() {
        this.highlightSelection = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.highlightSelections = [];
        this.viewData = [];
        this.parentsForEnd = [];
        this.startNode = [];
        this.endNode = [];
    }
    SelectionService.prototype.getStart = function () {
        return this.startNode;
    };
    SelectionService.prototype.getHighlightedElements = function () {
        return this.highlightSelections;
    };
    SelectionService.prototype.setStart = function (element) {
        this.resetAllVariables();
        if (element) {
            this.parentsForStart = [];
            this.startNode = element;
            this.findStartOrEndInViewData(element, this.viewData, this.parentsForStart);
        }
    };
    SelectionService.prototype.setEnd = function (element) {
        if (element) {
            this.endNode = element;
            this.indexOfEndInTmp = this.findStartOrEndInViewData(element, this.viewData, this.parentsForEnd);
            this.commonParent = this.findCommonParent();
            this.findAllElementsToHighlight(this.commonParent);
            this.pushHighlightSelection(this.highlightSelections);
        }
    };
    SelectionService.prototype.setViewData = function (data) {
        this.viewData = data;
    };
    SelectionService.prototype.resetAllVariables = function () {
        this.parentsForStart = [];
        this.parentsForEnd = [];
        this.commonParent = null;
        this.startNode = [];
        this.endNode = [];
        this.indexOfEndInTmp = null;
        this.highlightSelections = [];
    };
    SelectionService.prototype.subscribeOnHighlightSelection = function () {
        return this.highlightSelection.asObservable();
    };
    SelectionService.prototype.pushHighlightSelection = function (data) {
        this.highlightSelection.next(data);
    };
    SelectionService.prototype.deleteStart = function () {
        if (this.startNode) {
            this.startNode = undefined;
            this.parentsForStart = undefined;
        }
    };
    SelectionService.prototype.selectAll = function () {
        this.addAllElementsToHighlightFromCurrElement(this.viewData[0]);
        this.pushHighlightSelection(this.highlightSelections);
        this.commonParent = {
            start: { array: this.viewData[0], index: 0 },
            end: { array: this.viewData[0], index: this.viewData[0].length - 1 }
        };
    };
    SelectionService.prototype.applyGrouping = function () {
        var start = this.commonParent.start.index;
        var end = this.commonParent.end.index;
        var countOfEl = end + 1 - start;
        var arrWithSelectedElements = this.commonParent.start.array.slice(start, end + 1);
        arrWithSelectedElements.unshift('group');
        this.commonParent.start.array.splice(start, countOfEl, arrWithSelectedElements);
    };
    SelectionService.prototype.findAllElementsToHighlight = function (commonParent) {
        var indexOfStart = commonParent.start.index;
        var indexOfEnd = commonParent.end.index;
        var parent = commonParent.start.array;
        for (var i = indexOfStart; i <= indexOfEnd; i++) {
            this.highlightSelections.push(parent[i]);
            this.addAllElementsToHighlightFromCurrElement(parent[i]);
        }
    };
    SelectionService.prototype.addAllElementsToHighlightFromCurrElement = function (element) {
        if (__WEBPACK_IMPORTED_MODULE_2__services_array_service__["a" /* ArrayService */].checkIfStringArray(element)) {
            return false;
        }
        for (var i = 0; i < element.length; i++) {
            if (typeof element[i] !== 'string') {
                this.highlightSelections.push(element[i]);
                this.addAllElementsToHighlightFromCurrElement(element[i]);
            }
        }
    };
    SelectionService.prototype.findStartOrEndInViewData = function (element, viewData, whereToPush, indexOfParent) {
        var index = viewData.indexOf(element);
        if (typeof viewData === 'string' && index === -1) {
            return -1;
        }
        if (index !== -1) {
            whereToPush.push({ array: viewData, index: index });
            return indexOfParent;
        }
        else {
            var tmpIndex = -1;
            for (var i = 0; i < viewData.length; i++) {
                if (typeof viewData[i] === 'string') {
                    if (i === viewData.length - 1) {
                        return -1;
                    }
                    continue;
                }
                tmpIndex = this.findStartOrEndInViewData(element, viewData[i], whereToPush, i);
                if (tmpIndex !== -1) {
                    whereToPush.push({ array: viewData, index: tmpIndex });
                    break;
                }
                if (i === viewData.length - 1) {
                    return -1;
                }
            }
            return indexOfParent;
        }
    };
    SelectionService.prototype.findCommonParent = function () {
        var parent = [];
        var tmpIndex;
        this.highlightSelections = [];
        for (var i = 0; i < this.parentsForStart.length; i++) {
            tmpIndex = this.parentsForStart[i].index;
            for (var j = 0; j < this.parentsForEnd.length; j++) {
                tmpIndex = this.parentsForEnd[j].index;
                if (this.parentsForStart[i].array === this.parentsForEnd[j].array) {
                    parent = { start: this.parentsForStart[i], end: this.parentsForEnd[j] };
                    return parent;
                }
            }
        }
        return parent;
    };
    return SelectionService;
}());
SelectionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SelectionService);

//# sourceMappingURL=selection.service.js.map

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HintService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HintService = (function () {
    function HintService() {
        this.hintSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    HintService.prototype.setHint = function (hint) {
        this.hintSubject.next(hint);
    };
    HintService.prototype.getHint = function () {
        return this.hintSubject.asObservable();
    };
    return HintService;
}());
HintService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], HintService);

//# sourceMappingURL=hint.service.js.map

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range_array_model__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range_data_model__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mock_elements_mock_elements__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RangeDataService = RangeDataService_1 = (function () {
    function RangeDataService() {
        this.currentRangeArray = new __WEBPACK_IMPORTED_MODULE_1__range_array_model__["a" /* RangeArray */]([], []);
        this.rangeData = new __WEBPACK_IMPORTED_MODULE_2__range_data_model__["a" /* RangeData */]();
        this.presetFullElArray = [];
        this.hoveredPresets = [];
        this.presetNameArray = [];
        this.rangeData = __WEBPACK_IMPORTED_MODULE_3__mock_elements_mock_elements__["c" /* rangeData */];
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_3__mock_elements_mock_elements__["c" /* rangeData */].topLeft.length; i++) {
            this.presetNameArray[i] = __WEBPACK_IMPORTED_MODULE_3__mock_elements_mock_elements__["c" /* rangeData */].topLeft[i].nameForRegExp;
        }
    }
    RangeDataService.prototype.getRangeData = function () {
        return this.rangeData;
    };
    RangeDataService.prototype.getPresetNameArray = function () {
        return this.presetNameArray;
    };
    RangeDataService.prototype.getRangePresets = function () {
        return this.currentRangeArray.presets;
    };
    RangeDataService.prototype.getRangeElements = function () {
        return this.currentRangeArray.elements;
    };
    RangeDataService.prototype.getPresetFullElArray = function () {
        return this.presetFullElArray;
    };
    RangeDataService.prototype.getHoveredPresets = function () {
        return this.hoveredPresets;
    };
    RangeDataService.prototype.setRangePresets = function (presets) {
        this.currentRangeArray.presets = presets;
    };
    RangeDataService.prototype.setRangeElements = function (elements) {
        this.currentRangeArray.elements = elements;
    };
    RangeDataService.prototype.setPresetFullElArray = function (elements) {
        this.presetFullElArray = elements;
    };
    RangeDataService.prototype.setHoveredPresets = function (elements) {
        this.hoveredPresets = elements;
    };
    RangeDataService.prototype.elementsFromPresetFullEl = function (presetFullEl) {
        var elements = [];
        var presetFullElCopy = presetFullEl.slice();
        var rangeDataTopLeft = this.rangeData.topLeft.slice();
        rangeDataTopLeft = RangeDataService_1.rangeDataTopLeftInsertionSort(rangeDataTopLeft);
        for (var i = 0; i < rangeDataTopLeft.length; i++) {
            if (RangeDataService_1.checkArrayInArray(rangeDataTopLeft[i].elements, presetFullElCopy)) {
                presetFullElCopy = RangeDataService_1.deleteArrayFromArray(rangeDataTopLeft[i].elements, presetFullElCopy);
                elements.push(rangeDataTopLeft[i].nameForRegExp);
            }
        }
        elements.push.apply(elements, presetFullElCopy);
        return elements;
    };
    RangeDataService.prototype.presetsFromPresetFullEl = function (presetFullEl) {
        var presets = [];
        var presetFullElCopy = presetFullEl.slice();
        var rangeDataTopLeft = this.rangeData.topLeft.slice();
        rangeDataTopLeft = RangeDataService_1.rangeDataTopLeftInsertionSort(rangeDataTopLeft);
        for (var i = 0; i < rangeDataTopLeft.length; i++) {
            if (RangeDataService_1.checkArrayInArray(rangeDataTopLeft[i].elements, presetFullElCopy)) {
                presets.push(rangeDataTopLeft[i].nameForRegExp);
            }
        }
        return presets;
    };
    RangeDataService.deleteArrayFromArray = function (array, arrayToDeleteFrom) {
        for (var i = 0; i < array.length; i++) {
            var index = arrayToDeleteFrom.indexOf(array[i]);
            if (index >= 0) {
                arrayToDeleteFrom.splice(index, 1);
            }
        }
        return arrayToDeleteFrom;
    };
    RangeDataService.checkArrayInArray = function (array, inArray) {
        var check = true;
        for (var i = 0; i < array.length; i++) {
            if (inArray.indexOf(array[i]) === -1) {
                check = false;
                break;
            }
        }
        return check;
    };
    RangeDataService.rangeDataTopLeftInsertionSort = function (array) {
        for (var i = 1; i < array.length; i++) {
            var j = i;
            while (j > 0 && array[j - 1].elements.length < array[j].elements.length) {
                var tmp = array[j - 1];
                array[j - 1] = array[j];
                array[j] = tmp;
                j--;
            }
        }
        return array;
    };
    return RangeDataService;
}());
RangeDataService = RangeDataService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], RangeDataService);

var RangeDataService_1;
//# sourceMappingURL=range-data.service.js.map

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Element; });
var Element = (function () {
    function Element() {
    }
    return Element;
}());

//# sourceMappingURL=element.model.js.map

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });

var NotificationService = (function () {
    function NotificationService() {
        this.quantifierDestroyed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.globalQuantifierClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.quantifierDestroyed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.globalQuantifierClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
    }
    return NotificationService;
}());

//# sourceMappingURL=notification.service.js.map

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuantifierService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuantifierService = (function () {
    function QuantifierService() {
        this.clicked = false;
    }
    QuantifierService.prototype.click = function (value) {
        this.clicked = value;
    };
    QuantifierService.prototype.getClickState = function () {
        return this.clicked;
    };
    QuantifierService.prototype.setQuantifier = function (quantifier) {
        this.quantifier = quantifier;
    };
    QuantifierService.prototype.getQuantifier = function () {
        var tmp = [];
        if (this.quantifier) {
            tmp = this.quantifier.slice();
            this.quantifier.length = 0;
        }
        return tmp;
    };
    return QuantifierService;
}());
QuantifierService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], QuantifierService);

//# sourceMappingURL=quantifier.service.js.map

/***/ }),
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Position; });
var ElementPosition = (function () {
    function ElementPosition() {
    }
    return ElementPosition;
}());

var Position = (function () {
    function Position(top, left, width, height) {
        this.top = top;
        this.left = left;
        this.width = width;
        this.height = height;
    }
    return Position;
}());

//# sourceMappingURL=element-position.model.js.map

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range_data_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hint_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mock_elements_mock_elements__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_array_service__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsciiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AsciiService = (function () {
    function AsciiService(rangeDataService, hintService) {
        this.rangeDataService = rangeDataService;
        this.hintService = hintService;
        this.presetNameArray = [];
        this.rangeData = __WEBPACK_IMPORTED_MODULE_3__mock_elements_mock_elements__["c" /* rangeData */];
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_3__mock_elements_mock_elements__["c" /* rangeData */].topLeft.length; i++) {
            this.presetNameArray[i] = __WEBPACK_IMPORTED_MODULE_3__mock_elements_mock_elements__["c" /* rangeData */].topLeft[i].nameForRegExp;
        }
    }
    AsciiService.prototype.ngOnInit = function () {
        this.rangeData = this.rangeDataService.getRangeData();
        this.presetNameArray = this.rangeDataService.getPresetNameArray();
    };
    AsciiService.prototype.getIndexOfFirstEl = function () {
        return this.indexOfFirstEl;
    };
    AsciiService.prototype.getIndexOfLastEl = function () {
        return this.indexOfLastEl;
    };
    AsciiService.prototype.setData = function (data) {
        this.data = data;
    };
    AsciiService.prototype.onMouseOver = function (hint, indexOfLastEl, event) {
        if (event) {
            if (!event.shiftKey || !this.indexOfFirstEl) {
                this.setHint(hint);
            }
            else {
                this.indexOfLastEl = indexOfLastEl;
            }
        }
    };
    AsciiService.prototype.onMouseOut = function (event) {
        this.setHint(undefined);
        if (event) {
            if (!event.shiftKey && this.indexOfLastEl) {
                this.indexOfLastEl = undefined;
            }
        }
    };
    AsciiService.prototype.addData = function (el, indexOfEl) {
        var indexOfFirst = this.indexOfFirstEl;
        var indexOfLast = this.indexOfLastEl;
        if (indexOfFirst && indexOfLast) {
            this.addDataShiftPressed(indexOfFirst, indexOfLast);
        }
        else {
            this.addDatum(el, indexOfEl);
        }
    };
    AsciiService.prototype.addDataShiftPressed = function (indexOfFirst, indexOfLast) {
        if (indexOfLast < indexOfFirst) {
            var tmp = indexOfFirst;
            indexOfFirst = indexOfLast - 1;
            indexOfLast = tmp - 1;
        }
        this.indexOfFirstEl = indexOfLast;
        this.indexOfLastEl = undefined;
        for (var i = indexOfFirst + 1; i <= indexOfLast; i++) {
            this.addData(this.data[i].nameForRegExp);
        }
    };
    AsciiService.prototype.addDatum = function (el, indexOfEl) {
        var elements;
        var presets = this.rangeDataService.getRangePresets();
        var presetIndex = this.presetNameArray.indexOf(el);
        var presetFullElArray = this.rangeDataService.getPresetFullElArray();
        if (presetIndex > -1) {
            presetFullElArray = this.addPreset(presets, presetIndex);
        }
        else {
            this.addElement(el, indexOfEl);
        }
        elements = this.rangeDataService.elementsFromPresetFullEl(presetFullElArray);
        presets = this.rangeDataService.presetsFromPresetFullEl(presetFullElArray);
        this.rangeDataService.setPresetFullElArray(presetFullElArray);
        this.rangeDataService.setRangeElements(elements);
        this.rangeDataService.setRangePresets(presets);
    };
    AsciiService.prototype.addPreset = function (presets, presetIndex) {
        var presetFullElArray = this.rangeDataService.getPresetFullElArray();
        var viewDataPresetIndex = presets.indexOf(this.rangeData.topLeft[presetIndex].nameForRegExp);
        if (viewDataPresetIndex > -1) {
            presetFullElArray =
                __WEBPACK_IMPORTED_MODULE_1__range_data_service__["a" /* RangeDataService */].deleteArrayFromArray(this.rangeData.topLeft[presetIndex].elements, presetFullElArray);
        }
        else {
            presetFullElArray.push.apply(presetFullElArray, this.rangeData.topLeft[presetIndex].elements);
            presetFullElArray = __WEBPACK_IMPORTED_MODULE_4__services_array_service__["a" /* ArrayService */].arrayUnique(presetFullElArray);
        }
        return presetFullElArray;
    };
    AsciiService.prototype.addElement = function (element, index) {
        var presetFullElArray = this.rangeDataService.getPresetFullElArray();
        var presetFullElIndex = presetFullElArray.indexOf(element);
        if (presetFullElIndex > -1) {
            presetFullElArray.splice(presetFullElIndex, 1);
        }
        else {
            presetFullElArray.push(element);
            this.indexOfFirstEl = index;
        }
    };
    AsciiService.prototype.setHint = function (data) {
        this.hintService.setHint(data);
    };
    return AsciiService;
}());
AsciiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__range_data_service__["a" /* RangeDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__range_data_service__["a" /* RangeDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__hint_service__["a" /* HintService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__hint_service__["a" /* HintService */]) === "function" && _b || Object])
], AsciiService);

var _a, _b;
//# sourceMappingURL=ascii.service.js.map

/***/ }),
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_elements_mock_elements__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_elements_position_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputFromKeyboardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InputFromKeyboardService = InputFromKeyboardService_1 = (function () {
    function InputFromKeyboardService(allElPosService) {
        this.allElPosService = allElPosService;
    }
    InputFromKeyboardService.prototype.deletePrevious = function (viewData, inputFromKeyboard) {
        var parent = inputFromKeyboard.parent;
        var index = inputFromKeyboard.index;
        var direction = inputFromKeyboard.direction;
        var spliceIndex = -1;
        var skipCount = 0;
        for (var i = 0; i < parent.length; i++) {
            if (typeof parent[i] !== 'string') {
                break;
            }
            skipCount++;
        }
        if (direction === 'right' && index - skipCount >= 0) {
            spliceIndex = index;
        }
        else if (direction === 'left' && index - skipCount > 0) {
            spliceIndex = index - 1;
        }
        if (spliceIndex !== -1) {
            if (InputFromKeyboardService_1.checkForQuantifier(parent[spliceIndex])) {
                inputFromKeyboard.parent[spliceIndex] = InputFromKeyboardService_1.deleteQuantifier(inputFromKeyboard.parent[spliceIndex]);
                return inputFromKeyboard;
            }
            else {
                var parentPrev = inputFromKeyboard.parent;
                inputFromKeyboard.parent.splice(spliceIndex, 1);
                inputFromKeyboard = this.deleteEmptyElementsAbove(viewData, inputFromKeyboard);
                inputFromKeyboard = InputFromKeyboardService_1.handleEmptyInput(inputFromKeyboard);
                return inputFromKeyboard.parent.length === 0 || parentPrev !== inputFromKeyboard.parent ?
                    inputFromKeyboard : InputFromKeyboardService_1.moveLeft(inputFromKeyboard);
            }
        }
        return inputFromKeyboard;
    };
    InputFromKeyboardService.prototype.deleteNext = function (viewData, inputFromKeyboard) {
        var parent = inputFromKeyboard.parent;
        var index = inputFromKeyboard.index;
        var direction = inputFromKeyboard.direction;
        var spliceIndex = -1;
        var skipCount = 0;
        for (var i = 0; i < parent.length; i++) {
            if (typeof parent[i] !== 'string') {
                break;
            }
            skipCount++;
        }
        if (direction === 'right' && index < parent.length - 1) {
            spliceIndex = index + 1;
        }
        else if (direction === 'left' && index <= parent.length - 1) {
            spliceIndex = index;
        }
        if (spliceIndex !== -1) {
            inputFromKeyboard.parent.splice(spliceIndex, 1);
            inputFromKeyboard = this.deleteEmptyElementsAbove(viewData, inputFromKeyboard);
            return inputFromKeyboard;
        }
        inputFromKeyboard = InputFromKeyboardService_1.handleEmptyInput(inputFromKeyboard);
        return inputFromKeyboard;
    };
    InputFromKeyboardService.moveLeft = function (inputFromKeyboard) {
        var parent = inputFromKeyboard.parent;
        var index = inputFromKeyboard.index;
        var direction = inputFromKeyboard.direction;
        var skipCount = 0;
        if (InputFromKeyboardService_1.checkForEmptyLookaround(inputFromKeyboard)) {
            return inputFromKeyboard;
        }
        for (var i = 0; i < parent.length; i++) {
            if (typeof parent[i] !== 'string') {
                break;
            }
            skipCount++;
        }
        if (index - skipCount > 0) {
            inputFromKeyboard.index--;
        }
        else if (direction === 'right') {
            inputFromKeyboard.direction = 'left';
        }
        return inputFromKeyboard;
    };
    InputFromKeyboardService.moveRight = function (inputFromKeyboard) {
        var parent = inputFromKeyboard.parent;
        var index = inputFromKeyboard.index;
        var direction = inputFromKeyboard.direction;
        if (InputFromKeyboardService_1.checkForEmptyLookaround(inputFromKeyboard)) {
            return inputFromKeyboard;
        }
        if (parent[index + 1]) {
            inputFromKeyboard.index++;
        }
        else if (direction === 'left') {
            inputFromKeyboard.direction = 'right';
        }
        return inputFromKeyboard;
    };
    InputFromKeyboardService.moveLeftToTheEnd = function (inputFromKeyboard) {
        var parent = inputFromKeyboard.parent;
        var skipCount = 0;
        if (InputFromKeyboardService_1.checkForEmptyLookaround(inputFromKeyboard)) {
            return inputFromKeyboard;
        }
        for (var i = 0; i < parent.length; i++) {
            if (typeof parent[i] !== 'string') {
                break;
            }
            skipCount++;
        }
        inputFromKeyboard.index = skipCount;
        inputFromKeyboard.direction = 'left';
        return inputFromKeyboard;
    };
    InputFromKeyboardService.moveRightToTheEnd = function (inputFromKeyboard) {
        if (InputFromKeyboardService_1.checkForEmptyLookaround(inputFromKeyboard)) {
            return inputFromKeyboard;
        }
        inputFromKeyboard.index = inputFromKeyboard.parent.length - 1;
        inputFromKeyboard.direction = 'right';
        return inputFromKeyboard;
    };
    InputFromKeyboardService.insertChar = function (inputFromKeyboard, char) {
        var spliceIndex = 0;
        if (__WEBPACK_IMPORTED_MODULE_1__mock_elements_mock_elements__["a" /* specialSymbols */].indexOf(char) !== -1) {
            char = '\\' + char;
        }
        if (inputFromKeyboard.direction === 'right') {
            spliceIndex = inputFromKeyboard.index + 1;
        }
        else {
            spliceIndex = inputFromKeyboard.index;
        }
        inputFromKeyboard.parent.splice(spliceIndex, 0, [char]);
        inputFromKeyboard.index++;
        return inputFromKeyboard;
    };
    InputFromKeyboardService.prototype.moveUp = function (viewData, inputFromKeyboard, caretPosition) {
        if (InputFromKeyboardService_1.checkForEmptyLookaround(inputFromKeyboard)) {
            return inputFromKeyboard;
        }
        var element = this.allElPosService.findClosestElementAboveCaret(caretPosition);
        if (element === null) {
            return inputFromKeyboard;
        }
        var parentOfElement = this.allElPosService.findDirectParentOfElement(viewData, element.element);
        if (parentOfElement.length === 0) {
            parentOfElement = viewData[0];
        }
        var index = parentOfElement.indexOf(element.element);
        this.allElPosService.setInputFromKeyboard(parentOfElement, element.direction || 'right', index);
        return this.allElPosService.getInputFromKeyboard();
    };
    InputFromKeyboardService.prototype.moveDown = function (viewData, inputFromKeyboard, caretPosition) {
        if (InputFromKeyboardService_1.checkForEmptyLookaround(inputFromKeyboard)) {
            return inputFromKeyboard;
        }
        var element = this.allElPosService.findClosestElementUnderCaret(caretPosition);
        if (element === null) {
            return inputFromKeyboard;
        }
        var parentOfElement = this.allElPosService.findDirectParentOfElement(viewData, element.element);
        if (parentOfElement.length === 0) {
            parentOfElement = viewData[0];
        }
        var index = parentOfElement.indexOf(element.element);
        this.allElPosService.setInputFromKeyboard(parentOfElement, element.direction || 'right', index);
        return this.allElPosService.getInputFromKeyboard();
    };
    InputFromKeyboardService.prototype.deleteEmptyElementsAbove = function (viewData, inputFromKeyboard) {
        var skipCount = 0;
        for (var i = 0; i < inputFromKeyboard.parent.length; i++) {
            if (typeof inputFromKeyboard.parent[i] !== 'string') {
                break;
            }
            skipCount++;
        }
        if (inputFromKeyboard.parent.length - skipCount === 0) {
            if (skipCount !== 0) {
                var child = inputFromKeyboard.parent;
                inputFromKeyboard.parent = this.allElPosService.findDirectParentOfElement(viewData, inputFromKeyboard.parent);
                inputFromKeyboard.index = inputFromKeyboard.parent.indexOf(child);
                inputFromKeyboard.parent.splice(inputFromKeyboard.index, 1);
                if (inputFromKeyboard.index === 0) {
                    inputFromKeyboard.direction = 'left';
                }
                else if (inputFromKeyboard.index === inputFromKeyboard.parent.length) {
                    inputFromKeyboard.index--;
                    inputFromKeyboard.direction = 'right';
                }
                inputFromKeyboard = this.deleteEmptyElementsAbove(viewData, inputFromKeyboard);
            }
            else {
                inputFromKeyboard.index = -1;
                inputFromKeyboard.direction = 'right';
            }
        }
        return inputFromKeyboard;
    };
    InputFromKeyboardService.deleteItemFromArray = function (item, array) {
        var index = array.indexOf(item);
        if (index !== -1) {
            array.splice(index, 1);
        }
        else {
            for (var i = 0; i < array.length; i++) {
                if (array[i] instanceof Array) {
                    array[i] = InputFromKeyboardService_1.deleteItemFromArray(item, array[i]);
                }
            }
        }
        return array;
    };
    InputFromKeyboardService.checkForQuantifier = function (data) {
        return data[data.length - 1] instanceof Array && data[data.length - 1][0] === 'quantifier';
    };
    InputFromKeyboardService.checkForEmptyLookaround = function (inputFromKeyboard) {
        return inputFromKeyboard.parent.length === 2 && inputFromKeyboard.parent[1].indexOf('look') !== -1;
    };
    InputFromKeyboardService.deleteQuantifier = function (data) {
        if (data[data.length - 1] instanceof Array && data[data.length - 1][0] === 'quantifier') {
            data.pop();
        }
        return data;
    };
    InputFromKeyboardService.handleEmptyInput = function (inputFromKeyboard) {
        if (inputFromKeyboard.parent.length === 0) {
            inputFromKeyboard.direction = 'right';
            inputFromKeyboard.index = -1;
        }
        return inputFromKeyboard;
    };
    return InputFromKeyboardService;
}());
InputFromKeyboardService = InputFromKeyboardService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__all_elements_position_service__["a" /* AllElementsPositionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__all_elements_position_service__["a" /* AllElementsPositionService */]) === "function" && _a || Object])
], InputFromKeyboardService);

var InputFromKeyboardService_1, _a;
//# sourceMappingURL=input-from-keyboard.service.js.map

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegExpParseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RegExpParseService = RegExpParseService_1 = (function () {
    function RegExpParseService() {
    }
    RegExpParseService.checkDataForEmptyBrackets = function (data) {
        return data.indexOf('{}') !== -1 || data.indexOf('[]') !== -1 || data.indexOf('()') !== -1;
    };
    RegExpParseService.checkDataForQuantifierWithoutGroup = function (data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i] === '{' && (data[i - 1] !== ')' && data[i - 1] !== ']')) {
                return false;
            }
        }
        return true;
    };
    RegExpParseService.checkDataForCorrectQuantifiers = function (data) {
        var allowedSymbolString = '0123456789,';
        for (var i = 0; i < data.length; i++) {
            if (data[i] === '{') {
                var indexInQuantifier = 0;
                var commaCounter = 0;
                i += 1;
                while (data[i + indexInQuantifier] !== '}') {
                    if (data[i + indexInQuantifier] === ',') {
                        commaCounter++;
                    }
                    if (commaCounter >= 2) {
                        return false;
                    }
                    if (allowedSymbolString.indexOf(data[i + indexInQuantifier]) === -1) {
                        return false;
                    }
                    if (data[i + indexInQuantifier] === ',' && indexInQuantifier === 0) {
                        return false;
                    }
                    indexInQuantifier++;
                }
                i += indexInQuantifier;
            }
        }
        return true;
    };
    RegExpParseService.checkDataForBracketBalance = function (data) {
        return this.checkDataForRoundBracketBalance(data) &&
            this.checkDataForSquareBracketBalance(data) &&
            this.checkDataForCurlyBracketBalance(data);
    };
    RegExpParseService.parseStringToData = function (str) {
        var data = [];
        for (var i = 0; i < str.length; i++) {
            data.push(str[i]);
        }
        data = RegExpParseService_1.joinLookahead(data);
        data = RegExpParseService_1.joinLookbehind(data);
        data = RegExpParseService_1.joinEscapeChars(data);
        data = RegExpParseService_1.joinCharCodes(data);
        data = RegExpParseService_1.joinRanges(data);
        return data;
    };
    RegExpParseService.joinLookahead = function (data) {
        // [ ..., '(', '?', '=', ... ] => [ ..., '(', ['?', '='], ... ]
        var result = data.slice();
        for (var i = 0; i < result.length; i++) {
            if (result[i] === '?' && result[i + 1] && result[i - 1] && result[i - 1] === '(' &&
                (result[i + 1] === '=' || result[i + 1] === '!')) {
                result.splice(i, 2, result[i] + result[i + 1]);
            }
        }
        return result;
    };
    RegExpParseService.joinLookbehind = function (data) {
        // [ ..., '(', '?', '<', '=', ... ] => [ ..., '(', ['?', '<', '='], ... ]
        var result = data.slice();
        for (var i = 0; i < result.length; i++) {
            if (result[i] === '?' && result[i + 1] && result[i - 1] && result[i + 2] && result[i - 1] === '(' &&
                result[i + 1] === '<' && (result[i + 2] === '=' || result[i + 2] === '!')) {
                result.splice(i, 3, result[i] + result[i + 1] + result[i + 2]);
            }
        }
        return result;
    };
    RegExpParseService.joinEscapeChars = function (data) {
        var result = data.slice();
        for (var i = 0; i < result.length; i++) {
            if (result[i] === '\\') {
                result.splice(i, 2, result[i] + result[i + 1]);
            }
        }
        return result;
    };
    RegExpParseService.joinCharCodes = function (data) {
        var result = data.slice();
        var balance = 0;
        for (var i = 0; i < result.length; i++) {
            switch (result[i]) {
                case '[':
                    balance++;
                    break;
                case ']':
                    balance--;
                    break;
            }
            if (balance === 1 && result[i] === '\\x' && result[i + 1] && result[i + 2]) {
                result.splice(i, 3, result[i] + result[i + 1] + result[i + 2]);
            }
        }
        return result;
    };
    RegExpParseService.joinRanges = function (data) {
        var result = data.slice();
        var balance = 0;
        for (var i = 0; i < result.length; i++) {
            switch (result[i]) {
                case '[':
                    balance++;
                    break;
                case ']':
                    balance--;
                    break;
            }
            if (balance === 1 && result[i] === '-' && result[i + 1] && result[i - 1] && result[i - 1] !== '[' && result[i + 1] !== ']') {
                result.splice(i - 1, 3, result[i - 1] + result[i] + result[i + 1]);
                i--;
            }
        }
        return result;
    };
    RegExpParseService.checkDataForRoundBracketBalance = function (data) {
        var balance = 0;
        for (var i = 0; i < data.length; i++) {
            switch (data[i]) {
                case '(':
                    balance++;
                    break;
                case ')':
                    balance--;
                    break;
                default: continue;
            }
            if (balance < 0) {
                return false;
            }
        }
        return balance === 0;
    };
    RegExpParseService.checkDataForSquareBracketBalance = function (data) {
        var balance = 0;
        for (var i = 0; i < data.length; i++) {
            switch (data[i]) {
                case '[':
                    balance++;
                    break;
                case ']':
                    balance--;
                    break;
            }
            if (balance < 0 || balance > 1) {
                return false;
            }
            if (balance === 1 && (data[i] === '(' || data[i] === ')' || data[i] === '{' || data[i] === '}')) {
                return false;
            }
        }
        return balance === 0;
    };
    RegExpParseService.checkDataForCurlyBracketBalance = function (data) {
        var balance = 0;
        for (var i = 0; i < data.length; i++) {
            switch (data[i]) {
                case '{':
                    balance++;
                    break;
                case '}':
                    balance--;
                    break;
            }
            if (balance < 0 || balance > 1) {
                return false;
            }
            if (balance === 1 && (data[i] === '(' || data[i] === ')' || data[i] === '[' || data[i] === ']')) {
                return false;
            }
        }
        return balance === 0;
    };
    return RegExpParseService;
}());
RegExpParseService = RegExpParseService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], RegExpParseService);

var RegExpParseService_1;
//# sourceMappingURL=reg-exp-parse.service.js.map

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeData; });
var RangeData = (function () {
    function RangeData() {
    }
    return RangeData;
}());

//# sourceMappingURL=range-data.model.js.map

/***/ }),
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 88;


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(134);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__elements_element_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__text_input_beauty_data_selection_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(elementService, selectionService) {
        this.elementService = elementService;
        this.selectionService = selectionService;
        this.selectedMainElement = null;
        this.elementToEdit = false;
        this.isHideMainEl = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.elementClickedSubscription = this.elementService.getClickedElement()
            .subscribe(function (element) { return _this.selectedMainElement = element; });
        this.editElementClickedSubscription = this.elementService.getElementToEditClick()
            .subscribe(function (show) { return _this.elementToEdit = show; });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.elementClickedSubscription.unsubscribe();
        this.editElementClickedSubscription.unsubscribe();
    };
    AppComponent.prototype.deleteStartSelection = function () {
        this.selectionService.deleteStart();
    };
    AppComponent.prototype.hideMainElements = function (hide) {
        this.isHideMainEl = hide;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'main-app',
        template: __webpack_require__(210),
        styles: [__webpack_require__(188)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__elements_element_service__["a" /* ElementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__elements_element_service__["a" /* ElementService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__text_input_beauty_data_selection_service__["a" /* SelectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__text_input_beauty_data_selection_service__["a" /* SelectionService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__text_input_selected_element_selected_element_module__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_elements_main_elements_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__text_input_text_input_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__text_input_beauty_data_beauty_data_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__text_input_beauty_data_selected_element_view_selected_element_view_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__text_input_beauty_data_range_beauty_data_range_beauty_data_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__text_input_read_reg_exp_read_reg_exp_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__text_input_caret_caret_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__text_input_beauty_data_lookaround_arrow_lookaround_arrow_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__text_input_beauty_data_placeholder_placeholder_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__elements_element_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dataArray_dataArray_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__text_input_selected_element_hint_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__text_input_beauty_data_beauty_data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__text_input_beauty_data_quantifier_quantifier_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__text_input_beauty_data_selection_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_all_elements_position_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__text_input_beauty_data_quantifier_notification_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__text_input_read_reg_exp_reg_exp_parse_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_array_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_input_from_keyboard_service__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Importing system modules



// Importing modules

// Importing components










// Importing services











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__text_input_selected_element_selected_element_module__["a" /* SelectedElementModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__main_elements_main_elements_component__["a" /* MainElementsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__text_input_text_input_component__["a" /* TextInputComponent */],
            __WEBPACK_IMPORTED_MODULE_7__text_input_beauty_data_beauty_data_component__["a" /* BeautyDataComponent */],
            __WEBPACK_IMPORTED_MODULE_8__text_input_beauty_data_selected_element_view_selected_element_view_component__["a" /* SelectedElementViewComponent */],
            __WEBPACK_IMPORTED_MODULE_11__text_input_caret_caret_component__["a" /* CaretComponent */],
            __WEBPACK_IMPORTED_MODULE_9__text_input_beauty_data_range_beauty_data_range_beauty_data_component__["a" /* RangeBeautyDataComponent */],
            __WEBPACK_IMPORTED_MODULE_10__text_input_read_reg_exp_read_reg_exp_component__["a" /* ReadRegExpComponent */],
            __WEBPACK_IMPORTED_MODULE_12__text_input_beauty_data_lookaround_arrow_lookaround_arrow_component__["a" /* LookaroundArrowComponent */],
            __WEBPACK_IMPORTED_MODULE_13__text_input_beauty_data_placeholder_placeholder_component__["a" /* PlaceholderComponent */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__elements_element_service__["a" /* ElementService */],
            __WEBPACK_IMPORTED_MODULE_15__dataArray_dataArray_service__["a" /* DataArrayService */],
            __WEBPACK_IMPORTED_MODULE_16__text_input_selected_element_hint_service__["a" /* HintService */],
            __WEBPACK_IMPORTED_MODULE_17__text_input_beauty_data_beauty_data_service__["a" /* BeautyDataService */],
            __WEBPACK_IMPORTED_MODULE_18__text_input_beauty_data_quantifier_quantifier_service__["a" /* QuantifierService */],
            __WEBPACK_IMPORTED_MODULE_19__text_input_beauty_data_selection_service__["a" /* SelectionService */],
            __WEBPACK_IMPORTED_MODULE_20__services_all_elements_position_service__["a" /* AllElementsPositionService */],
            __WEBPACK_IMPORTED_MODULE_21__text_input_beauty_data_quantifier_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_22__text_input_read_reg_exp_reg_exp_parse_service__["a" /* RegExpParseService */],
            __WEBPACK_IMPORTED_MODULE_23__services_array_service__["a" /* ArrayService */],
            __WEBPACK_IMPORTED_MODULE_24__services_input_from_keyboard_service__["a" /* InputFromKeyboardService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__elements_element_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dataArray_dataArray_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_all_elements_position_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__text_input_beauty_data_beauty_data_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainElementsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainElementsComponent = (function () {
    function MainElementsComponent(elementService, dataArrayService, beautyDataService, allElPosService) {
        this.elementService = elementService;
        this.dataArrayService = dataArrayService;
        this.beautyDataService = beautyDataService;
        this.allElPosService = allElPosService;
        this.displayMainEl = true;
        this.STATIC_HINT = 'Type text or choose token to make advanced search.';
        this.customHint = '';
    }
    MainElementsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getElements();
        this.elementService.displayNoMainElSubscription().subscribe(function (data) {
            _this.displayMainEl = data.show;
            _this.customHint = data.hint;
        });
    };
    MainElementsComponent.prototype.onMouseOver = function (element) {
        this.hoveredElement = element;
    };
    MainElementsComponent.prototype.onMouseOut = function () {
        this.hoveredElement = undefined;
    };
    MainElementsComponent.prototype.onSelect = function (element) {
        if (element.name !== 'or') {
            this.elementService.elementClicked(element);
        }
        else {
            this.handleOr();
        }
    };
    MainElementsComponent.prototype.handleOr = function () {
        var globalData = this.dataArrayService.getData();
        var inputFromKeyboard = this.allElPosService.getInputFromKeyboard();
        var data = ['|'];
        if (!inputFromKeyboard) {
            globalData = globalData.concat(data);
            this.dataArrayService.setData(globalData);
        }
        else {
            this.insertOrElement(data, inputFromKeyboard);
            this.allElPosService.setInputFromKeyboardIndex(inputFromKeyboard.index + 1);
            this.dataArrayService.informTextInpCompToRecompileDataFromViewData('fixCaret');
        }
    };
    MainElementsComponent.prototype.insertOrElement = function (data, inputFromKeyboard) {
        var newOrWrapped = this.beautyDataService.compileViewDataFromData(data.slice())[0];
        var spliceIndex = inputFromKeyboard.index + (inputFromKeyboard.direction === 'left' ? 0 : 1);
        var newOr = newOrWrapped[0];
        inputFromKeyboard.parent.splice(spliceIndex, 0, newOr);
    };
    MainElementsComponent.prototype.getElements = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1__elements_element_service__["a" /* ElementService */].getElements().then(function (elements) { return _this.elements = elements; });
    };
    return MainElementsComponent;
}());
MainElementsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'main-elements',
        template: __webpack_require__(211),
        styles: [__webpack_require__(189)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__elements_element_service__["a" /* ElementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__elements_element_service__["a" /* ElementService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__dataArray_dataArray_service__["a" /* DataArrayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dataArray_dataArray_service__["a" /* DataArrayService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__text_input_beauty_data_beauty_data_service__["a" /* BeautyDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__text_input_beauty_data_beauty_data_service__["a" /* BeautyDataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_all_elements_position_service__["a" /* AllElementsPositionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_all_elements_position_service__["a" /* AllElementsPositionService */]) === "function" && _d || Object])
], MainElementsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=main-elements.component.js.map

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return anchors; });
var anchors = {
    id: 5,
    name: 'Anchors',
    hint: 'Anchors are used for matching in the specific position.',
    data: [
        {
            name: 'Word Boundary',
            symbol: String.fromCharCode(8697),
            regExp: '\\b',
            className: 'anchor'
        },
        {
            name: 'Non-Word Boundary',
            symbol: String.fromCharCode(8697),
            regExp: '\\B',
            className: 'anchorOpposite'
        },
        {
            name: 'Start of string',
            symbol: '⇱',
            regExp: '\\A',
            className: 'anchor'
        },
        {
            name: 'End of string',
            symbol: '⇲',
            regExp: '\\Z',
            className: 'anchor'
        },
        {
            name: 'Start of line',
            symbol: '⇤',
            regExp: '^',
            className: 'anchor'
        },
        {
            name: 'End of line',
            symbol: '⇥',
            regExp: '$',
            className: 'anchor'
        },
        {
            name: 'Start of match',
            symbol: '...|',
            regExp: '\\G',
            className: 'anchor'
        },
        {
            name: 'Absolute end of string',
            symbol: '⇲⇲',
            regExp: '\\z',
            className: 'anchor'
        },
    ]
};
//# sourceMappingURL=anchors.js.map

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultEl; });
var defaultEl = {
    id: 1,
    name: 'default',
    hint: 'Type text or choose token to make advanced search.',
};
//# sourceMappingURL=default.js.map

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return group; });
var group = {
    id: 3,
    name: 'Group',
    hint: 'Group is used for grouping text or tokens to change priority or make capturing for replacing.',
    data: [
        {
            name: 'Capture',
            defBg: 'purple',
        },
        {
            name: 'Non-capture',
            defBg: 'brightPurple',
        }
    ]
};
//# sourceMappingURL=group.js.map

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return lookaround; });
var lookaround = {
    id: 4,
    name: 'Lookaround',
    hint: 'Lookaround matches a group after your main expression without including it in the result.',
    data: [
        {
            name: 'Look ahead',
            regExp: '?'
        },
        {
            name: 'Look behind',
            regExp: '?<'
        },
        {
            name: 'Positive',
            regExp: '='
        },
        {
            name: 'Negative',
            regExp: '!'
        }
    ]
};
//# sourceMappingURL=lookaround.js.map

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return orEl; });
var orEl = {
    id: 6,
    name: 'or',
    hint: 'Logical \'or\' is used for variation of matching.',
    data: {
        symbol: 'or',
        regExp: '|'
    }
};
//# sourceMappingURL=or.js.map

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return range; });
var range = {
    id: 2,
    name: 'Range',
    hint: 'Range is used for matching character or range of characters.',
    data: {}
};
//# sourceMappingURL=range.js.map

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ascii; });
var ascii = [
    {
        name: 'NUL',
        hint: 'DEC: 0   OCT: 000   HEX: 00   BIN: 00000000   HTML: &#000;   Description: Null char',
        nameForRegExp: '\\x00'
    },
    {
        name: 'SOH',
        hint: 'DEC: 1   OCT: 001   HEX: 01   BIN: 00000001   HTML: &#001;   Description: Start of Heading',
        nameForRegExp: '\\x01'
    },
    {
        name: 'STX',
        hint: 'DEC: 2   OCT: 002   HEX: 02   BIN: 00000010   HTML: &#002;   Description: Start of Text',
        nameForRegExp: '\\x02'
    },
    {
        name: 'ETX',
        hint: 'DEC: 3   OCT: 003   HEX: 03   BIN: 00000011   HTML: &#003;   Description: End of Text',
        nameForRegExp: '\\x03'
    },
    {
        name: 'EOT',
        hint: 'DEC: 4   OCT: 004   HEX: 04   BIN: 00000100   HTML: &#004;   Description: End of Transmission',
        nameForRegExp: '\\x04'
    },
    {
        name: 'ENQ',
        hint: 'DEC: 5   OCT: 005   HEX: 05   BIN: 00000101   HTML: &#005;   Description: Enquiry',
        nameForRegExp: '\\x05'
    },
    {
        name: 'ACK',
        hint: 'DEC: 6   OCT: 006   HEX: 06   BIN: 00000110   HTML: &#006;   Description: Acknowledgment',
        nameForRegExp: '\\x06'
    },
    {
        name: 'BEL',
        hint: 'DEC: 7   OCT: 007   HEX: 07   BIN: 00000111   HTML: &#007;   Description: Bell',
        nameForRegExp: '\\a'
    },
    {
        name: 'BS',
        hint: 'DEC: 8   OCT: 010   HEX: 08   BIN: 00001000   HTML: &#008;   Description: Back Space',
        nameForRegExp: '\\b'
    },
    {
        name: 'HT',
        hint: 'DEC: 9   OCT: 011   HEX: 09   BIN: 00001001   HTML: &#009;   Description: Horizontal Tab',
        nameForRegExp: '\\t'
    },
    {
        name: 'LF',
        hint: 'DEC: 10   OCT: 012   HEX: 0A   BIN: 00001010   HTML: &#010;   Description: Line Feed',
        nameForRegExp: '\\n'
    },
    {
        name: 'VT',
        hint: 'DEC: 11   OCT: 013   HEX: 0B   BIN: 00001011   HTML: &#011;   Description: Vertical Tab',
        nameForRegExp: '\\v'
    },
    {
        name: 'FF',
        hint: 'DEC: 12   OCT: 014   HEX: 0C   BIN: 00001100   HTML: &#012;   Description: Form Feed',
        nameForRegExp: '\\f'
    },
    {
        name: 'CR',
        hint: 'DEC: 13   OCT: 015   HEX: 0D   BIN: 00001101   HTML: &#013;   Description: Carriage Return',
        nameForRegExp: '\\r'
    },
    {
        name: 'SO',
        hint: 'DEC: 14   OCT: 016   HEX: 0E   BIN: 00001110   HTML: &#014;   Description: Shift Out / X-On',
        nameForRegExp: '\\x0E'
    },
    {
        name: 'SI',
        hint: 'DEC: 15   OCT: 017   HEX: 0F   BIN: 00001111   HTML: &#015;   Description: Shift In / X-Off',
        nameForRegExp: '\\x0F'
    },
    {
        hint: 'DEC: 16   OCT: 020   HEX: 10   BIN: 00010000   HTML: &#016;   Description: Data Line Escape',
        name: 'DLE',
        nameForRegExp: '\\x10'
    },
    {
        hint: 'DEC: 17   OCT: 021   HEX: 11   BIN: 00010001   HTML: &#017;   Description: Device Control 1 (oft. XON)',
        name: 'DC1',
        nameForRegExp: '\\x11'
    },
    {
        hint: 'DEC: 18   OCT: 022   HEX: 12   BIN: 00010010   HTML: &#018;   Description: Device Control 2',
        name: 'DC2',
        nameForRegExp: '\\x12'
    },
    {
        hint: 'DEC: 19   OCT: 023   HEX: 13   BIN: 00010011   HTML: &#019;   Description: Device Control 3 (oft. XOFF)',
        name: 'DC3',
        nameForRegExp: '\\x13'
    },
    {
        hint: 'DEC: 20   OCT: 024   HEX: 14   BIN: 00010100   HTML: &#020;   Description: Device Control 4',
        name: 'DC4',
        nameForRegExp: '\\x14'
    },
    {
        hint: 'DEC: 21   OCT: 025   HEX: 15   BIN: 00010101   HTML: &#021;   Description: Negative Acknowledgement',
        name: 'NAK',
        nameForRegExp: '\\x15'
    },
    {
        hint: 'DEC: 22   OCT: 026   HEX: 16   BIN: 00010110   HTML: &#022;   Description: Synchronous Idle',
        name: 'SYN',
        nameForRegExp: '\\x16'
    },
    {
        hint: 'DEC: 23   OCT: 027   HEX: 17   BIN: 00010111   HTML: &#023;   Description: End of Transmit Block',
        name: 'ETB',
        nameForRegExp: '\\x17'
    },
    {
        hint: 'DEC: 24   OCT: 030   HEX: 18   BIN: 00011000   HTML: &#024;   Description: Cancel',
        name: 'CAN',
        nameForRegExp: '\\x18'
    },
    {
        hint: 'DEC: 25   OCT: 031   HEX: 19   BIN: 00011001   HTML: &#025;   Description: End of Medium',
        name: 'EM',
        nameForRegExp: '\\x19'
    },
    {
        hint: 'DEC: 26   OCT: 032   HEX: 1A   BIN: 00011010   HTML: &#026;   Description: Substitute',
        name: 'SUB',
        nameForRegExp: '\\x1A'
    },
    {
        hint: 'DEC: 27   OCT: 033   HEX: 1B   BIN: 00011011   HTML: &#027;   Description: Escape',
        name: 'ESC',
        nameForRegExp: '\\e'
    },
    {
        hint: 'DEC: 28   OCT: 034   HEX: 1C   BIN: 00011100   HTML: &#028;   Description: File Separator',
        name: 'FS',
        nameForRegExp: '\\x1C'
    },
    {
        hint: 'DEC: 29   OCT: 035   HEX: 1D   BIN: 00011101   HTML: &#029;   Description: Group Separator',
        name: 'GS',
        nameForRegExp: '\\x1D'
    },
    {
        hint: 'DEC: 30   OCT: 036   HEX: 1E   BIN: 00011110   HTML: &#030;   Description: Record Separator',
        name: 'RS',
        nameForRegExp: '\\x1E'
    },
    {
        hint: 'DEC: 31   OCT: 037   HEX: 1F   BIN: 00011111   HTML: &#031;   Description: Unit Separator',
        name: 'US',
        nameForRegExp: '\\x1F'
    },
    {
        hint: 'DEC: 32   OCT: 040   HEX: 20   BIN: 00100000   HTML: &#032;   Description: Space',
        name: String.fromCharCode(32),
        nameForRegExp: ' '
    },
    {
        hint: 'DEC: 33   OCT: 041   HEX: 21   BIN: 00100001   HTML: &#033;   Description: Exclamation mark',
        name: '!',
        nameForRegExp: '\\!'
    },
    {
        hint: 'DEC: 34   OCT: 042   HEX: 22   BIN: 00100010   HTML: &#034;   Description: Double quotes (or speech marks)',
        name: '\"',
        nameForRegExp: '\"'
    },
    {
        hint: 'DEC: 35   OCT: 043   HEX: 23   BIN: 00100011   HTML: &#035;   Description: Number',
        name: '#',
        nameForRegExp: '\\#'
    },
    {
        hint: 'DEC: 36   OCT: 044   HEX: 24   BIN: 00100100   HTML: &#036;   Description: Dollar',
        name: '$',
        nameForRegExp: '\\$'
    },
    {
        hint: 'DEC: 37   OCT: 045   HEX: 25   BIN: 00100101   HTML: &#037;   Description: Procenttecken',
        name: '%',
        nameForRegExp: '%'
    },
    {
        hint: 'DEC: 38   OCT: 046   HEX: 26   BIN: 00100110   HTML: &#038;   Description: Ampersand',
        name: '&',
        nameForRegExp: '\\&'
    },
    {
        hint: 'DEC: 39   OCT: 047   HEX: 27   BIN: 00100111   HTML: &#039;   Description: Single quote',
        name: '\'',
        nameForRegExp: '\''
    },
    {
        hint: 'DEC: 40   OCT: 050   HEX: 28   BIN: 00101000   HTML: &#040;   Description: Open parenthesis (or open bracket)',
        name: '(',
        nameForRegExp: '\\('
    },
    {
        hint: 'DEC: 41   OCT: 051   HEX: 29   BIN: 00101001   HTML: &#041;   Description: Close parenthesis (or close bracket)',
        name: ')',
        nameForRegExp: '\\)'
    },
    {
        hint: 'DEC: 42   OCT: 052   HEX: 2A   BIN: 00101010   HTML: &#042;   Description: Asterisk',
        name: '*',
        nameForRegExp: '\\*'
    },
    {
        hint: 'DEC: 43   OCT: 053   HEX: 2B   BIN: 00101011   HTML: &#043;   Description: Plus',
        name: '+',
        nameForRegExp: '\\+'
    },
    {
        hint: 'DEC: 44   OCT: 054   HEX: 2C   BIN: 00101100   HTML: &#044;   Description: Comma',
        name: ',',
        nameForRegExp: '\\,'
    },
    {
        hint: 'DEC: 45   OCT: 055   HEX: 2D   BIN: 00101101   HTML: &#045;   Description: Hyphen',
        name: '-',
        nameForRegExp: '\\-'
    },
    {
        hint: 'DEC: 46   OCT: 056   HEX: 2E   BIN: 00101110   HTML: &#046;   Description: Period, dot or full stop',
        name: '.',
        nameForRegExp: '\\.'
    },
    {
        hint: 'DEC: 47   OCT: 057   HEX: 2F   BIN: 00101111   HTML: &#047;   Description: Slash or divide',
        name: '/',
        nameForRegExp: '/'
    },
    {
        hint: 'DEC: 48   OCT: 060   HEX: 30   BIN: 00110000   HTML: &#048;   Description: Zero',
        name: '0',
        nameForRegExp: '0'
    },
    {
        hint: 'DEC: 49   OCT: 061   HEX: 31   BIN: 00110001   HTML: &#049;   Description: One',
        name: '1',
        nameForRegExp: '1'
    },
    {
        hint: 'DEC: 50   OCT: 062   HEX: 32   BIN: 00110010   HTML: &#050;   Description: Two',
        name: '2',
        nameForRegExp: '2'
    },
    {
        hint: 'DEC: 51   OCT: 063   HEX: 33   BIN: 00110011   HTML: &#051;   Description: Three',
        name: '3',
        nameForRegExp: '3'
    },
    {
        hint: 'DEC: 52   OCT: 064   HEX: 34   BIN: 00110100   HTML: &#052;   Description: Four',
        name: '4',
        nameForRegExp: '4'
    },
    {
        hint: 'DEC: 53   OCT: 065   HEX: 35   BIN: 00110101   HTML: &#053;   Description: Five',
        name: '5',
        nameForRegExp: '5'
    },
    {
        hint: 'DEC: 54   OCT: 066   HEX: 36   BIN: 00110110   HTML: &#054;   Description: Six',
        name: '6',
        nameForRegExp: '6'
    },
    {
        hint: 'DEC: 55   OCT: 067   HEX: 37   BIN: 00110111   HTML: &#055;   Description: Seven',
        name: '7',
        nameForRegExp: '7'
    },
    {
        hint: 'DEC: 56   OCT: 070   HEX: 38   BIN: 00111000   HTML: &#056;   Description: Eight',
        name: '8',
        nameForRegExp: '8'
    },
    {
        hint: 'DEC: 57   OCT: 071   HEX: 39   BIN: 00111001   HTML: &#057;   Description: Nine',
        name: '9',
        nameForRegExp: '9'
    },
    {
        hint: 'DEC: 58   OCT: 072   HEX: 3A   BIN: 00111010   HTML: &#058;   Description: Colon',
        name: ':',
        nameForRegExp: '\\:'
    },
    {
        hint: 'DEC: 59   OCT: 073   HEX: 3B   BIN: 00111011   HTML: &#059;   Description: Semicolon',
        name: ';',
        nameForRegExp: ';'
    },
    {
        hint: 'DEC: 60   OCT: 074   HEX: 3C   BIN: 00111100   HTML: &#060;   Description: Less than (or open angled bracket)',
        name: '<',
        nameForRegExp: '<'
    },
    {
        hint: 'DEC: 61   OCT: 075   HEX: 3D   BIN: 00111101   HTML: &#061;   Description: Equals',
        name: '=',
        nameForRegExp: '\\='
    },
    {
        hint: 'DEC: 62   OCT: 076   HEX: 3E   BIN: 00111110   HTML: &#062;   Description: Greater than (or close angled bracket)',
        name: '>',
        nameForRegExp: '>'
    },
    {
        hint: 'DEC: 63   OCT: 077   HEX: 3F   BIN: 00111111   HTML: &#063;   Description: Question mark',
        name: '?',
        nameForRegExp: '\\?'
    },
    {
        hint: 'DEC: 64   OCT: 100   HEX: 40   BIN: 01000000   HTML: &#064;   Description: At symbol',
        name: '@',
        nameForRegExp: '@'
    },
    {
        hint: 'DEC: 65   OCT: 101   HEX: 41   BIN: 01000001   HTML: &#065;   Description: Uppercase A',
        name: 'A',
        nameForRegExp: 'A'
    },
    {
        hint: 'DEC: 66   OCT: 102   HEX: 42   BIN: 01000010   HTML: &#066;   Description: Uppercase B',
        name: 'B',
        nameForRegExp: 'B'
    },
    {
        hint: 'DEC: 67   OCT: 103   HEX: 43   BIN: 01000011   HTML: &#067;   Description: Uppercase C',
        name: 'C',
        nameForRegExp: 'C'
    },
    {
        hint: 'DEC: 68   OCT: 104   HEX: 44   BIN: 01000100   HTML: &#068;   Description: Uppercase D',
        name: 'D',
        nameForRegExp: 'D'
    },
    {
        hint: 'DEC: 69   OCT: 105   HEX: 45   BIN: 01000101   HTML: &#069;   Description: Uppercase E',
        name: 'E',
        nameForRegExp: 'E'
    },
    {
        hint: 'DEC: 70   OCT: 106   HEX: 46   BIN: 01000110   HTML: &#070;   Description: Uppercase F',
        name: 'F',
        nameForRegExp: 'F'
    },
    {
        hint: 'DEC: 71   OCT: 107   HEX: 47   BIN: 01000111   HTML: &#071;   Description: Uppercase G',
        name: 'G',
        nameForRegExp: 'G'
    },
    {
        hint: 'DEC: 72   OCT: 110   HEX: 48   BIN: 01001000   HTML: &#072;   Description: Uppercase H',
        name: 'H',
        nameForRegExp: 'H'
    },
    {
        hint: 'DEC: 73   OCT: 111   HEX: 49   BIN: 01001001   HTML: &#073;   Description: Uppercase I',
        name: 'I',
        nameForRegExp: 'I'
    },
    {
        hint: 'DEC: 74   OCT: 112   HEX: 4A   BIN: 01001010   HTML: &#074;   Description: Uppercase J',
        name: 'J',
        nameForRegExp: 'J'
    },
    {
        hint: 'DEC: 75   OCT: 113   HEX: 4B   BIN: 01001011   HTML: &#075;   Description: Uppercase K',
        name: 'K',
        nameForRegExp: 'K'
    },
    {
        hint: 'DEC: 76   OCT: 114   HEX: 4C   BIN: 01001100   HTML: &#076;   Description: Uppercase L',
        name: 'L',
        nameForRegExp: 'L'
    },
    {
        hint: 'DEC: 77   OCT: 115   HEX: 4D   BIN: 01001101   HTML: &#077;   Description: Uppercase M',
        name: 'M',
        nameForRegExp: 'M'
    },
    {
        hint: 'DEC: 78   OCT: 116   HEX: 4E   BIN: 01001110   HTML: &#078;   Description: Uppercase N',
        name: 'N',
        nameForRegExp: 'N'
    },
    {
        hint: 'DEC: 79   OCT: 117   HEX: 4F   BIN: 01001111   HTML: &#079;   Description: Uppercase O',
        name: 'O',
        nameForRegExp: 'O'
    },
    {
        hint: 'DEC: 80   OCT: 120   HEX: 50   BIN: 01010000   HTML: &#080;   Description: Uppercase P',
        name: 'P',
        nameForRegExp: 'P'
    },
    {
        hint: 'DEC: 81   OCT: 121   HEX: 51   BIN: 01010001   HTML: &#081;   Description: Uppercase Q',
        name: 'Q',
        nameForRegExp: 'Q'
    },
    {
        hint: 'DEC: 82   OCT: 122   HEX: 52   BIN: 01010010   HTML: &#082;   Description: Uppercase R',
        name: 'R',
        nameForRegExp: 'R'
    },
    {
        hint: 'DEC: 83   OCT: 123   HEX: 53   BIN: 01010011   HTML: &#083;   Description: Uppercase S',
        name: 'S',
        nameForRegExp: 'S'
    },
    {
        hint: 'DEC: 84   OCT: 124   HEX: 54   BIN: 01010100   HTML: &#084;   Description: Uppercase T',
        name: 'T',
        nameForRegExp: 'T'
    },
    {
        hint: 'DEC: 85   OCT: 125   HEX: 55   BIN: 01010101   HTML: &#085;   Description: Uppercase U',
        name: 'U',
        nameForRegExp: 'U'
    },
    {
        hint: 'DEC: 86   OCT: 126   HEX: 56   BIN: 01010110   HTML: &#086;   Description: Uppercase V',
        name: 'V',
        nameForRegExp: 'V'
    },
    {
        hint: 'DEC: 87   OCT: 127   HEX: 57   BIN: 01010111   HTML: &#087;   Description: Uppercase W',
        name: 'W',
        nameForRegExp: 'W'
    },
    {
        hint: 'DEC: 88   OCT: 130   HEX: 58   BIN: 01011000   HTML: &#088;   Description: Uppercase X',
        name: 'X',
        nameForRegExp: 'X'
    },
    {
        hint: 'DEC: 89   OCT: 131   HEX: 59   BIN: 01011001   HTML: &#089;   Description: Uppercase Y',
        name: 'Y',
        nameForRegExp: 'Y'
    },
    {
        hint: 'DEC: 90   OCT: 132   HEX: 5A   BIN: 01011010   HTML: &#090;   Description: Uppercase Z',
        name: 'Z',
        nameForRegExp: 'Z'
    },
    {
        hint: 'DEC: 91   OCT: 133   HEX: 5B   BIN: 01011011   HTML: &#091;   Description: Opening bracket',
        name: '[',
        nameForRegExp: '\\['
    },
    {
        hint: 'DEC: 92   OCT: 134   HEX: 5C   BIN: 01011100   HTML: &#092;   Description: Backslash',
        name: '\\',
        nameForRegExp: '\\\\'
    },
    {
        hint: 'DEC: 93   OCT: 135   HEX: 5D   BIN: 01011101   HTML: &#093;   Description: Closing bracket',
        name: ']',
        nameForRegExp: '\\]'
    },
    {
        hint: 'DEC: 94   OCT: 136   HEX: 5E   BIN: 01011110   HTML: &#094;   Description: Caret - circumflex',
        name: '^',
        nameForRegExp: '\\^'
    },
    {
        hint: 'DEC: 95   OCT: 137   HEX: 5F   BIN: 01011111   HTML: &#095;   Description: Underscore',
        name: '_',
        nameForRegExp: '_'
    },
    {
        hint: 'DEC: 96   OCT: 140   HEX: 60   BIN: 01100000   HTML: &#096;   Description: Grave accent',
        name: '`',
        nameForRegExp: '`'
    },
    {
        hint: 'DEC: 97   OCT: 141   HEX: 61   BIN: 01100001   HTML: &#097;   Description: Lowercase a',
        name: 'a',
        nameForRegExp: 'a'
    },
    {
        hint: 'DEC: 98   OCT: 142   HEX: 62   BIN: 01100010   HTML: &#098;   Description: Lowercase b',
        name: 'b',
        nameForRegExp: 'b'
    },
    {
        hint: 'DEC: 99   OCT: 143   HEX: 63   BIN: 01100011   HTML: &#099;   Description: Lowercase c',
        name: 'c',
        nameForRegExp: 'c'
    },
    {
        hint: 'DEC: 100   OCT: 144   HEX: 64   BIN: 01100100   HTML: &#100;   Description: Lowercase d',
        name: 'd',
        nameForRegExp: 'd'
    },
    {
        hint: 'DEC: 101   OCT: 145   HEX: 65   BIN: 01100101   HTML: &#101;   Description: Lowercase e',
        name: 'e',
        nameForRegExp: 'e'
    },
    {
        hint: 'DEC: 102   OCT: 146   HEX: 66   BIN: 01100110   HTML: &#102;   Description: Lowercase f',
        name: 'f',
        nameForRegExp: 'f'
    },
    {
        hint: 'DEC: 103   OCT: 147   HEX: 67   BIN: 01100111   HTML: &#103;   Description: Lowercase g',
        name: 'g',
        nameForRegExp: 'g'
    },
    {
        hint: 'DEC: 104   OCT: 150   HEX: 68   BIN: 01101000   HTML: &#104;   Description: Lowercase h',
        name: 'h',
        nameForRegExp: 'h'
    },
    {
        hint: 'DEC: 105   OCT: 151   HEX: 69   BIN: 01101001   HTML: &#105;   Description: Lowercase i',
        name: 'i',
        nameForRegExp: 'i'
    },
    {
        hint: 'DEC: 106   OCT: 152   HEX: 6A   BIN: 01101010   HTML: &#106;   Description: Lowercase j',
        name: 'j',
        nameForRegExp: 'j'
    },
    {
        hint: 'DEC: 107   OCT: 153   HEX: 6B   BIN: 01101011   HTML: &#107;   Description: Lowercase k',
        name: 'k',
        nameForRegExp: 'k'
    },
    {
        hint: 'DEC: 108   OCT: 154   HEX: 6C   BIN: 01101100   HTML: &#108;   Description: Lowercase l',
        name: 'l',
        nameForRegExp: 'l'
    },
    {
        hint: 'DEC: 109   OCT: 155   HEX: 6D   BIN: 01101101   HTML: &#109;   Description: Lowercase m',
        name: 'm',
        nameForRegExp: 'm'
    },
    {
        hint: 'DEC: 110   OCT: 156   HEX: 6E   BIN: 01101110   HTML: &#110;   Description: Lowercase n',
        name: 'n',
        nameForRegExp: 'n'
    },
    {
        hint: 'DEC: 111   OCT: 157   HEX: 6F   BIN: 01101111   HTML: &#111;   Description: Lowercase o',
        name: 'o',
        nameForRegExp: 'o'
    },
    {
        hint: 'DEC: 112   OCT: 160   HEX: 70   BIN: 01110000   HTML: &#112;   Description: Lowercase p',
        name: 'p',
        nameForRegExp: 'p'
    },
    {
        hint: 'DEC: 113   OCT: 161   HEX: 71   BIN: 01110001   HTML: &#113;   Description: Lowercase q',
        name: 'q',
        nameForRegExp: 'q'
    },
    {
        hint: 'DEC: 114   OCT: 162   HEX: 72   BIN: 01110010   HTML: &#114;   Description: Lowercase r',
        name: 'r',
        nameForRegExp: 'r'
    },
    {
        hint: 'DEC: 115   OCT: 163   HEX: 73   BIN: 01110011   HTML: &#115;   Description: Lowercase s',
        name: 's',
        nameForRegExp: 's'
    },
    {
        hint: 'DEC: 116   OCT: 164   HEX: 74   BIN: 01110100   HTML: &#116;   Description: Lowercase t',
        name: 't',
        nameForRegExp: 't'
    },
    {
        hint: 'DEC: 117   OCT: 165   HEX: 75   BIN: 01110101   HTML: &#117;   Description: Lowercase u',
        name: 'u',
        nameForRegExp: 'u'
    },
    {
        hint: 'DEC: 118   OCT: 166   HEX: 76   BIN: 01110110   HTML: &#118;   Description: Lowercase v',
        name: 'v',
        nameForRegExp: 'v'
    },
    {
        hint: 'DEC: 119   OCT: 167   HEX: 77   BIN: 01110111   HTML: &#119;   Description: Lowercase w',
        name: 'w',
        nameForRegExp: 'w'
    },
    {
        hint: 'DEC: 120   OCT: 170   HEX: 78   BIN: 01111000   HTML: &#120;   Description: Lowercase x',
        name: 'x',
        nameForRegExp: 'x'
    },
    {
        hint: 'DEC: 121   OCT: 171   HEX: 79   BIN: 01111001   HTML: &#121;   Description: Lowercase y',
        name: 'y',
        nameForRegExp: 'y'
    },
    {
        hint: 'DEC: 122   OCT: 172   HEX: 7A   BIN: 01111010   HTML: &#122;   Description: Lowercase z',
        name: 'z',
        nameForRegExp: 'z'
    },
    {
        hint: 'DEC: 123   OCT: 173   HEX: 7B   BIN: 01111011   HTML: &#123;   Description: Opening brace',
        name: '{',
        nameForRegExp: '\\{'
    },
    {
        hint: 'DEC: 124   OCT: 174   HEX: 7C   BIN: 01111100   HTML: &#124;   Description: Vertical bar',
        name: '|',
        nameForRegExp: '\\|'
    },
    {
        hint: 'DEC: 125   OCT: 175   HEX: 7D   BIN: 01111101   HTML: &#125;   Description: Closing brace',
        name: '}',
        nameForRegExp: '\\}'
    },
    {
        hint: 'DEC: 126   OCT: 176   HEX: 7E   BIN: 01111110   HTML: &#126;   Description: Equivalency sign - tilde',
        name: '~',
        nameForRegExp: '~'
    },
    {
        hint: 'DEC: 127   OCT: 177   HEX: 7F   BIN: 01111111   HTML: &#127;   Description: Delete',
        name: 'DEL',
        nameForRegExp: '\\x7F'
    },
    {
        hint: 'DEC: 8364   OCT: 20254   HEX: 20AC   BIN: 10000010101100   HTML: &#8364;   Description: Euro sign',
        name: '€',
        nameForRegExp: '€'
    },
    {
        hint: 'DEC: 129   OCT: 201   HEX: 81   BIN: 10000001',
        name: String.fromCharCode(129),
        nameForRegExp: '\\x81'
    },
    {
        hint: 'DEC: 8218   OCT: 20032   HEX: 201A   BIN: 10000000011010   HTML: &#8218;   Description: Single low-9 quotation mark',
        name: '‚',
        nameForRegExp: '‚'
    },
    {
        hint: 'DEC: 402   OCT: 622   HEX: 192   BIN: 110010010   HTML: &#402;   Description: Latin small letter f with hook',
        name: 'ƒ',
        nameForRegExp: 'ƒ'
    },
    {
        hint: 'DEC: 8222   OCT: 20036   HEX: 201E   BIN: 10000000011110   HTML: &#8222;   Description: Double low-9 quotation mark',
        name: '„',
        nameForRegExp: '„'
    },
    {
        hint: 'DEC: 8230   OCT: 20046   HEX: 2026   BIN: 10000000100110   HTML: &#8230;   Description: Horizontal ellipsis',
        name: '…',
        nameForRegExp: '…'
    },
    {
        hint: 'DEC: 8224   OCT: 20040   HEX: 2020   BIN: 10000000100000   HTML: &#8224;   Description: Dagger',
        name: '†',
        nameForRegExp: '†'
    },
    {
        hint: 'DEC: 8225   OCT: 20041   HEX: 2021   BIN: 10000000100001   HTML: &#8225;   Description: Double dagger',
        name: '‡',
        nameForRegExp: '‡'
    },
    {
        hint: 'DEC: 710   OCT: 1306   HEX: 2C6   BIN: 1011000110   HTML: &#710;   Description: Modifier letter circumflex accent',
        name: 'ˆ',
        nameForRegExp: 'ˆ'
    },
    {
        hint: 'DEC: 8240   OCT: 20060   HEX: 2030   BIN: 10000000110000   HTML: &#8240;   Description: Per mille sign',
        name: '‰',
        nameForRegExp: '‰'
    },
    {
        hint: 'DEC: 352   OCT: 540   HEX: 160   BIN: 101100000   HTML: &#352;   Description: Latin capital letter S with caron',
        name: 'Š',
        nameForRegExp: 'Š'
    },
    {
        hint: 'DEC: 8249   OCT: 20071   HEX: 2039   BIN: 10000000111001   HTML: &#8249;  Description: Single left-pointing angle quotation',
        name: '‹',
        nameForRegExp: '‹'
    },
    {
        hint: 'DEC: 338   OCT: 522   HEX: 152   BIN: 101010010   HTML: &#338;   Description: Latin capital ligature OE',
        name: 'Œ',
        nameForRegExp: 'Œ'
    },
    {
        hint: 'DEC: 141   OCT: 215   HEX: 8D   BIN: 10001101',
        name: String.fromCharCode(141),
        nameForRegExp: '\\x8D'
    },
    {
        hint: 'DEC: 381   OCT: 575   HEX: 17D   BIN: 101111101   HTML: &#381;   Description: Latin captial letter Z with caron',
        name: 'Ž',
        nameForRegExp: 'Ž'
    },
    {
        hint: 'DEC: 143   OCT: 217   HEX: 8F   BIN: 10001111',
        name: String.fromCharCode(143),
        nameForRegExp: '\\x8F'
    },
    {
        hint: 'DEC: 144   OCT: 220   HEX: 90   BIN: 10010000',
        name: String.fromCharCode(144),
        nameForRegExp: '\\x90'
    },
    {
        hint: 'DEC: 8216   OCT: 20030   HEX: 2018   BIN: 10000000011000   HTML: &#8216;   Description: Left single quotation mark',
        name: '‘',
        nameForRegExp: '‘'
    },
    {
        hint: 'DEC: 8217   OCT: 20031   HEX: 2019   BIN: 10000000011001   HTML: &#8217;   Description: Right single quotation mark',
        name: '’',
        nameForRegExp: '’'
    },
    {
        hint: 'DEC: 8220   OCT: 20034   HEX: 201C   BIN: 10000000011100   HTML: &#8220;   Description: Left double quotation mark',
        name: '“',
        nameForRegExp: '“'
    },
    {
        hint: 'DEC: 8221   OCT: 20035   HEX: 201D   BIN: 10000000011101   HTML: &#8221;   Description: Right double quotation mark',
        name: '”',
        nameForRegExp: '”'
    },
    {
        hint: 'DEC: 8226   OCT: 20042   HEX: 2022   BIN: 10000000100010   HTML: &#8226;   Description: Bullet',
        name: '•',
        nameForRegExp: '•'
    },
    {
        hint: 'DEC: 8211   OCT: 20023   HEX: 2013   BIN: 10000000010011   HTML: &#8211;   Description: En dash',
        name: '–',
        nameForRegExp: '–'
    },
    {
        hint: 'DEC: 8212   OCT: 20024   HEX: 2014   BIN: 10000000010100   HTML: &#8212;   Description: Em dash',
        name: '—',
        nameForRegExp: '—'
    },
    {
        hint: 'DEC: 732   OCT: 1334   HEX: 2DC   BIN: 1011011100   HTML: &#732;   Description: Small tilde',
        name: '˜',
        nameForRegExp: '˜'
    },
    {
        hint: 'DEC: 8482   OCT: 20442   HEX: 2122   BIN: 10000100100010   HTML: &#8482;   Description: Trade mark sign',
        name: '™',
        nameForRegExp: '™'
    },
    {
        hint: 'DEC: 353   OCT: 541   HEX: 161   BIN: 101100001   HTML: &#353;   Description: Latin small letter S with caron',
        name: 'š',
        nameForRegExp: 'š'
    },
    {
        hint: 'DEC: 8250   OCT: 20072   HEX: 203A   BIN: 10000000111010   HTML: &#8250;   Description: Single right-pointing angle quotation mark',
        name: '›',
        nameForRegExp: '›'
    },
    {
        hint: 'DEC: 339   OCT: 523   HEX: 153   BIN: 101010011   HTML: &#339;   Description: Latin small ligature oe',
        name: 'œ',
        nameForRegExp: 'œ'
    },
    {
        hint: 'DEC: 157   OCT: 235   HEX: 9D   BIN: 10011101',
        name: String.fromCharCode(157),
        nameForRegExp: '\\x9D'
    },
    {
        hint: 'DEC: 382   OCT: 576   HEX: 17E   BIN: 101111110   HTML: &#382;   Description: Latin small letter z with caron',
        name: 'ž',
        nameForRegExp: 'ž'
    },
    {
        hint: 'DEC: 376   OCT: 570   HEX: 178   BIN: 101111000   HTML: &#376;   Description: Latin capital letter Y with diaeresis',
        name: 'Ÿ',
        nameForRegExp: 'Ÿ'
    },
    {
        hint: 'DEC: 160   OCT: 240   HEX: A0   BIN: 10100000   HTML: &#160;   Description: Non-breaking space',
        name: String.fromCharCode(160),
        nameForRegExp: '\\xA0'
    },
    {
        hint: 'DEC: 161   OCT: 241   HEX: A1   BIN: 10100001   HTML: &#161;   Description: Inverted exclamation mark',
        name: '¡',
        nameForRegExp: '¡'
    },
    {
        hint: 'DEC: 162   OCT: 242   HEX: A2   BIN: 10100010   HTML: &#162;   Description: Cent sign',
        name: '¢',
        nameForRegExp: '¢'
    },
    {
        hint: 'DEC: 163   OCT: 243   HEX: A3   BIN: 10100011   HTML: &#163;   Description: Pound sign',
        name: '£',
        nameForRegExp: '£'
    },
    {
        hint: 'DEC: 164   OCT: 244   HEX: A4   BIN: 10100100   HTML: &#164;   Description: Currency sign',
        name: '¤',
        nameForRegExp: '¤'
    },
    {
        hint: 'DEC: 165   OCT: 245   HEX: A5   BIN: 10100101   HTML: &#165;   Description: Yen sign',
        name: '¥',
        nameForRegExp: '¥'
    },
    {
        hint: 'DEC: 166   OCT: 246   HEX: A6   BIN: 10100110   HTML: &#166;   Description: Pipe, Broken vertical bar',
        name: '¦',
        nameForRegExp: '¦'
    },
    {
        hint: 'DEC: 167   OCT: 247   HEX: A7   BIN: 10100111   HTML: &#167;   Description: Section sign',
        name: '§',
        nameForRegExp: '§'
    },
    {
        hint: 'DEC: 168   OCT: 250   HEX: A8   BIN: 10101000   HTML: &#168;   Description: Spacing diaeresis - umlaut',
        name: '¨',
        nameForRegExp: '¨'
    },
    {
        hint: 'DEC: 169   OCT: 251   HEX: A9   BIN: 10101001   HTML: &#169;   Description: Copyright sign',
        name: '©',
        nameForRegExp: '©'
    },
    {
        hint: 'DEC: 170   OCT: 252   HEX: AA   BIN: 10101010   HTML: &#170;   Description: Feminine ordinal indicator',
        name: 'ª',
        nameForRegExp: 'ª'
    },
    {
        hint: 'DEC: 171   OCT: 253   HEX: AB   BIN: 10101011   HTML: &#171;   Description: Left double angle quotes',
        name: '«',
        nameForRegExp: '«'
    },
    {
        hint: 'DEC: 172   OCT: 254   HEX: AC   BIN: 10101100   HTML: &#172;   Description: Not sign',
        name: '¬',
        nameForRegExp: '¬'
    },
    {
        hint: 'DEC: 173   OCT: 255   HEX: AD   BIN: 10101101   HTML: &#173;   Description: Soft hyphen',
        name: String.fromCharCode(173),
        nameForRegExp: '\\xAD'
    },
    {
        hint: 'DEC: 174   OCT: 256   HEX: AE   BIN: 10101110	HTML: &#174;   Description: Registered trade mark sign',
        name: '®',
        nameForRegExp: '®'
    },
    {
        hint: 'DEC: 175   OCT: 257   HEX: AF   BIN: 10101111   HTML: &#175;   Description: Spacing macron - overline',
        name: '¯',
        nameForRegExp: '¯'
    },
    {
        hint: 'DEC: 176   OCT: 260   HEX: B0   BIN: 10110000   HTML: &#176;   Description: Degree sign',
        name: '°',
        nameForRegExp: '°'
    },
    {
        hint: 'DEC: 177   OCT: 261   HEX: B1   BIN: 10110001   HTML: &#177;   Description: Plus-or-minus sign',
        name: '±',
        nameForRegExp: '±'
    },
    {
        hint: 'DEC: 178   OCT: 262   HEX: B2   BIN: 10110010   HTML: &#178;   Description: Superscript two - squared',
        name: '²',
        nameForRegExp: '²'
    },
    {
        hint: 'DEC: 179   OCT: 263   HEX: B3   BIN: 10110011   HTML: &#179;   Description: Superscript three - cubed',
        name: '³',
        nameForRegExp: '³'
    },
    {
        hint: 'DEC: 180   OCT: 264   HEX: B4   BIN: 10110100   HTML: &#180;   Description: Acute accent - spacing acute',
        name: '´',
        nameForRegExp: '´'
    },
    {
        hint: 'DEC: 181   OCT: 265   HEX: B5   BIN: 10110101   HTML: &#181;   Description: Micro sign',
        name: 'µ',
        nameForRegExp: 'µ'
    },
    {
        hint: 'DEC: 182   OCT: 266   HEX: B6   BIN: 10110110   HTML: &#182;   Description: Pilcrow sign - paragraph sign',
        name: '¶',
        nameForRegExp: '¶'
    },
    {
        hint: 'DEC: 183   OCT: 267   HEX: B7   BIN: 10110111   HTML: &#183;   Description: Middle dot - Georgian comma',
        name: '·',
        nameForRegExp: '·'
    },
    {
        hint: 'DEC: 184   OCT: 270   HEX: B8   BIN: 10111000   HTML: &#184;   Description: Spacing cedilla',
        name: '¸',
        nameForRegExp: '¸'
    },
    {
        hint: 'DEC: 185   OCT: 271   HEX: B9   BIN: 10111001   HTML: &#185;   Description: Superscript one',
        name: '¹',
        nameForRegExp: '¹'
    },
    {
        hint: 'DEC: 186   OCT: 272   HEX: BA   BIN: 10111010   HTML: &#186;   Description: Masculine ordinal indicator',
        name: 'º',
        nameForRegExp: 'º'
    },
    {
        hint: 'DEC: 187   OCT: 273   HEX: BB   BIN: 10111011   HTML: &#187;   Description: Right double angle quotes',
        name: '»',
        nameForRegExp: '»'
    },
    {
        hint: 'DEC: 188   OCT: 274   HEX: BC   BIN: 10111100   HTML: &#188;   Description: Fraction one quarter',
        name: '¼',
        nameForRegExp: '¼'
    },
    {
        hint: 'DEC: 189   OCT: 275   HEX: BD   BIN: 10111101   HTML: &#189;   Description: Fraction one half',
        name: '½',
        nameForRegExp: '½'
    },
    {
        hint: 'DEC: 190   OCT: 276   HEX: BE   BIN: 10111110   HTML: &#190;   Description: Fraction three quarters',
        name: '¾',
        nameForRegExp: '¾'
    },
    {
        hint: 'DEC: 191   OCT: 277   HEX: BF   BIN: 10111111   HTML: &#191;   Description: Inverted question mark',
        name: '¿',
        nameForRegExp: '¿'
    },
    {
        hint: 'DEC: 192   OCT: 300   HEX: C0   BIN: 11000000   HTML: &#192;   Description: Latin capital letter A with grave',
        name: 'À',
        nameForRegExp: 'À'
    },
    {
        hint: 'DEC: 193   OCT: 301   HEX: C1   BIN: 11000001   HTML: &#193;   Description: Latin capital letter A with acute',
        name: 'Á',
        nameForRegExp: 'Á'
    },
    {
        hint: 'DEC: 194   OCT: 302   HEX: C2   BIN: 11000010   HTML: &#194;   Description: Latin capital letter A with circumflex',
        name: 'Â',
        nameForRegExp: 'Â'
    },
    {
        hint: 'DEC: 195   OCT: 303   HEX: C3   BIN: 11000011   HTML: &#195;   Description: Latin capital letter A with tilde',
        name: 'Ã',
        nameForRegExp: 'Ã'
    },
    {
        hint: 'DEC: 196   OCT: 304   HEX: C4   BIN: 11000100   HTML: &#196;   Description: Latin capital letter A with diaeresis',
        name: 'Ä',
        nameForRegExp: 'Ä'
    },
    {
        hint: 'DEC: 197   OCT: 305   HEX: C5   BIN: 11000101   HTML: &#197;   Description: Latin capital letter A with ring above',
        name: 'Å',
        nameForRegExp: 'Å'
    },
    {
        hint: 'DEC: 198   OCT: 306   HEX: C6   BIN: 11000110   HTML: &#198;   Description: Latin capital letter AE',
        name: 'Æ',
        nameForRegExp: 'Æ'
    },
    {
        hint: 'DEC: 199   OCT: 307   HEX: C7   BIN: 11000111   HTML: &#199;   Description: Latin capital letter C with cedilla',
        name: 'Ç',
        nameForRegExp: 'Ç'
    },
    {
        hint: 'DEC: 200   OCT: 310   HEX: C8   BIN: 11001000   HTML: &#200;   Description: Latin capital letter E with grave',
        name: 'È',
        nameForRegExp: 'È'
    },
    {
        hint: 'DEC: 201   OCT: 311   HEX: C9   BIN: 11001001   HTML: &#201;   Description: Latin capital letter E with acute',
        name: 'É',
        nameForRegExp: 'É'
    },
    {
        hint: 'DEC: 202   OCT: 312   HEX: CA   BIN: 11001010   HTML: &#202;   Description: Latin capital letter E with circumflex',
        name: 'Ê',
        nameForRegExp: 'Ê'
    },
    {
        hint: 'DEC: 203   OCT: 313   HEX: CB   BIN: 11001011   HTML: &#203;   Description: Latin capital letter E with diaeresis',
        name: 'Ë',
        nameForRegExp: 'Ë'
    },
    {
        hint: 'DEC: 204   OCT: 314   HEX: CC   BIN: 11001100   HTML: &#204;   Description: Latin capital letter I with grave',
        name: 'Ì',
        nameForRegExp: 'Ì'
    },
    {
        hint: 'DEC: 205   OCT: 315   HEX: CD   BIN: 11001101   HTML: &#205;   Description: Latin capital letter I with acute',
        name: 'Í',
        nameForRegExp: 'Í'
    },
    {
        hint: 'DEC: 206   OCT: 316   HEX: CE   BIN: 11001110   HTML: &#206;   Description: Latin capital letter I with circumflex',
        name: 'Î',
        nameForRegExp: 'Î'
    },
    {
        hint: 'DEC: 207   OCT: 317   HEX: CF   BIN: 11001111   HTML: &#207;   Description: Latin capital letter I with diaeresis',
        name: 'Ï',
        nameForRegExp: 'Ï'
    },
    {
        hint: 'DEC: 208   OCT: 320   HEX: D0   BIN: 11010000   HTML: &#208;   Description: Latin capital letter ETH',
        name: 'Ð',
        nameForRegExp: 'Ð'
    },
    {
        hint: 'DEC: 209   OCT: 321   HEX: D1   BIN: 11010001   HTML: &#209;   Description: Latin capital letter N with tilde',
        name: 'Ñ',
        nameForRegExp: 'Ñ'
    },
    {
        hint: 'DEC: 210   OCT: 322   HEX: D2   BIN: 11010010   HTML: &#210;   Description: Latin capital letter O with grave',
        name: 'Ò',
        nameForRegExp: 'Ò'
    },
    {
        hint: 'DEC: 211   OCT: 323   HEX: D3   BIN: 11010011   HTML: &#211;   Description: Latin capital letter O with acute',
        name: 'Ó',
        nameForRegExp: 'Ó'
    },
    {
        hint: 'DEC: 212   OCT: 324   HEX: D4   BIN: 11010100   HTML: &#212;   Description: Latin capital letter O with circumflex',
        name: 'Ô',
        nameForRegExp: 'Ô'
    },
    {
        hint: 'DEC: 213   OCT: 325   HEX: D5   BIN: 11010101   HTML: &#213;   Description: Latin capital letter O with tilde',
        name: 'Õ',
        nameForRegExp: 'Õ'
    },
    {
        hint: 'DEC: 214   OCT: 326   HEX: D6   BIN: 11010110   HTML: &#214;   Description: Latin capital letter O with diaeresis',
        name: 'Ö',
        nameForRegExp: 'Ö'
    },
    {
        hint: 'DEC: 215   OCT: 327   HEX: D7   BIN: 11010111   HTML: &#215;   Description: Multiplication sign',
        name: '×',
        nameForRegExp: '×'
    },
    {
        hint: 'DEC: 216   OCT: 330   HEX: D8   BIN: 11011000   HTML: &#216;   Description: Latin capital letter O with slash',
        name: 'Ø',
        nameForRegExp: 'Ø'
    },
    {
        hint: 'DEC: 217   OCT: 331   HEX: D9   BIN: 11011001   HTML: &#217;   Description: Latin capital letter U with grave',
        name: 'Ù',
        nameForRegExp: 'Ù'
    },
    {
        hint: 'DEC: 218   OCT: 332   HEX: DA   BIN: 11011010   HTML: &#218;   Description: Latin capital letter U with acute',
        name: 'Ú',
        nameForRegExp: 'Ú'
    },
    {
        hint: 'DEC: 219   OCT: 333   HEX: DB   BIN: 11011011   HTML: &#219;   Description: Latin capital letter U with circumflex',
        name: 'Û',
        nameForRegExp: 'Û'
    },
    {
        hint: 'DEC: 220   OCT: 334   HEX: DC   BIN: 11011100   HTML: &#220;   Description: Latin capital letter U with diaeresis',
        name: 'Ü',
        nameForRegExp: 'Ü'
    },
    {
        hint: 'DEC: 221   OCT: 335   HEX: DD   BIN: 11011101   HTML: &#221;   Description: Latin capital letter Y with acute',
        name: 'Ý',
        nameForRegExp: 'Ý'
    },
    {
        hint: 'DEC: 222   OCT: 336   HEX: DE   BIN: 11011110   HTML: &#222;   Description: Latin capital letter THORN',
        name: 'Þ',
        nameForRegExp: 'Þ'
    },
    {
        hint: 'DEC: 223   OCT: 337   HEX: DF   BIN: 11011111   HTML: &#223;   Description: Latin small letter sharp s - ess-zed',
        name: 'ß',
        nameForRegExp: 'ß'
    },
    {
        hint: 'DEC: 224   OCT: 340   HEX: E0   BIN: 11100000   HTML: &#224;   Description: Latin small letter a with grave',
        name: 'à',
        nameForRegExp: 'à'
    },
    {
        hint: 'DEC: 225   OCT: 341   HEX: E1   BIN: 11100001   HTML: &#225;   Description: Latin small letter a with acute',
        name: 'á',
        nameForRegExp: 'á'
    },
    {
        hint: 'DEC: 226   OCT: 342   HEX: E2   BIN: 11100010   HTML: &#226;   Description: Latin small letter a with circumflex',
        name: 'â',
        nameForRegExp: 'â'
    },
    {
        hint: 'DEC: 227   OCT: 343   HEX: E3   BIN: 11100011   HTML: &#227;   Description: Latin small letter a with tilde',
        name: 'ã',
        nameForRegExp: 'ã'
    },
    {
        hint: 'DEC: 228   OCT: 344   HEX: E4   BIN: 11100100   HTML: &#228;   Description: Latin small letter a with diaeresis',
        name: 'ä',
        nameForRegExp: 'ä'
    },
    {
        hint: 'DEC: 229   OCT: 345   HEX: E5   BIN: 11100101   HTML: &#229;   Description: Latin small letter a with ring above',
        name: 'å',
        nameForRegExp: 'å'
    },
    {
        hint: 'DEC: 230   OCT: 346   HEX: E6   BIN: 11100110   HTML: &#230;   Description: Latin small letter ae',
        name: 'æ',
        nameForRegExp: 'æ'
    },
    {
        hint: 'DEC: 231   OCT: 347   HEX: E7   BIN: 11100111   HTML: &#231;   Description: Latin small letter c with cedilla',
        name: 'ç',
        nameForRegExp: 'ç'
    },
    {
        hint: 'DEC: 232   OCT: 350   HEX: E8   BIN: 11101000   HTML: &#232;   Description: Latin small letter e with grave',
        name: 'è',
        nameForRegExp: 'è'
    },
    {
        hint: 'DEC: 233   OCT: 351   HEX: E9   BIN: 11101001   HTML: &#233;   Description: Latin small letter e with acute',
        name: 'é',
        nameForRegExp: 'é'
    },
    {
        hint: 'DEC: 234   OCT: 352   HEX: EA   BIN: 11101010   HTML: &#234;   Description: Latin small letter e with circumflex',
        name: 'ê',
        nameForRegExp: 'ê'
    },
    {
        hint: 'DEC: 235   OCT: 353   HEX: EB   BIN: 11101011   HTML: &#235;   Description: Latin small letter e with diaeresis',
        name: 'ë',
        nameForRegExp: 'ë'
    },
    {
        hint: 'DEC: 236   OCT: 354   HEX: EC   BIN: 11101100   HTML: &#236;   Description: Latin small letter i with grave',
        name: 'ì',
        nameForRegExp: 'ì'
    },
    {
        hint: 'DEC: 237   OCT: 355   HEX: ED   BIN: 11101101   HTML: &#237;   Description: Latin small letter i with acute',
        name: 'í',
        nameForRegExp: 'í'
    },
    {
        hint: 'DEC: 238   OCT: 356   HEX: EE   BIN: 11101110   HTML: &#238;   Description: Latin small letter i with circumflex',
        name: 'î',
        nameForRegExp: 'î'
    },
    {
        hint: 'DEC: 239   OCT: 357   HEX: EF   BIN: 11101111   HTML: &#239;   Description: Latin small letter i with diaeresis',
        name: 'ï',
        nameForRegExp: 'ï'
    },
    {
        hint: 'DEC: 240   OCT: 360   HEX: F0   BIN: 11110000   HTML: &#240;   Description: Latin small letter eth',
        name: 'ð',
        nameForRegExp: 'ð'
    },
    {
        hint: 'DEC: 241   OCT: 361   HEX: F1   BIN: 11110001   HTML: &#241;   Description: Latin small letter n with tilde',
        name: 'ñ',
        nameForRegExp: 'ñ'
    },
    {
        hint: 'DEC: 242   OCT: 362   HEX: F2   BIN: 11110010   HTML: &#242;   Description: Latin small letter o with grave',
        name: 'ò',
        nameForRegExp: 'ò'
    },
    {
        hint: 'DEC: 243   OCT: 363   HEX: F3   BIN: 11110011   HTML: &#243;   Description: Latin small letter o with acute',
        name: 'ó',
        nameForRegExp: 'ó'
    },
    {
        hint: 'DEC: 244   OCT: 364   HEX: F4   BIN: 11110100   HTML: &#244;   Description: Latin small letter o with circumflex',
        name: 'ô',
        nameForRegExp: 'ô'
    },
    {
        hint: 'DEC: 245   OCT: 365   HEX: F5   BIN: 11110101   HTML: &#245;   Description: Latin small letter o with tilde',
        name: 'õ',
        nameForRegExp: 'õ'
    },
    {
        hint: 'DEC: 246   OCT: 366   HEX: F6   BIN: 11110110   HTML: &#246;   Description: Latin small letter o with diaeresis',
        name: 'ö',
        nameForRegExp: 'ö'
    },
    {
        hint: 'DEC: 247   OCT: 367   HEX: F7   BIN: 11110111   HTML: &#247;   Description: Division sign',
        name: '÷',
        nameForRegExp: '÷'
    },
    {
        hint: 'DEC: 248   OCT: 370   HEX: F8   BIN: 11111000   HTML: &#248;   Description: Latin small letter o with slash',
        name: 'ø',
        nameForRegExp: 'ø'
    },
    {
        hint: 'DEC: 249   OCT: 371   HEX: F9   BIN: 11111001   HTML: &#249;   Description: Latin small letter u with grave',
        name: 'ù',
        nameForRegExp: 'ù'
    },
    {
        hint: 'DEC: 250   OCT: 372   HEX: FA   BIN: 11111010   HTML: &#250;   Description: Latin small letter u with acute',
        name: 'ú',
        nameForRegExp: 'ú'
    },
    {
        hint: 'DEC: 251   OCT: 373   HEX: FB   BIN: 11111011   HTML: &#251;   Description: Latin small letter u with circumflex',
        name: 'û',
        nameForRegExp: 'û'
    },
    {
        hint: 'DEC: 252   OCT: 374   HEX: FC   BIN: 11111100   HTML: &#252;   Description: Latin small letter u with diaeresis',
        name: 'ü',
        nameForRegExp: 'ü'
    },
    {
        hint: 'DEC: 253   OCT: 375   HEX: FD   BIN: 11111101   HTML: &#253;   Description: Latin small letter y with acute',
        name: 'ý',
        nameForRegExp: 'ý'
    },
    {
        hint: 'DEC: 254   OCT: 376   HEX: FE   BIN: 11111110   HTML: &#254;   Description: Latin small letter thorn',
        name: 'þ',
        nameForRegExp: 'þ'
    },
    {
        hint: 'DEC: 255   OCT: 377   HEX: FF   BIN: 11111111   HTML: &#255;   Description: Latin small letter y with diaeresis',
        name: 'ÿ',
        nameForRegExp: 'ÿ'
    }
];
//# sourceMappingURL=ascii.js.map

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return categories; });
var categories = {
    presets: ['\\W', '\\d', '\\s', '\\t', '\\r', '\\n', '.'],
    controlCharacters: ['\\x00', '\\x01', '\\x02', '\\x03', '\\x04', '\\x05', '\\x06', '\\a', '\\b', '\\t', '\\n', '\\v', '\\f',
        '\\r', '\\x0E', '\\x0F', '\\x10', '\\x11', '\\x12', '\\x13', '\\x14', '\\x15', '\\x16', '\\x17', '\\x18', '\\x19', '\\x1A',
        '\\e', '\\x1C', '\\x1D', '\\x1E', '\\x1F', 'some_other_data_here', '\\x7F'],
    punctuation: [' ', '\\!', '\"', '\\#', '\\$', '%', '\\&', '\'', '\\(', '\\)', '\\*', '\\+', '\\,', '\\-', '\\.', '/', 'some_other_data_here', '\\:', ';',
        '<', '\\=', '>', '\\?', '@', 'some_other_data_here', '\\[', '\\\\', '\\]', '\\^', '_', '`', '\\{', '\\|', '\\}', '~'],
    smallAlphabet: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    bigAlphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    unicode: ['€', '\\x81', '‚', 'ƒ', '„', '…', '†', '‡', 'ˆ', '‰', 'Š', '‹', 'Œ', '\\x8D', 'Ž', '\\x8F', '\\x90', '‘', '’', '“', '”', '•',
        '–', '—', '˜', '™', 'š', '›', 'œ', '\\x9D', 'ž', 'Ÿ'],
    extended: ['\\xA0', '¡', '¢', '£', '¤', '¥', '¦', '§', '¨', '©', 'ª', '«', '¬', '\\xAD', '®',
        '¯', '°', '±', '²', '³', '´', 'µ', '¶', '·', '¸', '¹', 'º', '»', '¼', '½', '¾', '¿', 'À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Æ', 'Ç', 'È', 'É', 'Ê',
        'Ë', 'Ì', 'Í', 'Î', 'Ï', 'Ð', 'Ñ', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', '×', 'Ø', 'Ù', 'Ú', 'Û', 'Ü', 'Ý', 'Þ', 'ß', 'à', 'á', 'â', 'ã', 'ä', 'å', 'æ',
        'ç', 'è', 'é', 'ê', 'ë', 'ì', 'í', 'î', 'ï', 'ð', 'ñ', 'ò', 'ó', 'ô', 'õ', 'ö', '÷', 'ø', 'ù', 'ú', 'û', 'ü', 'ý', 'þ', 'ÿ'],
    all: ['^', '\\W', '\\d', '\\s', '\\t', '\\r', '\\n', '.', '\\x00', '\\x01', '\\x02', '\\x03', '\\x04', '\\x05', '\\x06', '\\a',
        '\\b', '\\t', '\\n', '\\v', '\\f', '\\r', '\\x0E', '\\x0F', '\\x10', '\\x11', '\\x12', '\\x13', '\\x14', '\\x15', '\\x16', '\\x17',
        '\\x18', '\\x19', '\\x1A', '\\e', '\\x1C', '\\x1D', '\\x1E', '\\x1F', ' ', '\\!', '\"', '\\#', '\\$', '%', '\\&', '\'', '\\(',
        '\\)', '\\*', '\\+', '\\,', '\\-', '\\.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '\\:', ';', '<', '\\=', '>', '\\?',
        '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        '\\[', '\\\\', '\\]', '\\^', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z', '\\{', '\\|', '\\}', '~', '\\x7F', '€', '\\x81', '‚', 'ƒ', '„', '…', '†', '‡', 'ˆ', '‰', 'Š', '‹',
        'Œ', '\\x8D', 'Ž', '\\x8F', '\\x90', '‘',
        '’', '“', '”', '•', '–', '—', '˜', '™', 'š', '›', 'œ', '\\x9D', 'ž', 'Ÿ', '\\xA0', '¡', '¢', '£', '¤', '¥', '¦', '§', '¨', '©', 'ª', '«',
        '¬', '\\xAD', '®', '¯', '°', '±', '²', '³', '´', 'µ', '¶', '·', '¸', '¹', 'º', '»', '¼', '½', '¾', '¿', 'À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Æ',
        'Ç', 'È', 'É', 'Ê', 'Ë', 'Ì', 'Í', 'Î', 'Ï', 'Ð', 'Ñ', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', '×', 'Ø', 'Ù', 'Ú', 'Û', 'Ü', 'Ý', 'Þ', 'ß', 'à', 'á', 'â',
        'ã', 'ä', 'å', 'æ', 'ç', 'è', 'é', 'ê', 'ë', 'ì', 'í', 'î', 'ï', 'ð', 'ñ', 'ò', 'ó', 'ô', 'õ', 'ö', '÷', 'ø', 'ù', 'ú', 'û', 'ü', 'ý', 'þ', 'ÿ']
};
//# sourceMappingURL=categories.js.map

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return topLeft; });
var topLeft = [
    {
        name: 'Ⱳ',
        hint: 'Matches any character except A-Z, a-z, 0-9, and underscore.',
        elements: ['\\x00', '\\x01', '\\x02', '\\x03', '\\x04', '\\x05', '\\x06', '\\a', '\\b', '\\t', '\\n', '\\v', '\\f', '\\r',
            '\\x0E', '\\x0F', '\\x10', '\\x11', '\\x12', '\\x13', '\\x14', '\\x15', '\\x16', '\\x17', '\\x18', '\\x19', '\\x1A', '\\e',
            '\\x1C', '\\x1D', '\\x1E', '\\x1F', ' ', '\\!', '\"', '\\#', '\\$', '%', '\\&', '\'', '\\(', '\\)', '\\*', '\\+', '\\,', '\\-',
            '\\.', '/', '\\:', ';', '<', '\\=', '>', '\\?', '@', '\\[', '\\\\', '\\]', '\\^', '`', '\\{',
            '\\|', '\\}', '~', '\\x7F', '€', '\\x81', '‚', 'ƒ', '„', '…', '†', '‡', 'ˆ', '‰', 'Š',
            '‹', 'Œ', '\\x8D', 'Ž', '\\x8F', '\\x90', '‘', '’', '“', '”', '•', '–', '—', '˜', '™', 'š', '›', 'œ', '\\x9D', 'ž', 'Ÿ', '\\xA0',
            '¡', '¢', '£', '¤', '¥', '¦', '§', '¨', '©', 'ª', '«', '¬', '\\xAD', '®', '¯', '°', '±', '²', '³', '´', 'µ', '¶', '·', '¸', '¹', 'º', '»',
            '¼', '½', '¾', '¿', 'À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Æ', 'Ç', 'È', 'É', 'Ê', 'Ë', 'Ì', 'Í', 'Î', 'Ï', 'Ð', 'Ñ', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', '×',
            'Ø', 'Ù', 'Ú', 'Û', 'Ü', 'Ý', 'Þ', 'ß', 'à', 'á', 'â', 'ã', 'ä', 'å', 'æ', 'ç', 'è', 'é', 'ê', 'ë', 'ì', 'í', 'î', 'ï', 'ð', 'ñ', 'ò', 'ó',
            'ô', 'õ', 'ö', '÷', 'ø', 'ù', 'ú', 'û', 'ü', 'ý', 'þ', 'ÿ'],
        nameForRegExp: '\\W'
    },
    {
        name: '#',
        hint: 'Matches a digit character.',
        elements: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        nameForRegExp: '\\d'
    },
    {
        name: '␣',
        hint: 'Any white-space character. This includes space, tab, and form feed.',
        elements: [' ', '\\t', '\\v', '\\r', '\\n', '\\f'],
        nameForRegExp: '\\s'
    },
    {
        name: '↹',
        hint: 'Tab character.',
        elements: ['\\t'],
        nameForRegExp: '\\t'
    },
    {
        name: '⮠ ',
        hint: 'Carriage-return character.',
        elements: ['\\r'],
        nameForRegExp: '\\r'
    },
    {
        name: '⮡ ',
        hint: 'Newline character.',
        elements: ['\\n'],
        nameForRegExp: '\\n'
    },
    {
        name: '⦁',
        hint: 'Matches any single character except the newline character \\n.',
        elements: ['\\x00', '\\x01', '\\x02', '\\x03', '\\x04', '\\x05', '\\x06', '\\a', '\\b', '\\t', '\\v', '\\f', '\\r', '\\x0E',
            '\\x0F', '\\x10', '\\x11', '\\x12', '\\x13', '\\x14', '\\x15', '\\x16', '\\x17', '\\x18', '\\x19', '\\x1A', '\\e', '\\x1C',
            '\\x1D', '\\x1E', '\\x1F', ' ', '\\!', '\"', '\\#', '\\$', '%', '\\&', '\'', '\\(', '\\)', '\\*', '\\+', '\\,', '\\-', '\\.',
            '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '\\:', ';', '<', '\\=', '>', '\\?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
            'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '\\[', '\\\\', '\\]', '\\^', '_', '`', 'a',
            'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '\\{', '\\|',
            '\\}', '~', '\\x7F', '€', '\\x81', '‚', 'ƒ',
            '„', '…', '†', '‡', 'ˆ', '‰', 'Š', '‹', 'Œ', '\\x8D', 'Ž', '\\x8F', '\\x90', '‘', '’', '“', '”', '•', '–', '—', '˜', '™', 'š', '›',
            'œ', '\\x9D', 'ž', 'Ÿ', '\\xA0', '¡', '¢', '£', '¤', '¥', '¦', '§', '¨', '©', 'ª', '«', '¬', '\\xAD', '®', '¯', '°', '±', '²', '³', '´',
            'µ', '¶', '·', '¸', '¹', 'º', '»', '¼', '½', '¾', '¿', 'À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Æ', 'Ç', 'È', 'É', 'Ê', 'Ë', 'Ì', 'Í', 'Î', 'Ï',
            'Ð', 'Ñ', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', '×', 'Ø', 'Ù', 'Ú', 'Û', 'Ü', 'Ý', 'Þ', 'ß', 'à', 'á', 'â', 'ã', 'ä', 'å', 'æ', 'ç', 'è', 'é', 'ê', 'ë',
            'ì', 'í', 'î', 'ï', 'ð', 'ñ', 'ò', 'ó', 'ô', 'õ', 'ö', '÷', 'ø', 'ù', 'ú', 'û', 'ü', 'ý', 'þ', 'ÿ'],
        nameForRegExp: '.'
    }
];
//# sourceMappingURL=top-left.js.map

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return topRight; });
var topRight = [
    {
        name: 'Positive',
        hint: '',
    },
    {
        name: 'Negative',
        hint: '',
    }
];
//# sourceMappingURL=top-right.js.map

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array_service__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BufferService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MAX_BUFFER_SIZE = 10;
var BufferService = (function () {
    function BufferService() {
        this.data = [];
        this.copyBuffer = [];
        this.currentIndex = -1;
    }
    BufferService.prototype.setCopyBuffer = function (buffer) {
        var tempBuffer = __WEBPACK_IMPORTED_MODULE_1__array_service__["a" /* ArrayService */].removeNestedElementsFromArray(buffer.slice());
        this.copyBuffer = __WEBPACK_IMPORTED_MODULE_1__array_service__["a" /* ArrayService */].createFullCopyOfArray(tempBuffer);
    };
    BufferService.prototype.getCopyBuffer = function () {
        return __WEBPACK_IMPORTED_MODULE_1__array_service__["a" /* ArrayService */].createFullCopyOfArray(this.copyBuffer);
    };
    BufferService.prototype.add = function (dataToAdd) {
        //if we add data to the middle of buffer array
        if (this.data[this.currentIndex + 1]) {
            this.data = this.data.slice(0, this.currentIndex + 1);
            this.data.push(dataToAdd);
            this.currentIndex++;
        }
        else {
            this.data.push(dataToAdd);
            this.currentIndex++;
            if (this.data.length >= MAX_BUFFER_SIZE) {
                this.data = this.data.slice(-MAX_BUFFER_SIZE);
                this.currentIndex = MAX_BUFFER_SIZE - 1;
            }
        }
    };
    BufferService.prototype.moveAhead = function () {
        if (this.data[this.currentIndex + 1]) {
            this.currentIndex++;
            return __WEBPACK_IMPORTED_MODULE_1__array_service__["a" /* ArrayService */].createFullCopyOfArray(this.data[this.currentIndex]);
        }
        else {
            return null;
        }
    };
    BufferService.prototype.moveBehind = function () {
        if (this.data[this.currentIndex - 1]) {
            this.currentIndex--;
            return __WEBPACK_IMPORTED_MODULE_1__array_service__["a" /* ArrayService */].createFullCopyOfArray(this.data[this.currentIndex]);
        }
        else {
            return null;
        }
    };
    return BufferService;
}());
BufferService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], BufferService);

//# sourceMappingURL=buffer.service.js.map

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state_model__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__element_position_model__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selection_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quantifier_quantifier_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quantifier_notification_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__elements_element_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_caret_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_all_elements_position_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeautyDataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BeautyDataComponent = (function () {
    function BeautyDataComponent(elementService, quantifierService, selectionService, notificationService, allElPosService, caretService) {
        this.elementService = elementService;
        this.quantifierService = quantifierService;
        this.selectionService = selectionService;
        this.notificationService = notificationService;
        this.allElPosService = allElPosService;
        this.caretService = caretService;
        this.passViewDataHigher = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.toggleGlobalQuantClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.hideParentQuantifier = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.passSelectedElementPosition = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.sliceNumber = 0;
        this.selectionData = [];
        this.currentClass = '';
        this.lookaroundArrowBorderClass = '';
        this.hovered = false;
        this.alwaysShowQuantifier = false;
        this.isShowQuantifier = true;
        this.caret = document.getElementsByTagName('caret')[0];
    }
    BeautyDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cancelEditSubscription = this.elementService.cancelEditingSubscription().subscribe(function () {
            _this.deleteEditClass();
        });
        this.notificationService.quantifierDestroyed.subscribe(function () {
            _this.caretService.fixCaretPosition(_this.allElPosService.getInputFromKeyboard());
            _this.toggleGlobalQuantClicked.emit('destroyed');
        });
        this.notificationService.globalQuantifierClicked.subscribe(function (data) {
            _this.alwaysShowQuantifier = data.show;
            if (data.quantifier !== null) {
                _this.isShowQuantifier = false;
                _this.toggleGlobalQuantClicked.emit('destroyed');
                _this.handleDataFromQuantifier(data.quantifier);
                return;
            }
            if (data.show) {
                _this.toggleGlobalQuantClicked.emit('show');
            }
            else {
                _this.toggleGlobalQuantClicked.emit('hide');
            }
        });
        this.selectionSubscription = this.selectionService.subscribeOnHighlightSelection().subscribe(function (data) {
            if (_this.selectionData !== data) {
                _this.selectionData = data;
            }
        });
        this.viewData = this.setElementClasses(this.viewData);
        this.isShowQuantifier = this.checkIsShowQuantifierComponent();
    };
    BeautyDataComponent.prototype.ngAfterViewInit = function () {
        this.fixLookroundSpace();
        this.fixQuantifierSpace();
    };
    BeautyDataComponent.prototype.ngDoCheck = function () {
        this.fixLookroundSpace();
        this.fixQuantifierSpace();
        this.isShowQuantifier = this.checkIsShowQuantifierComponent();
        if (this.currentClass.length > 0 || (this.viewData.length === 1
            && typeof this.viewData[0] === 'string')) {
            this.currentElementPosition = new __WEBPACK_IMPORTED_MODULE_2__element_position_model__["a" /* ElementPosition */]();
            this.currentElementPosition.element = this.viewData;
            var clientCoords = this.element.nativeElement.getBoundingClientRect();
            var top = clientCoords.top + window.pageYOffset;
            var left = clientCoords.left + window.pageXOffset;
            var width = clientCoords.right - clientCoords.left;
            if (this.quantifierSpace && this.quantifierSpace.nativeElement) {
                width += this.quantifierSpace.nativeElement.getBoundingClientRect().width + 4;
            }
            if (width === 0)
                return;
            var height = clientCoords.bottom - clientCoords.top;
            this.currentElementPosition.position = new __WEBPACK_IMPORTED_MODULE_2__element_position_model__["b" /* Position */](top, left, width, height);
            this.allElPosService.addElementToElementsPosition(this.currentElementPosition);
        }
    };
    BeautyDataComponent.prototype.ngOnDestroy = function () {
        this.caretService.startBlinking();
        this.allElPosService.deleteElementFromElementsPosition(this.currentElementPosition);
        this.cancelEditSubscription.unsubscribe();
        this.selectionSubscription.unsubscribe();
    };
    BeautyDataComponent.prototype.handleMouseMove = function (event) {
        var elementToRemove = event.target.parentElement.parentElement.getElementsByTagName('quantifier')[0];
        if (elementToRemove && elementToRemove.style.display === 'none' && !this.quantifierService.getClickState()) {
            elementToRemove.style.display = 'block';
        }
    };
    BeautyDataComponent.prototype.checkIfString = function (data) {
        return typeof data === 'string';
    };
    BeautyDataComponent.prototype.handleMouseEnterForSelection = function () {
        if (this.selectionService.getStart()) {
            this.hovered = false;
        }
    };
    BeautyDataComponent.prototype.handleClickToEdit = function (event) {
        if (this.viewData[0].length === 1) {
            return;
        }
        event.stopPropagation();
        var data = this.viewData;
        var state = new __WEBPACK_IMPORTED_MODULE_1__state_model__["a" /* State */]();
        if (data[0] === 'range' || data[0] === 'group' || data[0] === 'quantifier'
            || data[0] === 'anchor' || data[0] === 'anchorOpposite') {
            this.quantifierService.click(true);
            state.currentArray = data;
            state.futureArray = data.slice();
            state.futureArray.unshift('edit');
            this.elementService.elementToEditClicked(true);
            this.passViewDataHigher.emit(state);
            this.passSelectedElementPosition.emit(this.currentElementPosition);
        }
    };
    BeautyDataComponent.prototype.handleQuantifierClicked = function (data) {
        this.alwaysShowQuantifier = data.show;
        if (data.quantifier !== null) {
            this.isShowQuantifier = false;
            this.toggleGlobalQuantClicked.emit('destroyed');
            this.handleDataFromQuantifier(data.quantifier);
            return;
        }
        if (data.show) {
            this.toggleGlobalQuantClicked.emit('show');
        }
        else {
            this.toggleGlobalQuantClicked.emit('hide');
        }
    };
    BeautyDataComponent.prototype.showQuantifier = function (show) {
        var hint;
        if (show && this.isShowQuantifier && this.currentClass.indexOf('quantifier') === -1) {
            this.element.nativeElement.style.zIndex = 7;
        }
        else if (!this.alwaysShowQuantifier) {
            this.element.nativeElement.removeAttribute("style");
        }
        if (this.viewData.length === 1 || typeof (this.viewData[0]) !== 'string') {
            return;
        }
        if (!(show === true && this.quantifierService.getClickState())) {
            this.hovered = show;
            var inputFromKeyb = this.allElPosService.getInputFromKeyboard();
            if (show && inputFromKeyb.parent[inputFromKeyb.index - (inputFromKeyb.direction === 'left' ? 1 : 0)] === this.viewData) {
                this.caret.style.opacity = 0;
            }
            else {
                this.caret.style.opacity = '';
            }
        }
        if (show === true) {
            switch (this.viewData[0]) {
                case 'range':
                    hint = 'Double-click to select Range and change its options.';
                    break;
                case 'group':
                    hint = 'Click to input in Group, double-click to select Group and change its options.';
                    break;
                case 'anchor':
                    hint = 'Double-click to select Anchor and change its options.';
                    break;
                case 'anchorOpposite':
                    hint = 'Double-click to select Anchor and change its options.';
                    break;
                case 'or':
                    hint = 'Logical \'or\'.';
                    break;
            }
        }
        if (!this.isShowQuantifier) {
            show = false;
        }
        this.hideParentQuantifier.emit(!show);
        this.elementService.displayNoMainEl({ show: true, hint: hint });
    };
    BeautyDataComponent.prototype.hideQuantifier = function (event) {
        this.hovered = event;
    };
    BeautyDataComponent.prototype.handleDataFromQuantifier = function (data) {
        var viewDataToPassUp = this.viewData.slice();
        viewDataToPassUp.push(data);
        var state = {
            currentArray: this.viewData,
            futureArray: viewDataToPassUp
        };
        this.passViewDataHigher.emit(state);
    };
    BeautyDataComponent.prototype.passClickedStatusHigher = function (value) {
        this.toggleGlobalQuantClicked.emit(value);
    };
    BeautyDataComponent.prototype.handleInnerViewData = function (state) {
        var index = this.viewData.indexOf(state.currentArray);
        var viewDataToPassUp = this.viewData.slice();
        if (index !== -1) {
            viewDataToPassUp.splice(index, 1, state.futureArray);
        }
        else {
            viewDataToPassUp.push(state.futureArray);
        }
        state = {
            currentArray: this.viewData,
            futureArray: viewDataToPassUp
        };
        this.passViewDataHigher.emit(state);
    };
    BeautyDataComponent.prototype.checkIsShowQuantifierComponent = function () {
        return !(this.viewData[0] === 'quantifier' ||
            this.viewData[0] === 'anchor' ||
            this.viewData[0] === 'anchorOpposite' ||
            this.viewData[0] === 'or' ||
            (this.viewData.length > 0 && this.viewData[this.viewData.length - 1][0] === 'quantifier'));
    };
    BeautyDataComponent.prototype.setElementClasses = function (data) {
        var firstEl;
        var secondEl;
        if (data[0] === 'edit') {
            this.currentClass += 'editing ';
            data.shift();
        }
        firstEl = data[0];
        secondEl = data[1];
        if (firstEl === 'group' || firstEl === 'range' || firstEl === 'quantifier' || firstEl === 'anchor'
            || firstEl === 'anchorOpposite' || firstEl === 'or') {
            this.currentClass += firstEl;
            this.sliceNumber++;
        }
        if (secondEl === ' negative') {
            this.currentClass += secondEl;
            this.sliceNumber++;
        }
        else if (secondEl === ' lookAhead positive' || secondEl === ' lookAhead negative'
            || secondEl === ' lookBehind positive' || secondEl === ' lookBehind negative') {
            this.currentClass += secondEl;
            this.sliceNumber++;
        }
        if (this.currentClass.indexOf('range') !== -1 || this.currentClass.indexOf('anchor') !== -1
            || this.currentClass.indexOf('quantifier') !== -1
            || this.currentClass.indexOf('or') !== -1) {
            this.currEl.nativeElement.contentEditable = false;
        }
        return data;
    };
    BeautyDataComponent.prototype.deleteEditClass = function () {
        var cssClass = this.currentClass.split(' ');
        var index = cssClass.indexOf('editing');
        if (index !== -1) {
            this.quantifierService.click(false);
            cssClass.splice(index, 1);
        }
        this.currentClass = '';
        this.sliceNumber = 0;
        this.setElementClasses(this.viewData);
    };
    BeautyDataComponent.prototype.fixLookroundSpace = function () {
        if (!this.viewData || !this.viewData[1] || typeof this.viewData[1] !== 'string') {
            return;
        }
        var currElHeight = this.currEl.nativeElement.getBoundingClientRect().height;
        switch (this.viewData[1].trim().split(' ')[0]) {
            case 'lookBehind': {
                if (this.parentData[1] && this.parentData[1].indexOf('lookBehind') !== -1
                    && this.parentData.indexOf(this.viewData) === this.parentData.length - 1
                    && !this.quantifier) {
                    this.lookaroundArrowBorderClass = 'right';
                    this.currEl.nativeElement.style.marginRight = 0;
                    break;
                }
                this.lookaroundArrowBorderClass = '';
                this.currEl.nativeElement.style.marginRight = currElHeight / 2 + 'px';
                break;
            }
            case 'lookAhead': {
                if (this.parentData[1] && this.parentData[1].indexOf('lookAhead') !== -1
                    && this.parentData.indexOf(this.viewData) === 2) {
                    this.lookaroundArrowBorderClass = 'left';
                    this.currEl.nativeElement.style.marginLeft = 0;
                    break;
                }
                this.lookaroundArrowBorderClass = '';
                this.currEl.nativeElement.style.marginLeft = currElHeight / 2 + 'px';
                break;
            }
        }
    };
    BeautyDataComponent.prototype.fixQuantifierSpace = function () {
        var quantifierElements = this.element.nativeElement.getElementsByTagName('quantifier');
        if (quantifierElements.length > 0) {
            var quantifierElement = quantifierElements[quantifierElements.length - 1];
            if (quantifierElement) {
                var width = quantifierElement.getBoundingClientRect().width;
                if (this.quantifierSpace) {
                    this.quantifierSpace.nativeElement.style.width = width - 4 + 'px';
                }
            }
        }
    };
    return BeautyDataComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", Array)
], BeautyDataComponent.prototype, "viewData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", Array)
], BeautyDataComponent.prototype, "parentData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", Boolean)
], BeautyDataComponent.prototype, "hideAllQuantifiers", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]) === "function" && _a || Object)
], BeautyDataComponent.prototype, "passViewDataHigher", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]) === "function" && _b || Object)
], BeautyDataComponent.prototype, "toggleGlobalQuantClicked", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]) === "function" && _c || Object)
], BeautyDataComponent.prototype, "hideParentQuantifier", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]) === "function" && _d || Object)
], BeautyDataComponent.prototype, "passSelectedElementPosition", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ViewChild */])('element'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */]) === "function" && _e || Object)
], BeautyDataComponent.prototype, "element", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ViewChild */])('currEl'),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */]) === "function" && _f || Object)
], BeautyDataComponent.prototype, "currEl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ViewChild */])('quantifier'),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */]) === "function" && _g || Object)
], BeautyDataComponent.prototype, "quantifier", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ViewChild */])('quantifierSpace'),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */]) === "function" && _h || Object)
], BeautyDataComponent.prototype, "quantifierSpace", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* HostListener */])('mousemove', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BeautyDataComponent.prototype, "handleMouseMove", null);
BeautyDataComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'beauty-data',
        template: __webpack_require__(212),
        styles: [__webpack_require__(190)],
        providers: [__WEBPACK_IMPORTED_MODULE_5__quantifier_notification_service__["a" /* NotificationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6__elements_element_service__["a" /* ElementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__elements_element_service__["a" /* ElementService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__quantifier_quantifier_service__["a" /* QuantifierService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__quantifier_quantifier_service__["a" /* QuantifierService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_3__selection_service__["a" /* SelectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__selection_service__["a" /* SelectionService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_5__quantifier_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__quantifier_notification_service__["a" /* NotificationService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_8__services_all_elements_position_service__["a" /* AllElementsPositionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_all_elements_position_service__["a" /* AllElementsPositionService */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_7__services_caret_service__["a" /* CaretService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_caret_service__["a" /* CaretService */]) === "function" && _p || Object])
], BeautyDataComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
//# sourceMappingURL=beauty-data.component.js.map

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LookaroundArrowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ROOT_SVG_DIR = '../../../../assets/img/';
var LookaroundArrowComponent = (function () {
    function LookaroundArrowComponent() {
    }
    LookaroundArrowComponent.prototype.ngOnInit = function () {
        this.direction = this.getDirection();
        this.negative = this.isNegative();
        this.imageSource = this.getImageSource();
    };
    LookaroundArrowComponent.prototype.ngOnChanges = function () {
        this.imageSource = this.getImageSource();
    };
    LookaroundArrowComponent.prototype.getImageSource = function () {
        var src = ROOT_SVG_DIR;
        src += this.direction;
        src += 'Arr';
        src += this.border ? 'Border' : '';
        if (this.edit) {
            src += 'Edit';
        }
        else if (this.selected) {
            src += 'Selected';
        }
        else {
            src += this.negative ? 'Dark' : 'Light';
        }
        src += '.svg';
        return src;
    };
    LookaroundArrowComponent.prototype.getDirection = function () {
        if (this.lookaroundClass.indexOf('lookAhead') !== -1) {
            return 'lookAhead';
        }
        else {
            return 'lookBehind';
        }
    };
    LookaroundArrowComponent.prototype.isNegative = function () {
        return this.lookaroundClass.indexOf('negative') !== -1;
    };
    return LookaroundArrowComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", Boolean)
], LookaroundArrowComponent.prototype, "border", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", Boolean)
], LookaroundArrowComponent.prototype, "selected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", String)
], LookaroundArrowComponent.prototype, "edit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", String)
], LookaroundArrowComponent.prototype, "lookaroundClass", void 0);
LookaroundArrowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'lookaround-arrow',
        template: __webpack_require__(213),
        styles: [__webpack_require__(191)]
    })
], LookaroundArrowComponent);

//# sourceMappingURL=lookaround-arrow.component.js.map

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_all_elements_position_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_caret_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceholderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlaceholderComponent = (function () {
    function PlaceholderComponent(allElPosService, caretService) {
        this.allElPosService = allElPosService;
        this.caretService = caretService;
    }
    PlaceholderComponent.prototype.setKeyboardInput = function () {
        event.stopPropagation();
        this.allElPosService.setInputFromKeyboardEverywhere(this.parentData, 'right', this.parentData.length - 1);
        this.caretService.fixCaretPosition(this.allElPosService.getInputFromKeyboard());
    };
    return PlaceholderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", Array)
], PlaceholderComponent.prototype, "parentData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", String)
], PlaceholderComponent.prototype, "className", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* HostListener */])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlaceholderComponent.prototype, "setKeyboardInput", null);
PlaceholderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'placeholder',
        template: __webpack_require__(214),
        styles: [__webpack_require__(192)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_all_elements_position_service__["a" /* AllElementsPositionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_all_elements_position_service__["a" /* AllElementsPositionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_caret_service__["a" /* CaretService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_caret_service__["a" /* CaretService */]) === "function" && _b || Object])
], PlaceholderComponent);

var _a, _b;
//# sourceMappingURL=placeholder.component.js.map

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quantifierData_model__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quantifier_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__elements_element_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dataArray_dataArray_service__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuantifierComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuantifierComponent = (function () {
    function QuantifierComponent(elementService, quantifierService, notificationService, dataArrayService) {
        this.elementService = elementService;
        this.quantifierService = quantifierService;
        this.notificationService = notificationService;
        this.dataArrayService = dataArrayService;
        this.sendDataToGlobalArray = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.globalQuantifierClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.hovered = true;
        this.clicked = false;
        this.changeExistEl = false;
        this.quantifier = [];
        this.cssClass = '';
        this.quantifierData = __WEBPACK_IMPORTED_MODULE_1__quantifierData_model__["a" /* QUANTIFIER_DATA */];
    }
    QuantifierComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.changeExistEl && this.viewData && !this.editable && this.previousEditableState) {
            setTimeout(function () {
                _this.notificationService.globalQuantifierClicked.emit({ show: false, quantifier: null });
                _this.elementService.elementToEditClicked(false);
                _this.quantifierService.click(false);
                _this.dataArrayService.informTextInpCompToRecompileDataFromViewData('quantifier');
            }, 0);
        }
        this.previousEditableState = this.editable;
    };
    QuantifierComponent.prototype.ngOnDestroy = function () {
        if (this.viewData) {
            return;
        }
        if (this.dataToEdit) {
            this.elementService.elementToEditClicked(false);
            this.dataArrayService.informTextInpCompToRecompileDataFromViewData('quantifier');
            return;
        }
        if (this.quantifier.length > 0) {
            setTimeout(this.handleQuantifierClose.bind(this), 0);
        }
        if (this.clicked) {
            setTimeout(this.handleQuantifierCreate.bind(this), 0);
        }
    };
    QuantifierComponent.prototype.setStartEndRange = function (quantifierId, start, end) {
        var sendThisData = [];
        sendThisData.unshift('quantifier');
        if (!start || (start && start < 0) || (end && end < 1)) {
            return;
        }
        if (start > end) {
            end = start;
            this.endRange = start;
        }
        switch (quantifierId) {
            case 3: {
                this.selectedQuantifier.name = start.toString();
                this.selectedQuantifier.regExp = '{' + start + '}';
                sendThisData.push(start.toString());
                break;
            }
            case 4: {
                this.selectedQuantifier.name = start + '-∞';
                this.selectedQuantifier.regExp = '{' + start + ',}';
                sendThisData.push(start.toString(), '-', '∞');
                break;
            }
            case 5: {
                this.selectedQuantifier.name = start + '-' + end;
                this.selectedQuantifier.regExp = '{' + start + ',' + end + '}';
                sendThisData.push(start.toString(), '-', end.toString());
                break;
            }
        }
        this.quantifierService.setQuantifier(sendThisData);
        this.quantifier = sendThisData;
        if (this.dataToEdit) {
            for (var i = 1; i < this.quantifier.length; i++) {
                this.dataToEdit[i] = this.quantifier[i];
            }
        }
        if (this.viewData) {
            (_a = this.viewData).splice.apply(_a, [1, Number.MAX_VALUE].concat((this.quantifier.slice(1))));
        }
        var _a;
    };
    QuantifierComponent.prototype.handleHoverGlobal = function (show) {
        if (this.cssClass === 'clicked' && show === false) {
            show = true;
        }
        var hint;
        if (show === true) {
            if (this.viewData) {
                hint = 'Double click to edit quantifier.';
            }
            else {
                hint = 'Click to add quantifier, specify preceding token matches quantity.';
            }
        }
        else {
            hint = '';
        }
        this.elementService.displayNoMainEl({ show: true, hint: hint });
    };
    QuantifierComponent.prototype.handleClickOnHovered = function (event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        if (this.viewData) {
            return;
        }
        if (!this.clicked) {
            this.cssClass = 'clicked';
            this.clicked = true;
            this.quantifierService.click(true);
            this.globalQuantifierClicked.emit({ show: true, quantifier: null });
            this.elementService.displayNoMainEl({ show: false, hint: '' });
        }
    };
    QuantifierComponent.prototype.handleDoubleClick = function (event) {
        if (!this.viewData) {
            return;
        }
        this.changeExistEl = true;
        event.stopImmediatePropagation();
        event.stopPropagation();
        if (!this.clicked) {
            this.cssClass = 'clicked';
            this.clicked = true;
            this.quantifierService.click(true);
            this.elementService.elementToEditClicked(true);
            this.notificationService.globalQuantifierClicked.emit({ show: true, quantifier: null });
            this.elementService.displayNoMainEl({ show: false, hint: '' });
        }
    };
    QuantifierComponent.prototype.handleQuantifierDataClick = function (event, datum) {
        this.selectedQuantifier = { name: '', regExp: '' };
        this.startRange = 1;
        this.endRange = 1;
        this.selectedQuantifierId = datum.id;
        event.stopImmediatePropagation();
        event.stopPropagation();
        if (datum.regExp) {
            this.selectedQuantifier.name = datum.name;
            this.selectedQuantifier.regExp = datum.regExp;
        }
        else {
            this.setStartEndRange(this.selectedQuantifierId, this.startRange, this.endRange);
        }
        if (this.selectedQuantifier) {
            this.handleQuantifierDataChange();
        }
        if (this.viewData) {
            (_a = this.viewData).splice.apply(_a, [1, Number.MAX_VALUE].concat((this.quantifier.slice(1))));
        }
        var _a;
    };
    QuantifierComponent.prototype.increaseValue = function (element, dependEl) {
        var oldValue = parseFloat(element.value);
        var newVal;
        if (oldValue >= parseFloat(element.max)) {
            newVal = oldValue;
        }
        else {
            newVal = oldValue + 1;
        }
        element.value = newVal;
        var event = new Event('change', { bubbles: true });
        element.dispatchEvent(event);
        if (dependEl) {
            var dependVal = parseFloat(dependEl.value);
            if (newVal > dependVal) {
                dependEl.value = newVal;
                dependEl.dispatchEvent(event);
            }
        }
    };
    QuantifierComponent.prototype.decreaseValue = function (element) {
        var oldValue = parseFloat(element.value);
        var newVal;
        if (oldValue <= parseFloat(element.min)) {
            newVal = oldValue;
        }
        else {
            newVal = oldValue - 1;
        }
        element.value = newVal;
        var event = new Event('change', { bubbles: true });
        element.dispatchEvent(event);
    };
    QuantifierComponent.prototype.handleQuantifierDataChange = function () {
        var data = this.selectedQuantifier.name;
        if (data) {
            var sendThisData = data.split('');
            sendThisData.unshift('quantifier');
            this.quantifierService.setQuantifier(sendThisData);
            this.quantifier = sendThisData;
            if (this.dataToEdit) {
                for (var i = 1; i < this.quantifier.length; i++) {
                    this.dataToEdit[i] = [this.quantifier[i]];
                }
                this.dataToEdit.length = this.quantifier.length;
            }
        }
    };
    QuantifierComponent.prototype.handleQuantifierCreate = function () {
        this.quantifierService.click(false);
        this.quantifier = this.quantifierService.getQuantifier();
        if (this.quantifier.length === 0) {
            this.notificationService.globalQuantifierClicked.emit({ show: false, quantifier: null });
        }
        else {
            this.notificationService.globalQuantifierClicked.emit({ show: false, quantifier: this.quantifier.slice() });
        }
    };
    QuantifierComponent.prototype.handleQuantifierClose = function () {
        this.elementService.elementClicked(undefined);
        this.elementService.displayNoMainEl({ show: true, hint: '' });
        this.dataArrayService.informTextInpCompToRecompileDataFromViewData('lateBufferDataChange');
    };
    return QuantifierComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", Array)
], QuantifierComponent.prototype, "dataToEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", Array)
], QuantifierComponent.prototype, "viewData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", Boolean)
], QuantifierComponent.prototype, "editable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", Boolean)
], QuantifierComponent.prototype, "highlightSelectionBackground", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]) === "function" && _a || Object)
], QuantifierComponent.prototype, "sendDataToGlobalArray", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]) === "function" && _b || Object)
], QuantifierComponent.prototype, "globalQuantifierClicked", void 0);
QuantifierComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'quantifier',
        template: __webpack_require__(215),
        styles: [__webpack_require__(193)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__elements_element_service__["a" /* ElementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__elements_element_service__["a" /* ElementService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__quantifier_service__["a" /* QuantifierService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__quantifier_service__["a" /* QuantifierService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__notification_service__["a" /* NotificationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__dataArray_dataArray_service__["a" /* DataArrayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__dataArray_dataArray_service__["a" /* DataArrayService */]) === "function" && _f || Object])
], QuantifierComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=quantifier.component.js.map

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QUANTIFIER_DATA; });
/* unused harmony export QuantifierData */
var QUANTIFIER_DATA = [
    {
        id: 0,
        name: '0-1',
        regExp: '?',
        hint: 'It will match 0 or 1 of the preceeding token.'
    },
    {
        id: 1,
        name: '0-∞',
        regExp: '*',
        hint: 'It will match 0 or more of the preceeding token.'
    },
    {
        id: 2,
        name: '1-∞',
        regExp: '+',
        hint: 'It will match 1 or more of the preceeding token.'
    },
    {
        id: 3,
        name: 'X',
        regExp: '',
        hint: 'It will exactly X of the preceeding token.'
    },
    {
        id: 4,
        name: 'X-∞',
        regExp: '',
        hint: 'It will match X or more of the preceeding token.'
    },
    {
        id: 5,
        name: 'X-Y',
        regExp: '',
        hint: 'It will match from X to Y of the preceeding token.'
    },
];
var QuantifierData = (function () {
    function QuantifierData() {
    }
    return QuantifierData;
}());

//# sourceMappingURL=quantifierData.model.js.map

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range_beauty_data_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quantifier_notification_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__elements_element_service__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeBeautyDataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RangeBeautyDataComponent = (function () {
    function RangeBeautyDataComponent() {
        this.hovered = false;
        __WEBPACK_IMPORTED_MODULE_3__elements_element_service__["a" /* ElementService */].getRangeData().then(this.initAllWithRangeData.bind(this));
    }
    RangeBeautyDataComponent.prototype.handleMouseEnter = function () {
        this.hovered = true;
    };
    RangeBeautyDataComponent.prototype.handleMouseLeave = function () {
        this.hovered = false;
    };
    RangeBeautyDataComponent.prototype.isObject = function (data) {
        return typeof data === 'object';
    };
    RangeBeautyDataComponent.prototype.splitDataOnCategories = function (data) {
        var newData = data.slice();
        newData = __WEBPACK_IMPORTED_MODULE_1__range_beauty_data_service__["a" /* RangeBeautyDataService */].isolateArrayElWithTemplate(newData, this.rangeData.categories.presets);
        newData = __WEBPACK_IMPORTED_MODULE_1__range_beauty_data_service__["a" /* RangeBeautyDataService */].isolateArrayElWithTemplate(newData, this.rangeData.categories.controlCharacters);
        newData = __WEBPACK_IMPORTED_MODULE_1__range_beauty_data_service__["a" /* RangeBeautyDataService */].groupArrayWithTemplate(newData, this.rangeData.categories.punctuation);
        newData = __WEBPACK_IMPORTED_MODULE_1__range_beauty_data_service__["a" /* RangeBeautyDataService */].groupArrayWithTemplate(newData, this.rangeData.categories.smallAlphabet);
        newData = __WEBPACK_IMPORTED_MODULE_1__range_beauty_data_service__["a" /* RangeBeautyDataService */].groupArrayWithTemplate(newData, this.rangeData.categories.bigAlphabet);
        newData = __WEBPACK_IMPORTED_MODULE_1__range_beauty_data_service__["a" /* RangeBeautyDataService */].groupArrayWithTemplate(newData, this.rangeData.categories.numbers);
        newData = __WEBPACK_IMPORTED_MODULE_1__range_beauty_data_service__["a" /* RangeBeautyDataService */].groupArrayWithTemplate(newData, this.rangeData.categories.unicode);
        newData = __WEBPACK_IMPORTED_MODULE_1__range_beauty_data_service__["a" /* RangeBeautyDataService */].groupArrayWithTemplate(newData, this.rangeData.categories.extended);
        newData = __WEBPACK_IMPORTED_MODULE_1__range_beauty_data_service__["a" /* RangeBeautyDataService */].groupRangesInArray(newData, '-');
        newData = this.transformRangeToViewDataMode(newData);
        return newData;
    };
    RangeBeautyDataComponent.prototype.transformRangeToViewDataMode = function (arrayToTransform) {
        var result = [];
        for (var i = 0; i < arrayToTransform.length; i++) {
            if (typeof arrayToTransform[i] === 'object') {
                result.push(this.transformRangeToViewDataMode(arrayToTransform[i]));
            }
            else {
                result.push(this.transformSymbol(arrayToTransform[i]));
            }
        }
        return result;
    };
    RangeBeautyDataComponent.prototype.transformSymbol = function (entrySymbol) {
        for (var i = 0; i < this.rangeData.topLeft.length; i++) {
            if (this.rangeData.topLeft[i].nameForRegExp === entrySymbol) {
                return this.rangeData.topLeft[i].name;
            }
        }
        var separatorIndex = entrySymbol.indexOf('-');
        if (separatorIndex !== -1 && entrySymbol.length > 2) {
            var firstChar = entrySymbol.substring(0, separatorIndex);
            var lastChar = entrySymbol.substring(separatorIndex + 1);
            return this.transformSymbol(firstChar) + '..' + this.transformSymbol(lastChar);
        }
        for (var i = 0; i < this.rangeData.ASCII.length; i++) {
            if (this.rangeData.ASCII[i].nameForRegExp === entrySymbol) {
                return this.rangeData.ASCII[i].name;
            }
        }
        return entrySymbol;
    };
    RangeBeautyDataComponent.prototype.initAllWithRangeData = function (rangeData) {
        if (this.viewData[this.viewData.length - 1][0] === 'quantifier') {
            this.viewData.pop();
        }
        this.rangeData = rangeData;
        this.showData = this.splitDataOnCategories(this.viewData.slice());
        if (__WEBPACK_IMPORTED_MODULE_1__range_beauty_data_service__["a" /* RangeBeautyDataService */].countViewDataLength(this.viewData) > 50) {
            var viewDataShort = __WEBPACK_IMPORTED_MODULE_1__range_beauty_data_service__["a" /* RangeBeautyDataService */].cutDataWithNumberOfSymbols(this.viewData, 50);
            var viewDataHidden = __WEBPACK_IMPORTED_MODULE_1__range_beauty_data_service__["a" /* RangeBeautyDataService */].cutDataWithNumberOfSymbolsReverse(this.viewData, 50);
            this.showDataHidden = this.transformRangeToViewDataMode(viewDataHidden);
            this.showDataShort = this.splitDataOnCategories(viewDataShort);
            this.showDataShort.push(['...']);
        }
    };
    return RangeBeautyDataComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", Array)
], RangeBeautyDataComponent.prototype, "viewData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", String)
], RangeBeautyDataComponent.prototype, "className", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* HostListener */])('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RangeBeautyDataComponent.prototype, "handleMouseEnter", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* HostListener */])('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RangeBeautyDataComponent.prototype, "handleMouseLeave", null);
RangeBeautyDataComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'range-beauty-data',
        template: __webpack_require__(216),
        styles: [__webpack_require__(194)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__quantifier_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_1__range_beauty_data_service__["a" /* RangeBeautyDataService */]]
    }),
    __metadata("design:paramtypes", [])
], RangeBeautyDataComponent);

//# sourceMappingURL=range-beauty-data.component.js.map

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeBeautyDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RangeBeautyDataService = (function () {
    function RangeBeautyDataService() {
    }
    RangeBeautyDataService.countViewDataLength = function (data) {
        var newData = data.slice();
        var result = 0;
        for (var i = 0; i < newData.length; i++) {
            result += newData[i].length;
        }
        return result;
    };
    RangeBeautyDataService.cutDataWithNumberOfSymbols = function (data, number) {
        var newData = [];
        for (var i = 0; i < data.length; i++) {
            number -= data[i].length;
            if (number < 0) {
                break;
            }
            newData.push(data[i]);
        }
        return newData;
    };
    RangeBeautyDataService.cutDataWithNumberOfSymbolsReverse = function (data, number) {
        var newData = [];
        for (var i = 0; i < data.length; i++) {
            number -= data[i].length;
            if (number >= 0) {
                continue;
            }
            newData.push(data[i]);
        }
        return newData;
    };
    RangeBeautyDataService.isolateArrayElWithTemplate = function (arrayToIsolate, template) {
        var arrayToIsolateCopy = [];
        for (var i = 0; i < arrayToIsolate.length; i++) {
            if (template.indexOf(arrayToIsolate[i]) !== -1) {
                arrayToIsolateCopy.push([arrayToIsolate[i]]);
                continue;
            }
            arrayToIsolateCopy.push(arrayToIsolate[i]);
        }
        return arrayToIsolateCopy;
    };
    RangeBeautyDataService.groupRangesInArray = function (arrayToGroup, separator) {
        var arrayToGroupCopy = [];
        for (var i = 0; i < arrayToGroup.length; i++) {
            if (typeof arrayToGroup[i] === 'string' && arrayToGroup[i].indexOf(separator) !== -1) {
                arrayToGroupCopy.push([arrayToGroup[i]]);
                continue;
            }
            arrayToGroupCopy.push(arrayToGroup[i]);
        }
        return arrayToGroupCopy;
    };
    RangeBeautyDataService.groupArrayWithTemplate = function (arrayToGroup, template) {
        var arrayToGroupCopy = [];
        var endGroupIndex;
        for (var i = 0; i < arrayToGroup.length; i++) {
            var templateIndex = template.indexOf(arrayToGroup[i]);
            if (templateIndex === -1) {
                arrayToGroupCopy.push(arrayToGroup[i]);
                continue;
            }
            endGroupIndex = i;
            while (arrayToGroup[endGroupIndex + 1] && template.indexOf(arrayToGroup[endGroupIndex + 1]) !== -1) {
                templateIndex++;
                endGroupIndex++;
            }
            arrayToGroupCopy.push(arrayToGroup.slice(i, endGroupIndex + 1));
            i = endGroupIndex;
        }
        return arrayToGroupCopy;
    };
    return RangeBeautyDataService;
}());
RangeBeautyDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], RangeBeautyDataService);

//# sourceMappingURL=range-beauty-data.service.js.map

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__element_position_model__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedElementViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectedElementViewComponent = (function () {
    function SelectedElementViewComponent() {
        this.passSelectedElementPosition = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
    }
    SelectedElementViewComponent.prototype.ngAfterViewInit = function () {
        this.currentElementPosition = new __WEBPACK_IMPORTED_MODULE_1__element_position_model__["a" /* ElementPosition */]();
        var clientCoords = this.element.nativeElement.getBoundingClientRect();
        var top = clientCoords.top;
        var left = clientCoords.left;
        var width = clientCoords.right - clientCoords.left;
        var height = clientCoords.bottom - clientCoords.top;
        this.currentElementPosition.position = new __WEBPACK_IMPORTED_MODULE_1__element_position_model__["b" /* Position */](top, left, width, height);
        this.passSelectedElementPosition.emit(this.currentElementPosition);
    };
    return SelectedElementViewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", String)
], SelectedElementViewComponent.prototype, "elementName", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(),
    __metadata("design:type", Object)
], SelectedElementViewComponent.prototype, "passSelectedElementPosition", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ViewChild */])('element'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */]) === "function" && _a || Object)
], SelectedElementViewComponent.prototype, "element", void 0);
SelectedElementViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'selected-element-view',
        template: __webpack_require__(217),
        styles: [__webpack_require__(195)]
    })
], SelectedElementViewComponent);

var _a;
//# sourceMappingURL=selected-element-view.component.js.map

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return State; });
var State = (function () {
    function State() {
    }
    return State;
}());

//# sourceMappingURL=state.model.js.map

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaretComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CaretComponent = (function () {
    function CaretComponent() {
    }
    return CaretComponent;
}());
CaretComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'caret',
        template: __webpack_require__(218),
        styles: [__webpack_require__(196)]
    })
], CaretComponent);

//# sourceMappingURL=caret.component.js.map

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dataArray_dataArray_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_caret_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reg_exp_parse_service__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadRegExpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReadRegExpComponent = (function () {
    function ReadRegExpComponent(dataArrayService, caretServise) {
        this.dataArrayService = dataArrayService;
        this.caretServise = caretServise;
        this.text = '';
        this.editWindowShow = false;
    }
    ReadRegExpComponent.prototype.handleMouseDown = function (event) {
        this.caretServise.stopBlinking();
        event.stopPropagation();
    };
    ReadRegExpComponent.prototype.handleMouseUp = function (event) {
        event.stopPropagation();
    };
    ReadRegExpComponent.prototype.handleMouseMove = function (event) {
        event.stopPropagation();
    };
    ReadRegExpComponent.prototype.handleKeyDown = function (event) {
        event.stopPropagation();
    };
    ReadRegExpComponent.prototype.handleKeyPress = function (event) {
        event.stopPropagation();
    };
    ReadRegExpComponent.prototype.submitData = function (data) {
        var parsedData;
        if (!this.checkRegExpWithDefault(data)) {
            return;
        }
        if (__WEBPACK_IMPORTED_MODULE_3__reg_exp_parse_service__["a" /* RegExpParseService */].checkDataForEmptyBrackets(data)) {
            this.showErrMsg('Empty brackets detected!');
            return;
        }
        if (!__WEBPACK_IMPORTED_MODULE_3__reg_exp_parse_service__["a" /* RegExpParseService */].checkDataForQuantifierWithoutGroup(data)) {
            this.showErrMsg('Quantifier without group or range detected!');
            return;
        }
        if (!__WEBPACK_IMPORTED_MODULE_3__reg_exp_parse_service__["a" /* RegExpParseService */].checkDataForCorrectQuantifiers(data)) {
            this.showErrMsg('Incorrect quantifier content!');
            return;
        }
        parsedData = __WEBPACK_IMPORTED_MODULE_3__reg_exp_parse_service__["a" /* RegExpParseService */].parseStringToData(data);
        if (!__WEBPACK_IMPORTED_MODULE_3__reg_exp_parse_service__["a" /* RegExpParseService */].checkDataForBracketBalance(parsedData)) {
            this.showErrMsg('Incorrect brackets usage!');
            return;
        }
        this.caretServise.stopBlinking();
        this.dataArrayService.setData(parsedData);
        this.closeErrMsg();
    };
    ReadRegExpComponent.prototype.copyDataToTextArea = function () {
        var data = this.dataArrayService.getData().join('');
        if (data === '') {
            this.showErrMsg('Nothing to copy!');
        }
        else {
            this.text = data;
        }
    };
    ReadRegExpComponent.prototype.toggleEditWindow = function () {
        this.editWindowShow = !this.editWindowShow;
        if (!this.editWindowShow) {
            this.closeErrMsg();
        }
    };
    ReadRegExpComponent.prototype.checkRegExpWithDefault = function (data) {
        try {
            // JS does not support lookbehind
            var dataWithoutLookbehind = void 0;
            dataWithoutLookbehind = data.replace('(?<=', '(?=');
            dataWithoutLookbehind = dataWithoutLookbehind.replace('(?<!', '(?!');
            // This may cause an error
            new RegExp(dataWithoutLookbehind);
            return true;
        }
        catch (e) {
            var msg = e.message;
            var msgShort = msg.substring(msg.lastIndexOf(': ') + 2);
            this.showErrMsg(msgShort);
            return false;
        }
    };
    ReadRegExpComponent.prototype.showErrMsg = function (message) {
        this.errTxt.nativeElement.innerHTML = message;
        this.errMsg.nativeElement.style.display = 'block';
    };
    ReadRegExpComponent.prototype.closeErrMsg = function () {
        this.errMsg.nativeElement.style.display = 'none';
    };
    return ReadRegExpComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ViewChild */])('errTxt'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */]) === "function" && _a || Object)
], ReadRegExpComponent.prototype, "errTxt", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ViewChild */])('errMsg'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */]) === "function" && _b || Object)
], ReadRegExpComponent.prototype, "errMsg", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* HostListener */])('mousedown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReadRegExpComponent.prototype, "handleMouseDown", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* HostListener */])('mouseup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReadRegExpComponent.prototype, "handleMouseUp", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* HostListener */])('mousemove', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReadRegExpComponent.prototype, "handleMouseMove", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* HostListener */])('keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReadRegExpComponent.prototype, "handleKeyDown", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* HostListener */])('keypress', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReadRegExpComponent.prototype, "handleKeyPress", null);
ReadRegExpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'read-reg-exp',
        template: __webpack_require__(219),
        styles: [__webpack_require__(197)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__dataArray_dataArray_service__["a" /* DataArrayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dataArray_dataArray_service__["a" /* DataArrayService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_caret_service__["a" /* CaretService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_caret_service__["a" /* CaretService */]) === "function" && _d || Object])
], ReadRegExpComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=read-reg-exp.component.js.map

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__beauty_data_beauty_data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dataArray_dataArray_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__elements_element_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__elements_element_model__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_all_elements_position_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnchorsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var comingAnchor = (function () {
    function comingAnchor() {
        this.name = '';
        this.symbol = '';
        this.regExp = '';
    }
    return comingAnchor;
}());
var AnchorsComponent = (function () {
    function AnchorsComponent(dataArrayService, elementService, beautyDataService, allElPosService) {
        this.dataArrayService = dataArrayService;
        this.elementService = elementService;
        this.beautyDataService = beautyDataService;
        this.allElPosService = allElPosService;
        this.anchorsObj = new __WEBPACK_IMPORTED_MODULE_4__elements_element_model__["a" /* Element */]();
        this.hasCreated = false;
        this.hasEdited = false;
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
    }
    AnchorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalData = this.dataArrayService.getData();
        this.parent = this.allElPosService.getInputFromKeyboard();
        this.elementService.getElement(5).then(function (element) { return _this.anchorsObj = element; });
    };
    AnchorsComponent.prototype.ngOnDestroy = function () {
        if (this.hasCreated) {
            this.allElPosService.setInputFromKeyboardIndex(this.parent.index + 1);
            this.dataArrayService.informTextInpCompToRecompileDataFromViewData('fixCaret');
            return;
        }
        if (this.hasEdited) {
            this.elementService.elementToEditClicked(false);
            this.dataArrayService.informTextInpCompToRecompileDataFromViewData('fixCaret');
            return;
        }
        if (this.dataToEdit) {
            return;
        }
        this.deleteAnchorElement();
    };
    AnchorsComponent.prototype.handleAnchor = function (datum) {
        if (!this.dataToEdit) {
            this.handleAnchorCreate(datum);
        }
        else {
            this.handleAnchorEdit(datum);
        }
        this.close.emit();
    };
    AnchorsComponent.prototype.stopPropagation = function (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        event.preventDefault();
    };
    AnchorsComponent.prototype.handleAnchorCreate = function (datum) {
        var data = [datum.regExp];
        var parent = this.allElPosService.getInputFromKeyboard();
        if (!parent) {
            this.globalData = this.globalData.concat(data);
            this.dataArrayService.setData(this.globalData);
        }
        else {
            var newAnchor = this.beautyDataService.compileViewDataFromData(data.slice())[0];
            if (parent.direction === 'left') {
                parent.parent.splice(parent.index, 1, newAnchor);
            }
            if (parent.direction === 'right') {
                parent.parent.splice(parent.index + 1, 1, newAnchor);
            }
            this.hasCreated = true;
        }
    };
    AnchorsComponent.prototype.handleAnchorEdit = function (datum) {
        if (datum.name === 'Non-Word Boundary') {
            this.dataToEdit[0] = 'anchorOpposite';
            var elementToRestyle = document.getElementsByClassName('beautyData editing anchor')[0];
            if (elementToRestyle) {
                elementToRestyle.classList.remove('anchor');
                elementToRestyle.classList.add('anchorOpposite');
                elementToRestyle.classList.remove('editing');
            }
        }
        else {
            this.dataToEdit[0] = 'anchor';
            var elementToRestyle = document.getElementsByClassName('beautyData editing anchorOpposite')[0];
            if (elementToRestyle) {
                elementToRestyle.classList.remove('anchorOpposite');
                elementToRestyle.classList.add('anchor');
                elementToRestyle.classList.remove('editing');
            }
        }
        this.dataToEdit[1] = datum.symbol;
        this.hasEdited = true;
    };
    AnchorsComponent.prototype.deleteAnchorElement = function () {
        if (this.parent.direction === 'left') {
            this.parent.parent.splice(this.parent.index, 1);
        }
        if (this.parent.direction === 'right') {
            this.parent.parent.splice(this.parent.index + 1, 1);
        }
    };
    return AnchorsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", Array)
], AnchorsComponent.prototype, "dataToEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]) === "function" && _a || Object)
], AnchorsComponent.prototype, "close", void 0);
AnchorsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'anchors',
        template: __webpack_require__(220),
        styles: [__webpack_require__(198)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__dataArray_dataArray_service__["a" /* DataArrayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dataArray_dataArray_service__["a" /* DataArrayService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__elements_element_service__["a" /* ElementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__elements_element_service__["a" /* ElementService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__beauty_data_beauty_data_service__["a" /* BeautyDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__beauty_data_beauty_data_service__["a" /* BeautyDataService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_all_elements_position_service__["a" /* AllElementsPositionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_all_elements_position_service__["a" /* AllElementsPositionService */]) === "function" && _e || Object])
], AnchorsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=anchors.component.js.map

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dataArray_dataArray_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__elements_element_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__elements_element_model__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_array_service__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MAX_GROUP_DEPTH = 5;
var GroupComponent = GroupComponent_1 = (function () {
    function GroupComponent(dataArrayService, elementService) {
        this.dataArrayService = dataArrayService;
        this.elementService = elementService;
        this.groupSelectedEl = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.oneItem = 'Group';
        this.globalWrapDisable = false;
        this.groupObj = new __WEBPACK_IMPORTED_MODULE_3__elements_element_model__["a" /* Element */]();
        this.data = [];
    }
    GroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.dataToEdit) {
            this.data = this.dataArrayService.getData();
        }
        else {
            this.data = this.dataToEdit;
        }
        this.elementService.getElement(3).then(function (element) { return _this.groupObj = element; });
        this.globalWrapDisable = this.getDataMaxDepth(this.viewData[0]) >= MAX_GROUP_DEPTH;
    };
    GroupComponent.prototype.ngAfterViewInit = function () {
        if (this.dataToEdit) {
            this.twoButtons.nativeElement.classList.add('disabled');
        }
    };
    GroupComponent.prototype.ngOnDestroy = function () {
        if (this.dataToEdit) {
            this.dataArrayService.informTextInpCompToRecompileDataFromViewData('group');
        }
        else {
            this.dataArrayService.informTextInpCompToRecompileDataFromViewData('');
        }
    };
    GroupComponent.prototype.changeItemToOpposite = function (event) {
        if (this.disabled) {
            return;
        }
        event.stopPropagation();
        if (this.oneItem === 'Group') {
            this.oneItem = 'Ungroup';
        }
        else {
            this.oneItem = 'Group';
        }
        this.groupSelectedEl.emit(this.oneItem);
    };
    GroupComponent.prototype.handleGroup = function (name) {
        if (!this.dataToEdit) {
            this.handleGroupCreate(name);
        }
        else {
            this.handleGroupEdit(name);
        }
        this.globalWrapDisable = this.getDataMaxDepth(this.viewData[0]) >= MAX_GROUP_DEPTH;
    };
    GroupComponent.prototype.handleGroupCreate = function (name) {
        var data = this.data;
        if (name === 'Capture') {
            if (this.globalWrapDisable) {
                return;
            }
            GroupComponent_1.captureGroupCreate(data);
        }
        else {
            GroupComponent_1.nonCaptureGroupCreate(data);
        }
        this.setData(data);
    };
    GroupComponent.prototype.handleGroupEdit = function (name) {
        var pathToData = __WEBPACK_IMPORTED_MODULE_4__services_array_service__["a" /* ArrayService */].getPathToElement(this.viewData, this.data);
        if (name === 'Capture' && this.data[0] !== 'group') {
            this.data.unshift('group');
            this.twoButtons.nativeElement.classList.add('disabled');
            this.twoButtons.nativeElement.classList.remove('disabledLast');
        }
        else if (name === 'Non-capture' && this.data[0] === 'group') {
            this.data.shift();
            this.twoButtons.nativeElement.classList.remove('disabled');
            this.twoButtons.nativeElement.classList.add('disabledLast');
            // check for quantifier
            if (this.data[this.data.length - 1][0] === 'quantifier') {
                this.data.pop();
            }
        }
        else {
            return;
        }
        this.dataArrayService.informTextInpCompToRecompileDataFromViewData('group');
        var newData = this.viewData;
        for (var i = pathToData.length - 1; i >= 1; i--) {
            newData = newData[pathToData[i]];
        }
        if (name === 'Non-capture') {
            newData.splice(pathToData[0] + 1, this.data.length - 1);
        }
        newData[pathToData[0]] = this.data;
    };
    GroupComponent.prototype.getDataMaxDepth = function (data) {
        var maxChildDepth = 0;
        for (var i = 0; i < data.length; i++) {
            if (typeof (data[i]) === "object" && data[i][0] === "group") {
                var tmp = this.getDataMaxDepth(data[i]);
                if (maxChildDepth < tmp) {
                    maxChildDepth = tmp;
                }
            }
        }
        return maxChildDepth + 1;
    };
    GroupComponent.prototype.setData = function (data) {
        this.dataArrayService.setData(data);
    };
    GroupComponent.captureGroupCreate = function (data) {
        data.unshift('(');
        data.push(')');
    };
    GroupComponent.nonCaptureGroupCreate = function (data) {
        if (data[0] === '(' && data[data.length - 1] === ')') {
            data.shift();
            data.pop();
        }
        if (data[0] === '(' && data[data.length - 1] === '}') {
            data.shift();
            for (var j = data.length - 1; j >= 0 && data[j] !== '{'; j--) {
                data.pop();
            }
            data.pop();
            data.pop();
        }
    };
    return GroupComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ViewChild */])('twoButtons'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */]) === "function" && _a || Object)
], GroupComponent.prototype, "twoButtons", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", Array)
], GroupComponent.prototype, "dataToEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", Boolean)
], GroupComponent.prototype, "showOneItem", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", Array)
], GroupComponent.prototype, "viewData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", Boolean)
], GroupComponent.prototype, "disabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]) === "function" && _b || Object)
], GroupComponent.prototype, "groupSelectedEl", void 0);
GroupComponent = GroupComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'group',
        template: __webpack_require__(221),
        styles: [__webpack_require__(199)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__dataArray_dataArray_service__["a" /* DataArrayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dataArray_dataArray_service__["a" /* DataArrayService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__elements_element_service__["a" /* ElementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__elements_element_service__["a" /* ElementService */]) === "function" && _d || Object])
], GroupComponent);

var GroupComponent_1, _a, _b, _c, _d;
//# sourceMappingURL=group.component.js.map

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return comingLookAround; });
var comingLookAround = (function () {
    function comingLookAround() {
        this.name = '';
        this.regExp = '';
    }
    return comingLookAround;
}());

//# sourceMappingURL=coming-lookaround.model.js.map

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lookaround_model__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__beauty_data_beauty_data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dataArray_dataArray_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__elements_element_model__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__elements_element_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_all_elements_position_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_array_service__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LookaroundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LookaroundComponent = LookaroundComponent_1 = (function () {
    function LookaroundComponent(dataArrayService, elementService, beautyDataService, allElPosService) {
        this.dataArrayService = dataArrayService;
        this.elementService = elementService;
        this.beautyDataService = beautyDataService;
        this.allElPosService = allElPosService;
        this.lookaround = new __WEBPACK_IMPORTED_MODULE_1__lookaround_model__["a" /* Lookaround */]();
        this.lookaroundObj = new __WEBPACK_IMPORTED_MODULE_4__elements_element_model__["a" /* Element */]();
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
    }
    LookaroundComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.dataToEdit) {
            this.globalData = this.dataArrayService.getData();
        }
        else {
            this.initEdit();
            this.globalData = this.dataToEdit;
        }
        this.elementService.getElement(4).then(function (element) { return _this.lookaroundObj = element; });
        this.inputFromKeyboard = this.allElPosService.getInputFromKeyboard();
    };
    LookaroundComponent.prototype.ngOnDestroy = function () {
        this.elementService.elementToEditClicked(false);
        if (this.dataToEdit) {
            return;
        }
        if (this.inputFromKeyboard.parent.length === 1) {
            if (this.inputFromKeyboard.parent[0][0] === 'main-element') {
                this.inputFromKeyboard.parent.splice(0, 1);
                return;
            }
        }
        this.deleteLookaroundElement();
        this.allElPosService.setInputFromKeyboardIndex(this.inputFromKeyboard.index + 1);
        this.dataArrayService.informTextInpCompToRecompileDataFromViewData('fixCaret');
    };
    LookaroundComponent.prototype.handleLookaround = function (datum) {
        if (datum.name === 'Positive' || datum.name === 'Negative') {
            this.checkForLookaround('posNeg', datum);
        }
        else {
            this.checkForLookaround('lALB', datum);
        }
    };
    LookaroundComponent.prototype.editLookaround = function () {
        var lALBStringName = ' ' +
            this.lookaround.lALB.name[0].toLowerCase() +
            this.lookaround.lALB.name.slice(1, 4) +
            this.lookaround.lALB.name[5].toUpperCase() +
            this.lookaround.lALB.name.slice(6);
        var posNegName = this.lookaround.posNeg.name.toLowerCase();
        var totalName = lALBStringName + ' ' + posNegName;
        var data = this.dataToEdit;
        var newData;
        var pathToData = __WEBPACK_IMPORTED_MODULE_7__services_array_service__["a" /* ArrayService */].getPathToElement(this.viewData, this.dataToEdit);
        data[1] = totalName;
        this.dataArrayService.informTextInpCompToRecompileDataFromViewData('changeLookaround');
        newData = this.viewData;
        for (var i = pathToData.length - 1; i >= 1; i--) {
            newData = newData[pathToData[i]];
        }
        newData[pathToData[0]] = this.dataToEdit;
    };
    LookaroundComponent.prototype.initEdit = function () {
        this.lookaround.lALB.name = this.dataToEdit[1].split(' ')[1];
        this.lookaround.posNeg.name = this.dataToEdit[1].split(' ')[2];
        if (this.lookaround.posNeg.name === 'positive') {
            this.lookaround.posNeg.name = 'Positive';
        }
        else {
            this.lookaround.posNeg.name = 'Negative';
        }
        if (this.lookaround.lALB.name === 'lookAhead') {
            this.lookaround.lALB.name = 'Look ahead';
        }
        else {
            this.lookaround.lALB.name = 'Look behind';
        }
    };
    LookaroundComponent.prototype.checkForLookaround = function (lookName, datum) {
        if (this.lookaround[lookName].name === datum.name) {
            this.lookaround[lookName].name = '';
            this.lookaround[lookName].regExp = '';
        }
        else {
            this.lookaround[lookName].name = datum.name;
            this.lookaround[lookName].regExp = datum.regExp;
        }
    };
    LookaroundComponent.prototype.addLookaround = function () {
        if (this.lookaround.posNeg.name && this.lookaround.lALB.name) {
            this.fullLookaround = this.lookaround.lALB.regExp + this.lookaround.posNeg.regExp;
            var data = ['(', this.fullLookaround, ')'];
            var newLookaround = this.beautyDataService.compileViewDataFromData(data.slice())[0];
            var keyboard = this.inputFromKeyboard;
            LookaroundComponent_1.insertLookaround(keyboard, newLookaround);
            this.dataArrayService.informTextInpCompToRecompileDataFromViewData('addLookaround');
            this.close.emit();
        }
    };
    LookaroundComponent.prototype.deleteLookaround = function () {
        this.close.emit();
        var data = this.dataToEdit;
        data.length = 0;
        this.elementService.elementToEditClicked(false);
        this.dataArrayService.informTextInpCompToRecompileDataFromViewData('deleteLookaround');
    };
    LookaroundComponent.prototype.deleteLookaroundElement = function () {
        if (this.inputFromKeyboard.direction === 'left') {
            if (this.inputFromKeyboard.parent[this.inputFromKeyboard.index] &&
                this.inputFromKeyboard.parent[this.inputFromKeyboard.index][0] === 'main-element') {
                this.inputFromKeyboard.parent.splice(this.inputFromKeyboard.index, 1);
                this.inputFromKeyboard.index--;
            }
        }
        if (this.inputFromKeyboard.direction === 'right') {
            if (this.inputFromKeyboard.parent[this.inputFromKeyboard.index + 1] &&
                this.inputFromKeyboard.parent[this.inputFromKeyboard.index + 1][0] === 'main-element') {
                this.inputFromKeyboard.parent.splice(this.inputFromKeyboard.index + 1, 1);
                this.inputFromKeyboard.index--;
            }
        }
    };
    LookaroundComponent.insertLookaround = function (keyboard, newLookaround) {
        if (keyboard.direction === 'left') {
            keyboard.parent.splice(keyboard.index, 1, newLookaround);
        }
        if (keyboard.direction === 'right') {
            keyboard.parent.splice(keyboard.index + 1, 1, newLookaround);
        }
    };
    return LookaroundComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", Array)
], LookaroundComponent.prototype, "dataToEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", Array)
], LookaroundComponent.prototype, "viewData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]) === "function" && _a || Object)
], LookaroundComponent.prototype, "close", void 0);
LookaroundComponent = LookaroundComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'lookaround',
        template: __webpack_require__(222),
        styles: [__webpack_require__(200)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__dataArray_dataArray_service__["a" /* DataArrayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dataArray_dataArray_service__["a" /* DataArrayService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__elements_element_service__["a" /* ElementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__elements_element_service__["a" /* ElementService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__beauty_data_beauty_data_service__["a" /* BeautyDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__beauty_data_beauty_data_service__["a" /* BeautyDataService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_all_elements_position_service__["a" /* AllElementsPositionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_all_elements_position_service__["a" /* AllElementsPositionService */]) === "function" && _e || Object])
], LookaroundComponent);

var LookaroundComponent_1, _a, _b, _c, _d, _e;
//# sourceMappingURL=lookaround.component.js.map

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__coming_lookaround_model__ = __webpack_require__(121);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lookaround; });

var Lookaround = (function () {
    function Lookaround() {
        this.lALB = new __WEBPACK_IMPORTED_MODULE_0__coming_lookaround_model__["a" /* comingLookAround */]();
        this.posNeg = new __WEBPACK_IMPORTED_MODULE_0__coming_lookaround_model__["a" /* comingLookAround */]();
    }
    return Lookaround;
}());

//# sourceMappingURL=lookaround.model.js.map

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascii_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range_data_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hint_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsciiComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AsciiComponent = (function () {
    function AsciiComponent(hintService, rangeDataService, asciiService) {
        this.hintService = hintService;
        this.rangeDataService = rangeDataService;
        this.asciiService = asciiService;
        this.presetNameArray = [];
    }
    AsciiComponent.prototype.ngOnInit = function () {
        var editData = this.dataToEdit;
        this.rangeData = this.rangeDataService.getRangeData();
        this.presetNameArray = this.rangeDataService.getPresetNameArray();
        this.data = this.rangeData.ASCII;
        this.setEditData(editData);
    };
    AsciiComponent.prototype.ngAfterViewChecked = function () {
        this.asciiService.setData(this.data);
    };
    AsciiComponent.prototype.handleShiftDown = function (event) {
        var hint = 'You can add multiple range. Ctrl - add character, Shift - create one more range.';
        if (event.shiftKey || event.ctrlKey) {
            this.hintService.setHint(hint);
        }
        if (event.shiftKey) {
            this.asciiService.onMouseOver(hint, this.currentIndex, event);
        }
    };
    AsciiComponent.prototype.getIndexOfFirstEl = function () {
        return this.asciiService.getIndexOfFirstEl();
    };
    AsciiComponent.prototype.getIndexOfLastEl = function () {
        return this.asciiService.getIndexOfLastEl();
    };
    AsciiComponent.prototype.getHoveredPresets = function () {
        return this.rangeDataService.getHoveredPresets();
    };
    AsciiComponent.prototype.getPresetFullElArray = function () {
        return this.rangeDataService.getPresetFullElArray();
    };
    AsciiComponent.prototype.onMouseOver = function (hint, indexOfLastEl, event) {
        this.currentIndex = indexOfLastEl;
        this.asciiService.onMouseOver(hint, indexOfLastEl, event);
    };
    AsciiComponent.prototype.onMouseOut = function (event) {
        this.asciiService.onMouseOut(event);
    };
    AsciiComponent.prototype.addData = function (el, indexOfEl) {
        this.asciiService.addData(el, indexOfEl);
    };
    AsciiComponent.prototype.setEditData = function (editData) {
        if (editData) {
            for (var i = 0; i < editData.length; i++) {
                var presetIndex = this.presetNameArray.indexOf(editData[i]);
                if (editData[i].length > 2) {
                    this.parsePreset(editData[i], '-');
                    continue;
                }
                for (var j = 0; j < this.data.length; j++) {
                    var edit = editData[i].slice();
                    if (presetIndex >= 0 || edit === this.data[j].nameForRegExp) {
                        this.addData(editData[i]);
                        break;
                    }
                }
            }
        }
    };
    AsciiComponent.prototype.parsePreset = function (string, separator) {
        var separatorIndex = string.indexOf(separator);
        if (separatorIndex === -1) {
            this.addData(string);
            return;
        }
        var firstChar = string.substring(0, separatorIndex);
        var lastChar = string.substring(separatorIndex + 1);
        var charsToInsert = this.rangeData.categories.all
            .slice(this.rangeData.categories.all.indexOf(firstChar), this.rangeData.categories.all.indexOf(lastChar) + 1);
        for (var i = 0; i < charsToInsert.length; i++) {
            this.addData(charsToInsert[i]);
        }
    };
    return AsciiComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", Array)
], AsciiComponent.prototype, "dataToEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* HostListener */])('document:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AsciiComponent.prototype, "handleShiftDown", null);
AsciiComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'ascii',
        template: __webpack_require__(223),
        styles: [__webpack_require__(201)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__ascii_service__["a" /* AsciiService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__hint_service__["a" /* HintService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__hint_service__["a" /* HintService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__range_data_service__["a" /* RangeDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__range_data_service__["a" /* RangeDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ascii_service__["a" /* AsciiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ascii_service__["a" /* AsciiService */]) === "function" && _c || Object])
], AsciiComponent);

var _a, _b, _c;
//# sourceMappingURL=ascii.component.js.map

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range_data_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PosNegComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PosNegComponent = (function () {
    function PosNegComponent(rangeDataService) {
        this.rangeDataService = rangeDataService;
        this.posNeg = 'Positive';
    }
    PosNegComponent.prototype.ngOnInit = function () {
        if (this.status === 'Negative') {
            this.posNeg = this.status;
        }
    };
    PosNegComponent.prototype.ngOnDestroy = function () {
        var data = this.rangeDataService.getRangeElements();
        if (this.posNeg === 'Negative' && data.length > 0) {
            data.unshift('^');
            this.rangeDataService.setRangeElements(data);
        }
        if (this.posNeg === 'Positive' && data[0] === '^') {
            data.shift();
            this.rangeDataService.setRangeElements(data);
        }
    };
    PosNegComponent.prototype.handlePosNeg = function (name) {
        this.posNeg = name;
    };
    return PosNegComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", Array)
], PosNegComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", String)
], PosNegComponent.prototype, "status", void 0);
PosNegComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'pos-neg',
        template: __webpack_require__(224),
        styles: [__webpack_require__(202)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__range_data_service__["a" /* RangeDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__range_data_service__["a" /* RangeDataService */]) === "function" && _a || Object])
], PosNegComponent);

var _a;
//# sourceMappingURL=pos-neg.component.js.map

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__presets_service__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hint_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__elements_element_service__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PresetsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PresetsComponent = (function () {
    function PresetsComponent(hintService, presetsService) {
        this.hintService = hintService;
        this.presetsService = presetsService;
    }
    PresetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3__elements_element_service__["a" /* ElementService */].getRangeData().then(function (rangeData) {
            _this.data = rangeData.topLeft;
        });
    };
    PresetsComponent.prototype.getPresets = function () {
        return this.presetsService.getPresets();
    };
    PresetsComponent.prototype.onMouseOverPreset = function (element) {
        this.setHint(element.hint);
        this.presetsService.setHoveredPresets(element.elements);
    };
    PresetsComponent.prototype.onMouseOutPreset = function () {
        this.setHint(undefined);
        this.presetsService.setHoveredPresets([]);
    };
    PresetsComponent.prototype.handlePresetClick = function (element) {
        this.presetsService.handlePresetClick(element);
        this.setHint(('You can add multiple range. Ctrl - add character, Shift - create one more range.'));
    };
    PresetsComponent.prototype.setHint = function (hint) {
        this.hintService.setHint(hint);
    };
    return PresetsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", Array)
], PresetsComponent.prototype, "dataToEdit", void 0);
PresetsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'presets',
        template: __webpack_require__(225),
        styles: [__webpack_require__(203)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__presets_service__["a" /* PresetsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__hint_service__["a" /* HintService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__hint_service__["a" /* HintService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__presets_service__["a" /* PresetsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__presets_service__["a" /* PresetsService */]) === "function" && _b || Object])
], PresetsComponent);

var _a, _b;
//# sourceMappingURL=presets.component.js.map

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range_data_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ascii_ascii_service__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PresetsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PresetsService = (function () {
    function PresetsService(rangeDataService, asciiService) {
        this.rangeDataService = rangeDataService;
        this.asciiService = asciiService;
    }
    PresetsService.prototype.handlePresetClick = function (element) {
        this.asciiService.addData(element.nameForRegExp);
    };
    PresetsService.prototype.setHoveredPresets = function (elements) {
        this.rangeDataService.setHoveredPresets(elements);
    };
    PresetsService.prototype.getPresets = function () {
        return this.rangeDataService.getRangePresets();
    };
    return PresetsService;
}());
PresetsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__range_data_service__["a" /* RangeDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__range_data_service__["a" /* RangeDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ascii_ascii_service__["a" /* AsciiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ascii_ascii_service__["a" /* AsciiService */]) === "function" && _b || Object])
], PresetsService);

var _a, _b;
//# sourceMappingURL=presets.service.js.map

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeArray; });
var RangeArray = (function () {
    function RangeArray(presets, elements) {
        this.presets = presets;
        this.elements = elements;
    }
    return RangeArray;
}());

//# sourceMappingURL=range-array.model.js.map

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range_data_model__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range_data_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ascii_ascii_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__beauty_data_beauty_data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__elements_element_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dataArray_dataArray_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_all_elements_position_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_caret_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeDataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RangeDataComponent = RangeDataComponent_1 = (function () {
    function RangeDataComponent(elementService, dataArrayService, rangeDataService, beautyDataService, allElPosService) {
        this.elementService = elementService;
        this.dataArrayService = dataArrayService;
        this.rangeDataService = rangeDataService;
        this.beautyDataService = beautyDataService;
        this.allElPosService = allElPosService;
        this.rangeData = new __WEBPACK_IMPORTED_MODULE_1__range_data_model__["a" /* RangeData */]();
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
    }
    RangeDataComponent.prototype.ngOnInit = function () {
        this.getRangeData();
        this.globalData = this.dataArrayService.getData();
        this.checkDataToEdit();
        this.parent = this.allElPosService.getInputFromKeyboard();
    };
    RangeDataComponent.prototype.ngOnDestroy = function () {
        this.deleteQuantifierElement();
        var elements = this.getRangeElements();
        if (elements.length > 0) {
            elements = this.transformDataToCompile(elements);
            if (!this.dataToEdit) {
                this.renderData(elements);
            }
            else {
                this.editData(elements);
            }
        }
        else {
            if (this.dataToEdit) {
                this.dataToEdit.length = 0;
                this.elementService.elementToEditClicked(false);
                this.dataArrayService.informTextInpCompToRecompileDataFromViewData('range');
            }
        }
    };
    RangeDataComponent.prototype.renderData = function (elements) {
        var _this = this;
        var parent = this.allElPosService.getInputFromKeyboard();
        var index = this.allElPosService.getInputFromKeyboard().index;
        var newRange = this.beautyDataService.compileViewDataFromData(elements.slice())[0];
        if (parent.direction === 'left') {
            parent.parent.splice(index, 0, newRange);
        }
        if (parent.direction === 'right') {
            parent.parent.splice(index + 1, 0, newRange);
        }
        setTimeout(function () {
            _this.dataArrayService.informTextInpCompToRecompileDataFromViewData('fixCaret');
        }, 0);
        this.allElPosService.setInputFromKeyboardIndex(index + 1);
    };
    RangeDataComponent.prototype.editData = function (elements) {
        var newRange = this.beautyDataService.compileViewDataFromData(elements.slice())[0];
        this.returnQuantifier(newRange);
        this.dataToEdit.length = 0;
        RangeDataComponent_1.addArrayToArray(this.dataToEdit, newRange);
        this.elementService.elementToEditClicked(false);
        this.dataArrayService.informTextInpCompToRecompileDataFromViewData('range');
    };
    RangeDataComponent.prototype.getRangeData = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5__elements_element_service__["a" /* ElementService */].getRangeData().then(function (rangeData) { return _this.rangeData = rangeData; });
    };
    RangeDataComponent.prototype.getRangeElements = function () {
        return this.rangeDataService.getRangeElements();
    };
    RangeDataComponent.prototype.checkDataToEdit = function () {
        if (this.dataToEdit) {
            if (typeof this.dataToEdit[this.dataToEdit.length - 1] === 'object') {
                this.compiledData = this.beautyDataService.compileDataFromViewData(this.dataToEdit.slice(0, -1));
            }
            else {
                this.compiledData = this.beautyDataService.compileDataFromViewData(this.dataToEdit.slice());
            }
            this.compiledData.shift();
            this.compiledData.pop();
            if (this.compiledData[0] === '^') {
                this.posNegStatus = 'Negative';
                this.compiledData.shift();
            }
        }
    };
    RangeDataComponent.prototype.transformDataToCompile = function (data) {
        data = RangeDataComponent_1.sortArrayBasedOnAnother(data, this.rangeDataService.getRangeData().categories.all);
        data = RangeDataComponent_1.spliceArrayWithTemplate(data, this.rangeData.categories.controlCharacters);
        data = RangeDataComponent_1.spliceArrayWithTemplate(data, this.rangeData.categories.numbers);
        data = RangeDataComponent_1.spliceArrayWithTemplate(data, this.rangeData.categories.punctuation);
        data = RangeDataComponent_1.spliceArrayWithTemplate(data, this.rangeData.categories.bigAlphabet);
        data = RangeDataComponent_1.spliceArrayWithTemplate(data, this.rangeData.categories.smallAlphabet);
        data = RangeDataComponent_1.spliceArrayWithTemplate(data, this.rangeData.categories.extended);
        data.unshift('[');
        data.push(']');
        return data;
    };
    RangeDataComponent.prototype.deleteQuantifierElement = function () {
        if (this.parent.direction === 'left') {
            this.parent.parent.splice(this.parent.index, 1);
        }
        if (this.parent.direction === 'right') {
            this.parent.parent.splice(this.parent.index + 1, 1);
        }
    };
    RangeDataComponent.prototype.returnQuantifier = function (range) {
        if (typeof this.dataToEdit[this.dataToEdit.length - 1] === 'object') {
            range.push(this.dataToEdit[this.dataToEdit.length - 1]);
        }
    };
    RangeDataComponent.sortArrayBasedOnAnother = function (arrayToSort, baseArray) {
        var index;
        var outputArray = [];
        for (var i = 0; i < arrayToSort.length; i++) {
            outputArray[baseArray.indexOf(arrayToSort[i])] = arrayToSort[i];
        }
        for (var i = 1; i < outputArray.length; i++) {
            var j = i;
            if (!outputArray[j])
                continue;
            while (j > 0 && !outputArray[j - 1]) {
                outputArray[j - 1] = outputArray[j];
                outputArray[j] = undefined;
                j--;
            }
        }
        index = outputArray.length - 1;
        for (index; index >= 0; index--) {
            if (outputArray[index])
                break;
        }
        outputArray = outputArray.slice(0, index + 1);
        return outputArray;
    };
    RangeDataComponent.spliceArrayWithTemplate = function (arrayToSplice, template) {
        var arrayToSpliceCopy = [];
        var endSpliceIndex;
        for (var i = 0; i < arrayToSplice.length; i++) {
            var templateIndex = template.indexOf(arrayToSplice[i]);
            if (templateIndex === -1) {
                arrayToSpliceCopy.push(arrayToSplice[i]);
                continue;
            }
            endSpliceIndex = i;
            while (arrayToSplice[endSpliceIndex + 1] && arrayToSplice[endSpliceIndex + 1] === template[templateIndex + 1]) {
                templateIndex++;
                endSpliceIndex++;
            }
            if (endSpliceIndex === i) {
                arrayToSpliceCopy.push(arrayToSplice[i]);
            }
            else {
                arrayToSpliceCopy.push(arrayToSplice[i] + '-' + arrayToSplice[endSpliceIndex]);
                i = endSpliceIndex;
            }
        }
        return arrayToSpliceCopy;
    };
    RangeDataComponent.addArrayToArray = function (mainArray, secondaryArray) {
        for (var i = 0; i < secondaryArray.length; i++) {
            mainArray.push(secondaryArray[i]);
        }
    };
    return RangeDataComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", Array)
], RangeDataComponent.prototype, "dataToEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", Array)
], RangeDataComponent.prototype, "viewData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]) === "function" && _a || Object)
], RangeDataComponent.prototype, "close", void 0);
RangeDataComponent = RangeDataComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'range-data',
        template: __webpack_require__(226),
        styles: [__webpack_require__(204)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__range_data_service__["a" /* RangeDataService */], __WEBPACK_IMPORTED_MODULE_8__services_caret_service__["a" /* CaretService */], __WEBPACK_IMPORTED_MODULE_3__ascii_ascii_service__["a" /* AsciiService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__elements_element_service__["a" /* ElementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__elements_element_service__["a" /* ElementService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__dataArray_dataArray_service__["a" /* DataArrayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__dataArray_dataArray_service__["a" /* DataArrayService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__range_data_service__["a" /* RangeDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__range_data_service__["a" /* RangeDataService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__beauty_data_beauty_data_service__["a" /* BeautyDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__beauty_data_beauty_data_service__["a" /* BeautyDataService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__services_all_elements_position_service__["a" /* AllElementsPositionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_all_elements_position_service__["a" /* AllElementsPositionService */]) === "function" && _f || Object])
], RangeDataComponent);

var RangeDataComponent_1, _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=range-data.component.js.map

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pos_neg_pos_neg_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ascii_ascii_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__range_data_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__presets_presets_component__ = __webpack_require__(126);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeDataModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RangeDataModule = (function () {
    function RangeDataModule() {
    }
    return RangeDataModule;
}());
RangeDataModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__range_data_component__["a" /* RangeDataComponent */],
            __WEBPACK_IMPORTED_MODULE_3__ascii_ascii_component__["a" /* AsciiComponent */],
            __WEBPACK_IMPORTED_MODULE_2__pos_neg_pos_neg_component__["a" /* PosNegComponent */],
            __WEBPACK_IMPORTED_MODULE_5__presets_presets_component__["a" /* PresetsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__range_data_component__["a" /* RangeDataComponent */]
        ]
    })
], RangeDataModule);

//# sourceMappingURL=range-data.module.js.map

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hint_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__beauty_data_element_position_model__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__beauty_data_quantifier_quantifier_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__elements_element_model__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedElementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SelectedElementComponent = SelectedElementComponent_1 = (function () {
    function SelectedElementComponent(hintService, quantifierService) {
        this.hintService = hintService;
        this.quantifierService = quantifierService;
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
    }
    SelectedElementComponent.prototype.ngOnInit = function () {
        var _this = this;
        var area;
        area = document.getElementsByClassName('area')[0];
        area.blur();
        this.quantifierService.click(true);
        this.hintSubscription = this.hintService.getHint().subscribe(function (hint) { return _this.rangeElementHint = hint; });
        this.elementToEditName = SelectedElementComponent_1.getElementToEditName(this.elementToEdit);
    };
    SelectedElementComponent.prototype.ngAfterViewInit = function () {
        this.dataRef.nativeElement.style.display = 'block';
        var areaCoords = document.getElementsByClassName('area')[0].getBoundingClientRect();
        var clientCoords = this.dataRef.nativeElement.getBoundingClientRect();
        this.setSelectedElementPosition(areaCoords, clientCoords);
    };
    SelectedElementComponent.prototype.ngOnDestroy = function () {
        this.quantifierService.click(false);
        this.hintSubscription.unsubscribe();
    };
    SelectedElementComponent.prototype.handleMouseDown = function (event) {
        event.stopPropagation();
    };
    SelectedElementComponent.getElementToEditName = function (elementToEdit) {
        if (elementToEdit) {
            switch (elementToEdit[0]) {
                case 'range': return 'Range';
                case 'group': return (elementToEdit[1].indexOf('look') !== -1 ? 'Lookaround' : 'Group');
                case 'quantifier': return 'Quantifier';
                case 'anchor': return 'Anchors';
                case 'anchorOpposite': return 'Anchors';
                default: return '';
            }
        }
        else {
            return '';
        }
    };
    SelectedElementComponent.prototype.setSelectedElementPosition = function (areaCoords, clientCoords) {
        var width = clientCoords.right - clientCoords.left;
        if (!this.selectedElement || this.selectedElement.name !== 'Group') {
            if (this.selectedElement) {
                this.dataRef.nativeElement.style.top =
                    ~~(this.position.position.height + this.position.position.top - areaCoords.top) + 12 + "px";
                this.dataRef.nativeElement.style.left =
                    ~~(this.position.position.width / 2 + this.position.position.left - areaCoords.left - width / 2) + "px";
            }
            else {
                this.dataRef.nativeElement.style.top =
                    ~~(this.position.position.height + this.position.position.top - window.pageYOffset - areaCoords.top) + 12 + "px";
                this.dataRef.nativeElement.style.left =
                    ~~(this.position.position.width / 2 + this.position.position.left - window.pageXOffset - areaCoords.left - width / 2) + "px";
            }
        }
        else {
            this.dataRef.nativeElement.style.top =
                ~~(areaCoords.height / 2 + 10) + 12 + "px";
            this.dataRef.nativeElement.style.left =
                ~~(areaCoords.width / 2 - width / 2) + "px";
        }
    };
    return SelectedElementComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__elements_element_model__["a" /* Element */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__elements_element_model__["a" /* Element */]) === "function" && _a || Object)
], SelectedElementComponent.prototype, "selectedElement", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", Array)
], SelectedElementComponent.prototype, "elementToEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", Array)
], SelectedElementComponent.prototype, "viewData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__beauty_data_element_position_model__["a" /* ElementPosition */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__beauty_data_element_position_model__["a" /* ElementPosition */]) === "function" && _b || Object)
], SelectedElementComponent.prototype, "position", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(),
    __metadata("design:type", Object)
], SelectedElementComponent.prototype, "close", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ViewChild */])('data'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */]) === "function" && _c || Object)
], SelectedElementComponent.prototype, "dataRef", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* HostListener */])('mousedown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SelectedElementComponent.prototype, "handleMouseDown", null);
SelectedElementComponent = SelectedElementComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'selected-element',
        template: __webpack_require__(227),
        styles: [__webpack_require__(205)]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__hint_service__["a" /* HintService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__hint_service__["a" /* HintService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__beauty_data_quantifier_quantifier_service__["a" /* QuantifierService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__beauty_data_quantifier_quantifier_service__["a" /* QuantifierService */]) === "function" && _e || Object])
], SelectedElementComponent);

var SelectedElementComponent_1, _a, _b, _c, _d, _e;
//# sourceMappingURL=selected-element.component.js.map

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selected_element_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__anchors_anchors_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__group_group_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lookaround_lookaround_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__range_data_range_data_module__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__beauty_data_quantifier_quantifier_component__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedElementModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SelectedElementModule = (function () {
    function SelectedElementModule() {
    }
    return SelectedElementModule;
}());
SelectedElementModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__selected_element_component__["a" /* SelectedElementComponent */],
            __WEBPACK_IMPORTED_MODULE_4__anchors_anchors_component__["a" /* AnchorsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__group_group_component__["a" /* GroupComponent */],
            __WEBPACK_IMPORTED_MODULE_6__lookaround_lookaround_component__["a" /* LookaroundComponent */],
            __WEBPACK_IMPORTED_MODULE_8__beauty_data_quantifier_quantifier_component__["a" /* QuantifierComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_7__range_data_range_data_module__["a" /* RangeDataModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__selected_element_component__["a" /* SelectedElementComponent */],
            __WEBPACK_IMPORTED_MODULE_5__group_group_component__["a" /* GroupComponent */],
            __WEBPACK_IMPORTED_MODULE_8__beauty_data_quantifier_quantifier_component__["a" /* QuantifierComponent */]
        ]
    })
], SelectedElementModule);

//# sourceMappingURL=selected-element.module.js.map

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__beauty_data_selection_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__beauty_data_beauty_data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__elements_element_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dataArray_dataArray_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_caret_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_buffer_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_all_elements_position_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_array_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_input_from_keyboard_service__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextInputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MAX_GROUP_DEPTH = 5;
var TextInputComponent = TextInputComponent_1 = (function () {
    function TextInputComponent(dataArrayService, elementService, beautyDataService, cdr, selectionService, allElPosService, caretService, bufferService, inputFromKeyboardService) {
        this.dataArrayService = dataArrayService;
        this.elementService = elementService;
        this.beautyDataService = beautyDataService;
        this.cdr = cdr;
        this.selectionService = selectionService;
        this.allElPosService = allElPosService;
        this.caretService = caretService;
        this.bufferService = bufferService;
        this.inputFromKeyboardService = inputFromKeyboardService;
        this.isHideMainEl = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.selectGroup = false;
        this.selectGroupStatus = false;
        this.selectGroupDisable = false;
        this.dataArray = [];
        this.viewData = [];
        this.isInputFromKeyboard = false;
        this.hideAllQuantifiers = false;
        this.globalQuantifier = false;
        this.isUndoRedoClicked = false;
    }
    TextInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mainElementSubscription = this.elementService.getClickedElement()
            .subscribe(function (element) {
            if ((_this.viewData.length === 0 || _this.viewData[0].length === 0) && element && element.name === 'Group') {
                _this.elementService.elementClicked(undefined);
                _this.caretService.setAreaCoords();
                return;
            }
            if (element) {
                _this.caretService.stopBlinking();
            }
            _this.selectedMainElement = element;
            if (element && element.name !== 'Group') {
                if (_this.inputFromKeyboard.direction === 'left') {
                    _this.inputFromKeyboard.parent.splice(_this.inputFromKeyboard.index, 0, ['main-element', element.name]);
                }
                else {
                    _this.inputFromKeyboard.parent.splice(_this.inputFromKeyboard.index + 1, 0, ['main-element', element.name]);
                }
            }
        });
        this.dataSubscription = this.dataArrayService.subscribeOnDataChange()
            .subscribe(function (data) {
            _this.dataArray = data;
            _this.viewData = [_this.beautyDataService.compileViewDataFromData(data.slice())];
            _this.selectionService.setViewData(_this.viewData);
            _this.cdr.detectChanges();
        });
        this.subscribeForRecompileData = this.dataArrayService.subscribeForRecompileDataFromEdit()
            .subscribe(function (recompile) {
            //this.elementToEdit = undefined;
            var copyOfViewData = _this.viewData.slice();
            var pathToParent = [];
            if (recompile === 'range') {
                pathToParent = __WEBPACK_IMPORTED_MODULE_8__services_array_service__["a" /* ArrayService */].getPathToElement(_this.viewData, _this.inputFromKeyboard.parent);
            }
            var newData = _this.beautyDataService.compileDataFromViewData(__WEBPACK_IMPORTED_MODULE_8__services_array_service__["a" /* ArrayService */].createFullCopyOfArray(copyOfViewData));
            if (recompile === 'fixCaret') {
                _this.inputFromKeyboard = _this.allElPosService.getInputFromKeyboard();
                _this.caretService.setAreaCoords();
                setTimeout(function () { _this.caretService.fixCaretPosition(_this.inputFromKeyboard); }, 0);
            }
            if (_this.isInputFromKeyboard || recompile === 'group' || recompile === 'deleteLookaround'
                || recompile === 'editRange'
                || recompile === 'delete'
                || recompile === 'anchor'
                || recompile === 'range'
                || recompile === 'quantifier'
                || recompile === 'changeLookaround') {
                _this.dataArrayService.setData(newData);
                _this.dataArray = newData;
                _this.isInputFromKeyboard = false;
                _this.caretService.stopBlinking();
            }
            else {
                _this.dataArrayService.setDataWithoutSubject(newData);
                _this.dataArray = newData;
                _this.cdr.detectChanges();
            }
            if (recompile === 'range') {
                _this.inputFromKeyboard.parent = _this.viewData;
                for (var i = pathToParent.length - 1; i >= 0; i--) {
                    _this.inputFromKeyboard.parent = _this.inputFromKeyboard.parent[pathToParent[i]];
                }
                setTimeout(function () { _this.caretService.fixCaretPosition(_this.inputFromKeyboard); }, 0);
            }
            // adding new state to the buffer
            if (!_this.isUndoRedoClicked) {
                if (recompile === 'lateBufferDataChange') {
                    setTimeout(function () { _this.bufferService.add(__WEBPACK_IMPORTED_MODULE_8__services_array_service__["a" /* ArrayService */].createFullCopyOfArray(_this.viewData)); }, 0);
                }
                else {
                    _this.bufferService.add(__WEBPACK_IMPORTED_MODULE_8__services_array_service__["a" /* ArrayService */].createFullCopyOfArray(_this.viewData));
                }
            }
            else {
                _this.isUndoRedoClicked = false;
            }
        });
        this.inputFromKeyboardSubscription = this.allElPosService.inputFromKeyboardSubject.subscribe(function (inputFromKeyboard) {
            _this.inputFromKeyboard = inputFromKeyboard;
        });
    };
    TextInputComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.viewData[0] = [];
        this.selectionService.setViewData(this.viewData);
        this.bufferService.add(__WEBPACK_IMPORTED_MODULE_8__services_array_service__["a" /* ArrayService */].createFullCopyOfArray(this.viewData));
        //Possibility to type from keyboard right after loading page
        this.allElPosService.setInputFromKeyboard(this.viewData[0], 'right', -1);
        this.inputFromKeyboard = this.allElPosService.getInputFromKeyboard();
        setTimeout(function () {
            _this.caretService.setAreaCoords();
            _this.caretService.fixCaretPosition(_this.inputFromKeyboard);
        }, 0);
    };
    TextInputComponent.prototype.ngOnDestroy = function () {
        this.mainElementSubscription.unsubscribe();
        this.dataSubscription.unsubscribe();
        this.editElementSubscription.unsubscribe();
        this.subscribeForRecompileData.unsubscribe();
        this.inputFromKeyboardSubscription.unsubscribe();
    };
    TextInputComponent.prototype.handleQuantifierClicked = function (value) {
        switch (value) {
            case 'show': {
                this.globalQuantifier = true;
                this.caretService.stopBlinking();
                break;
            }
            case 'hide': {
                this.hideAllQuantifiers = false;
                this.globalQuantifier = false;
                this.caretService.startBlinking();
                break;
            }
            case 'destroyed': {
                this.hideAllQuantifiers = false;
                this.globalQuantifier = false;
                this.caretService.startBlinking();
                break;
            }
        }
    };
    TextInputComponent.prototype.handleInnerViewData = function (state) {
        var _this = this;
        // Saving input from keyboard before recompile (reference on parent will be lost during it)
        var pathToParent = __WEBPACK_IMPORTED_MODULE_8__services_array_service__["a" /* ArrayService */].getPathToElement(this.viewData, this.inputFromKeyboard.parent);
        this.viewData = state.futureArray;
        this.checkForEdit(state.futureArray);
        if (!this.elementToEdit) {
            var newViewData = state.futureArray;
            var newData = this.beautyDataService.compileDataFromViewData(newViewData);
            this.dataArrayService.setData(newData);
            setTimeout(function () {
                // Restoring input from keyboard
                _this.inputFromKeyboard.parent = _this.viewData;
                for (var i = pathToParent.length - 1; i >= 0; i--) {
                    _this.inputFromKeyboard.parent = _this.inputFromKeyboard.parent[pathToParent[i]];
                }
                _this.caretService.startBlinking();
                _this.caretService.fixCaretPosition(_this.inputFromKeyboard);
            }, 0);
        }
    };
    TextInputComponent.prototype.handleGroupSelection = function () {
        var _this = this;
        this.selectionService.applyGrouping();
        this.selectGroup = false;
        this.selectGroupStatus = true;
        this.selectionService.resetAllVariables();
        this.selectionStart = null;
        this.selectionEnd = null;
        setTimeout(function () {
            _this.isHideMainEl.emit(false);
        }, 0);
    };
    TextInputComponent.prototype.setSelectedElementPosition = function (eventData) {
        this.selectedElementPosition = eventData;
    };
    TextInputComponent.prototype.closeSelectedElement = function () {
        this.selectedMainElement = null;
        this.elementService.elementClicked(undefined);
        this.elementToEdit = null;
        this.elementService.elementToEditClicked(false);
    };
    TextInputComponent.prototype.handleMouseDown = function (event) {
        this.caretService.setAreaCoords();
        if (this.selectedMainElement) {
            if (this.selectedMainElement.name === 'Group') {
                this.allElPosService.setInputFromKeyboard(this.viewData[0], 'right', 0);
                this.inputFromKeyboard = this.allElPosService.getInputFromKeyboard();
                this.caretService.fixCaretPosition(this.inputFromKeyboard);
            }
            return;
        }
        var mouseStart = { top: event.pageY, left: event.pageX };
        this.isHideMainEl.emit(false);
        this.selectGroup = false;
        this.selectGroupStatus = false;
        this.selectionStart = mouseStart;
        this.allElPosService.setMouseStart(mouseStart);
        this.allElPosService.setMouseCurrPosition(mouseStart, this.viewData);
        this.findClosestEl(event);
        event.preventDefault();
    };
    TextInputComponent.prototype.handleMouseMove = function (event) {
        if (this.allElPosService.getMouseStart() && !this.selectGroup && !this.selectGroupStatus) {
            this.caretService.stopBlinking();
            var top = event.pageY;
            var left = event.pageX;
            var mouseCurrPosition = { top: top, left: left };
            this.selectionEnd = mouseCurrPosition;
            this.allElPosService.setMouseCurrPosition(mouseCurrPosition);
        }
        event.preventDefault();
    };
    TextInputComponent.prototype.handleMouseUp = function (event) {
        var selectedElements = this.selectionService.getHighlightedElements();
        if (selectedElements.length > 0) {
            this.isHideMainEl.emit(true);
            this.selectGroup = true;
            this.selectGroupDisable = __WEBPACK_IMPORTED_MODULE_8__services_array_service__["a" /* ArrayService */].getElementDepthInData(this.viewData[0], selectedElements[0]) >= MAX_GROUP_DEPTH;
            this.caretService.stopBlinking();
        }
        else {
            this.caretService.startBlinking();
            this.allElPosService.setMouseStart(null);
        }
        event.preventDefault();
    };
    TextInputComponent.prototype.handleControls = function (event) {
        switch (event.key) {
            case 'Backspace':
                this.handleDeletePrev(event);
                break;
            case 'Delete':
                this.handleDeleteNext(event);
                break;
            case 'ArrowLeft':
                this.handleNavButton(event);
                break;
            case 'ArrowRight':
                this.handleNavButton(event);
                break;
            case 'ArrowUp':
                this.handleNavButton(event);
                break;
            case 'ArrowDown':
                this.handleNavButton(event);
                break;
            case 'Home':
                this.handleNavButton(event);
                break;
            case 'End':
                this.handleNavButton(event);
                break;
            case 'Shift': break;
            default: break;
        }
        if (event.ctrlKey) {
            event.stopPropagation();
            event.preventDefault();
            switch (event.key) {
                case 'z':
                    this.handleUndo();
                    break;
                case 'y':
                    this.handleRedo();
                    break;
                case 'c':
                    this.handleCopy();
                    break;
                case 'v':
                    this.handlePaste();
                    break;
                case 'x':
                    this.handleCut();
                    break;
                case 'a':
                    this.handleSelectAll();
                    break;
            }
        }
    };
    TextInputComponent.prototype.handleKeyDown = function (event) {
        event.stopPropagation();
        event.preventDefault();
        this.deleteSelectedElements();
        if (!event.ctrlKey) {
            this.inputFromKeyboard = __WEBPACK_IMPORTED_MODULE_9__services_input_from_keyboard_service__["a" /* InputFromKeyboardService */].insertChar(this.inputFromKeyboard, event.key);
            this.applyInputFromKeyboard();
        }
    };
    TextInputComponent.prototype.noSelectedMainEl = function (event) {
        if (this.selectedMainElement && (event.toElement.className === 'area')) {
            this.selectedMainElement = undefined;
            this.elementService.elementClicked(undefined);
        }
        if (this.elementToEdit &&
            (event.toElement.className !== 'selectedElement') &&
            (event.toElement.className !== '') &&
            (event.toElement.className !== 'search') &&
            (event.toElement.className !== 'data Range') &&
            (event.toElement.className !== 'top') &&
            (event.toElement.className !== 'purple') &&
            (event.toElement.className !== 'Positive') &&
            (event.toElement.className !== 'data Group') &&
            (event.toElement.className !== 'data Lookaround')) {
            this.elementToEdit = undefined;
            this.elementService.elementToEditClicked(false);
            this.elementService.cancelEditing();
        }
        if (this.globalQuantifier) {
            this.hideAllQuantifiers = true;
        }
    };
    TextInputComponent.prototype.findClosestEl = function (event, position) {
        var _this = this;
        var Xcoord;
        var Ycoord;
        var element;
        var parentOfElement;
        var index;
        if (position && !event) {
            Xcoord = position.left + window.pageXOffset;
            Ycoord = position.top + window.pageYOffset;
        }
        else {
            Xcoord = event.clientX + window.pageXOffset;
            Ycoord = event.clientY + window.pageYOffset;
        }
        element = this.allElPosService.findClosestElementToElementPos(Xcoord, Ycoord);
        parentOfElement = this.allElPosService.findDirectParentOfElement(this.viewData, element.element);
        if (parentOfElement.length === 0) {
            parentOfElement = this.viewData[0];
        }
        index = parentOfElement.indexOf(element.element);
        this.allElPosService.setInputFromKeyboard(parentOfElement, element.direction || 'right', index);
        this.inputFromKeyboard = this.allElPosService.getInputFromKeyboard();
        if (!(position && !event)) {
            setTimeout(function () { _this.caretService.fixCaretPosition(_this.inputFromKeyboard); }, 0);
        }
    };
    TextInputComponent.prototype.handleDeletePrev = function (event) {
        event.preventDefault();
        if (this.deleteSelectedElements() === 0) {
            this.inputFromKeyboard = this.inputFromKeyboardService.deletePrevious(this.viewData, this.inputFromKeyboard);
        }
        this.applyInputFromKeyboard();
    };
    TextInputComponent.prototype.handleDeleteNext = function (event) {
        event.preventDefault();
        if (this.deleteSelectedElements() === 0) {
            this.deleteSelectedElements();
        }
        this.inputFromKeyboard = this.inputFromKeyboardService.deleteNext(this.viewData, this.inputFromKeyboard);
        this.applyInputFromKeyboard();
    };
    TextInputComponent.prototype.handleNavButton = function (event) {
        event.preventDefault();
        var prevElement = this.inputFromKeyboard.parent[this.inputFromKeyboard.index + (this.inputFromKeyboard.direction === 'right' ? 1 : 0)];
        this.inputFromKeyboard = this.transformInputFromKeyboard(event, this.inputFromKeyboard);
        var nextElement = this.inputFromKeyboard.parent[this.inputFromKeyboard.index + (this.inputFromKeyboard.direction === 'right' ? 1 : 0)];
        var prevIndex = this.inputFromKeyboard.parent.indexOf(prevElement);
        var nextIndex = this.inputFromKeyboard.parent.indexOf(nextElement);
        if (prevIndex === nextIndex) {
            this.applyInputFromKeyboard();
            return;
        }
        if (event.shiftKey) {
            this.handleNavButtonShiftSelection(event, prevIndex, nextIndex);
        }
        else {
            switch (event.key) {
                case 'ArrowLeft':
                case 'Home':
                case 'ArrowUp':
                    this.moveToTheStartOfSelection(this.inputFromKeyboard);
                    break;
                case 'ArrowRight':
                case 'End':
                case 'ArrowDown':
                    this.moveToTheEndOfSelection(this.inputFromKeyboard);
                    break;
            }
        }
        if (this.selectionService.getHighlightedElements().length === 0) {
            this.cancelSelection();
            this.applyInputFromKeyboard();
            return;
        }
        this.applyInputFromKeyboard();
    };
    TextInputComponent.prototype.handleUndo = function () {
        var _this = this;
        this.isUndoRedoClicked = true;
        var bufferData = this.bufferService.moveBehind();
        if (bufferData) {
            this.viewData = bufferData;
        }
        this.dataArrayService.informTextInpCompToRecompileDataFromViewData('');
        this.allElPosService.setInputFromKeyboard(this.viewData[0], 'right', this.viewData[0].length - 1);
        this.inputFromKeyboard = this.allElPosService.getInputFromKeyboard();
        setTimeout(function () {
            _this.caretService.fixCaretPosition(_this.inputFromKeyboard);
        }, 0);
    };
    TextInputComponent.prototype.handleRedo = function () {
        var _this = this;
        this.isUndoRedoClicked = true;
        var bufferData = this.bufferService.moveAhead();
        if (bufferData) {
            this.viewData = bufferData;
        }
        this.dataArrayService.informTextInpCompToRecompileDataFromViewData('');
        this.allElPosService.setInputFromKeyboard(this.viewData[0], 'right', this.viewData[0].length - 1);
        this.inputFromKeyboard = this.allElPosService.getInputFromKeyboard();
        setTimeout(function () {
            _this.caretService.fixCaretPosition(_this.inputFromKeyboard);
        }, 0);
    };
    TextInputComponent.prototype.handleCopy = function () {
        var selectedElements = this.selectionService.getHighlightedElements();
        if (selectedElements.length > 0) {
            this.bufferService.setCopyBuffer(selectedElements);
        }
    };
    TextInputComponent.prototype.handlePaste = function () {
        var index = this.inputFromKeyboard.index;
        var direction = this.inputFromKeyboard.direction;
        var buffer = this.bufferService.getCopyBuffer();
        (_a = this.inputFromKeyboard.parent).splice.apply(_a, [index + (direction === 'left' ? 0 : 1), 0].concat(buffer));
        this.inputFromKeyboard.index += buffer.length;
        this.applyInputFromKeyboard();
        var _a;
    };
    TextInputComponent.prototype.handleCut = function () {
        this.handleCopy();
        this.deleteSelectedElements();
    };
    TextInputComponent.prototype.handleSelectAll = function () {
        this.selectionService.selectAll();
        this.caretService.stopBlinking();
        this.selectGroup = true;
        this.isHideMainEl.emit(true);
    };
    TextInputComponent.prototype.transformInputFromKeyboard = function (event, inputFromKeyboard) {
        var caretPosition = this.caretService.getCaretPositionWithOffset();
        switch (event.key) {
            case 'ArrowLeft':
                inputFromKeyboard = __WEBPACK_IMPORTED_MODULE_9__services_input_from_keyboard_service__["a" /* InputFromKeyboardService */].moveLeft(inputFromKeyboard);
                break;
            case 'ArrowRight':
                inputFromKeyboard = __WEBPACK_IMPORTED_MODULE_9__services_input_from_keyboard_service__["a" /* InputFromKeyboardService */].moveRight(inputFromKeyboard);
                break;
            case 'ArrowUp':
                inputFromKeyboard = this.inputFromKeyboardService.moveUp(this.viewData, inputFromKeyboard, caretPosition);
                break;
            case 'ArrowDown':
                inputFromKeyboard = this.inputFromKeyboardService.moveDown(this.viewData, inputFromKeyboard, caretPosition);
                break;
            case 'Home':
                inputFromKeyboard = __WEBPACK_IMPORTED_MODULE_9__services_input_from_keyboard_service__["a" /* InputFromKeyboardService */].moveLeftToTheEnd(inputFromKeyboard);
                break;
            case 'End':
                inputFromKeyboard = __WEBPACK_IMPORTED_MODULE_9__services_input_from_keyboard_service__["a" /* InputFromKeyboardService */].moveRightToTheEnd(inputFromKeyboard);
                break;
        }
        return inputFromKeyboard;
    };
    TextInputComponent.prototype.handleNavButtonShiftSelection = function (event, prevElementIndex, nextElementIndex) {
        var arr;
        switch (event.key) {
            case 'ArrowLeft':
            case 'Home':
            case 'ArrowUp': {
                if (prevElementIndex !== -1) {
                    arr = this.inputFromKeyboard.parent.slice(nextElementIndex, prevElementIndex);
                }
                else {
                    arr = this.inputFromKeyboard.parent.slice(nextElementIndex);
                }
                this.selectArrayReversed(arr);
                break;
            }
            case 'ArrowRight':
            case 'End':
            case 'ArrowDown': {
                if (nextElementIndex !== -1) {
                    arr = this.inputFromKeyboard.parent.slice(prevElementIndex, nextElementIndex);
                }
                else {
                    arr = this.inputFromKeyboard.parent.slice(prevElementIndex);
                }
                this.selectArray(arr);
                break;
            }
        }
    };
    TextInputComponent.prototype.selectArray = function (array) {
        if (this.selectionStart) {
            this.cancelSelection();
        }
        this.allElPosService.smartPushElementArrayToSelectedElements(array);
        this.caretService.stopBlinking();
        this.selectGroup = true;
        this.isHideMainEl.emit(true);
    };
    TextInputComponent.prototype.selectArrayReversed = function (array) {
        if (this.selectionStart) {
            this.cancelSelection();
        }
        this.allElPosService.smartUnShiftElementArrayToSelectedElements(array.reverse());
        this.caretService.stopBlinking();
        this.selectGroup = true;
        this.isHideMainEl.emit(true);
    };
    TextInputComponent.prototype.deleteSelectedElements = function () {
        var selectedElements = this.selectionService.getHighlightedElements();
        var count = 0;
        if (selectedElements.length > 0) {
            var selectedElementsTopLayer = __WEBPACK_IMPORTED_MODULE_8__services_array_service__["a" /* ArrayService */].removeNestedElementsFromArray(selectedElements);
            count = selectedElementsTopLayer.length;
            this.inputFromKeyboard.parent = this.allElPosService.findDirectParentOfElement(this.viewData, selectedElementsTopLayer[0]);
            this.inputFromKeyboard.index = this.inputFromKeyboard.parent.indexOf(selectedElementsTopLayer[0]);
            this.inputFromKeyboard.direction = 'left';
            for (var i = 0; i < count; i++) {
                __WEBPACK_IMPORTED_MODULE_9__services_input_from_keyboard_service__["a" /* InputFromKeyboardService */].deleteItemFromArray(selectedElementsTopLayer[i], this.viewData);
            }
            this.cancelSelection();
            this.inputFromKeyboard = this.inputFromKeyboardService.deleteEmptyElementsAbove(this.viewData, this.inputFromKeyboard);
            this.inputFromKeyboard = TextInputComponent_1.trimInputFromKeyboard(this.inputFromKeyboard);
            this.dataArrayService.informTextInpCompToRecompileDataFromViewData('key');
        }
        return count;
    };
    TextInputComponent.trimInputFromKeyboard = function (inputFromKeyboard) {
        if (inputFromKeyboard.index === -1 && inputFromKeyboard.parent.length > 0) {
            inputFromKeyboard.index++;
            inputFromKeyboard.direction = 'left';
        }
        else if (inputFromKeyboard.index === inputFromKeyboard.parent.length) {
            inputFromKeyboard.index--;
            inputFromKeyboard.direction = 'right';
        }
        return inputFromKeyboard;
    };
    TextInputComponent.prototype.checkForEdit = function (data) {
        this.elementToEdit = null;
        for (var i = 0; i < data.length && !this.elementToEdit; i++) {
            if (data[i] === 'edit') {
                this.elementToEdit = data;
                this.caretService.stopBlinking();
            }
            if (typeof data[i] !== 'string') {
                this.checkForEdit(data[i]);
            }
        }
    };
    TextInputComponent.prototype.applyInputFromKeyboard = function () {
        var _this = this;
        this.dataArrayService.informTextInpCompToRecompileDataFromViewData('key');
        setTimeout(function () {
            _this.caretService.fixCaretPosition(_this.inputFromKeyboard);
        }, 0);
    };
    TextInputComponent.prototype.moveToTheStartOfSelection = function (inputFromKeyboard) {
        var selectedElements = this.selectionService.getHighlightedElements();
        if (selectedElements.length === 0) {
            return inputFromKeyboard;
        }
        var selectedElementsTopLayer = __WEBPACK_IMPORTED_MODULE_8__services_array_service__["a" /* ArrayService */].removeNestedElementsFromArray(selectedElements);
        var firstSelectedElement = selectedElementsTopLayer[0];
        inputFromKeyboard.parent = this.allElPosService.findDirectParentOfElement(this.viewData, firstSelectedElement);
        inputFromKeyboard.index = inputFromKeyboard.parent.indexOf(firstSelectedElement);
        inputFromKeyboard.direction = 'left';
        this.cancelSelection();
        return inputFromKeyboard;
    };
    TextInputComponent.prototype.moveToTheEndOfSelection = function (inputFromKeyboard) {
        var selectedElements = this.selectionService.getHighlightedElements();
        if (selectedElements.length === 0) {
            return inputFromKeyboard;
        }
        var selectedElementsTopLayer = __WEBPACK_IMPORTED_MODULE_8__services_array_service__["a" /* ArrayService */].removeNestedElementsFromArray(selectedElements);
        var lastSelectedElement = selectedElementsTopLayer[selectedElementsTopLayer.length - 1];
        inputFromKeyboard.parent = this.allElPosService.findDirectParentOfElement(this.viewData, lastSelectedElement);
        inputFromKeyboard.index = inputFromKeyboard.parent.indexOf(lastSelectedElement);
        inputFromKeyboard.direction = 'right';
        this.cancelSelection();
        return inputFromKeyboard;
    };
    TextInputComponent.prototype.cancelSelection = function () {
        this.selectionService.resetAllVariables();
        this.caretService.startBlinking();
        this.allElPosService.removeSelection();
        this.allElPosService.setMouseStart(null);
        this.selectionStart = null;
        this.selectGroup = false;
        this.isHideMainEl.emit(false);
    };
    return TextInputComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ViewChild */])('area'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */]) === "function" && _a || Object)
], TextInputComponent.prototype, "areaRef", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ViewChild */])('allElements'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */]) === "function" && _b || Object)
], TextInputComponent.prototype, "allElements", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ViewChild */])('selectedElement'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */]) === "function" && _c || Object)
], TextInputComponent.prototype, "selectedElement", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]) === "function" && _d || Object)
], TextInputComponent.prototype, "isHideMainEl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* HostListener */])('mousedown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TextInputComponent.prototype, "handleMouseDown", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* HostListener */])('mousemove', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TextInputComponent.prototype, "handleMouseMove", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* HostListener */])('mouseup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TextInputComponent.prototype, "handleMouseUp", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* HostListener */])('keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TextInputComponent.prototype, "handleControls", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* HostListener */])('keypress', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TextInputComponent.prototype, "handleKeyDown", null);
TextInputComponent = TextInputComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'text-input',
        template: __webpack_require__(228),
        styles: [__webpack_require__(206)],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_caret_service__["a" /* CaretService */], __WEBPACK_IMPORTED_MODULE_6__services_buffer_service__["a" /* BufferService */]]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__dataArray_dataArray_service__["a" /* DataArrayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__dataArray_dataArray_service__["a" /* DataArrayService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__elements_element_service__["a" /* ElementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__elements_element_service__["a" /* ElementService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__beauty_data_beauty_data_service__["a" /* BeautyDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__beauty_data_beauty_data_service__["a" /* BeautyDataService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1__beauty_data_selection_service__["a" /* SelectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__beauty_data_selection_service__["a" /* SelectionService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_7__services_all_elements_position_service__["a" /* AllElementsPositionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_all_elements_position_service__["a" /* AllElementsPositionService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_5__services_caret_service__["a" /* CaretService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_caret_service__["a" /* CaretService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_6__services_buffer_service__["a" /* BufferService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_buffer_service__["a" /* BufferService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_9__services_input_from_keyboard_service__["a" /* InputFromKeyboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_input_from_keyboard_service__["a" /* InputFromKeyboardService */]) === "function" && _o || Object])
], TextInputComponent);

var TextInputComponent_1, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
//# sourceMappingURL=text-input.component.js.map

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".vire {\r\n    position: relative;\r\n    z-index: 0;\r\n    width: 660px;\r\n    min-height: 160px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".mainElements {\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n  position: absolute;\r\n  z-index: 10;\r\n  background: linear-gradient(to bottom, rgba(243, 243, 243, 1), rgba(228, 228, 228, 1) );\r\n  width: 367px;\r\n  height: 37px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  border: 1px solid rgba(172, 172, 172, 1);\r\n  border-radius: 3px;\r\n  top: 15px;\r\n  left: 0;\r\n  right: 0;\r\n  margin: 0 auto;\r\n  box-shadow:0 1px 4px 1px rgba(218, 218, 218, 1);\r\n}\r\n\r\n.mainElements:before, .mainElements:after {\r\n  content: '';\r\n  position: absolute;\r\n  left: 170px;\r\n  bottom: -13px;\r\n  border: 13px solid transparent;\r\n  border-top: 13px solid rgba(172, 172, 172, 1);\r\n  border-bottom: 0;\r\n}\r\n.mainElements:after {\r\n  border-top: 13px solid rgba(228, 228, 228, 1);\r\n  bottom: -12px;\r\n}\r\n\r\n.mainElements span {\r\n  display: block;\r\n  height: 11px;\r\n  width: auto;\r\n  border-radius: 10px;\r\n  min-width: 30px;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  font-family: \"Lucida Grande\", sans-serif;\r\n  font-size: 14px;\r\n  line-height: 11px;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.mainElements span:nth-child(1) {\r\n  margin-left: 8px;\r\n  padding: 4px  8px 4px 8px;\r\n  background: rgba(254, 224, 165, 1);\r\n  border: 1px solid rgba(208, 165, 84, 1);\r\n}\r\n\r\n.mainElements span:nth-child(1):hover {\r\n  box-shadow: 0 0 5px 2px rgba(254, 224, 165, 1);\r\n}\r\n\r\n.mainElements span:nth-child(2) {\r\n  margin-left: 5px;\r\n  padding: 4px  8px 4px 8px;\r\n  background: #fff;\r\n  border: 1px solid rgba(161, 186, 158, 1);\r\n}\r\n\r\n.mainElements span:nth-child(2):hover {\r\n  box-shadow: 0 0 5px 2px rgba(209, 233, 206, 1);\r\n}\r\n\r\n.mainElements span:nth-child(3)::after {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: -10px;\r\n  border: solid transparent;\r\n}\r\n\r\n.mainElements span:nth-child(3)::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: -1px;\r\n  left: -11px;\r\n  border: solid transparent;\r\n}\r\n\r\n.mainElements span:nth-child(3)::before {\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\r\n  border-width: 11px 11px 11px 0;\r\n  border-color: transparent rgba(191, 191, 191, 1) transparent transparent;\r\n}\r\n\r\n.mainElements span:nth-child(3)::after {\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\r\n  border-width: 10px 10px 10px 0;\r\n  border-color: transparent rgba(234, 234, 237, 1) transparent transparent;\r\n}\r\n\r\n.mainElements span:nth-child(3) {\r\n  position: relative;\r\n  margin-left: 14px;\r\n  padding: 4px  14px 4px 6px;\r\n  background: rgba(234, 234, 237, 1);\r\n  border: 1px solid rgba(191, 191, 191, 1);\r\n  border-left: none;\r\n  border-radius: 0 10px 10px 0;\r\n}\r\n\r\n.mainElements span:nth-child(3):hover {\r\n  box-shadow: 0 0 5px 2px rgba(220, 220, 220, 1);\r\n}\r\n\r\n.mainElements span:nth-child(4) {\r\n  margin-left: 4px;\r\n  padding: 4px  7px 4px 7px;\r\n  background: rgba(253, 252, 142, 1);\r\n  border: 1px solid rgba(206, 205, 68, 1);\r\n}\r\n\r\n.mainElements span:nth-child(4):hover {\r\n  box-shadow: 0 0 5px 2px rgba(253, 252, 142, 1);\r\n}\r\n\r\n.mainElements span:nth-child(5) {\r\n  box-sizing: border-box;\r\n  margin-left: 5px;\r\n  margin-right: 7px;\r\n  width: 33px;\r\n  height: 21px;\r\n  padding: 4px  8px 4px 8px;\r\n  background: rgba(234, 234, 237, 1);\r\n  border: 1px solid rgba(177, 176, 176, 1);\r\n}\r\n\r\n.mainElements span:nth-child(5):hover {\r\n  box-shadow: 0 0 5px 2px rgba(220, 220, 220, 1);\r\n}\r\n\r\n.mainHint {\r\n  position: absolute;\r\n  z-index: 2;\r\n  bottom: 6px;\r\n  left: 0;\r\n  right: 0;\r\n  text-align: center;\r\n  height: 22px;\r\n  background: transparent;\r\n}\r\n\r\n.mainHint span {\r\n  display: inline-block;\r\n  margin: 0 auto;\r\n  height: 22px;\r\n  box-sizing: border-box;\r\n  background: rgba(64, 64, 64, 1);\r\n  border: 1px solid rgba(38, 38, 38, 1);\r\n  border-radius: 3px;\r\n  font-size: 11px;\r\n  color: rgba(236, 236, 236, 1);\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  line-height: 9px;\r\n  padding: 6px 7px 0 7px;\r\n  cursor: default;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "div {\r\n  display: inline-block;\r\n  font-size: 14px;\r\n  line-height: 14px;\r\n  font-family: \"Lucida Grande\", sans-serif;\r\n}\r\n\r\nbeauty-data {\r\n  display: inline-block;\r\n  padding: 1px 0 1px 0;\r\n}\r\n\r\n.beautyData:first-child:not(:last-child).singleData{\r\n  margin-left: 2px;\r\n}\r\n\r\n.beautyData:last-child:not(:first-child).singleData{\r\n  margin-right: 4px;\r\n}\r\n\r\n.group, .or,\r\n.anchor, .anchorOpposite, .lookAhead, .lookBehind {\r\n  display: inline-block;\r\n  position: relative;\r\n  padding: 2px 3px;\r\n  background-color: #dbdeff;\r\n  border: 1px solid #9aa2f5;\r\n  border-radius: 777px;\r\n  z-index: 5;\r\n  min-width: 15px;\r\n  color: #000;\r\n}\r\n\r\n.or, .anchor, .anchorOpposite {\r\n  padding: 3px 6px;\r\n}\r\n\r\n.group {\r\n  background-color: #fff;\r\n  border-color: #a1ba9e;\r\n}\r\n\r\n.or {\r\n  background: rgba(234, 234, 237, 1);\r\n  border: 1px solid rgba(177, 176, 176, 1);\r\n}\r\n\r\n.anchor, .anchorOpposite {\r\n  background: rgba(253, 252, 142, 1);\r\n  border: 1px solid rgba(206, 205, 68, 1);\r\n}\r\n\r\n\r\n.anchorOpposite.editing {\r\n  background-color: #8689e3;\r\n  color: #fff;\r\n}\r\n\r\n.anchor.editing {\r\n  background-color: #999cff;\r\n  color: #fff;\r\n}\r\n.anchorOpposite {\r\n  color: #fff;\r\n  background: rgba(173, 172, 84, 1);\r\n  border-color: rgba(109, 108, 27, 1)\r\n}\r\n\r\n/*******************************************/\r\n\r\n.lookAhead.positive, .lookBehind.positive {\r\n  background-color: #e8e8eb;\r\n  border-color: #bfbfbf;\r\n  position: relative;\r\n  color: #000;\r\n}\r\n\r\n.lookAhead.negative, .lookBehind.negative {\r\n  background-color: #9c9c9c;\r\n  border-color: #767474;\r\n  position: relative;\r\n  color: #fff;\r\n}\r\n\r\n.lookAhead, .lookBehind {\r\n  min-width: 15px;\r\n}\r\n\r\n.lookBehind {\r\n  border-radius: 777px 0 0 777px;\r\n  border-right: none;\r\n  padding-right: 0;\r\n}\r\n\r\n.lookAhead {\r\n  border-radius: 0 777px 777px 0;\r\n  border-left: none;\r\n  padding-left: 0;\r\n}\r\n\r\nlookaround-arrow {\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n}\r\n\r\nlookaround-arrow.arrowBehind:not(.arrowBorder) {\r\n  left: 100%;\r\n}\r\n\r\nlookaround-arrow.arrowBehind.arrowBorder {\r\n  right: 0;\r\n}\r\n\r\nlookaround-arrow.arrowAhead:not(.arrowBorder) {\r\n  right: 100%;\r\n}\r\n\r\nlookaround-arrow.arrowAhead.arrowBorder {\r\n  left: 0;\r\n}\r\n\r\nlookaround-arrow.arrowBorder {\r\n  z-index: 1;\r\n}\r\n\r\nlookaround-arrow.arrowBorder.left {\r\n  right: 100%!important;\r\n  left: auto!important;\r\n}\r\n\r\nlookaround-arrow.arrowBorder.right {\r\n  left: 100%!important;\r\n  right: auto!important;\r\n}\r\n\r\n/*******************************************/\r\n\r\n\r\n.highlightSelectionBackground {\r\n  background-color: rgb(118, 130, 245);\r\n  color: #fff;\r\n}\r\n\r\n.highlightSelectionBackground .wrapper>.group,\r\n.highlightSelectionBackground .wrapper>.or,\r\n.highlightSelectionBackground .wrapper>.anchor,\r\n.highlightSelectionBackground .wrapper>.anchorOpposite,\r\n.highlightSelectionBackground .wrapper>.lookAhead,\r\n.highlightSelectionBackground .wrapper>.lookBehind,\r\n.highlightSelectionBackground .wrapper>.quantifier {\r\n  background-color: rgb(118, 130, 245);\r\n  border-color: rgb(64, 78, 213);\r\n  color: #fff;\r\n}\r\n\r\n.space {\r\n  color: transparent;\r\n}\r\n\r\n.anchor, .anchorOpposite {\r\n  cursor: pointer;\r\n}\r\n\r\n.or {\r\n  cursor: default;\r\n}\r\n\r\n@-webkit-keyframes slideQuantifier {\r\n  from {-webkit-transform: translate(30%, -50%);transform: translate(30%, -50%);}\r\n  to {-webkit-transform: translate(100%, -50%);transform: translate(100%, -50%);}\r\n}\r\n\r\n@keyframes slideQuantifier {\r\n  from {-webkit-transform: translate(30%, -50%);transform: translate(30%, -50%);}\r\n  to {-webkit-transform: translate(100%, -50%);transform: translate(100%, -50%);}\r\n}\r\n\r\nquantifier {\r\n  position: absolute;\r\n  right: 0;\r\n  top: 50%;\r\n  -webkit-transform: translate(100%, -50%);\r\n          transform: translate(100%, -50%);\r\n  z-index: -1;\r\n  white-space: nowrap;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n  height: 100%;\r\n}\r\n\r\nquantifier:not(.ready) {\r\n  -webkit-animation-name: slideQuantifier;\r\n          animation-name: slideQuantifier;\r\n  -webkit-animation-duration: 0.5s;\r\n          animation-duration: 0.5s;\r\n}\r\n\r\nquantifier.ready {\r\n  z-index: 0;\r\n}\r\n\r\n.quantifierSpace {\r\n  display: inline-block;\r\n}\r\n\r\nbeauty-data > div {\r\n  position: relative;\r\n}\r\n\r\n.editing:not(.range), .lookAhead.editing, .lookBehind.editing {\r\n  background-color: #8689e3;\r\n  color: #fff;\r\n}\r\n\r\nspan.singleSymbol {\r\n  white-space: pre;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "img {\r\n  height: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".dark {\r\n  color: #aaa;\r\n}\r\n\r\n.light {\r\n  color: #eee;\r\n}\r\n\r\nspan:focus {\r\n  visibility: hidden;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "div {\r\n  display: inline-block;\r\n  padding: 3px;\r\n  color: #000;\r\n  background-color: transparent;\r\n  z-index: 4;\r\n  cursor: default;\r\n  vertical-align: middle;\r\n}\r\n\r\ndiv.data {\r\n  padding: 0;\r\n  z-index: 1000;\r\n}\r\n\r\ndiv.hovered {\r\n  border-radius: 0 777px 777px 0;\r\n  padding: 0 5px 0 1px;\r\n  border: 1px solid #f59999;\r\n  background-color: #ffdadd;\r\n  height: 100%;\r\n  box-sizing: border-box;\r\n  border-left: none;\r\n}\r\n\r\n@-webkit-keyframes resizeQuantifier {\r\n  from {right: 40%; border-radius: 0 40% 40% 0;}\r\n  to {right: 100%; border-radius: 0;}\r\n}\r\n\r\n@keyframes resizeQuantifier {\r\n  from {right: 40%; border-radius: 0 40% 40% 0;}\r\n  to {right: 100%; border-radius: 0;}\r\n}\r\n\r\n.before {\r\n  overflow: hidden;\r\n  border: 1px solid #f59999;\r\n  border-right: none;\r\n  background-color: #ffdadd;\r\n  height: 100%;\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  -webkit-animation-name: resizeQuantifier;\r\n          animation-name: resizeQuantifier;\r\n  -webkit-animation-duration: 0.5s;\r\n          animation-duration: 0.5s;\r\n  right: 100%;\r\n  top: 0;\r\n}\r\n\r\n.hovered:hover ~ .before{\r\n  background-color: #ffe6e7;\r\n}\r\n\r\ndiv.hovered.highlightselectionbackground, .hovered.highlightselectionbackground ~ .before {\r\n  background-color: rgb(118, 130, 245);\r\n  border-color: rgb(64, 78, 213);\r\n  color: #fff;\r\n}\r\n\r\n.quantifierContent {\r\n  position: relative;\r\n  display: block;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n}\r\n\r\n.crossSymbol {\r\n  display: block;\r\n  width: 12px;\r\n  height: 100%;\r\n  font-size: 10px;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  background-size: auto;\r\n  background: url(" + __webpack_require__(207) + ") no-repeat center;\r\n}\r\n\r\ndiv.hovered.highlightselectionbackground .crossSymbol {\r\n  color: #fff;\r\n}\r\n\r\n.quantifierItems {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n  width: 100%;\r\n}\r\n\r\n.quantifierItems > span {\r\n  display: inline-block;\r\n  width: 38px;\r\n  height:18px;\r\n  line-height: 18px;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  background-color: #ffdadd;\r\n  border: 1px solid #f59999;\r\n  border-radius: 777px;\r\n  cursor: pointer;\r\n}\r\n\r\n.quantifierItems > span:hover {\r\n  box-shadow:0 0 2px 2px #ffdadd;\r\n}\r\n\r\n.hovered {\r\n  position: relative;\r\n  color: #000;\r\n}\r\n\r\n.hovered > span {\r\n  cursor: pointer;\r\n}\r\n\r\n.hovered:hover {\r\n  background-color: #ffe6e7;\r\n}\r\n\r\n.hovered.clicked, .hovered.clicked ~ .before {\r\n  background-color: #8689e3;\r\n  color: #fff;\r\n}\r\n\r\n.hovered.clicked .crossSymbol {\r\n  background-image: url(" + __webpack_require__(208) + ");\r\n}\r\n\r\n.quantifierSelect {\r\n  width: 285px;\r\n  height: 50px;\r\n  font-family: \"Lucida Grande\", sans-serif;\r\n  font-size: 14px;\r\n  position: absolute;\r\n  background: linear-gradient(to bottom, rgba(243, 243, 243, 1), rgba(228, 228, 228, 1) );\r\n  border: 1px solid rgba(201, 201, 201, 1);\r\n  border-radius: 3px;\r\n  padding: 9px;\r\n  top: 100%;\r\n  left: 50%;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n  margin: 12px auto 0 auto;\r\n  box-shadow:0 1px 4px 1px rgba(218, 218, 218, 1);\r\n}\r\n\r\n.quantifierSelect:before, .quantifierSelect:after {\r\n  content: '';\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: -12px;\r\n  border: 12px solid transparent;\r\n  border-bottom: 12px solid rgba(201, 201, 201, 1);\r\n  border-top: 0;\r\n  margin:0 auto;\r\n  width: 0;\r\n}\r\n.quantifierSelect:after {\r\n  border-bottom: 12px solid rgba(238, 238, 238, 1);\r\n  top: -11px;\r\n}\r\n\r\n.quantifierItems span {\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=number] {\r\n  width: 55px;\r\n}\r\n\r\n.quantifierEdit {\r\n  padding: 0;\r\n  width: 100%;\r\n}\r\n\r\n.quantity {\r\n  position: relative;\r\n}\r\n\r\ninput[type=number]::-webkit-inner-spin-button,\r\ninput[type=number]::-webkit-outer-spin-button\r\n{\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\ninput[type=number]\r\n{\r\n  -moz-appearance: textfield;\r\n}\r\n\r\n.quantity input {\r\n  height: 19px;\r\n  width: 36px;\r\n  padding: 0;\r\n  float: left;\r\n  text-align: center;\r\n  border: 1px solid #606464;\r\n}\r\n\r\n.quantity input:focus {\r\n  outline: 0;\r\n}\r\n\r\n.quantity-nav {\r\n  float: left;\r\n  height: 19px;\r\n  width: 15px;\r\n  padding: 0;\r\n  border: 1px solid #fff;\r\n  position: relative;\r\n}\r\n\r\n.quantity-button {\r\n  width: 100%;\r\n  height: 9px;\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  border: 1px solid #abadb3;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  background: linear-gradient(to bottom, #fcfcfc, #d1d1d1);\r\n  cursor: pointer;\r\n}\r\n\r\n.quantity-button.quantity-up {\r\n  top: 0;\r\n}\r\n\r\n.quantity-button.quantity-up>span{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%,-50%);\r\n          transform: translate(-50%,-50%);\r\n  padding: 0;\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\r\n  border-width: 0 3px 3px 3px;\r\n  border-color: transparent transparent #7085d1 transparent;\r\n  cursor: pointer;\r\n}\r\n\r\n.quantity-button.quantity-down {\r\n  bottom: 0;\r\n}\r\n\r\n.quantity-button.quantity-down>span{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%,-50%);\r\n          transform: translate(-50%,-50%);\r\n  padding: 0;\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\r\n  border-width: 3px 3px 0 3px;\r\n  border-color: #7085d1 transparent transparent transparent;\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".rangeItem, .rangeItemShort {\r\n  display: inline-block;\r\n  position: relative;\r\n  padding: 3px 6px;\r\n  background-color: #dbdeff;\r\n  border: 1px solid #9aa2f5;\r\n  z-index: 5;\r\n  color: #000;\r\n  cursor: pointer;\r\n  font-size: 14px;\r\n  line-height: 14px;\r\n  font-family: \"Lucida Grande\", sans-serif;\r\n  border-right: none;\r\n}\r\n\r\n.editing.rangeItem, .editing.rangeItemShort {\r\n  background-color: #8689e3;\r\n  color: #fff;\r\n}\r\n\r\n.highlightSelectionBackground.rangeItem, .highlightSelectionBackground.rangeItemShort {\r\n  background-color: rgb(118, 130, 245);\r\n  border-color: rgb(64, 78, 213);\r\n  color: #fff;\r\n}\r\n\r\n.rangeItem:first-child, .rangeItemShort:first-child {\r\n  border-radius: 777px 0 0 777px;\r\n}\r\n\r\n.rangeItem:last-child, .rangeItemShort:nth-last-child(2){\r\n  border-radius:  0 777px 777px 0;\r\n  border-right: 1px solid #9aa2f5;\r\n}\r\n\r\n.rangeItem:first-child:last-child {\r\n  border-radius: 777px;\r\n  padding: 3px 8px;\r\n}\r\n\r\n.negative {\r\n  color: #fff;\r\n  border-color: #2e38ab;\r\n  background-color: #8587e5;\r\n}\r\n\r\n.wrapper {\r\n  white-space: nowrap;\r\n}\r\n\r\n.hiddenData {\r\n  display: none;\r\n  font-size: 14px;\r\n  position: absolute;\r\n  background: linear-gradient(to bottom, rgba(243, 243, 243, 1), rgba(228, 228, 228, 1) );\r\n  border: 1px solid rgba(201, 201, 201, 1);\r\n  border-radius: 3px;\r\n  padding: 9px;\r\n  z-index: 1000;\r\n  box-shadow:0 1px 4px 1px rgba(218, 218, 218, 1);\r\n  top: 35px;\r\n}\r\n\r\n.hiddenData:before, .hiddenData:after {\r\n  content: '';\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: -13px;\r\n  border: 12px solid transparent;\r\n  border-bottom: 12px solid rgba(201, 201, 201, 1);\r\n  border-top: 0;\r\n  margin:0 auto;\r\n  width: 0;\r\n}\r\n\r\n.hiddenData:after {\r\n  border-bottom: 12px solid rgba(243, 243, 243, 1);\r\n  top: -12px;\r\n}\r\n\r\ndiv:hover .hiddenData:not(.hidden) {\r\n  display: block;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".selectedElement {\r\n  display: inline-block;\r\n  position: relative;\r\n  padding: 3px;\r\n  background: rgba(118, 130, 247, 1);\r\n  border: 1px solid rgba(64, 78, 213, 1);\r\n  color: #fff;\r\n  border-radius: 9999px;\r\n  z-index: 5;\r\n  cursor: pointer;\r\n}\r\n\r\n.Lookaround {\r\n  border-left: none;\r\n  margin-left: 11px;\r\n  border-radius: 0 9999px 9999px 0;\r\n}\r\n\r\n.Lookaround::after {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: -10px;\r\n  border-color: transparent;\r\n  border-style: solid;\r\n}\r\n\r\n.Lookaround::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: -1px;\r\n  left: -11px;\r\n  border-color: transparent;\r\n  border-style: solid;\r\n}\r\n\r\n.Lookaround::before {\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\r\n  border-width: 11px 11px 11px 0;\r\n  border-color: transparent rgba(64, 78, 213, 1) transparent transparent;\r\n}\r\n\r\n.Lookaround::after {\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\r\n  border-width: 10px 10px 10px 0;\r\n  border-color: transparent rgba(118, 130, 247, 1) transparent transparent;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "div {\r\n  color: black;\r\n  font-size: 16px;\r\n  line-height: 14px;\r\n  white-space: nowrap;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".toggle {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -100%);\r\n          transform: translate(-50%, -100%);\r\n  white-space: nowrap;\r\n  background: linear-gradient(to bottom, #c7cbf8, #b1b6f5);\r\n  border: 1px solid #8d99f5;\r\n  outline: none;\r\n  cursor: pointer;\r\n  border-radius: 777px;\r\n  width: 90px;\r\n  height: 20px;\r\n}\r\n\r\n.toggle:hover {\r\n  border-color: #6970d2;\r\n}\r\n\r\n.toggle.selected {\r\n  border-color: #6970d2;\r\n  background: linear-gradient(to bottom, #929bf6, #6471f2);\r\n  color: #fff;\r\n}\r\n\r\n.wrapper {\r\n  background: linear-gradient(to bottom, rgba(243, 243, 243, 1), rgba(228, 228, 228, 1) );\r\n  border: 1px solid rgba(201, 201, 201, 1);\r\n  border-radius: 3px;\r\n  padding: 9px 9px 39px 9px;\r\n  position: relative;\r\n  top: 12px;\r\n  box-shadow:0 1px 4px 1px rgba(218, 218, 218, 1);\r\n}\r\n\r\n.wrapper:before, .wrapper:after {\r\n  content: '';\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: -13px;\r\n  border: 12px solid transparent;\r\n  border-bottom: 12px solid rgba(201, 201, 201, 1);\r\n  border-top: 0;\r\n  margin: 0 auto;\r\n  width: 0;\r\n}\r\n.wrapper:after {\r\n  border-bottom: 12px solid rgba(238, 238, 238, 1);\r\n  top: -12px;\r\n}\r\n\r\ntextarea {\r\n  display: block;\r\n  min-width: 300px;\r\n  min-height: 50px;\r\n  overflow: hidden;\r\n}\r\n\r\n.submit, .copy {\r\n  margin: 10px 0;\r\n  border-radius: 777px;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.submit {\r\n  float: left;\r\n  color: #fff;\r\n  background: #9c9c9c;\r\n  border: 1px solid #767474;\r\n}\r\n\r\n.copy {\r\n  float: right;\r\n  background: #eaeaed;\r\n  border: 1px solid #bfbfbf;\r\n}\r\n\r\n.modalDialog {\r\n  position: absolute;\r\n  bottom: 10px;\r\n  left: 50%;\r\n  display: none;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n}\r\n\r\n.modalDialog p {\r\n  margin: 0;\r\n  font-size: 12px;\r\n  white-space: nowrap;\r\n}\r\n\r\n.modalDialog > div {\r\n  position: relative;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n  background: #ffcede;\r\n}\r\n\r\n.close {\r\n  outline: none;\r\n  border: 1px solid black;\r\n  width: 12px;\r\n  height: 12px;\r\n  line-height: 10px;\r\n  padding: 0;\r\n  background: #606061;\r\n  color: #FFFFFF;\r\n  font-size: 7px;\r\n  position: absolute;\r\n  text-align: center;\r\n  right: -4px;\r\n  top: -4px;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n}\r\n\r\n.close:hover {\r\n  background: #00d9ff;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "div > div {\r\n  text-align: left;\r\n  margin-bottom: 8px;\r\n}\r\n\r\ndiv > div:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\ndiv .symbol {\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  width: 30px;\r\n  height: 20px;\r\n  margin-top: -3px;\r\n  margin-right: 10px;\r\n  background: rgba(253, 252, 142, 1);\r\n  border: 1px solid rgba(206, 205, 68, 1);\r\n  border-radius: 9999px;\r\n  color: #000;\r\n  vertical-align: middle;\r\n}\r\n\r\ndiv div:nth-child(2) .symbol {\r\n  color: #fff;\r\n  background: rgba(173, 172, 84, 1);\r\n  border-color: rgba(109, 108, 27, 1)\r\n}\r\n\r\ndiv div:nth-child(n+3) .symbol {\r\n  font-size: 16px;\r\n}\r\n\r\ndiv .text {\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  height: 21px;\r\n  font-family: \"Lucida Grande\", sans-serif;\r\n  font-size: 14px;\r\n}\r\n\r\n.done {\r\n  outline: none;\r\n  display: inline-block;\r\n  height: 20px;\r\n  width: 130px;\r\n  background: linear-gradient(to bottom, #6ad45d, #2cc119);\r\n  color: #fff;\r\n  border: 1px solid #19a507;\r\n  border-radius: 777px;\r\n  line-height: 18px;\r\n  cursor: pointer;\r\n}\r\n\r\n.done:hover {\r\n  background: linear-gradient(to top, #6ad45d, #2cc119);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "span {\r\n  display: inline-block;\r\n  width: 99px;\r\n  height: 19px;\r\n  border: 1px solid rgba(64, 78, 213, 1);\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\nspan:nth-child(odd) {\r\n  border-bottom-left-radius: 10px;\r\n  border-top-left-radius: 10px;\r\n}\r\nspan:nth-child(even) {\r\n  border-bottom-right-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n  border-left: none;\r\n}\r\n\r\n.purple {\r\n  background: linear-gradient(to bottom, #929bf6, #6471f2);\r\n  color: #fff;\r\n}\r\n\r\n.brightPurple {\r\n  background: linear-gradient(to bottom, #c7cbf8, #b1b6f5);\r\n  color: #000;\r\n}\r\n\r\nspan.showOneItem {\r\n  display: inline-block;\r\n  height: 20px;\r\n  width: 130px;\r\n  background: linear-gradient(to bottom, #6ad45d, #2cc119);\r\n  color: #fff;\r\n  border: 1px solid #19a507;\r\n  border-radius: 777px;\r\n  line-height: 20px;\r\n}\r\n\r\nspan.showOneItem:hover:not(.disabled) {\r\n  background: linear-gradient(to top, #6ad45d, #2cc119);\r\n}\r\n\r\n.disabled span:first-child, .disabledLast span:last-child, .showOneItem.disabled {\r\n  background: #AEAEAE;\r\n  color: grey;\r\n  border-color: grey;\r\n  cursor: default;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "span {\r\n  display: inline-block;\r\n  width: 99px;\r\n  height: 19px;\r\n  border: 1px solid rgba(64, 78, 213, 1);\r\n  cursor: pointer;\r\n}\r\n\r\nspan:nth-child(odd) {\r\n  border-bottom-left-radius: 10px;\r\n  border-top-left-radius: 10px;\r\n}\r\nspan:nth-child(even) {\r\n  border-bottom-right-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n  border-left: none;\r\n}\r\n\r\ndiv div {\r\n  margin-bottom: 8px;\r\n}\r\n\r\ndiv div:nth-child(3) {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.addLookaround {\r\n  width: 198px;\r\n  background: linear-gradient(to bottom, rgba(228, 202, 244, 1), rgba(190, 168, 203, 1));\r\n  color: #000;\r\n  border-bottom-right-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n}\r\n\r\n.changeLookaround {\r\n  background: linear-gradient(to bottom, rgba(228, 202, 244, 1), rgba(190, 168, 203, 1));\r\n  color: #000;\r\n}\r\n\r\n.deleteLookaround {\r\n  background: linear-gradient(to bottom, rgba(248, 202, 244, 1), rgba(210, 168, 203, 1));\r\n  color: #000;\r\n}\r\n\r\n.purple {\r\n  background: linear-gradient(to bottom, #929bf6, #6471f2);\r\n  color: #fff;\r\n}\r\n\r\n.brightPurple {\r\n  background: linear-gradient(to bottom, #c7cbf8, #b1b6f5);\r\n  color: #000;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "span {\r\n  box-sizing: border-box;\r\n  display: block;\r\n  float: left;\r\n  background: rgba(225, 225, 225, 1);\r\n  width: 27px;\r\n  height: 16px;\r\n  margin: 1px;\r\n  font-family: \"Lucida Grande\", sans-serif;\r\n  font-size: 11px;\r\n  cursor: pointer;\r\n}\r\n\r\nspan:hover,.hoveredElement {\r\n  box-shadow: inset 0 0 30px rgba(189, 193, 228, 1);\r\n  border: 1px solid rgba(202, 204, 234, 1);\r\n}\r\n\r\n.selectedElement {\r\n  background: rgba(118, 130, 247, 1);\r\n  border: 1px solid rgba(64, 78, 213, 1);\r\n  color: #fff;\r\n}\r\n\r\n.selectedElement:hover {\r\n  box-shadow: none;\r\n  border-color: rgba(64, 78, 213, 1);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "span {\r\n  display: inline-block;\r\n  width: 99px;\r\n  line-height: 19px;\r\n  border: 1px solid rgba(64, 78, 213, 1);\r\n  font-family: \"Lucida Grande\", sans-serif;\r\n  font-size: 13px;\r\n  cursor: pointer;\r\n}\r\nspan:first-child {\r\n  border-bottom-left-radius: 10px;\r\n  border-top-left-radius: 10px;\r\n}\r\nspan:last-child {\r\n  border-bottom-right-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n  border-left: none;\r\n}\r\n\r\n.purple {\r\n  background: linear-gradient(to bottom, #929bf6, #6471f2);\r\n  color: #fff;\r\n}\r\n\r\n.brightPurple {\r\n  background: linear-gradient(to bottom, #c7cbf8, #b1b6f5);\r\n  color: #000;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "span {\r\n  display: inline-block;\r\n  background: rgba(254, 224, 165, 1);\r\n  border: 1px solid rgba(208, 165, 84, 1);\r\n  border-radius: 9999px;\r\n  width: 25px;\r\n  height: 19px;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  margin-right: 4px;\r\n  font-family: \"Lucida Grande\", sans-serif;\r\n  font-size: 11px;\r\n  cursor: pointer;\r\n}\r\n\r\nspan:hover {\r\n  box-shadow: 0 0 5px 2px rgba(254, 224, 165, 1);\r\n}\r\n\r\nspan:last-child {\r\n  margin-right: 0;\r\n}\r\n\r\n.selectedElement {\r\n  background: rgba(118, 130, 247, 1);\r\n  border: 1px solid rgba(64, 78, 213, 1);\r\n  color: #fff;\r\n}\r\n\r\n.selectedElement:hover {\r\n  box-shadow: none;\r\n  border-color: rgba(64, 78, 213, 1);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "span {\r\n  font-family: \"Lucida Grande\", sans-serif;\r\n  font-size: 11px;\r\n  cursor: pointer;\r\n}\r\n.top{\r\n  height: 37px;\r\n  background: rgba(242, 242, 242, 1);\r\n  border-bottom: 1px solid rgba(173, 173, 173, 1);\r\n}\r\n\r\n.search {\r\n  display: inline-block;\r\n  width: 215px;\r\n  padding-left: 9px;\r\n  margin-right: 8px;\r\n  margin-top: 9px;\r\n}\r\n\r\n.posNeg {\r\n  display: inline-block;\r\n  width: 208px;\r\n  margin-right: 8px;\r\n}\r\n\r\n.purple {\r\n  background: rgba(141, 150, 245, 1);\r\n  color: #fff;\r\n}\r\n\r\n.brightPurple {\r\n  background: rgba(180, 186, 248, 1);\r\n  color: #000;\r\n}\r\n\r\n.ASCII {\r\n  margin-top: 1px;\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.ASCII span {\r\n  box-sizing: border-box;\r\n  display: inline-block;\r\n  background: rgba(225, 225, 225, 1);\r\n  width: 27px;\r\n  height: 16px;\r\n  margin: 1px;\r\n}\r\n\r\n.ASCII span:hover,.hoveredElement {\r\n  box-shadow: inset 0 0 30px rgba(189, 193, 228, 1);\r\n  border: 1px solid rgba(202, 204, 234, 1);\r\n}\r\n.top, .posNeg {\r\n  white-space: nowrap;\r\n}\r\n\r\n.done {\r\n  outline: none;\r\n  display: inline-block;\r\n  height: 20px;\r\n  width: 130px;\r\n  background: linear-gradient(to bottom, #6ad45d, #2cc119);\r\n  color: #fff;\r\n  border: 1px solid #19a507;\r\n  border-radius: 777px;\r\n  line-height: 18px;\r\n  cursor: pointer;\r\n  margin: 5px;\r\n}\r\n\r\n.done:hover {\r\n  background: linear-gradient(to top, #6ad45d, #2cc119);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".edit {\r\n  margin-top: 30px;\r\n}\r\n\r\n.hint {\r\n  position: absolute;\r\n  z-index: 2;\r\n  top: 6px;\r\n  left: 0;\r\n  right: 0;\r\n  text-align: center;\r\n  height: 22px;\r\n  background: transparent;\r\n}\r\n\r\n.hint span {\r\n  display: inline-block;\r\n  margin: 0 auto;\r\n  height: 22px;\r\n  box-sizing: border-box;\r\n  background: rgba(64, 64, 64, 1);\r\n  border: 1px solid rgba(38, 38, 38, 1);\r\n  border-radius: 3px;\r\n  font-size: 11px;\r\n  color: rgba(236, 236, 236, 1);\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  line-height: 9px;\r\n  padding: 6px 7px 0 7px;\r\n  cursor: default;\r\n}\r\n\r\n.data {\r\n  display: none;\r\n  font-family: \"Lucida Grande\", sans-serif;\r\n  font-size: 14px;\r\n  position: absolute;\r\n  background: linear-gradient(to bottom, rgba(243, 243, 243, 1), rgba(228, 228, 228, 1) );\r\n  border: 1px solid rgba(201, 201, 201, 1);\r\n  border-radius: 3px;\r\n  padding: 9px;\r\n  z-index: 1000;\r\n  box-shadow:0 1px 4px 1px rgba(218, 218, 218, 1);\r\n}\r\n\r\n.data:before, .data:after {\r\n  content: '';\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: -13px;\r\n  border: 12px solid transparent;\r\n  border-bottom: 12px solid rgba(201, 201, 201, 1);\r\n  border-top: 0;\r\n  margin:0 auto;\r\n  width: 0;\r\n}\r\n.data:after {\r\n  border-bottom: 12px solid rgba(238, 238, 238, 1);\r\n  top: -12px;\r\n}\r\n\r\n.data span {\r\n  cursor: pointer;\r\n}\r\n\r\n.Group, .Lookaround {\r\n  width: 215px;\r\n}\r\n.Range {\r\n  width: 466px;\r\n  padding: 0;\r\n}\r\n\r\n.Anchors {\r\n  width: 200px;\r\n  cursor: pointer;\r\n}\r\n\r\n.Quantifier {\r\n  width: 285px;\r\n  height: 50px;\r\n  padding: 9px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\r\n/* RegExp display field */\r\n\r\n.regExp {\r\n  max-width: 100%;\r\n  position: absolute;\r\n  top: -100px;\r\n  background: rgba(253, 252, 142, 1);\r\n  color: black;\r\n}\r\n\r\n.regExp span:not(:nth-child(1)) {\r\n  -webkit-touch-callout: default;\r\n  -webkit-user-select: auto;\r\n  -moz-user-select: text;\r\n  -ms-user-select: text;\r\n  user-select: text;\r\n}\r\n\r\n.regExp span {\r\n  white-space: pre-wrap;\r\n  word-wrap: break-word;\r\n  display: block;\r\n  float: left;\r\n}\r\n\r\n/* RegExp edit field */\r\n\r\n.regExpInput {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, 50px);\r\n          transform: translate(-50%, 50px);\r\n}\r\n\r\n/* Main input field */\r\n\r\n.area{\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  width: 100%;\r\n  max-width: 100%;\r\n  min-height: 160px;\r\n  background: #fff;\r\n  padding: 67px 0 30px 0;\r\n  border: 1px solid rgba(192, 210, 232, 1);\r\n  resize: vertical;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  box-sizing: border-box;\r\n  cursor: text;\r\n}\r\n.area:focus {\r\n  outline: none;\r\n}\r\n.area:empty {\r\n  padding-top: 67px;\r\n}\r\n\r\n.data {\r\n  font-family: \"Lucida Grande\", sans-serif;\r\n  font-size: 14px;\r\n  position: absolute;\r\n  background: rgba(238, 238, 238, 1);\r\n  border: 1px solid rgba(201, 201, 201, 1);\r\n  border-radius: 3px;\r\n  padding: 9px;\r\n  margin: 0 auto;\r\n  bottom: 10px;\r\n  left: 0;\r\n  right: 0;\r\n  box-shadow:0 1px 4px 1px rgba(218, 218, 218, 1);\r\n  z-index: 1000;\r\n}\r\n\r\n/* Group popup */\r\n\r\n.data:before, .data:after {\r\n  content: '';\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: -12px;\r\n  border: 12px solid transparent;\r\n  border-bottom: 12px solid rgba(201, 201, 201, 1);\r\n  border-top: 0;\r\n  margin:0 auto;\r\n  width: 0;\r\n}\r\n\r\n.data:after {\r\n  border-bottom: 12px solid rgba(238, 238, 238, 1);\r\n  top: -11px;\r\n}\r\n\r\n.data span {\r\n  cursor: pointer;\r\n}\r\n\r\n.Group, .Lookaround {\r\n  width: 130px;\r\n  height: 20px;\r\n}\r\n\r\n/* Global caret */\r\n\r\ncaret {\r\n  position: absolute;\r\n  font-size: 14px;\r\n  z-index: 100;\r\n  pointer-events:none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "crossDark.67461785b8829a97666d.svg";

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "crossWhite.31cca94b12cc74df26be.svg";

/***/ }),
/* 209 */,
/* 210 */
/***/ (function(module, exports) {

module.exports = "<div class=\"vire\" (mouseup)=\"deleteStartSelection()\">\r\n    <main-elements *ngIf=\"!selectedMainElement && !elementToEdit && !isHideMainEl\"></main-elements>\r\n    <text-input (isHideMainEl)=\"hideMainElements($event)\"></text-input>\r\n</div>\r\n"

/***/ }),
/* 211 */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainElements\" *ngIf=\"displayMainEl\">\r\n    <span *ngFor=\"let element of elements | slice:1\" (mouseover)=\"onMouseOver(element)\"\r\n          (mouseout)=\"onMouseOut()\" (click)=\"onSelect(element)\">\r\n        {{element.name}}\r\n    </span>\r\n</div>\r\n<div *ngIf=\"hoveredElement\" class=\"mainHint\">\r\n    <span>{{hoveredElement.hint}}</span>\r\n</div>\r\n<div *ngIf=\"!hoveredElement\" class=\"mainHint\">\r\n    <span>{{ customHint || STATIC_HINT }}</span>\r\n</div>\r\n"

/***/ }),
/* 212 */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" (mouseenter)=\"showQuantifier(true)\" (mouseleave)=\"showQuantifier(false)\" #element>\r\n  <lookaround-arrow *ngIf=\"currentClass.indexOf('look')!== -1\"\r\n                    [ngClass]=\"{'arrowAhead' : currentClass.indexOf('lookAhead')!== -1,\r\n                                'arrowBehind' : currentClass.indexOf('lookBehind')!== -1,\r\n                                'arrowBorder' : true,\r\n                                'left' : lookaroundArrowBorderClass === 'left',\r\n                                'right' : lookaroundArrowBorderClass === 'right'}\"\r\n                    [lookaroundClass]=\"currentClass\"\r\n                    [border]=\"true\"\r\n                    [selected]=\"selectionData.indexOf(viewData) !== -1\"\r\n                    [edit]=\"false\"></lookaround-arrow>\r\n  <div #currEl class=\"beautyData {{ currentClass.length > 0 ? currentClass : ''}}\"\r\n       (dblclick)=\"handleClickToEdit($event)\" (mouseenter)=\"handleMouseEnterForSelection()\">\r\n    <lookaround-arrow *ngIf=\"currentClass.indexOf('look')!== -1\"\r\n                      [ngClass]=\"{'arrowAhead' : currentClass.indexOf('lookAhead')!== -1,\r\n                                'arrowBehind' : currentClass.indexOf('lookBehind')!== -1}\"\r\n                      [lookaroundClass]=\"currentClass\"\r\n                      [border]=\"false\"\r\n                      [selected]=\"selectionData.indexOf(viewData) !== -1\"\r\n                      [edit]=\"currentClass.indexOf('edit') !== -1\"></lookaround-arrow>\r\n    <div *ngIf=\"viewData[0] !== 'range'\">\r\n      <placeholder *ngIf=\"viewData.length === sliceNumber && currentClass.indexOf('look')!== -1\"\r\n                   [parentData]=\"viewData\" [className]=\"currentClass\"></placeholder>\r\n      <span *ngFor=\"let datum of viewData | slice: sliceNumber\"\r\n         (mousedown)=\"$event.preventDefault();\"\r\n         [ngClass]=\"{'singleData': datum.length === 1}\"\r\n         class=\"beautyData\"><!--\r\n       --><beauty-data *ngIf=\"!checkIfString(datum) && datum[0] !== 'main-element' && datum[0] !== 'quantifier'\"\r\n                  class=\"{{selectionData.indexOf(datum) !== -1 ? 'highlightSelectionBackground' : ''}}\"\r\n                  [viewData]=\"datum\"\r\n                  [parentData]=\"viewData\"\r\n                  [hideAllQuantifiers]=\"hideAllQuantifiers\"\r\n                  (passViewDataHigher)=\"handleInnerViewData($event)\"\r\n                  (toggleGlobalQuantClicked)=\"passClickedStatusHigher($event)\"\r\n                  (hideParentQuantifier)=\"hideQuantifier($event)\"\r\n                  (passSelectedElementPosition) = \"passSelectedElementPosition.emit($event)\">\r\n          </beauty-data><!--\r\n     --><span *ngIf=\"checkIfString(datum) && datum[0] !== 'main-element' && datum[0] !== '\\\\'\"\r\n              class=\"singleSymbol\" (mousedown)=\"$event.preventDefault();\">{{datum}}</span><!--\r\n     --><span *ngIf=\"checkIfString(datum) && datum[0] !== 'main-element' && datum[0] === '\\\\'\"\r\n              class=\"singleSymbol\" (mousedown)=\"$event.preventDefault();\">{{datum.slice(1)}}</span><!--\r\n     --><selected-element-view *ngIf=\"datum[0] === 'main-element'\" [elementName] = datum[1]\r\n          (passSelectedElementPosition) = \"passSelectedElementPosition.emit($event)\">\r\n        </selected-element-view><!--\r\n   --></span>\r\n    </div>\r\n    <range-beauty-data *ngIf=\"viewData[0] === 'range'\"\r\n                       [viewData]=\"viewData | slice: sliceNumber\"\r\n                       [className]=\"currentClass + (selectionData.indexOf(viewData) !== -1 ? ' highlightSelectionBackground' : '')\">\r\n    </range-beauty-data>\r\n  </div>\r\n  <quantifier #quantifier *ngIf=\"viewData.length > 0 && viewData[viewData.length - 1][0] === 'quantifier'\"\r\n                 [viewData]=\"viewData[viewData.length - 1]\"\r\n                 [editable]=\"!hideAllQuantifiers\" class=\"ready\"\r\n                 [highlightSelectionBackground]=\"selectionData.indexOf(viewData) !== -1\">\r\n  </quantifier>\r\n  <quantifier #quantifier *ngIf=\"currentClass.length > 0\r\n                     && ( hovered || alwaysShowQuantifier)\r\n                     && isShowQuantifier\r\n                     && !hideAllQuantifiers\"\r\n              (sendDataToGlobalArray)=\"handleDataFromQuantifier($event)\"\r\n              (globalQuantifierClicked)=\"handleQuantifierClicked($event)\">\r\n  </quantifier>\r\n</div>\r\n<span *ngIf=\"viewData.length > 0 && viewData[viewData.length - 1][0] === 'quantifier'\" #quantifierSpace class=\"quantifierSpace\"></span>\r\n"

/***/ }),
/* 213 */
/***/ (function(module, exports) {

module.exports = "<img src={{imageSource}}>\r\n"

/***/ }),
/* 214 */
/***/ (function(module, exports) {

module.exports = "<span (mousedown)=\"$event.stopPropagation()\"\r\n      [ngClass]=\"{'dark': className.indexOf('positive') !== -1, 'light': className.indexOf('negative') !== -1}\">...</span>\r\n"

/***/ }),
/* 215 */
/***/ (function(module, exports) {

module.exports = "<div class=\"hovered {{cssClass}} {{highlightSelectionBackground ? ' highlightselectionbackground':''}}\" *ngIf=\"hovered && !dataToEdit\" [ngClass]=\"{'cross': !selectedQuantifier}\"\r\n     (mouseover)=\"handleHoverGlobal(true)\" (mouseout)=\"handleHoverGlobal(false)\"\r\n     (click)=\"handleClickOnHovered($event)\" (mousedown)=\"$event.stopPropagation()\" (dblclick)=\"handleDoubleClick($event)\">\r\n  <span class=\"quantifierContent crossSymbol\" (mousedown)=\"$event.preventDefault()\" *ngIf=\"!selectedQuantifier && !viewData\"></span>\r\n  <span class=\"quantifierContent\" *ngIf=\"selectedQuantifier && !viewData\">{{selectedQuantifier.name}}</span>\r\n  <span class=\"quantifierContent\" (mousedown)=\"$event.preventDefault()\" *ngIf=\"viewData\">{{viewData.slice(1).join('')}}</span>\r\n  <div *ngIf=\"clicked\" class=\"quantifierSelect\">\r\n    <div class=\"quantifierItems\">\r\n      <span *ngFor=\"let datum of quantifierData\" (click)=\"handleQuantifierDataClick($event, datum)\">{{datum.name}}</span>\r\n    </div>\r\n    <div class=\"data\">\r\n        <span *ngIf=\"!selectedQuantifier || selectedQuantifierId < 3\">Select prefered quantifier</span>\r\n        <div *ngIf=\"selectedQuantifierId === 3\" >\r\n          <span>Matches exactly </span>\r\n          <div class=\"quantity\"><input #input1 type=\"number\" min=\"1\" [(ngModel)]=\"startRange\" title=\"\"\r\n                                       (ngModelChange)=\"setStartEndRange(3, $event, endRange)\"\r\n                                       (click)=\"$event.stopPropagation()\"\r\n                                       (mousedown)=\"$event.stopPropagation()\"\r\n                                       (mouseup)=\"$event.stopPropagation()\"\r\n                                       (keydown)=\"$event.stopPropagation()\"\r\n                                       (keypress)=\"$event.stopPropagation()\"\r\n                                       (mousemove)=\"$event.stopPropagation()\">\r\n            <div class=\"quantity-nav\">\r\n              <span class=\"quantity-button quantity-up\" (click)=\"increaseValue(input1)\"><span></span></span>\r\n              <span class=\"quantity-button quantity-down\" (click)=\"decreaseValue(input1)\"><span></span></span>\r\n            </div>\r\n          </div>\r\n          <span> times</span>\r\n        </div>\r\n        <div *ngIf=\"selectedQuantifierId === 4\">\r\n          <span>Matches from </span>\r\n          <div class=\"quantity\"><input #input2 type=\"number\" min=\"0\" [(ngModel)]=\"startRange\" title=\"\"\r\n                                       (ngModelChange)=\"setStartEndRange(4, $event, endRange)\"\r\n                                       (click)=\"$event.stopPropagation()\"\r\n                                       (mousedown)=\"$event.stopPropagation()\"\r\n                                       (mouseup)=\"$event.stopPropagation()\"\r\n                                       (keydown)=\"$event.stopPropagation()\"\r\n                                       (keypress)=\"$event.stopPropagation()\"\r\n                                       (mousemove)=\"$event.stopPropagation()\">\r\n            <div class=\"quantity-nav\">\r\n              <span class=\"quantity-button quantity-up\" (click)=\"increaseValue(input2)\"><span></span></span>\r\n              <span class=\"quantity-button quantity-down\" (click)=\"decreaseValue(input2)\"><span></span></span>\r\n            </div>\r\n          </div>\r\n          <span> to infinity</span>\r\n        </div>\r\n        <div *ngIf=\"selectedQuantifierId === 5\">\r\n          <span>Matches from </span>\r\n          <div class=\"quantity\"><input #input3 type=\"number\" min=\"0\" [(ngModel)]=\"startRange\" title=\"\"\r\n                                       (ngModelChange)=\"setStartEndRange(5, $event, endRange)\"\r\n                                       (click)=\"$event.stopPropagation()\"\r\n                                       (mousedown)=\"$event.stopPropagation()\"\r\n                                       (mouseup)=\"$event.stopPropagation()\"\r\n                                       (keydown)=\"$event.stopPropagation()\"\r\n                                       (keypress)=\"$event.stopPropagation()\"\r\n                                       (mousemove)=\"$event.stopPropagation()\">\r\n            <div class=\"quantity-nav\">\r\n              <span class=\"quantity-button quantity-up\" (click)=\"increaseValue(input3, input4)\"><span></span></span>\r\n              <span class=\"quantity-button quantity-down\" (click)=\"decreaseValue(input3, input4)\"><span></span></span>\r\n            </div>\r\n          </div>\r\n          <span> to </span>\r\n          <div class=\"quantity\"><input #input4 type=\"number\" min=\"1\" [(ngModel)]=\"endRange\" title=\"\"\r\n                                       (ngModelChange)=\"setStartEndRange(5, startRange, $event)\"\r\n                                       (click)=\"$event.stopPropagation()\"\r\n                                       (mousedown)=\"$event.stopPropagation()\"\r\n                                       (mouseup)=\"$event.stopPropagation()\"\r\n                                       (keydown)=\"$event.stopPropagation()\"\r\n                                       (keypress)=\"$event.stopPropagation()\"\r\n                                       (mousemove)=\"$event.stopPropagation()\">\r\n            <div class=\"quantity-nav\">\r\n              <span class=\"quantity-button quantity-up\" (click)=\"increaseValue(input4)\"><span></span></span>\r\n              <span class=\"quantity-button quantity-down\" (click)=\"decreaseValue(input4)\"><span></span></span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <div *ngIf=\"dataToEdit\" class=\"quantifierEdit\">\r\n    <div class=\"quantifierItems\">\r\n      <span *ngFor=\"let datum of quantifierData\" (click)=\"handleQuantifierDataClick($event, datum)\">{{datum.name}}</span>\r\n    </div>\r\n    <div class=\"data\">\r\n      <span *ngIf=\"!selectedQuantifier || selectedQuantifierId < 3\">Select prefered quantifier</span>\r\n      <div *ngIf=\"selectedQuantifierId === 3\" >\r\n        <span>Matches exactly </span>\r\n        <div class=\"quantity\"><input #input5 type=\"number\" min=\"1\" [(ngModel)]=\"startRange\" title=\"\"\r\n                                     (ngModelChange)=\"setStartEndRange(3, $event, endRange)\"\r\n                                     (click)=\"$event.stopPropagation()\"\r\n                                     (mousedown)=\"$event.stopPropagation()\"\r\n                                     (mouseup)=\"$event.stopPropagation()\"\r\n                                     (keydown)=\"$event.stopPropagation()\"\r\n                                     (keypress)=\"$event.stopPropagation()\"\r\n                                     (mousemove)=\"$event.stopPropagation()\">\r\n          <div class=\"quantity-nav\">\r\n            <span class=\"quantity-button quantity-up\" (click)=\"increaseValue(input5)\"><span></span></span>\r\n            <span class=\"quantity-button quantity-down\" (click)=\"decreaseValue(input5)\"><span></span></span>\r\n          </div>\r\n        </div>\r\n        <span> times</span>\r\n      </div>\r\n      <div *ngIf=\"selectedQuantifierId === 4\">\r\n        <span>Matches from </span>\r\n        <div class=\"quantity\"><input #input6 type=\"number\" min=\"0\" [(ngModel)]=\"startRange\" title=\"\"\r\n                                     (ngModelChange)=\"setStartEndRange(4, $event, endRange)\"\r\n                                     (click)=\"$event.stopPropagation()\"\r\n                                     (mousedown)=\"$event.stopPropagation()\"\r\n                                     (mouseup)=\"$event.stopPropagation()\"\r\n                                     (keydown)=\"$event.stopPropagation()\"\r\n                                     (keypress)=\"$event.stopPropagation()\"\r\n                                     (mousemove)=\"$event.stopPropagation()\">\r\n          <div class=\"quantity-nav\">\r\n            <span class=\"quantity-button quantity-up\" (click)=\"increaseValue(input6)\"><span></span></span>\r\n            <span class=\"quantity-button quantity-down\" (click)=\"decreaseValue(input6)\"><span></span></span>\r\n          </div>\r\n        </div>\r\n        <span> to infinity</span>\r\n      </div>\r\n      <div *ngIf=\"selectedQuantifierId === 5\">\r\n        <span>Matches from </span>\r\n        <div class=\"quantity\"><input #input7 type=\"number\" min=\"0\" [(ngModel)]=\"startRange\" title=\"\"\r\n                                     (ngModelChange)=\"setStartEndRange(5, $event, endRange)\"\r\n                                     (click)=\"$event.stopPropagation()\"\r\n                                     (mousedown)=\"$event.stopPropagation()\"\r\n                                     (mouseup)=\"$event.stopPropagation()\"\r\n                                     (keydown)=\"$event.stopPropagation()\"\r\n                                     (keypress)=\"$event.stopPropagation()\"\r\n                                     (mousemove)=\"$event.stopPropagation()\">\r\n          <div class=\"quantity-nav\">\r\n            <span class=\"quantity-button quantity-up\" (click)=\"increaseValue(input7, input8)\"><span></span></span>\r\n            <span class=\"quantity-button quantity-down\" (click)=\"decreaseValue(input7, input8)\"><span></span></span>\r\n          </div>\r\n        </div>\r\n        <span> to </span>\r\n        <div class=\"quantity\"><input #input8 type=\"number\" min=\"1\" [(ngModel)]=\"endRange\" title=\"\"\r\n                                     (ngModelChange)=\"setStartEndRange(5, startRange, $event)\"\r\n                                     (click)=\"$event.stopPropagation()\"\r\n                                     (mousedown)=\"$event.stopPropagation()\"\r\n                                     (mouseup)=\"$event.stopPropagation()\"\r\n                                     (keydown)=\"$event.stopPropagation()\"\r\n                                     (keypress)=\"$event.stopPropagation()\"\r\n                                     (mousemove)=\"$event.stopPropagation()\">\r\n          <div class=\"quantity-nav\">\r\n            <span class=\"quantity-button quantity-up\" (click)=\"increaseValue(input8)\"><span></span></span>\r\n            <span class=\"quantity-button quantity-down\" (click)=\"decreaseValue(input8)\"><span></span></span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<img class=\"before\" src=\"../../../../assets/img/emptyW1H2.svg\">\r\n"

/***/ }),
/* 216 */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!showDataShort\">\r\n  <span *ngFor=\"let datum of showData\" (mousedown)=\"$event.preventDefault()\" class=\"rangeItem\" [ngClass]=\"className\">\r\n    <span *ngIf=\"isObject(datum)\">\r\n      <span *ngFor=\"let subDatum of datum | slice: sliceNumber\" (mousedown)=\"$event.preventDefault()\">\r\n        {{subDatum}}\r\n      </span>\r\n    </span>\r\n    <span *ngIf=\"!isObject(datum)\">\r\n      {{datum}}\r\n    </span>\r\n  </span>\r\n</div>\r\n\r\n<div *ngIf=\"showDataShort\">\r\n  <span *ngFor=\"let datum of showDataShort\" (mousedown)=\"$event.preventDefault()\" class=\"rangeItemShort\" [ngClass]=\"className\">\r\n    <span *ngIf=\"isObject(datum)\">\r\n      <span *ngFor=\"let subDatum of datum | slice: sliceNumber\" (mousedown)=\"$event.preventDefault()\">\r\n        {{subDatum}}\r\n      </span>\r\n    </span>\r\n    <span *ngIf=\"!isObject(datum)\">\r\n      {{datum}}\r\n    </span>\r\n  </span>\r\n  <div *ngIf=\"showDataHidden \" class=\"hiddenData\" [ngClass]=\"{hidden: className.indexOf('editing') !== -1}\">\r\n    Hidden elements:\r\n    {{showDataHidden.join('')}}\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 217 */
/***/ (function(module, exports) {

module.exports = "<span contenteditable=\"false\" (click)=\"$event.stopPropagation()\" class=\"selectedElement\" [ngClass]=\"elementName\" #element>\r\n  {{elementName}}\r\n</span>\r\n"

/***/ }),
/* 218 */
/***/ (function(module, exports) {

module.exports = "<div>|</div>\r\n"

/***/ }),
/* 219 */
/***/ (function(module, exports) {

module.exports = "<button class=\"toggle\" (click)=\"toggleEditWindow()\" [ngClass]=\"{selected: editWindowShow}\">Edit window</button>\r\n\r\n<div *ngIf=\"editWindowShow\" class=\"wrapper\">\r\n  <textarea #textarea [(ngModel)]=\"text\" title=\"Edit RegExp\"></textarea>\r\n  <button (click)=\"submitData(textarea.value)\" class=\"submit\">Submit!</button>\r\n  <button (click)=\"copyDataToTextArea()\" class=\"copy\">Copy from the template!</button>\r\n</div>\r\n\r\n<div class=\"modalDialog\" #errMsg>\r\n  <div>\r\n    <button class=\"close\" (click)=\"closeErrMsg()\">X</button>\r\n    <p #errTxt>Error!</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 220 */
/***/ (function(module, exports) {

module.exports = "<div contenteditable=\"false\"\r\n     (mousedown)=\"stopPropagation($event)\"\r\n     (click)=\"stopPropagation($event)\"\r\n     (mouseup)=\"stopPropagation($event)\">\r\n  <div *ngFor=\"let datum of anchorsObj.data\" contenteditable=\"false\" (click)=\"handleAnchor(datum)\">\r\n    <span class=\"symbol\">{{datum.symbol}}</span>\r\n    <span class=\"text\">{{datum.name}}</span>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 221 */
/***/ (function(module, exports) {

module.exports = "<div #twoButtons *ngIf=\"!showOneItem\"  (mousedown)=\"$event.stopPropagation()\" [ngClass]=\"{'disabled': globalWrapDisable}\">\r\n    <span *ngFor=\"let datum of groupObj.data\" contenteditable=\"false\"\r\n          [ngClass]=\"datum.defBg\" (click)=\"handleGroup(datum.name)\">{{datum.name}}</span>\r\n</div>\r\n<div *ngIf=\"showOneItem\" (mousedown)=\"$event.stopPropagation()\">\r\n    <span contenteditable=\"false\" class=\"showOneItem\" [ngClass]=\"{'disabled': disabled}\"\r\n          (mouseup)=\"$event.stopPropagation()\" (mousedown)=\"changeItemToOpposite($event)\">{{oneItem}}</span>\r\n</div>\r\n"

/***/ }),
/* 222 */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div contenteditable=\"false\">\r\n    <span *ngFor=\"let datum of lookaroundObj.data | slice:0:2\" (click)=\"handleLookaround(datum)\"\r\n          [ngClass]=\"[(datum.name === lookaround.lALB.name) ? 'purple' : 'brightPurple']\" contenteditable=\"false\">\r\n      {{datum.name}}\r\n    </span>\r\n  </div>\r\n  <div contenteditable=\"false\">\r\n    <span *ngFor=\"let datum of lookaroundObj.data | slice:2:4\" (click)=\"handleLookaround(datum)\"\r\n          [ngClass]=\"[(datum.name === lookaround.posNeg.name) ? 'purple' : 'brightPurple']\" contenteditable=\"false\">\r\n      {{datum.name}}\r\n    </span>\r\n  </div>\r\n  <div>\r\n    <span (click)=\"addLookaround()\" class=\"addLookaround\" *ngIf=\"!dataToEdit\">Add</span>\r\n    <span (click)=\"editLookaround()\" class=\"changeLookaround\" *ngIf=\"dataToEdit\">Edit</span><!--\r\n    --><span (click)=\"deleteLookaround()\" class=\"deleteLookaround\" *ngIf=\"dataToEdit\">Delete</span>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 223 */
/***/ (function(module, exports) {

module.exports = "<span *ngFor=\"let datum of data; let i = index\" (mouseover)=\"onMouseOver(datum.hint, i, $event)\"\r\n      (mouseout)=\"onMouseOut($event)\" (click)=\"addData(datum.nameForRegExp, i, $event)\"\r\n      [ngClass]=\"{hoveredElement: getHoveredPresets().indexOf(datum.nameForRegExp) > -1 ||\r\n                                  ( i > getIndexOfFirstEl() && i <= getIndexOfLastEl()) ||\r\n                                  ( i >= getIndexOfLastEl() && i < getIndexOfFirstEl()),\r\n                  selectedElement: getPresetFullElArray().indexOf(datum.nameForRegExp) > -1}\">\r\n  {{datum.name}}\r\n</span>\r\n"

/***/ }),
/* 224 */
/***/ (function(module, exports) {

module.exports = "<span *ngFor=\"let datum of data\"\n      [ngClass]=\"{purple:  datum.name === posNeg, brightPurple: datum.name !== posNeg}\"\n      (click)=\"handlePosNeg(datum.name)\">{{datum.name}}</span>\n"

/***/ }),
/* 225 */
/***/ (function(module, exports) {

module.exports = "<span *ngFor=\"let datum of data\" (mouseover)=\"onMouseOverPreset(datum)\"\r\n      (mouseout)=\"onMouseOutPreset()\" (click)=\"handlePresetClick(datum)\"\r\n      [ngClass]=\"{selectedElement: getPresets().indexOf(datum.nameForRegExp) > -1}\">{{datum.name}}</span>\r\n"

/***/ }),
/* 226 */
/***/ (function(module, exports) {

module.exports = "<div (mouseup)=\"$event.stopPropagation()\">\r\n    <div class=\"top\">\r\n        <div class=\"search\" *ngIf=\"rangeData.topLeft\" >\r\n            <presets [dataToEdit]=\"compiledData\" ></presets>\r\n        </div>\r\n        <div class=\"posNeg\">\r\n            <pos-neg [data]=\"rangeData.topRight\" [status]=\"posNegStatus\" ></pos-neg>\r\n        </div>\r\n    </div>\r\n    <div class=\"ASCII\">\r\n        <ascii [dataToEdit]=\"compiledData\"></ascii>\r\n    </div>\r\n    <button class=\"done\" (click)=\"close.emit()\">Done</button>\r\n</div>\r\n"

/***/ }),
/* 227 */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"selectedElement\" (click)=\"$event.stopPropagation()\">\r\n  <div class=\"hint\" contenteditable=\"false\" *ngIf=\"!rangeElementHint\">\r\n    <span contenteditable=\"false\">\r\n        {{selectedElement.hint}}\r\n    </span>\r\n  </div>\r\n  <div class=\"hint\" contenteditable=\"false\" *ngIf=\"rangeElementHint\">\r\n    <span contenteditable=\"false\">\r\n        {{rangeElementHint}}\r\n    </span>\r\n  </div>\r\n  <div #data contenteditable=\"false\" class=\"data\" [ngClass]=\"selectedElement.name\">\r\n    <range-data (close)=\"close.emit()\" *ngIf=\"selectedElement.name === 'Range'\" [viewData]=\"viewData\"></range-data>\r\n    <group [viewData]=\"viewData\" *ngIf=\"selectedElement.name === 'Group'\"></group>\r\n    <lookaround *ngIf=\"selectedElement.name === 'Lookaround'\" (close)=\"close.emit()\"></lookaround>\r\n    <anchors (close)=\"close.emit()\" *ngIf=\"selectedElement.name === 'Anchors'\"></anchors>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"elementToEdit && elementToEditName\" class=\"edit\" (click)=\"$event.stopPropagation()\"\r\n                                                             (mouseup)=\"$event.stopPropagation()\">\r\n  <div class=\"hint\" contenteditable=\"false\" *ngIf=\"rangeElementHint\">\r\n    <span contenteditable=\"false\">\r\n        {{rangeElementHint}}\r\n    </span>\r\n  </div>\r\n  <div #data contenteditable=\"false\" class=\"data\" [ngClass]=\"elementToEditName\">\r\n    <range-data *ngIf=\"elementToEditName === 'Range'\" [dataToEdit]=\"elementToEdit\" (close)=\"close.emit()\"></range-data>\r\n    <group *ngIf=\"elementToEditName === 'Group'\" [viewData]=\"viewData\" [dataToEdit]=\"elementToEdit\"></group>\r\n    <lookaround *ngIf=\"elementToEditName === 'Lookaround'\" [viewData]=\"viewData\" (close)=\"close.emit()\" [dataToEdit]=\"elementToEdit\"></lookaround>\r\n    <anchors *ngIf=\"elementToEditName === 'Anchors'\" [dataToEdit]=\"elementToEdit\" (close)=\"close.emit()\"></anchors>\r\n    <quantifier *ngIf=\"elementToEditName === 'Quantifier'\" [dataToEdit]=\"elementToEdit\"></quantifier>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 228 */
/***/ (function(module, exports) {

module.exports = "<div class=\"regExp\" (mousedown)=\"$event.stopPropagation()\"\r\n                    (mouseup)=\"$event.stopPropagation()\"\r\n                    (mousemove)=\"$event.stopPropagation()\">\r\n  <span><b>RegExp:</b></span>\r\n  <span *ngFor=\"let data of dataArray\">{{data}}</span>\r\n</div>\r\n\r\n<read-reg-exp class=\"regExpInput\"></read-reg-exp>\r\n\r\n<div #area class=\"area\" (click)=\"noSelectedMainEl($event)\" contenteditable=\"false\" tabindex=\"1\">\r\n  <div *ngIf=\"dataArray.length > 0 || selectedMainElement\">\r\n    <beauty-data [viewData]=\"viewData\"\r\n                 [hideAllQuantifiers]=\"hideAllQuantifiers\"\r\n                 (passViewDataHigher)=\"handleInnerViewData($event)\"\r\n                 (toggleGlobalQuantClicked)=\"handleQuantifierClicked($event)\"\r\n                 (passSelectedElementPosition) = \"setSelectedElementPosition($event)\">\r\n    </beauty-data>\r\n  </div>\r\n  <selected-element *ngIf=\"selectedMainElement\"\r\n                    (close)=\"closeSelectedElement()\"\r\n                    [position] = \"selectedElementPosition\"\r\n                    [selectedElement]=\"selectedMainElement\"\r\n                    [viewData]=\"viewData\">\r\n  </selected-element>\r\n  <selected-element *ngIf=\"elementToEdit\"\r\n                    (close)=\"closeSelectedElement()\"\r\n                    [position] = \"selectedElementPosition\"\r\n                    [elementToEdit]=\"elementToEdit\"\r\n                    [viewData]=\"viewData\">\r\n  </selected-element>\r\n  <div class=\"data Group\" *ngIf=\"selectGroup\">\r\n    <group [disabled]=\"selectGroupDisable\"\r\n           [showOneItem]=\"true\"\r\n           [viewData]=\"viewData\"\r\n           (groupSelectedEl)=\"handleGroupSelection($event)\">\r\n    </group>\r\n  </div>\r\n  <caret></caret>\r\n</div>\r\n"

/***/ }),
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(89);


/***/ })
],[253]);
//# sourceMappingURL=main.bundle.js.map